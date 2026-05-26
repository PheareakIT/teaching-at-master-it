import React from 'react'
import { BookOpen, Code, Terminal, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
        {/* Navbar */}

        <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              SesChbongIT
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#courses" className="hover:text-cyan-400 transition">Courses</a>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>
        

        {/* Hero Section */}
        <header className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_45%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              New React 19 & Tailwind v4 Course Live
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Master Modern Web Dev with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                React
              </span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Tailwind
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
              Stop watching endless tutorials. Build real-world applications, master component-driven architecture, and style beautiful interfaces with lightning speed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-slate-950 px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-cyan-500/20 transition group">
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl font-semibold transition">
                Explore Curriculum
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-20 border-t border-slate-800 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Why Learn Here?</h2>
              <p className="text-slate-400">Everything you need to go from writing your first component to deploying production-ready applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Component-Driven Architecture</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Learn how to think in React. Master props, state, hooks, and build reusable components that scale beautifully.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Utility-First Styling</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Skip the complex CSS files. Use Tailwind CSS to craft stunning, highly responsive designs directly inside your markup.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No boring syntax drills. Build dashboards, e-commerce apps, and interactive tools you can proudly show off in your portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1),transparent_40%)]" />
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to build the future of the web?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Join thousands of students creating slick, fast, and interactive user interfaces today.
            </p>
            <div className="inline-flex p-1 rounded-xl bg-slate-800/80 border border-slate-700 backdrop-blur max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent pl-4 pr-2 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none flex-grow"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-5 py-2 text-sm font-bold rounded-lg transition whitespace-nowrap">
                Join Free
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DevAcademy. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </>
  )
}

export default Home