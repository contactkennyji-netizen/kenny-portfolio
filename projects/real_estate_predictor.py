#!/usr/bin/env python3
"""
Real Estate Price Predictor
Machine learning model to predict property values based on market features.
"""

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import matplotlib.pyplot as plt
import seaborn as sns

# Set style
sns.set_style("darkgrid")
plt.rcParams['figure.figsize'] = (12, 6)


def generate_synthetic_data(n_samples=500):
    """
    Generate synthetic real estate data for demonstration.
    
    Features:
    - square_feet: Property size in square feet
    - bedrooms: Number of bedrooms
    - bathrooms: Number of bathrooms
    - age: Age of the property in years
    - location_score: Location desirability score (1-10)
    - market_index: Current market index value
    """
    np.random.seed(42)
    
    data = {
        'square_feet': np.random.uniform(800, 5000, n_samples),
        'bedrooms': np.random.randint(1, 6, n_samples),
        'bathrooms': np.random.uniform(1, 4, n_samples),
        'age': np.random.randint(1, 50, n_samples),
        'location_score': np.random.uniform(1, 10, n_samples),
        'market_index': np.random.uniform(80, 120, n_samples),
    }
    
    df = pd.DataFrame(data)
    
    # Calculate target price based on features
    df['price'] = (
        df['square_feet'] * 150 +  # $150 per sq ft base
        df['bedrooms'] * 50000 +    # $50k per bedroom
        df['bathrooms'] * 40000 +   # $40k per bathroom
        (10 - df['age']) * 10000 +  # $10k per year of age
        df['location_score'] * 30000 +  # $30k per location point
        df['market_index'] * 500 +  # Market adjustment
        np.random.normal(0, 50000, n_samples)  # Random noise
    )
    
    return df


def build_model(X_train, y_train):
    """
    Build and train Random Forest model.
    """
    model = RandomForestRegressor(
        n_estimators=100,
        max_depth=15,
        min_samples_split=5,
        min_samples_leaf=2,
        random_state=42,
        n_jobs=-1
    )
    
    model.fit(X_train, y_train)
    return model


def evaluate_model(model, X_test, y_test):
    """
    Evaluate model performance.
    """
    y_pred = model.predict(X_test)
    
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)
    mae = mean_absolute_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    print("\n" + "="*50)
    print("REAL ESTATE PRICE PREDICTOR - MODEL EVALUATION")
    print("="*50)
    print(f"\nModel Performance Metrics:")
    print(f"  Root Mean Squared Error (RMSE): ${rmse:,.2f}")
    print(f"  Mean Absolute Error (MAE): ${mae:,.2f}")
    print(f"  R² Score: {r2:.4f}")
    print(f"  Accuracy: {r2*100:.2f}%")
    print("\n" + "="*50)
    
    return y_pred


def plot_predictions(y_test, y_pred):
    """
    Plot actual vs predicted prices.
    """
    fig, axes = plt.subplots(1, 2, figsize=(14, 5))
    
    # Actual vs Predicted
    axes[0].scatter(y_test, y_pred, alpha=0.6, color='#06b6d4')
    axes[0].plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
    axes[0].set_xlabel('Actual Price ($)', fontsize=12)
    axes[0].set_ylabel('Predicted Price ($)', fontsize=12)
    axes[0].set_title('Actual vs Predicted Prices', fontsize=14, fontweight='bold')
    axes[0].grid(True, alpha=0.3)
    
    # Residuals
    residuals = y_test - y_pred
    axes[1].scatter(y_pred, residuals, alpha=0.6, color='#0891b2')
    axes[1].axhline(y=0, color='r', linestyle='--', lw=2)
    axes[1].set_xlabel('Predicted Price ($)', fontsize=12)
    axes[1].set_ylabel('Residuals ($)', fontsize=12)
    axes[1].set_title('Residual Plot', fontsize=14, fontweight='bold')
    axes[1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('real_estate_predictions.png', dpi=300, bbox_inches='tight')
    print("\n✓ Predictions plot saved as 'real_estate_predictions.png'")
    plt.show()


def plot_feature_importance(model, feature_names):
    """
    Plot feature importance.
    """
    importances = model.feature_importances_
    indices = np.argsort(importances)[::-1]
    
    fig, ax = plt.subplots(figsize=(10, 6))
    colors = ['#06b6d4' if i == indices[0] else '#0891b2' for i in range(len(importances))]
    ax.barh(range(len(importances)), importances[indices], color=colors)
    ax.set_yticks(range(len(importances)))
    ax.set_yticklabels([feature_names[i] for i in indices])
    ax.set_xlabel('Feature Importance', fontsize=12)
    ax.set_title('Feature Importance in Real Estate Price Prediction', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3, axis='x')
    
    plt.tight_layout()
    plt.savefig('feature_importance.png', dpi=300, bbox_inches='tight')
    print("✓ Feature importance plot saved as 'feature_importance.png'")
    plt.show()


def predict_new_property(model, scaler, features):
    """
    Predict price for a new property.
    """
    features_scaled = scaler.transform([features])
    price = model.predict(features_scaled)[0]
    return price


if __name__ == "__main__":
    print("\n🏠 Real Estate Price Predictor")
    print("Generating synthetic real estate data...")
    
    # Generate data
    df = generate_synthetic_data(n_samples=500)
    print(f"\nDataset shape: {df.shape}")
    print("\nFirst few records:")
    print(df.head())
    
    # Prepare features and target
    feature_columns = ['square_feet', 'bedrooms', 'bathrooms', 'age', 'location_score', 'market_index']
    X = df[feature_columns]
    y = df['price']
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Build model
    print("\nTraining Random Forest model...")
    model = build_model(X_train_scaled, y_train)
    
    # Evaluate
    y_pred = evaluate_model(model, X_test_scaled, y_test)
    
    # Visualizations
    print("\nGenerating visualizations...")
    plot_predictions(y_test, y_pred)
    plot_feature_importance(model, feature_columns)
    
    # Example prediction
    print("\n" + "="*50)
    print("EXAMPLE PREDICTION")
    print("="*50)
    example_property = [2500, 4, 2.5, 10, 8, 110]
    print(f"\nProperty features:")
    for feature, value in zip(feature_columns, example_property):
        print(f"  {feature}: {value}")
    
    predicted_price = predict_new_property(model, scaler, example_property)
    print(f"\n💰 Predicted Price: ${predicted_price:,.2f}")
    print("\n" + "="*50)
