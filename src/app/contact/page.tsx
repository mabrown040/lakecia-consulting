import Link from "next/link";

export default function Contact() {
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
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white transition-colors">Home</Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white transition-colors">About</Link>
              <Link href="/work" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white transition-colors">Work</Link>
              <Link href="/advisory" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white transition-colors">Advisory</Link>
              <Link href="/roar" className="px-4 py-2 rounded-full text-sm font-medium text-[#6b6560] hover:bg-white transition-colors">ROAR</Link>
              <Link href="/contact" className="ml-2 px-5 py-2 rounded-full text-sm font-medium bg-[#2d2a26] text-white hover:bg-[#3d3833] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">Get in Touch</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          Let's talk.
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          I take a limited number of engagements each quarter. If you're navigating a technology transition and need perspective from someone who's operated at scale, let's see if we're a fit.
        </p>
      </section>

      {/* Contact Options */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="mailto:hello@lakecia.com" className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">Email</h3>
            <p className="text-[#6b6560] text-sm">hello@lakecia.com</p>
          </a>

          <a href="https://linkedin.com/in/lakeciagunter" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">LinkedIn</h3>
            <p className="text-[#6b6560] text-sm">linkedin.com/in/lakeciagunter</p>
          </a>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-[#2d2a26] mb-2">ROAR Podcast</h3>
            <p className="text-[#6b6560] text-sm">Listen to candid leadership conversations</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-4 text-center">Start a conversation</h2>
          <p className="text-[#a8a29e] text-center mb-12">Tell me what you're working on. I'll respond within 48 hours.</p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#3d3833] border border-[#4d4843] rounded-xl text-[#fef7f0] placeholder-[#a8a29e] focus:outline-none focus:border-[#ff6b9d]" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-[#3d3833] border border-[#4d4843] rounded-xl text-[#fef7f0] placeholder-[#a8a29e] focus:outline-none focus:border-[#ff6b9d]" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input type="text" className="w-full px-4 py-3 bg-[#3d3833] border border-[#4d4843] rounded-xl text-[#fef7f0] placeholder-[#a8a29e] focus:outline-none focus:border-[#ff6b9d]" placeholder="Your company" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What are you working on?</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-[#3d3833] border border-[#4d4843] rounded-xl text-[#fef7f0] placeholder-[#a8a29e] focus:outline-none focus:border-[#ff6b9d] resize-none" placeholder="Tell me about your challenge..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-[#ff6b9d] text-white rounded-xl font-semibold hover:bg-[#e8558a] transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-[#e5ddd4]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#a8a29e] text-sm">&copy; 2024 Lakecia Gunter. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/lakeciagunter" target="_blank" rel="noopener noreferrer" className="text-[#6b6560] hover:text-[#2d2a26]">LinkedIn</a>
            <a href="mailto:hello@lakecia.com" className="text-[#6b6560] hover:text-[#2d2a26]">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
