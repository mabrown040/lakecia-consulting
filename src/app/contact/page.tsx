import Link from "next/link";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">Get in Touch</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          Let&apos;s build something together.
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          I take a limited number of engagements each quarter. Tell me what you&apos;re working on and I&apos;ll get back to you within 48 hours.
        </p>
      </section>

      {/* Contact Options */}
      <section className="px-6 lg:px-8 max-w-6xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#2d2a26] mb-6">Send a message</h2>
            <form className="space-y-6" action="mailto:hello@lakecia.com" method="post" encType="text/plain">
              <div>
                <label className="block text-sm font-medium text-[#2d2a26] mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5ddd4] bg-[#fef7f0] focus:outline-none focus:ring-2 focus:ring-[#ff6b9d]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2a26] mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5ddd4] bg-[#fef7f0] focus:outline-none focus:ring-2 focus:ring-[#ff6b9d]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2a26] mb-2">What do you need help with?</label>
                <select 
                  name="topic"
                  className="w-full px-4 py-3 rounded-xl border border-[#e5ddd4] bg-[#fef7f0] focus:outline-none focus:ring-2 focus:ring-[#ff6b9d]"
                >
                  <option value="">Select an option</option>
                  <option value="board">Board Advisory / Governance</option>
                  <option value="strategy">Technology Strategy</option>
                  <option value="coaching">Executive Coaching</option>
                  <option value="speaking">Speaking / Podcast</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2a26] mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#e5ddd4] bg-[#fef7f0] focus:outline-none focus:ring-2 focus:ring-[#ff6b9d]"
                  placeholder="Tell me about your company, your timeline, and what success looks like..."
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-[#2d2a26] text-white rounded-xl font-semibold hover:bg-[#3d3833] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Direct contact + social proof */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg text-[#2d2a26] mb-4">Direct contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@lakecia.com" 
                  className="flex items-center gap-3 text-[#6b6560] hover:text-[#2d2a26] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@lakecia.com
                </a>
                <a 
                  href="https://linkedin.com/in/lakeciagunter" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#6b6560] hover:text-[#2d2a26] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-[#2d2a26] rounded-2xl p-8 text-[#fef7f0]">
              <h3 className="font-semibold text-lg mb-4">What happens next</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ff6b9d] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-[#a8a29e]">I read every message personally. No assistants.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ff6b9d] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-[#a8a29e]">If it&apos;s a fit, we schedule a 30-minute call within a week.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ff6b9d] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-[#a8a29e]">We define scope, timeline, and outcomes before any commitment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-sm text-[#a8a29e] uppercase tracking-wider mb-3">Typical engagements</p>
              <div className="space-y-2">
                <p className="text-[#2d2a26]">Board advisory (quarterly)</p>
                <p className="text-[#2d2a26]">Technology strategy sprints (2-4 weeks)</p>
                <p className="text-[#2d2a26]">Executive coaching (6-month minimum)</p>
              </div>
            </div>
          </div>
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
            </div>
          </div>
          <div className="pt-8 border-t border-[#e5ddd4] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a8a29e] text-sm">© 2024 Lakecia Gunter</p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-[#6b6560] hover:text-[#2d2a26]">Home</Link>
              <Link href="/about" className="text-[#6b6560] hover:text-[#2d2a26]">About</Link>
              <Link href="/work" className="text-[#6b6560] hover:text-[#2d2a26]">Work</Link>
              <Link href="/advisory" className="text-[#6b6560] hover:text-[#2d2a26]">Advisory</Link>
              <Link href="/roar" className="text-[#6b6560] hover:text-[#2d2a26]">ROAR</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
