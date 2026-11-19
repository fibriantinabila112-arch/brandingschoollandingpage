import { ArrowUp, ArrowUpRight, Building2, Landmark, MapPin, MessageSquare } from "lucide-react";
import { BrandLockup, WhatsAppIcon } from "@/components/ui";
import {
  OFFICIAL_WHATSAPP_DISPLAY,
  OFFICIAL_WHATSAPP_INTERNATIONAL,
  buildWhatsAppLink,
} from "@/lib/api";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Program", href: "#about" },
  { label: "Learning Program", href: "#learning" },
  { label: "Benefits", href: "#benefits" },
  { label: "Implementation", href: "#implementation" },
  { label: "Documentation", href: "#dokumentasi" },
  { label: "Contact", href: "#contact" },
];

const PROGRAM_LINKS = [
  { label: "Literasi Keuangan Digital", href: "#learning" },
  { label: "Personal Branding Siswa", href: "#learning" },
  { label: "Website Portofolio Siswa", href: "#learning" },
  { label: "Program Objectives", href: "#objectives" },
  { label: "Dokumentasi Kegiatan", href: "#dokumentasi" },
  { label: "Pertanyaan Umum", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="h-[3px] w-full bg-gradient-to-r from-royal via-sky to-accent" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-royal/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-shell relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.65fr_0.9fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-6">
            <BrandLockup size="md" tone="dark" />
            <h2 className="mt-6 font-display text-[1.05rem] font-extrabold uppercase leading-tight tracking-[0.02em] text-white">
              Branding School <span className="text-sky">Program</span>
            </h2>
            <p className="mt-3 max-w-sm text-[0.8rem] leading-6 text-white/50">
              Program edukasi dan pengembangan potensi siswa melalui personal branding, literasi keuangan
              digital, dan teknologi kreatif.
            </p>
            <p className="mt-5 border-l-2 border-accent pl-3 font-display text-[0.8rem] font-bold leading-snug text-white/85">
              Menyiapkan Generasi Inovatif Masa Depan.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigasi footer">
            <h3 className="font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-sky/70">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.79rem] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Program */}
          <nav aria-label="Program footer">
            <h3 className="font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-sky/70">
              Program
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.79rem] leading-snug text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Official identity */}
          <div>
            <h3 className="font-display text-[0.6rem] font-bold uppercase tracking-[0.2em] text-sky/70">
              Penyelenggara & Mitra
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-white/35">Penyelenggara</p>
                  <p className="text-[0.79rem] font-semibold leading-snug text-white/80">NEW IDEA INDONESIA</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Landmark className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-white/35">Mitra</p>
                  <p className="text-[0.79rem] font-semibold leading-snug text-white/80">
                    BANK RAYA Cabang Sidoarjo
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-white/35">Lokasi</p>
                  <p className="text-[0.79rem] font-semibold leading-snug text-white/80">
                    Tatap muka di sekolah mitra
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-white/35">
                    WhatsApp resmi
                  </p>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[0.79rem] font-semibold leading-snug text-white/85 transition-colors hover:text-emerald-300"
                  >
                    {OFFICIAL_WHATSAPP_DISPLAY}
                    <ArrowUpRight className="h-3 w-3 text-emerald-400/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </li>
            </ul>
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-white/[0.07] px-3.5 py-2.5 text-[0.7rem] font-bold text-white ring-1 ring-white/10 transition-colors hover:bg-accent hover:text-navy-deep hover:ring-accent"
            >
              <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
              Ajukan kerja sama
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* contact strip */}
        <div className="flex flex-col gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-[0.7rem] text-white/50">
            <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
            Kontak resmi penyelenggara:
            <span className="font-bold text-white">{OFFICIAL_WHATSAPP_INTERNATIONAL}</span>
          </p>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-emerald-300 transition-colors hover:text-accent"
          >
            Chat WhatsApp
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/8 py-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <p className="text-[0.68rem] text-white/40">
              © 2026 BRANDING SCHOOL PROGRAM. Seluruh hak cipta dilindungi.
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/25">
              NEW IDEA INDONESIA <span className="text-accent">×</span> BANK RAYA CABANG SIDOARJO
            </p>
          </div>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:border-sky/40 hover:text-white"
          >
            Kembali ke atas
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
