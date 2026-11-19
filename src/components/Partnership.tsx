import { Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { BrandLockup, Reveal, SectionLabel } from "@/components/ui";

const MARQUEE_ITEMS = [
  "Personal Branding",
  "Financial Literacy",
  "Digital Portfolio",
  "Creative Technology",
  "Future Skills",
  "Student Identity",
];

export default function Partnership() {
  return (
    <section id="partnership" aria-labelledby="partnership-title" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-navy/10 bg-gradient-to-br from-[#F6FAFF] via-white to-ice shadow-[0_30px_70px_-50px_rgba(11,36,80,0.5)]">
            <div className="grid-lines-light pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 lg:p-11">
              <div>
                <SectionLabel index="00">Partnership</SectionLabel>
                <h2
                  id="partnership-title"
                  className="mt-4 font-display text-[clamp(1.75rem,3.4vw,2.6rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-navy"
                >
                  Powered by
                  <br />
                  <span className="text-royal">Collaboration</span>
                  <span className="text-accent">.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[0.92rem] leading-7 text-slate-600">
                  Kolaborasi dalam menghadirkan edukasi dan pengembangan potensi generasi muda melalui
                  teknologi, kreativitas, dan literasi keuangan digital.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[0.68rem] font-semibold text-navy">
                    <Handshake className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
                    Inisiasi program
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[0.68rem] font-semibold text-navy">
                    <ShieldCheck className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
                    Mitra perbankan
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[0.68rem] font-semibold text-navy">
                    <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    Generasi digital
                  </span>
                </div>
              </div>

              {/* Official logos */}
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-navy/10 bg-white px-5 py-7 shadow-[0_18px_40px_-30px_rgba(11,36,80,0.45)] sm:px-8">
                <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.24em] text-slate-400">
                  Kolaborasi resmi
                </p>
                <BrandLockup size="lg" className="justify-center gap-3 sm:gap-4" />
                <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-3 border-t border-navy/8 pt-5 text-center">
                  <div>
                    <p className="font-display text-[0.7rem] font-extrabold uppercase leading-tight tracking-wide text-navy">
                      New Idea Indonesia
                    </p>
                    <p className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-slate-400">
                      Penyelenggara
                    </p>
                  </div>
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <p className="font-display text-[0.7rem] font-extrabold uppercase leading-tight tracking-wide text-navy">
                      Bank Raya
                    </p>
                    <p className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-slate-400">
                      Cabang Sidoarjo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Keyword marquee */}
        <Reveal delay={120}>
          <div className="marquee-wrap relative mt-8 overflow-hidden rounded-xl bg-navy py-3.5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent" aria-hidden="true" />
            <div className="animate-marquee flex w-max items-center">
              {[0, 1].map((loop) => (
                <div key={loop} className="flex shrink-0 items-center" aria-hidden={loop === 1}>
                  {MARQUEE_ITEMS.map((item) => (
                    <span key={`${loop}-${item}`} className="flex items-center">
                      <span className="px-5 font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky/75">
                        {item}
                      </span>
                      <span className="h-1 w-1 rotate-45 bg-accent/80" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
