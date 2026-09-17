import Link from "next/link";
import Nav from "../components/Nav";
import {
  PIVOT_CHECKOUT_URL,
  PIVOT_HOME_URL,
  PIVOT_OFFER_NAME,
  PIVOT_PRICE_LABEL,
} from "../../lib/pivot";

const included = [
  "Full P.I.V.O.T. Blueprint™ program enrollment",
  "Member portal access — sessions, library, and progress tracking",
  "The P.I.V.O.T. Readiness Reflection™ diagnostic",
  "Guided coaching support throughout the program",
];

export default function Pivot() {
  return (
    <main className="min-h-screen bg-[#fef7f0]">
      <Nav />

      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#a8a29e] mb-4">
          The P.I.V.O.T. Blueprint™
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2d2a26] leading-[1.05] mb-8">
          Stop proving.
          <br />
          <span className="text-[#ff6b9d]">Start positioning.</span>
        </h1>
        <p className="text-xl text-[#6b6560] leading-relaxed max-w-2xl mb-6">
          {PIVOT_OFFER_NAME} is Lakecia&apos;s guided, cohort-based Executive Career
          Architecture™ for Black women ready to turn proven value into visible
          leadership.
        </p>
        <p className="text-lg text-[#2d2a26] font-semibold mb-10">
          {PIVOT_PRICE_LABEL} · one payment · USD
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={PIVOT_CHECKOUT_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2a26] text-white rounded-xl font-semibold hover:bg-[#3d3833] transition-colors"
          >
            Enroll now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={PIVOT_HOME_URL}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#2d2a26] text-[#2d2a26] rounded-xl font-medium hover:bg-[#2d2a26] hover:text-white transition-colors"
          >
            See the framework
          </a>
        </div>
      </section>

      <section className="px-6 lg:px-8 max-w-5xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">What&apos;s included</h2>
            <ul className="space-y-3 text-[#6b6560]">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#ff6b9d] mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#2d2a26] mb-4">How buying works</h2>
            <p className="text-[#6b6560] leading-relaxed mb-4">
              Checkout takes your name, email, and how you&apos;ll pay — yourself or through
              an employer or sponsor. Card and PayPal appear automatically when those
              providers are live. Until then, completing the form files your enrollment
              so Lakecia can send the invoice the same day.
            </p>
            <p className="text-[#6b6560] leading-relaxed">
              The interest list is still available if you want dates first. Enrollment
              is open now.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2d2a26] text-[#fef7f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#ff6b9d] mb-4">
            Complete your purchase
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to enroll in the Blueprint?
          </h2>
          <p className="text-lg text-[#a8a29e] mb-10 max-w-2xl mx-auto">
            {PIVOT_PRICE_LABEL} one-time. You&apos;ll finish on the secure P.I.V.O.T.
            checkout — same offer, same price, no second form to hunt down.
          </p>
          <a
            href={PIVOT_CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff6b9d] text-white rounded-xl font-semibold hover:bg-[#e8558a] transition-colors"
          >
            Complete purchase — {PIVOT_PRICE_LABEL}
          </a>
        </div>
      </section>

      <footer className="py-16 px-6 lg:px-8 border-t border-[#e5ddd4] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#a8a29e] text-sm">© 2024 Lakecia Gunter</p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-[#6b6560] hover:text-[#2d2a26]">Home</Link>
            <Link href="/advisory" className="text-[#6b6560] hover:text-[#2d2a26]">Advisory</Link>
            <Link href="/pivot" className="text-[#6b6560] hover:text-[#2d2a26]">PIVOT</Link>
            <Link href="/contact" className="text-[#6b6560] hover:text-[#2d2a26]">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
