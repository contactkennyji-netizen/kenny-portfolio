'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">KJ</h3>
            <p className="text-slate-400">
              AI & Finance Portfolio
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#experience" className="hover:text-primary transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Connect</h4>
            <div className="flex gap-4 text-slate-400">
              <a
                href="https://linkedin.com/in/kennyji"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/contactkennyji-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
              <a
                href="mailto:jikenny@outlook.com"
                className="hover:text-primary transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Kenny Ji. All rights reserved.</p>
          <p className="mt-2">Built with Next.js • Styled with Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
