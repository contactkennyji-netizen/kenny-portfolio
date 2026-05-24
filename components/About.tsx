'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              I'm a motivated and analytical professional with a solid foundation in economic theory, statistics, and decision-making frameworks. Currently pursuing a Bachelor's degree in Economics from New York University as a Presidential Honors Scholar.
            </p>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              My career has spanned finance, business development, and real estate analysis. I've worked on quantitative analysis, market research, and financial modeling across leading organizations. Now, I'm expanding my expertise into AI and Machine Learning to tackle complex business problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm passionate about leveraging data-driven insights and AI to create innovative solutions in finance and business.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Education:</strong> Bachelor's, Economics - NYU (Junior)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Honor:</strong> Presidential Honors Scholar</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Languages:</strong> English, Chinese (Native/Bilingual)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Location:</strong> United States</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Focus:</strong> AI/ML, Finance, Data Science</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>SAT:</strong> 1550</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
