import Link from "next/link";
import Nav from "../components/Nav";

export default function ROAR() {
  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">The Podcast</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          ROAR with Lakecia Gunter.
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          Candid conversations with leaders navigating growth, transition, and opportunity. No polished presentations. Just honest dialogue.
        </p>
      </section>

      {/* Featured Episode */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <div className="bg-[#2d2a26] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#ff6b9d] mb-4">Latest Episode</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#fef7f0] mb-4">
                Navigating Technology Disruption with Discipline
              </h2>
              <p className="text-[#a8a29e] mb-6">
                A conversation about how leaders can maintain strategic clarity when everything around them is changing.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b9d] text-white rounded-xl font-semibold w-fit hover:bg-[#e8558a] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Listen Now
              </button>
            </div>
            <div className="bg-[#3d3833] flex items-center justify-center p-10">
              <div className="w-full max-w-xs aspect-square rounded-2xl bg-gradient-to-br from-[#ff6b9d] to-[#e8558a] flex items-center justify-center">
                <span className="font-serif text-6xl font-bold text-white">R</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Show */}
      <section className="px-6 lg:px-8 max-w-3xl mx-auto pb-24">
        <h2 className="font-serif text-3xl font-bold text-[#2d2a26] mb-8">About the show</h2>
        <p className="text-lg text-[#3d3833] leading-relaxed mb-6">
          ROAR is my way of spotlighting the leaders who are actually building things. Not the ones with the best PR. The ones with the best results.
        </p>
        <p className="text-lg text-[#3d3833] leading-relaxed mb-6">
          Each episode is a candid conversation about navigating growth, transition, and opportunity. We talk about what actually works, what doesn't, and what nobody tells you before you're in the seat.
        </p>
        <p className="text-lg text-[#3d3833] leading-relaxed mb-8">
          The show reflects my belief that the most valuable insights come from honest dialogue. Not from keynote slides. Not from press releases. From real conversations with real operators.
        </p>

        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#6b6560] border border-[#e5ddd4]">Technology Leadership</span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#6b6560] border border-[#e5ddd4]">Board Governance</span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#6b6560] border border-[#e5ddd4]">AI Strategy</span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#6b6560] border border-[#e5ddd4]">Career Transitions</span>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Subscribe to ROAR</h2>
          <p className="text-lg text-[#a8a29e] mb-10 max-w-xl mx-auto">
            New episodes weekly. Available wherever you listen to podcasts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-white text-[#2d2a26] rounded-xl font-semibold hover:bg-[#fef7f0] transition-colors">Apple Podcasts</a>
            <a href="#" className="px-6 py-3 bg-white text-[#2d2a26] rounded-xl font-semibold hover:bg-[#fef7f0] transition-colors">Spotify</a>
            <a href="#" className="px-6 py-3 bg-white text-[#2d2a26] rounded-xl font-semibold hover:bg-[#fef7f0] transition-colors">YouTube</a>
          </div>
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
