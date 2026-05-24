# Kenny Ji - AI & Finance Portfolio

Professional portfolio website showcasing finance internship experience and AI/ML projects.

## 🌐 Live Website

**Coming soon!** Follow deployment instructions below.

## 👨‍💼 About

Hi! I'm Kenny Ji, a motivated and analytical professional with a strong foundation in economics, statistics, and decision-making frameworks. This portfolio showcases my experience in finance and my journey into AI/Machine Learning.

## 📚 Experience

### Sperry Commercial - Commercial Intern
**May 2025 - Aug 2025** | Melbourne, Florida
- Performed quantitative calculations and financial analysis for commercial real estate
- Researched industry data and market records for valuation insights
- Supported social media management and brand visibility

### World Wildlife Fund - Business Intern
**Jun 2024 - Aug 2024** | Washington, DC
- Conducted market and financial research for business case development
- Analyzed business models and evaluated scalability and cost-benefit tradeoffs
- Prepared structured research briefs for the Markets Institute

### Bank of America - Intern
**May 2021 - Aug 2021** | Washington, DC
- Supported finance and accounting teams with financial data analysis
- Assisted with Excel-based modeling and presentation materials
- Participated in regulatory compliance research (OSHA, EEOC, ADA)

## 🤖 AI Projects

### 1. Real Estate Price Predictor
A machine learning model that predicts property values based on market features.
- **Accuracy:** 87%
- **Tech Stack:** Python, Scikit-learn, Pandas, NumPy
- **Model:** Random Forest Regressor
- **Features:** Property characteristics, location, market data
- **Use Case:** Support commercial real estate valuation decisions

**How to Run:**
```bash
python projects/real_estate_predictor.py
```

### 2. Stock Price Predictor
A deep learning model that forecasts stock prices using historical data and time-series analysis.
- **Tech Stack:** Python, TensorFlow, Keras, Pandas
- **Model:** LSTM Neural Network
- **Metrics:** RMSE, MAE, R² Score
- **Features:** Historical prices, volume, trends
- **Use Case:** Support investment decision-making

**How to Run:**
```bash
python projects/stock_price_predictor.py
```

## 🛠️ Skills

### Programming
- Python (Pandas, NumPy, Scikit-learn, TensorFlow, Keras)
- JavaScript/TypeScript
- SQL
- Excel/VBA

### Finance & Analytics
- Financial Analysis
- Data Analysis
- Excel Modeling
- Market Research

### AI/Machine Learning
- Supervised Learning
- Time Series Forecasting
- Feature Engineering
- Model Evaluation

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/contactkennyji-netizen/kenny-portfolio.git
   cd kenny-portfolio
   ```

2. **Install Node dependencies**
   ```bash
   npm install
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the website locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run AI projects**
   ```bash
   python projects/real_estate_predictor.py
   python projects/stock_price_predictor.py
   ```

## 📦 Project Structure

```
kenny-portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page
│   ├���─ layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Experience.tsx           # Experience timeline
│   ├── Projects.tsx             # Projects showcase
│   ├── Skills.tsx               # Skills section
│   ├── Contact.tsx              # Contact section
│   └── Footer.tsx               # Footer
├── public/                       # Static assets
├── projects/                     # AI/ML projects
│   ├── real_estate_predictor.py # Real estate ML model
│   └── stock_price_predictor.py # Stock price LSTM model
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS config
├── package.json                 # Node dependencies
├── requirements.txt             # Python dependencies
├── README.md                    # This file
└── DEPLOYMENT.md                # Deployment guide
```

## 🎨 Design

- **Framework:** Next.js 14 + React 18
- **Styling:** Tailwind CSS
- **Theme:** Dark mode with cyan/blue accents
- **Responsive:** Mobile-first, fully responsive design
- **Performance:** Optimized for speed and SEO

## 📝 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_CONTACT_EMAIL=jikenny@outlook.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/contactkennyji-netizen
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/kennyji/
```

## 🌍 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy (Vercel):**
```bash
npm install -g vercel
vercel
```

## 📧 Contact

- **Email:** jikenny@outlook.com
- **LinkedIn:** [linkedin.com/in/kennyji](https://www.linkedin.com/in/kennyji/)
- **GitHub:** [github.com/contactkennyji-netizen](https://github.com/contactkennyji-netizen)

## 📄 License

MIT License - Feel free to use this portfolio as a template for your own!

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- AI models powered by [Scikit-learn](https://scikit-learn.org/) and [TensorFlow](https://tensorflow.org/)

---

**Last Updated:** May 2026
