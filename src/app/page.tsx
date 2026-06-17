"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fef7f0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fef7f0]/90 backdrop-blur-md border-b border-[#e5ddd4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-bold text-[#2d2a26]">
              Lakecia Gunter
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-medium text-[#2d2a26] hover:bg-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white hover:text-[#2d2a26] transition-colors">
                About
              </Link>
              <Link href="/work" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white hover:text-[#2d2a26] transition-colors">
                Work
              </Link>
              <Link href="/advisory" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white hover:text-[#2d2a26] transition-colors">
                Advisory
              </Link>
              <Link href="/roar" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white hover:text-[#2d2a26] transition-colors">
                ROAR
              </Link>
              <Link href="/contact" className="ml-2 px-5 py-2 rounded-full text-sm font-medium bg-[#2d2a26] text-white hover:bg-[#3d3833] transition-colors">
                Contact
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#fef7f0] border-t border-[#e5ddd4] px-6 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 rounded-lg text-[#2d2a26] font-medium bg-white">Home</Link>
            <Link href="/about" className="block px-4 py-2 rounded-lg text-[#6b6560] hover:bg-white">About</Link>
            <Link href="/work" className="block px-4 py-2 rounded-lg text-[#6b6560] hover:bg-white">Work</Link>
            <Link href="/advisory" className="block px-4 py-2 rounded-lg text-[#6b6560] hover:bg-white">Advisory</Link>
            <Link href="/roar" className="block px-4 py-2 rounded-lg text-[#6b6560] hover:bg-white">ROAR</Link>
            <Link href="/contact" className="block px-4 py-2 rounded-lg bg-[#2d2a26] text-white">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero - Cinematic full-bleed with warm playful overlay */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/lakecia.jpg"
            alt="Lakecia Gunter"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fef7f0] via-[#fef7f0]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fef7f0]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-6">
              Technology Leadership & Board Governance
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.1] mb-8">
              Building technology<br />
              with <span className="text-[#ff6b9d]">heart</span> and<br />
              strategy.
            </h1>
            <p className="text-lg text-[#3d3833] leading-relaxed max-w-lg mb-10">
              25 years from digital logic at the Department of Defense to CTO at Microsoft. 
              Now helping boards and leadership teams navigate what&apos;s next.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2a26] text-white rounded-xl font-semibold hover:bg-[#3d3833] transition-colors"
              >
                Read my story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#2d2a26] text-[#2d2a26] rounded-xl font-semibold hover:bg-[#2d2a26] hover:text-white transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#a8a29e]"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Work Cards - Playful warmth */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">Current</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2a26] mb-16">What I&apos;m building</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">Board Governance</h3>
            <p className="text-[#6b6560] text-sm leading-relaxed">Independent Director at IDEX Corporation (NYSE). Strategic oversight and technology stewardship.</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">Strategic Advisory</h3>
            <p className="text-[#6b6560] text-sm leading-relaxed">Co-Founding Advisor at TechArena.ai. Helping companies navigate technology-driven change.</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">ROAR Podcast</h3>
            <p className="text-[#6b6560] text-sm leading-relaxed">Candid conversations with leaders navigating growth, transition, and opportunity.</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">Executive Coaching</h3>
            <p className="text-[#6b6560] text-sm leading-relaxed">Helping teams translate complex technology into clear strategic choices during disruption.</p>
          </div>
        </div>
      </section>

      {/* Quote Section - Magazine editorial */}
      <section className="py-16 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-10 h-10 mx-auto mb-6 text-[#ff6b9d] opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl font-medium italic leading-relaxed mb-6">
            "I am known for helping executive teams and boards translate complex technology into clear strategic choices, particularly during periods of disruption, reinvention, and market transition."
          </blockquote>
          <cite className="text-sm text-[#a8a29e] not-italic tracking-widest uppercase">
            — On my approach to advisory work
          </cite>
        </div>
      </section>

      {/* Timeline Preview - Cinematic */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">The Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2a26] mb-8">
              From defense systems<br />to boardrooms.
            </h2>
            <p className="text-lg text-[#6b6560] leading-relaxed mb-8">
              I began as a digital logic designer and program manager at the Department of Defense. 
              That foundation — understanding how systems work at their most fundamental level — 
              has shaped every leadership role since.
            </p>
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-[#2d2a26] font-semibold hover:text-[#ff6b9d] transition-colors"
            >
              See the full timeline
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-3 h-3 rounded-full bg-[#ff6b9d] mt-2 flex-shrink-0 shadow-[0_0_0_4px_rgba(255,107,157,0.2)]" />
              <div>
                <h3 className="font-semibold text-[#2d2a26]">Department of Defense</h3>
                <p className="text-[#6b6560] text-sm">Digital logic designer and program manager. The foundation.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-3 h-3 rounded-full bg-[#ff6b9d] mt-2 flex-shrink-0 shadow-[0_0_0_4px_rgba(255,107,157,0.2)]" />
              <div>
                <h3 className="font-semibold text-[#2d2a26]">Intel Corporation</h3>
                <p className="text-[#6b6560] text-sm">Chief of Staff to the CEO. Fortune 50 operating experience.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-3 h-3 rounded-full bg-[#ff6b9d] mt-2 flex-shrink-0 shadow-[0_0_0_4px_rgba(255,107,157,0.2)]" />
              <div>
                <h3 className="font-semibold text-[#2d2a26]">Microsoft</h3>
                <p className="text-[#6b6560] text-sm">CTO, Global Partner Solutions. Multi-billion-dollar platforms.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-3 h-3 rounded-full bg-[#ff6b9d] mt-2 flex-shrink-0 shadow-[0_0_0_4px_rgba(255,107,157,0.2)]" />
              <div>
                <h3 className="font-semibold text-[#2d2a26]">Today</h3>
                <p className="text-[#6b6560] text-sm">Boards, advisory, and building ROAR. The next chapter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to build something?
          </h2>
          <p className="text-lg text-[#a8a29e] mb-10 max-w-xl mx-auto">
            Advisory, board, or just a conversation. I take a limited number of engagements each quarter.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b9d] text-white rounded-xl font-semibold hover:bg-[#e8558a] transition-colors"
          >
            Say hello
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-[#e5ddd4] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <p className="font-serif text-xl font-bold text-[#2d2a26] mb-2">Lakecia Gunter</p>
              <p className="text-[#6b6560] text-sm">Technology Leadership & Board Governance</p>
            </div>
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/lakeciagunter" target="_blank" rel="noopener noreferrer" className="text-[#6b6560] hover:text-[#2d2a26] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:hello@lakecia.com" className="text-[#6b6560] hover:text-[#2d2a26] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-[#e5ddd4] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a8a29e] text-sm"> 2024 Lakecia Gunter</p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-[#6b6560] hover:text-[#2d2a26]">Home</Link>
              <Link href="/about" className="text-[#6b6560] hover:text-[#2d2a26]">About</Link>
              <Link href="/work" className="text-[#6b6560] hover:text-[#2d2a26]">Work</Link>
              <Link href="/advisory" className="text-[#6b6560] hover:text-[#2d2a26]">Advisory</Link>
              <Link href="/roar" className="text-[#6b6560] hover:text-[#2d2a26]">ROAR</Link>
              <Link href="/contact" className="text-[#6b6560] hover:text-[#2d2a26]">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
