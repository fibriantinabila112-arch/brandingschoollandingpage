import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui";
import { buildWhatsAppLink } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import About from "@/components/About";
import Learning from "@/components/Learning";
import Objectives from "@/components/Objectives";
import Benefits from "@/components/Benefits";
import Implementation from "@/components/Implementation";
import Documentation from "@/components/Documentation";
import TargetGeneration from "@/components/TargetGeneration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  const [showFloating, setShowFloating] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloating(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setContactInView(entry.isIntersecting)),
      { threshold: 0.06 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const floatingVisible = showFloating && !contactInView;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main">
        <Hero />
        <Partnership />
        <About />
        <Learning />
        <Objectives />
        <Benefits />
        <Implementation />
        <Documentation />
        <TargetGeneration />
        <Contact />
      </main>
      <Footer />

      {/* Floating shortcut to the official WhatsApp channel */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi penyelenggara melalui WhatsApp resmi 0812-3592-716"
        className={`fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#1FA855] py-3 pl-3.5 pr-4 font-display text-[0.72rem] font-extrabold text-white shadow-[0_16px_40px_-12px_rgba(31,168,85,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#188B46] sm:bottom-6 sm:right-6 ${
          floatingVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline">Chat WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
