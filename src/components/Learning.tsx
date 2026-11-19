import { useState } from "react";
import { Check, ChevronDown, MonitorSmartphone, Wallet, UserRoundCheck, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { Reveal, SectionLabel, ArrowUpRight, btnNavy } from "@/components/ui";

const CARDS = [
  {
    no: "01",
    title: "Literasi Keuangan Digital",
    icon: Wallet,
    image: "/media/branding-school-01-poster.jpg",
    alt: "Dokumentasi siswa memanfaatkan smartphone untuk literasi keuangan digital",
    description:
      "Meningkatkan pemahaman siswa mengenai literasi keuangan digital dan pemanfaatan layanan keuangan secara bijak.",
    details: [
      "Memahami layanan keuangan digital dan manfaatnya",
      "Mengelola kebutuhan serta pengeluaran pribadi secara bijak",
      "Memanfaatkan transaksi digital dengan aman dan bertanggung jawab",
    ],
    tags: ["Digital banking", "Financial literacy", "Smart spending"],
    accent: "from-royal to-sky",
    numberBg: "bg-royal",
    focus: "center 62%",
  },
  {
    no: "02",
    title: "Personal Branding Siswa",
    icon: UserRoundCheck,
    image: "/media/branding-school-02-poster.jpg",
    alt: "Dokumentasi pemaparan materi personal branding siswa di sekolah mitra",
    description:
      "Membantu siswa mengenali potensi diri, membangun karakter, dan memperkenalkan identitas diri melalui media digital.",
    details: [
      "Mengenali potensi, minat, dan kekuatan diri",
      "Membangun karakter serta kepercayaan diri",
      "Menyusun identitas dan video personal branding",
    ],
    tags: ["Content creation", "Public speaking", "Video production"],
    accent: "from-accent to-[#FFD08A]",
    numberBg: "bg-accent text-navy",
    focus: "center 38%",
  },
  {
    no: "03",
    title: "Website Portofolio Siswa",
    icon: MonitorSmartphone,
    image: "/images/dokumentasi-03.jpg",
    alt: "Dokumentasi peserta program menggunakan perangkat digital di sekolah mitra",
    description:
      "Mengajarkan siswa membuat website portofolio pribadi sebagai media untuk menampilkan profil, kemampuan, dan karya digital.",
    details: [
      "Memahami struktur dan fungsi website portofolio",
      "Menampilkan profil, kemampuan, dan karya digital",
      "Menyiapkan portofolio profesional sejak dini",
    ],
    tags: ["Website design", "Laptop practice", "Creative workspace"],
    accent: "from-navy to-royal",
    numberBg: "bg-navy",
    focus: "center 72%",
  },
];

export default function Learning() {
  const [open, setOpen] = useState<string | null>("02");

  return (
    <section id="learning" aria-labelledby="learning-title" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-ice/70 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <SectionLabel index="02">Learning Program</SectionLabel>
            <h2 id="learning-title" className="display-title mt-5 uppercase">
              What will
              <br />
              students <span className="text-royal">learn</span>
              <span className="text-accent">?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="lg:pb-1">
              <p className="max-w-md text-[0.92rem] leading-7 text-slate-600">
                Tiga fondasi kompetensi yang dibangun dalam satu sesi pembelajaran terpadu — dari cara mengelola
                keuangan hingga tampil dengan identitas digital yang kuat.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.18em] text-navy/40">
                  01 — 03
                </span>
                <span className="h-px flex-1 bg-navy/10" aria-hidden="true" />
                <span className="rounded-full bg-ice px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-royal">
                  3 pilar belajar
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {CARDS.map((card, i) => {
            const isOpen = open === card.no;
            const Icon = card.icon;
            return (
              <Reveal key={card.no} delay={i * 90} className="h-full">
                <article
                  className={cn(
                    "card-lift group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-colors",
                    isOpen ? "border-royal/35 shadow-[0_24px_50px_-32px_rgba(11,36,80,0.5)]" : "border-navy/10",
                  )}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ice">
                    <img
                      src={card.image}
                      alt={card.alt}
                      width={900}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: card.focus }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
                    <span
                      className={cn(
                        "absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl font-display text-[0.78rem] font-extrabold shadow-lg",
                        card.numberBg,
                        card.no === "02" ? "" : "text-white",
                      )}
                    >
                      {card.no}
                    </span>
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="absolute inset-x-4 bottom-3 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/25 bg-navy-deep/40 px-2 py-0.5 text-[0.52rem] font-semibold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-royal">
                      Card {card.no}
                    </p>
                    <h3 className="mt-2 font-display text-[1.08rem] font-extrabold uppercase leading-[1.15] tracking-[-0.01em] text-navy">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.83rem] leading-6 text-slate-600">{card.description}</p>

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : card.no)}
                      aria-expanded={isOpen}
                      aria-controls={`learning-panel-${card.no}`}
                      className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-navy/10 bg-[#F8FBFF] px-3 py-2.5 text-left font-display text-[0.72rem] font-bold text-navy transition-colors hover:border-royal/30 hover:bg-ice"
                    >
                      {isOpen ? "Tutup materi inti" : "Lihat materi inti"}
                      <ChevronDown
                        className={cn("h-4 w-4 text-royal transition-transform duration-300", isOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={`learning-panel-${card.no}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-2.5 pt-4">
                          {card.details.map((detail) => (
                            <li key={detail} className="flex gap-2.5">
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                              </span>
                              <span className="text-[0.77rem] leading-[1.55] text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-navy/8 pt-4">
                      <span className="text-[0.56rem] font-bold uppercase tracking-[0.14em] text-navy/35">
                        Modul pembelajaran
                      </span>
                      <span
                        className={cn("h-1.5 w-12 rounded-full bg-gradient-to-r", card.accent)}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy/10 bg-[#F8FBFF] p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-sky">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold text-navy">
                  Dari pemahaman menjadi karya digital yang nyata.
                </p>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-slate-500">
                  Siswa diarahkan untuk menghasilkan video personal branding dan website portofolio pribadi.
                </p>
              </div>
            </div>
            <a href="#contact" className={cn(btnNavy, "w-full shrink-0 sm:w-auto")}>
              Ajukan Program
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
