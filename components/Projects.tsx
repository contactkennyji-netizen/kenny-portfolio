'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Real Estate Price Predictor',
      description: 'Machine learning model that predicts property values based on market features and characteristics. Integrated into commercial real estate analysis workflows.',
      details: [
        'Accuracy: 87% on test dataset',
        'Model: Random Forest Regressor',
        'Features: Property characteristics, location, market data',
        'Libraries: Scikit-learn, Pandas, NumPy',
      ],
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Real Estate'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Stock Price Predictor',
      description: 'Deep learning model using LSTM neural networks to forecast stock prices with time-series analysis. Designed to support investment decision-making and trend analysis.',
      details: [
        'Architecture: LSTM Neural Network',
        'Metrics: RMSE, MAE, R² Score',
        'Input: Historical prices, volume, trends',
        'Libraries: TensorFlow, Keras, Pandas',
      ],
      tags: ['Python', 'Deep Learning', 'TensorFlow', 'Finance'],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">AI/ML Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>

                {/* Project Details */}
                <div className="mb-6 space-y-2">
                  {project.details.map((detail, i) => (
                    <p key={i} className="text-sm text-slate-400 flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-dark font-semibold py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
                    View Code
                  </button>
                  <button className="flex-1 border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-dark transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/contactkennyji-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-dark font-semibold px-8 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
