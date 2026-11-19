import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/utils/cn";
import { ArrowUpRight as ArrowIcon, BrandLockup, WhatsAppIcon, btnAccent } from "@/components/ui";
import { OFFICIAL_WHATSAPP_DISPLAY, buildWhatsAppLink } from "@/lib/api";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Program", href: "#about", id: "about" },
  { label: "Learning Program", href: "#learning", id: "learning" },
  { label: "Benefits", href: "#benefits", id: "benefits" },
  { label: "Implementation", href: "#implementation", id: "implementation" },
  { label: "Documentation", href: "#dokumentasi", id: "dokumentasi" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

        let current = "home";
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id);
          if (el && el.getBoundingClientRect().top <= 170) current = item.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-lg"
      >
        Lewati ke konten utama
      </a>

      {/* Utility bar */}
      <div className="relative z-40 hidden border-b border-white/10 bg-navy-deep text-white lg:block">
        <div className="container-shell flex h-9 items-center justify-between gap-6 text-[0.66rem] font-semibold uppercase tracking-[0.16em]">
          <div className="flex items-center gap-2.5 text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Program edukasi generasi digital
          </div>
          <div className="flex items-center gap-6 text-white/55">
            <span>
              New Idea Indonesia <span className="mx-1 text-accent">×</span> Bank Raya Cabang Sidoarjo
            </span>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 normal-case tracking-normal text-white/70 transition-colors hover:text-emerald-300"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-semibold">{OFFICIAL_WHATSAPP_DISPLAY}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-sky" aria-hidden="true" />
              Sidoarjo, Jawa Timur
            </span>
          </div>
        </div>
      </div>

      {/* Sticky navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-navy/10 shadow-[0_12px_32px_-24px_rgba(11,36,80,0.5)]" : "border-transparent",
        )}
      >
        <div className="container-shell">
          <div
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-300",
              scrolled ? "h-[66px]" : "h-[76px]",
            )}
          >
            <a
              href="#home"
              aria-label="BRANDING SCHOOL PROGRAM — NEW IDEA INDONESIA dan BANK RAYA, kembali ke beranda"
              className="shrink-0 rounded-lg"
            >
              <span className="hidden sm:block">
                <BrandLockup size="sm" />
              </span>
              <span className="flex flex-col gap-1 sm:hidden">
                <BrandLockup size="xs" />
                <span className="font-display text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-navy/45">
                  Branding School
                </span>
              </span>
            </a>

            <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.id ? "page" : undefined}
                  className={cn(
                    "relative whitespace-nowrap rounded-lg px-2 py-2 font-display text-[0.74rem] font-semibold transition-colors xl:px-3.5 xl:text-[0.82rem]",
                    active === item.id ? "text-navy" : "text-slate-500 hover:text-royal",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-accent transition-transform duration-300 xl:inset-x-3.5",
                      active === item.id ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#about" className={cn(btnAccent, "hidden !px-4 !py-2.5 !text-[0.8rem] sm:inline-flex")}>
                Kenali Program
                <ArrowIcon />
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy/12 bg-white text-navy transition-colors hover:border-navy/25 hover:bg-ice lg:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent" aria-hidden="true">
          <div
            className="h-full bg-gradient-to-r from-royal via-sky to-accent transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden border-t border-navy/10 bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden",
            open ? "visible max-h-[calc(100vh-76px)] opacity-100" : "invisible max-h-0 opacity-0",
          )}
        >
          <div className="container-shell flex max-h-[calc(100vh-90px)] flex-col overflow-y-auto py-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="label-kicker text-royal">Menu navigasi</span>
              <span className="rounded-full bg-ice px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-navy/60">
                Program 2026
              </span>
            </div>
            <nav aria-label="Navigasi seluler" className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between border-b border-navy/8 py-3.5 font-display text-[0.98rem] font-bold transition-colors",
                    active === item.id ? "text-royal" : "text-navy hover:text-royal",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[0.62rem] font-normal text-navy/35">
                      0{index + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-navy/25 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(btnAccent, "mt-5 w-full")}
            >
              Ajukan Kerja Sama Sekolah
              <ArrowIcon />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex w-full items-center justify-between gap-3 rounded-xl border border-emerald-500/25 bg-[#E9F9EF] px-4 py-3"
            >
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block text-[0.5rem] font-bold uppercase tracking-[0.13em] text-emerald-700/70">
                    WhatsApp resmi
                  </span>
                  <span className="block font-display text-[0.82rem] font-extrabold text-emerald-900">
                    {OFFICIAL_WHATSAPP_DISPLAY}
                  </span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-emerald-600" />
            </a>
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-ice p-3.5 text-[0.72rem] leading-relaxed text-navy/70">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal" aria-hidden="true" />
              <p>
                <span className="font-bold text-navy">Diselenggarakan di sekolah mitra.</span> Pendaftaran
                kerja sama dibuka melalui formulir resmi pada halaman ini.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
