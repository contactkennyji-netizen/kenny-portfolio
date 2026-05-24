#!/usr/bin/env python3
"""
Stock Price Predictor
Deep learning model using LSTM to forecast stock prices.
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.optimizers import Adam
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

# Set style
sns.set_style("darkgrid")
plt.rcParams['figure.figsize'] = (14, 7)


def generate_synthetic_stock_data(n_days=250, initial_price=100):
    """
    Generate synthetic stock price data with realistic patterns.
    """
    np.random.seed(42)
    
    prices = [initial_price]
    
    for _ in range(n_days - 1):
        # Random walk with drift
        daily_return = np.random.normal(0.0005, 0.02)  # Small positive drift with volatility
        new_price = prices[-1] * (1 + daily_return)
        prices.append(max(new_price, 1))  # Ensure positive prices
    
    # Calculate additional features
    prices_array = np.array(prices)
    
    data = {
        'date': pd.date_range(start='2023-01-01', periods=n_days),
        'close': prices_array,
        'volume': np.random.uniform(1000000, 5000000, n_days),
    }
    
    df = pd.DataFrame(data)
    
    # Add technical indicators
    df['ma_20'] = df['close'].rolling(window=20).mean()  # 20-day moving average
    df['ma_50'] = df['close'].rolling(window=50).mean()  # 50-day moving average
    
    return df


def prepare_data(data, lookback=60):
    """
    Prepare data for LSTM model.
    """
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data[['close']].values)
    
    X, y = [], []
    
    for i in range(lookback, len(scaled_data)):
        X.append(scaled_data[i-lookback:i, 0])
        y.append(scaled_data[i, 0])
    
    X = np.array(X)
    y = np.array(y)
    
    # Reshape for LSTM
    X = X.reshape(X.shape[0], X.shape[1], 1)
    
    # Split data (80-20)
    split_idx = int(0.8 * len(X))
    X_train, X_test = X[:split_idx], X[split_idx:]
    y_train, y_test = y[:split_idx], y[split_idx:]
    
    return X_train, X_test, y_train, y_test, scaler


def build_lstm_model(input_shape):
    """
    Build LSTM neural network.
    """
    model = Sequential([
        LSTM(units=64, return_sequences=True, input_shape=input_shape),
        Dropout(0.2),
        LSTM(units=32, return_sequences=False),
        Dropout(0.2),
        Dense(units=25),
        Dense(units=1)
    ])
    
    model.compile(optimizer=Adam(learning_rate=0.001), loss='mean_squared_error')
    
    return model


def train_model(model, X_train, y_train, epochs=50, batch_size=32):
    """
    Train the LSTM model.
    """
    print("\nTraining LSTM model...")
    history = model.fit(
        X_train, y_train,
        epochs=epochs,
        batch_size=batch_size,
        validation_split=0.1,
        verbose=1
    )
    return history


def evaluate_model(model, X_test, y_test, scaler):
    """
    Evaluate model performance.
    """
    y_pred = model.predict(X_test)
    
    # Inverse transform to get actual prices
    y_test_actual = scaler.inverse_transform(y_test.reshape(-1, 1))
    y_pred_actual = scaler.inverse_transform(y_pred)
    
    # Calculate metrics
    mse = mean_squared_error(y_test_actual, y_pred_actual)
    rmse = np.sqrt(mse)
    mae = mean_absolute_error(y_test_actual, y_pred_actual)
    r2 = r2_score(y_test_actual, y_pred_actual)
    
    print("\n" + "="*50)
    print("STOCK PRICE PREDICTOR - MODEL EVALUATION")
    print("="*50)
    print(f"\nModel Performance Metrics:")
    print(f"  Root Mean Squared Error (RMSE): ${rmse:.2f}")
    print(f"  Mean Absolute Error (MAE): ${mae:.2f}")
    print(f"  R² Score: {r2:.4f}")
    print(f"  Accuracy: {max(0, r2)*100:.2f}%")
    print("\n" + "="*50)
    
    return y_pred_actual, y_test_actual


def plot_training_history(history):
    """
    Plot training history.
    """
    fig, ax = plt.subplots(figsize=(10, 6))
    
    ax.plot(history.history['loss'], label='Training Loss', color='#06b6d4', linewidth=2)
    ax.plot(history.history['val_loss'], label='Validation Loss', color='#0891b2', linewidth=2)
    ax.set_xlabel('Epoch', fontsize=12)
    ax.set_ylabel('Loss', fontsize=12)
    ax.set_title('Model Training History', fontsize=14, fontweight='bold')
    ax.legend(fontsize=10)
    ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('training_history.png', dpi=300, bbox_inches='tight')
    print("\n✓ Training history saved as 'training_history.png'")
    plt.show()


def plot_predictions(y_pred, y_test, data_df):
    """
    Plot actual vs predicted stock prices.
    """
    fig, axes = plt.subplots(2, 1, figsize=(14, 10))
    
    # Full time series
    train_len = len(data_df) - len(y_test)
    axes[0].plot(data_df['date'][:train_len], data_df['close'][:train_len], 
                label='Historical Prices', color='#06b6d4', linewidth=1.5)
    axes[0].plot(data_df['date'][train_len:], y_test, 
                label='Actual Test Prices', color='#0891b2', linewidth=1.5)
    axes[0].plot(data_df['date'][train_len:], y_pred, 
                label='Predicted Prices', color='#ec4899', linewidth=1.5, linestyle='--')
    axes[0].set_xlabel('Date', fontsize=12)
    axes[0].set_ylabel('Price ($)', fontsize=12)
    axes[0].set_title('Stock Price Prediction - Full Timeline', fontsize=14, fontweight='bold')
    axes[0].legend(fontsize=10)
    axes[0].grid(True, alpha=0.3)
    
    # Zoomed test period
    axes[1].plot(data_df['date'][train_len:], y_test, 
                label='Actual Prices', color='#0891b2', linewidth=2, marker='o', markersize=4)
    axes[1].plot(data_df['date'][train_len:], y_pred, 
                label='Predicted Prices', color='#ec4899', linewidth=2, marker='s', markersize=4)
    axes[1].set_xlabel('Date', fontsize=12)
    axes[1].set_ylabel('Price ($)', fontsize=12)
    axes[1].set_title('Stock Price Prediction - Test Period (Zoomed)', fontsize=14, fontweight='bold')
    axes[1].legend(fontsize=10)
    axes[1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('stock_predictions.png', dpi=300, bbox_inches='tight')
    print("✓ Stock predictions plot saved as 'stock_predictions.png'")
    plt.show()


def predict_future(model, last_sequence, scaler, days=10):
    """
    Predict future stock prices.
    """
    future_predictions = []
    current_sequence = last_sequence.copy()
    
    for _ in range(days):
        # Predict next value
        next_pred = model.predict(np.array([current_sequence]), verbose=0)
        future_predictions.append(next_pred[0, 0])
        
        # Update sequence
        current_sequence = np.append(current_sequence[1:], next_pred)
    
    # Inverse transform
    future_predictions = scaler.inverse_transform(np.array(future_predictions).reshape(-1, 1))
    
    return future_predictions


if __name__ == "__main__":
    print("\n📈 Stock Price Predictor with LSTM")
    print("Generating synthetic stock data...")
    
    # Generate data
    df = generate_synthetic_stock_data(n_days=250)
    print(f"\nDataset shape: {df.shape}")
    print("\nFirst few records:")
    print(df.head())
    
    # Remove NaN values from moving averages
    df = df.dropna()
    
    # Prepare data
    print("\nPreparing data for LSTM...")
    X_train, X_test, y_train, y_test, scaler = prepare_data(df, lookback=60)
    print(f"Training set shape: {X_train.shape}")
    print(f"Test set shape: {X_test.shape}")
    
    # Build model
    print("\nBuilding LSTM model...")
    model = build_lstm_model(input_shape=(X_train.shape[1], 1))
    print(model.summary())
    
    # Train model
    history = train_model(model, X_train, y_train, epochs=50, batch_size=32)
    
    # Evaluate
    y_pred, y_test_actual = evaluate_model(model, X_test, y_test, scaler)
    
    # Visualizations
    print("\nGenerating visualizations...")
    plot_training_history(history)
    plot_predictions(y_pred, y_test_actual, df)
    
    # Future predictions
    print("\nGenerating future predictions...")
    last_60_days = scaler.transform(df[['close']].tail(60).values)
    last_sequence = last_60_days.flatten()
    future_prices = predict_future(model, last_sequence, scaler, days=10)
    
    print("\n" + "="*50)
    print("10-DAY PRICE FORECAST")
    print("="*50)
    last_price = df['close'].iloc[-1]
    for i, price in enumerate(future_prices, 1):
        change = ((price[0] - last_price) / last_price) * 100
        print(f"Day {i}: ${price[0]:.2f} ({change:+.2f}%)")
    print("\n" + "="*50)
