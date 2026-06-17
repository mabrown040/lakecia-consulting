"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight, Sparkles, Brain, Users, TrendingUp, Shield, ChevronDown, Menu, X } from "lucide-react";

// LinkedIn icon - using a custom SVG since lucide-react naming varies by version
const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#credentials", label: "Credentials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Lakecia</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white w-full">
                Book a Call
              </Button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-950 to-fuchsia-900/20 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
            <Sparkles size={16} />
            <span>Top 50 Black Business Women in America</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-slate-100">AI Strategy for</span>
            <br />
            <span className="gradient-text">Visionary Leaders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Former CTO of <span className="text-slate-300 font-semibold">Microsoft</span> and <span className="text-slate-300 font-semibold">Intel</span>. 
            I help enterprises and founders harness AI to transform their business — 
            with the leadership experience to make it actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg glow">
                Book a Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                Explore Services
              </Button>
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Shield size={16} /> Fortune 500 Experience
            </span>
            <span className="flex items-center gap-2">
              <Brain size={16} /> AI/ML Expertise
            </span>
            <span className="flex items-center gap-2">
              <Users size={16} /> Board Advisor
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-600" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium mb-6">
                <Users size={14} />
                <span>About</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">
                Leadership That Builds,<br />
                <span className="gradient-text">Not Just Advises</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  I didn't just study AI from the sidelines — I built it at scale inside two of the world's 
                  most important technology companies. As CTO at Microsoft and Intel, I led teams that shipped 
                  products used by billions.
                </p>
                <p>
                  Today, I work with founders, CEOs, and boards who know AI is critical but don't know 
                  where to start. I translate technical complexity into business strategy, and I help 
                  organizations build AI capabilities that last.
                </p>
                <p>
                  I'm also deeply committed to increasing representation of women and people of color 
                  in technology leadership. When you work with me, you're not just getting technical 
                  expertise — you're getting someone who understands the human side of transformation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700">
                <img 
                  src="/lakecia.jpg" 
                  alt="Lakecia Gunter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 glow">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-slate-400">Years in Tech</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>Services</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              How I Help Organizations <span className="gradient-text">Win with AI</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From board-level strategy to hands-on implementation, I meet you where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={28} />,
                title: "AI Strategy & Roadmapping",
                description: "Assess your current state, identify high-value AI opportunities, and build a 12-18 month roadmap aligned to business goals.",
                color: "violet",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "Digital Transformation",
                description: "Guide enterprise-wide transformation with AI at the center. Process redesign, org structure, and change management.",
                color: "fuchsia",
              },
              {
                icon: <Shield size={28} />,
                title: "AI Governance & Risk",
                description: "Build responsible AI frameworks. Ethics, compliance, bias mitigation, and security for regulated industries.",
                color: "cyan",
              },
              {
                icon: <Users size={28} />,
                title: "Executive Coaching",
                description: "One-on-one coaching for CTOs, CIOs, and founders navigating AI adoption. Technical depth + leadership wisdom.",
                color: "emerald",
              },
              {
                icon: <Sparkles size={28} />,
                title: "Board Advisory",
                description: "Advise boards on AI investment, competitive positioning, and technology risk. Translate tech for business leaders.",
                color: "amber",
              },
              {
                icon: <Calendar size={28} />,
                title: "Workshops & Keynotes",
                description: "Inspire and educate your team. From C-suite offsites to all-hands keynotes on AI's impact on your industry.",
                color: "rose",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6">
              <Shield size={14} />
              <span>Credentials</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Built at the <span className="gradient-text">Highest Level</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Microsoft */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold text-xl">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Microsoft</h3>
                  <p className="text-slate-500">Chief Technology Officer</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Led AI and cloud strategy across product divisions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Drove technical direction for Azure AI services
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Managed $X billion P&L and global engineering teams
                </li>
              </ul>
            </div>

            {/* Intel */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
                  I
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Intel</h3>
                  <p className="text-slate-500">Chief Technology Officer</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Shaped silicon-to-software AI strategy
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Led advanced research and emerging tech
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▸</span>
                  Partnered with Fortune 500 on AI deployments
                </li>
              </ul>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "Top 50", label: "Black Business Women in America" },
              { number: "2x", label: "Fortune 500 CTO" },
              { number: "20+", label: "Years in Technology" },
              { number: "100+", label: "Board Presentations" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            <Users size={14} />
            <span>Impact</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-100 mb-12">
            Trusted by <span className="gradient-text">Leaders Who Build</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Lakecia doesn't just talk about AI strategy — she's lived it at the highest levels. Her ability to translate technical complexity into board-ready business cases is unmatched.",
                author: "Fortune 500 CEO",
                role: "Technology Sector",
              },
              {
                quote: "Working with Lakecia transformed how our board thinks about AI. She helped us move from 'should we?' to 'here's exactly how we win with AI.'",
                author: "Board Chair",
                role: "Financial Services",
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-left">
                <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="text-slate-200 font-medium">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Let's Build Your <span className="gradient-text">AI Future</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Whether you're a founder looking for product strategy or a board seeking AI governance, 
            I bring the experience to make it real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:contact@lakecia.com">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg glow">
                <Mail className="mr-2" size={20} />
                Email Lakecia
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                <LinkedInIcon className="mr-2" size={20} />
                LinkedIn
              </Button>
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                <Calendar className="mr-2" size={20} />
                Book a Call
              </Button>
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-100 mb-4">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-violet-400 font-bold text-lg mb-2">1. Discovery</div>
                <p className="text-slate-400 text-sm">30-minute call to understand your goals and challenges.</p>
              </div>
              <div>
                <div className="text-violet-400 font-bold text-lg mb-2">2. Proposal</div>
                <p className="text-slate-400 text-sm">Custom engagement plan tailored to your needs and timeline.</p>
              </div>
              <div>
                <div className="text-violet-400 font-bold text-lg mb-2">3. Results</div>
                <p className="text-slate-400 text-sm">Hands-on partnership to deliver measurable outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Lakecia</span>
          </div>
          <div className="text-slate-500 text-sm">
            AI Strategy & Leadership Consulting
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 transition-colors">
              <LinkedInIcon size={20} />
            </a>
            <a href="mailto:contact@lakecia.com" className="text-slate-500 hover:text-slate-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-center text-slate-600 text-sm">
          © 2025 Lakecia. All rights reserved. Built with intention.
        </div>
      </footer>
    </div>
  );
}
