import Link from "next/link";
import Nav from "../components/Nav";

export default function Work() {
  const timeline = [
    {
      period: "Recent",
      title: "Chief Technology Officer",
      company: "Microsoft — Global Partner Solutions",
      description: "Shaped technical vision and partner-led growth at global scale. Led multi-billion-dollar platforms and global partner ecosystems. Drove platform transformation and new-business acceleration across every level of enterprise scale.",
      highlight: "$B+ P&L"
    },
    {
      period: "Prior",
      title: "Chief of Staff to the CEO",
      company: "Intel Corporation",
      description: "Fortune 50 enterprise operating experience. Saw firsthand how technology strategy and business strategy must converge at the highest levels.",
      highlight: "Fortune 50"
    },
    {
      period: "Early",
      title: "Digital Logic Designer & Program Manager",
      company: "U.S. Department of Defense",
      description: "Foundation in systems at their most fundamental level. Critical government systems experience that shaped every leadership role since.",
      highlight: "Foundation"
    }
  ];

  const current = [
    {
      title: "Independent Director",
      org: "IDEX Corporation",
      detail: "NYSE-listed industrial company",
      tag: "Board"
    },
    {
      title: "Board Advisor",
      org: "Responsive.io",
      detail: "Private-equity-backed software",
      tag: "Advisory"
    },
    {
      title: "Co-Founding Advisor",
      org: "TechArena.ai",
      detail: "Technology-driven change with discipline",
      tag: "Founding"
    },
    {
      title: "Founder & Host",
      org: "ROAR with Lakecia Gunter",
      detail: "Candid conversations with leaders",
      tag: "Media"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">Experience</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          The work that shaped me.
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          Three decades. Government, Fortune 50, and now building independently. Each role taught something the previous one couldn't.
        </p>
      </section>

      {/* Current Roles */}
      <section className="px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <h2 className="font-serif text-3xl font-bold text-[#2d2a26] mb-10">Current</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {current.map((role) => (
            <div key={role.title} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#ff6b9d]">{role.tag}</span>
              </div>
              <h3 className="font-semibold text-lg text-[#2d2a26] mb-1">{role.title}</h3>
              <p className="text-[#6b6560] font-medium mb-2">{role.org}</p>
              <p className="text-sm text-[#a8a29e]">{role.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 lg:px-8 max-w-4xl mx-auto pb-24">
        <h2 className="font-serif text-3xl font-bold text-[#2d2a26] mb-10">The timeline</h2>
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-24 flex-shrink-0 pt-1">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#a8a29e]">{item.period}</span>
              </div>
              <div className="flex-1 pb-12 border-b border-[#e5ddd4]">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-xl text-[#2d2a26]">{item.title}</h3>
                  <span className="px-3 py-1 bg-[#ff6b9d]/10 text-[#ff6b9d] text-xs font-semibold rounded-full">{item.highlight}</span>
                </div>
                <p className="text-[#6b6560] font-medium mb-3">{item.company}</p>
                <p className="text-[#3d3833] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Let's add to this timeline.</h2>
          <p className="text-lg text-[#a8a29e] mb-10">Advisory, board, or partnership inquiries.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b9d] text-white rounded-xl font-semibold hover:bg-[#e8558a] transition-colors">
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
