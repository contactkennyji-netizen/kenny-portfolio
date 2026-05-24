'use client'

export default function Experience() {
  const experiences = [
    {
      company: 'Sperry Commercial',
      position: 'Commercial Intern',
      period: 'May 2025 - Aug 2025',
      location: 'Melbourne, Florida',
      description: [
        'Performed quantitative calculations and financial analysis to support commercial real estate decision-making',
        'Researched industry data, market records, and comparable statistics to assist with market analysis and valuation insights',
        'Supported social media management and content updates to enhance brand visibility and market outreach',
      ],
      skills: ['Financial Analysis', 'Real Estate', 'Market Research', 'Excel'],
    },
    {
      company: 'World Wildlife Fund',
      position: 'Business Intern',
      period: 'Jun 2024 - Aug 2024',
      location: 'Washington, District of Columbia',
      description: [
        'Conducted in-depth market and financial research to support business case development, aligning economic viability with environmental sustainability',
        'Analyzed challenges and opportunities across multiple business models, evaluating scalability, species applicability, and cost-benefit tradeoffs',
        'Prepared structured research briefs and summaries to support business cases for the Markets Institute',
      ],
      skills: ['Business Analysis', 'Market Research', 'Financial Modeling', 'Strategic Planning'],
    },
    {
      company: 'Bank of America',
      position: 'Intern',
      period: 'May 2021 - Aug 2021',
      location: 'Washington, District of Columbia',
      description: [
        'Supported finance and accounting teams by assisting with financial data analysis, Excel-based modeling, and presentation materials for leadership meetings',
        'Participated in financial meetings, gaining exposure to corporate finance and governance processes',
        'Assisted with regulatory compliance research and documentation related to OSHA, EEOC, and ADA standards',
      ],
      skills: ['Finance', 'Excel Modeling', 'Data Analysis', 'Compliance'],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-darker">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-8 pb-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-4 h-4 bg-primary rounded-full"></div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                <p className="text-lg text-slate-400">{exp.company}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {exp.period} • {exp.location}
                </p>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-primary mr-3">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm bg-slate-800 text-primary px-3 py-1 rounded-full border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
