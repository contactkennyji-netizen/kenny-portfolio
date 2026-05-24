'use client'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'VBA'],
    },
    {
      name: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Time Series Analysis'],
    },
    {
      name: 'Finance & Analytics',
      skills: ['Financial Analysis', 'Excel Modeling', 'Data Analysis', 'Market Research', 'Financial Metrics'],
    },
    {
      name: 'Tools & Platforms',
      skills: ['GitHub', 'Jupyter Notebook', 'VS Code', 'Google Analytics', 'Tableau'],
    },
    {
      name: 'Business Skills',
      skills: ['Strategic Planning', 'Data-Driven Decision Making', 'Market Analysis', 'Risk Assessment'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <p className="text-slate-300">Years Professional Experience</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-slate-300">Programming Languages</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
            <div className="text-4xl font-bold text-primary mb-2">2+</div>
            <p className="text-slate-300">AI/ML Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}
