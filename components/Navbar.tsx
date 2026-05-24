'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-darker/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition"
            >
              KJ
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-primary px-3 py-2 text-sm font-medium transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-slate-300 hover:text-primary px-3 py-2 text-sm font-medium transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-primary px-3 py-2 text-sm font-medium transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-primary px-3 py-2 text-sm font-medium transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-dark px-4 py-2 rounded-lg font-medium hover:bg-secondary transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-darker border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-300 hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-dark block w-full px-3 py-2 rounded-lg font-medium hover:bg-secondary transition"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
