import Link from "next/link";
import Nav from "../components/Nav";

export default function Advisory() {
  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">AI Advisory Services</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          AI strategy that actually works for women leaders.
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          Most AI consulting is built by men, for men, in language that doesn't land. I help women leaders cut through the hype, understand what matters, and build AI into their leadership — not as a buzzword, but as a competitive advantage.
        </p>
      </section>

      {/* AI Services */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Strategy for Boards */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">AI Strategy for Boards</h3>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Help your board understand AI risk, opportunity, and governance in plain language. Translate technical complexity into strategic decisions directors can act on.
            </p>
            <ul className="space-y-2 text-sm text-[#6b6560]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                AI governance framework development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Risk assessment and oversight
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Vendor and investment evaluation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Quarterly AI strategy reviews
              </li>
            </ul>
          </div>

          {/* Executive AI Coaching */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">Executive AI Coaching</h3>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              One-on-one coaching for women executives adopting AI. Build confidence, cut through vendor hype, and lead AI conversations with authority in any room.
            </p>
            <ul className="space-y-2 text-sm text-[#6b6560]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Personal AI fluency development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Team AI readiness assessment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Vendor evaluation and selection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Leadership communication strategy
              </li>
            </ul>
          </div>

          {/* AI Implementation Sprints */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">AI Implementation Sprints</h3>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              2-4 week hands-on sprints to get your team using AI tools that actually move the needle. Tool selection, workflow design, and team training — not theory, results.
            </p>
            <ul className="space-y-2 text-sm text-[#6b6560]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                AI tool audit and selection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Workflow redesign with AI
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Team training and adoption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                ROI measurement framework
              </li>
            </ul>
          </div>

          {/* Women's AI Leadership Circle */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-[#ff6b9d]/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#ff6b9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">Women's AI Leadership Circle</h3>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Small cohort of women leaders navigating AI together. Monthly sessions, peer support, and direct access to me. Build your network while you build your AI fluency.
            </p>
            <ul className="space-y-2 text-sm text-[#6b6560]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Monthly group sessions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Peer accountability and support
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Direct access to me between sessions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b9d] mt-1">—</span>
                Quarterly enrollment, 8-12 women
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">How we work together</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#ff6b9d] flex items-center justify-center flex-shrink-0 font-bold text-white">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Discovery</h3>
                <p className="text-[#a8a29e]">We start with your challenges, not my framework. I listen first, then advise.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#ff6b9d] flex items-center justify-center flex-shrink-0 font-bold text-white">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-[#a8a29e]">I bring an outside perspective grounded in 25 years of operating experience. No theory, no fluff.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#ff6b9d] flex items-center justify-center flex-shrink-0 font-bold text-white">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Action</h3>
                <p className="text-[#a8a29e]">Clear recommendations, specific next steps, and ongoing support as you execute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-[#2d2a26] mb-6">Ready to lead with AI?</h2>
        <p className="text-lg text-[#6b6560] mb-10">Book a free 30-minute AI strategy call. No pitch, just clarity on your next steps.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2a26] text-white rounded-xl font-semibold hover:bg-[#3d3833] transition-colors">
          Book your free call
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
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
