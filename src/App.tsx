 
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import AboutSection from "./components/About";
import Packages from "./components/Packages";
import TestimonialCarousel from "./components/Testimonials";
import Contact from "./components/Contact";


// M&M Cleaning Solutions — Updated to match the mockup closely
// Tailwind v4 + Vite plugin. Colors aligned with mockup.

export default function App() {
  // const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-dvh w-full text-[#2a2259]">
      {/* ===== HEADER (lavender bg, dark logo + links) ===== */}
        <header className="w-full header">
          <div className="container flex-between">
            <Logo/>
            <Navigation/>
          </div>
        </header>

      {/* ===== HERO (left copy on lavender, right photo card) ===== */}
       <div className="top-section">
      <section className="top-section-left">
        {/* Left copy */}
        <div className="">
          <h1 className="">
            Reliable<br />Cleaning Services
          </h1>
          <p className="">
            We provide top‑quality cleaning services for your home or business.
          </p>
          <div className="">
            <a
              href="mailto:mmsanitationsolutions@gmail.com"
              className=""
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right image card (rounded, subtle shadow, fixed max-width 700px aligned right) */}
      </section>
      <section className="top-section-right">
         <div className=" ">
            <img
              src="./images/smile_cleaning.png"
              alt="Smiling cleaner holding supplies"
              className="block w-full object-cover"
              loading="lazy"
            />
          </div>
      </section>
    </div>

    <section id="about" className="spacer h-20 md:h-32 lg:h-40 w-full bg-[#e6d6ff]">
      <AboutSection/>
    </section>
    <section id='services' className="spacer h-20 md:h-32 lg:h-40 w-full bg-[#fbf0fe]">
      <Packages/>
    </section>
        <section id='testimonial-section' className="spacer h-20 md:h-32 lg:h-40 w-full bg-[#e6d6ff]">
          <TestimonialCarousel/>
        </section>

        <section id='contact' className="spacer h-20 md:h-32 lg:h-40 w-full bg-[#fbf0fe]">
          <Contact/>
        </section>
   
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
