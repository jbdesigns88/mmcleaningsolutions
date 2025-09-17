import { useState } from "react"; 
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import AboutSection from "./components/About";
import Packages from "./components/Packages";
import TestimonialCarousel from "./components/Testimonials";
import Contact from "./components/Contact";
import MobileNavigation from "./components/MobileNavigation";
import Hamburger  from  "./components/Hamburger";


// M&M Cleaning Solutions — Updated to match the mockup closely
// Tailwind v4 + Vite plugin. Colors aligned with mockup.

export default function App() {
  const [navIsOpen,setNavIsOpen] = useState(false)
  // const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-dvh w-full text-[#2a2259]">
      {/* ===== HEADER (lavender bg, dark logo + links) ===== */}
        <header className="w-full header">
          <div id="nav-logo-container" className="container flex-between">
            <Logo/>
            <Hamburger isOpen={navIsOpen} toggle={() => {setNavIsOpen(!navIsOpen)}}/>
            <Navigation/>
          </div>
          <MobileNavigation isOpen={navIsOpen} toggle={ () => {setNavIsOpen(!navIsOpen)}}/>
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
        <section className="container">
          <Logo/>
          {/* Right: CTA + details */}
          <div className=" container content-details">
         
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"> (555) 014‑7717</li>
              <li className="flex items-center gap-3"> mmsanitationsolutions@gmail.com</li>
              <li className="flex items-center gap-3"> Local metro and nearby suburbs</li>
              <li className="flex items-center gap-3"> Mon–Sat 8am–7pm</li>
            </ul>
          </div>

        </section>
          <div id="copyright-section" className="mt-8 border-t border-white/20 pt-4 text-center text-xs text-gray-200">
            © {new Date().getFullYear()} M&amp;M Cleaning Solutions. All rights reserved. <br />
            Designed by{" "}
            <a
              href="https://jbuapim.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-300"
            >
              uvisionagency.com
            </a>
          </div>
      </footer>
    </div>
  );
}
