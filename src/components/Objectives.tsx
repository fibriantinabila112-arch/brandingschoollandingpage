import { ArrowUpRight, GraduationCap, Lightbulb, Sparkles, Wallet, Globe2 } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/ui";

const OBJECTIVES = [
  {
    icon: Sparkles,
    text: "Meningkatkan kesadaran siswa tentang pentingnya personal branding.",
  },
  {
    icon: Lightbulb,
    text: "Mengembangkan kreativitas dan potensi diri siswa.",
  },
  {
    icon: Wallet,
    text: "Meningkatkan pemahaman mengenai literasi keuangan digital.",
  },
  {
    icon: Globe2,
    text: "Membekali siswa dengan kemampuan membuat website portofolio.",
  },
  {
    icon: GraduationCap,
    text: "Mempersiapkan siswa menghadapi dunia pendidikan lanjutan dan dunia kerja.",
  },
];

export default function Objectives() {
  return (
    <section
      id="objectives"
      aria-labelledby="objectives-title"
      className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-royal/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-sky/10 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[6%] top-16 hidden h-56 w-56 rounded-full border border-sky/15 lg:block"
        aria-hidden="true"
      />

      <div className="container-shell relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel index="03" tone="light">
              Program Objectives
            </SectionLabel>
            <h2
              id="objectives-title"
              className="mt-5 font-display text-[clamp(2.15rem,4.6vw,3.55rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-white"
            >
              Our
              <br />
              objectives<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.94rem] leading-7 text-slate-300/80">
              Mempersiapkan generasi muda yang memiliki identitas, keterampilan, dan kreativitas untuk
              menghadapi masa depan.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span
                className="absolute -right-2 -top-5 font-display text-[5.6rem] font-extrabold leading-none text-white/[0.055]"
                aria-hidden="true"
              >
                05
              </span>
              <p className="label-kicker text-sky">Kompetensi utama</p>
              <p className="mt-3 max-w-xs font-display text-lg font-bold leading-snug text-white">
                Identitas yang kuat, keterampilan digital, dan kreativitas yang terarah.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-navy-deep">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[0.68rem] font-medium leading-tight text-white/50">
                  Lima tujuan pembelajaran
                  <br />
                  satu arah yang jelas.
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
              Learning outcome
            </span>
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-sky/70">05 tujuan</span>
          </div>
          <ol className="space-y-2.5">
            {OBJECTIVES.map(({ icon: Icon, text }, index) => (
              <Reveal key={text} delay={index * 65}>
                <li className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/35 hover:bg-white/[0.075] sm:gap-5 sm:p-4">
                  <span className="font-mono text-[0.62rem] font-semibold text-sky/45 sm:text-[0.68rem]">
                    0{index + 1}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-navy-soft text-sky transition-colors group-hover:bg-royal group-hover:text-white sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="flex-1 text-[0.83rem] font-medium leading-relaxed text-white/85 sm:text-[0.9rem]">
                    {text}
                  </p>
                  <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:text-accent sm:block" aria-hidden="true" />
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={380}>
            <p className="mt-5 flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.13em] text-white/35">
              <span className="h-1 w-1 rotate-45 bg-accent" aria-hidden="true" />
              Branding School Program · Personal Branding Student
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
