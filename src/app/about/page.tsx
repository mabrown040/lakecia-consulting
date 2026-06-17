import Link from "next/link";
import Nav from "../components/Nav";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">The Profile</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          The Operator Who Became a Boardroom Force
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          From digital logic at the Department of Defense to Chief of Staff to the CEO at Intel to CTO of multi-billion-dollar platforms at Microsoft — a 25-year journey redefining technology leadership.
        </p>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src="/lakecia.jpg"
            alt="Lakecia Gunter"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-[#a8a29e] mt-4 italic">Photography by Staff | Interview by Editorial</p>
      </section>

      {/* Article Content */}
      <article className="px-6 lg:px-8 max-w-3xl mx-auto pb-24">
        <p className="text-lg text-[#3d3833] leading-[1.8] mb-8">
          <span className="font-serif text-6xl float-left mr-4 mt-2 leading-none">I</span>
          began my career as a digital logic designer and program manager at the Department of Defense. That foundation — understanding how systems work at their most fundamental level — has shaped every leadership role since. It is a perspective that does not come from business school or consulting. It comes from building things that have to work.
        </p>

        <p className="text-lg text-[#3d3833] leading-[1.8] mb-8">
          From those early days, I moved into the private sector. I served as Chief of Staff to the CEO at Intel, where I saw firsthand how technology strategy and business strategy must converge. Most recently, as Chief Technology Officer for Global Partner Solutions at Microsoft, I shaped technical vision and partner-led growth at global scale, leading multi-billion-dollar platforms and global partner ecosystems.
        </p>

        {/* Pull Quote */}
        <blockquote className="my-16 py-8 border-t border-b border-[#e5ddd4]">
          <p className="font-serif text-2xl md:text-3xl italic text-[#2d2a26] leading-relaxed mb-4">
            "I am known for helping executive teams and boards translate complex technology into clear strategic choices, particularly during periods of disruption, reinvention, and market transition."
          </p>
          <cite className="text-sm text-[#a8a29e] not-italic tracking-widest uppercase">
            — On my approach to advisory work
          </cite>
        </blockquote>

        <p className="text-lg text-[#3d3833] leading-[1.8] mb-8">
          My perspective is grounded in enterprise stewardship, long-term value creation, and effective governance. This is not theoretical. I currently serve as an independent director on the Board of IDEX Corporation, a publicly traded company on the NYSE, and as a board advisor to Responsive.io, a private-equity-backed software company. These roles keep me connected to the real challenges of governance and strategic oversight.
        </p>

        <p className="text-lg text-[#3d3833] leading-[1.8] mb-8">
          I am also the founder and host of ROAR with Lakecia Gunter, spotlighting candid conversations with leaders navigating growth, transition, and opportunity. The show reflects my belief that the most valuable insights come from honest dialogue, not polished presentations.
        </p>

        <p className="text-lg text-[#3d3833] leading-[1.8] mb-8">
          My advisory work spans artificial intelligence, global partner strategy, platform transformation, and new-business acceleration. I work with a limited number of leadership teams and boards each quarter — those who are serious about results, not headlines.
        </p>

        {/* Recognition */}
        <div className="mt-16 pt-8 border-t border-[#e5ddd4]">
          <h2 className="font-serif text-2xl font-bold text-[#2d2a26] mb-6">Recognition</h2>
          <div className="flex flex-wrap gap-3">
            {["Top 50 Black Business Women in America", "25-Year Technology Veteran", "Fortune 50 Executive", "Public Company Board Director"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#6b6560] border border-[#e5ddd4]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

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
