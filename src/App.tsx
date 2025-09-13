import { useState } from "react";

// M&M Cleaning Solutions — Updated to match the mockup closely
// Tailwind v4 + Vite plugin. Colors aligned with mockup.

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-dvh w-full bg-white text-[#2a2259]">
      {/* ===== HEADER (lavender bg, dark logo + links) ===== */}
<header className="w-full header">
      <div className="container flex-between">
        <a href="#" className="logo" aria-label="M&M Sanitation Home">
          <span>M&amp;M</span>
          <span>SANITATION SOLUTIONS</span>
        </a>

        <nav aria-label="Primary" className="nav-wrap">
          <ul className="primary-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

      {/* ===== HERO (left copy on lavender, right photo card) ===== */}
    <div className="w-full bg-[#E6D6FF] py-16">
      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="md:pr-6">
          <h1 className="text-[56px] md:text-[80px] font-extrabold leading-[1.05]">
            Reliable<br />Cleaning Services
          </h1>
          <p className="mt-6 text-[#504A79] text-[22px] max-w-[42ch]">
            We provide top‑quality cleaning services for your home or business.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-[14px] px-8 py-4 bg-[#4B2D8F] text-white font-semibold shadow hover:opacity-90"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right image card (rounded, subtle shadow, fixed max-width 700px aligned right) */}
        <div className="md:pl-6 flex justify-end">
          <div className="rounded-[28px] overflow-hidden shadow-[0_12px_30px_rgba(44,30,104,0.18)] border border-white/60 bg-white max-w-[700px] w-full">
            <img
              src="https://images.pexels.com/photos/4239125/pexels-photo-4239125.jpeg"
              alt="Smiling cleaner holding supplies"
              className="block w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>

      {/* ===== 3-UP FEATURE CARDS on pale lavender ===== */}
      <div className="w-full bg-[#F3EAFF]">
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="rounded-[20px] bg-white border border-[#E7E1F5] shadow-[0_8px_20px_rgba(44,30,104,0.08)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563452960610-0150220be9d4?q=80&w=1200&auto=format&fit=crop"
                alt="Wiping a countertop"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-[22px] font-extrabold text-[#2a2259]">About Us</h3>
                <p className="mt-2 text-[#5F5984] text-[14.5px] leading-6">
                  Learn more about our company and our commitment to excellence.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-[20px] bg-white border border-[#E7E1F5] shadow-[0_8px_20px_rgba(44,30,104,0.08)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578017420-cc12d856766a?q=80&w=1200&auto=format&fit=crop"
                alt="Cleaning supplies in a bucket"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-[22px] font-extrabold text-[#2a2259]">Our Services</h3>
                <p className="mt-2 text-[#5F5984] text-[14.5px] leading-6">
                  Reliable, friendly, and thorough. Our clients love the results week after week.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-[20px] bg-white border border-[#E7E1F5] shadow-[0_8px_20px_rgba(44,30,104,0.08)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop"
                alt="Spraying and wiping surfaces"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-[22px] font-extrabold text-[#2a2259]">Contact Us</h3>
                <p className="mt-2 text-[#5F5984] text-[14.5px] leading-6">
                  We switched our office cleaning to M&M and never looked back.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* ===== BIG CTA BAND (deep purple) ===== */}
      <div className="w-full bg-[#3F237F] text-white">
        <section className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h2 className="text-[30px] md:text-[36px] font-extrabold leading-snug">
            Ready for a spotless space? Contact us today<br />
            for a free quote!
          </h2>
          <div className="mt-7">
            <a
              href="#contact"
              className="inline-block rounded-[14px] px-6 py-3 bg-white/15 border border-white/30 shadow hover:bg-white/25"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </div>

      {/* ===== FOOTER (logo + details) ===== */}
      <footer className="w-full bg-[#3B246F] text-white">
        <section className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: logo + tagline */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[34px] font-extrabold tracking-tight">M&M</span>
              <span className="text-sm font-semibold tracking-[0.28em]">SANITATION</span>
            </div>
            <p className="mt-2 text-sm text-white/85">Lavender Clean, Every Time</p>
          </div>

          {/* Right: CTA + details */}
          <div className="grid sm:grid-cols-2 gap-5">
            <a href="#contact" className="rounded-[14px] px-5 py-3 bg-white text-[#3B246F] font-semibold text-center shadow hover:opacity-90">
              Request a Quote
            </a>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="inline-block size-2 rounded-full bg-white"></span> (555) 014‑7717</li>
              <li className="flex items-center gap-3"><span className="inline-block size-2 rounded-full bg-white"></span> hello@mmsanitation.com</li>
              <li className="flex items-center gap-3"><span className="inline-block size-2 rounded-full bg-white"></span> Local metro and nearby suburbs</li>
              <li className="flex items-center gap-3"><span className="inline-block size-2 rounded-full bg-white"></span> Mon–Sat 8am–7pm</li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}
