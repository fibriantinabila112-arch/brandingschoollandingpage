import { useState } from "react";
import {
  Building2,
  CalendarDays,
  ChevronDown,
  Clock3,
  GraduationCap,
  Landmark,
  MapPin,
  Presentation,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { ArrowUpRight, Reveal, SectionLabel, btnAccent } from "@/components/ui";

const FACTS = [
  { icon: Building2, label: "Penyelenggara", value: "NEW IDEA INDONESIA" },
  { icon: Landmark, label: "Mitra", value: "BANK RAYA Cabang Sidoarjo" },
  {
    icon: GraduationCap,
    label: "Sasaran",
    value: "Siswa kelas XII atau siswa yang telah memiliki KTP",
  },
  { icon: Clock3, label: "Durasi", value: "± 2,5 jam" },
  { icon: Users, label: "Kapasitas", value: "100–150 siswa setiap gelombang" },
  { icon: Presentation, label: "Metode", value: "Tatap muka di sekolah mitra" },
];

const STEPS = [
  {
    title: "Koordinasi & pengajuan sekolah",
    desc: "Sekolah mitra mengajukan kerja sama melalui formulir resmi pada halaman ini untuk penjajakan kebutuhan program.",
    tag: "Tahap awal",
  },
  {
    title: "Pelaksanaan sesi tatap muka",
    desc: "Kegiatan berlangsung ± 2,5 jam dengan penyampaian materi, diskusi, dan pendampingan langsung kepada siswa.",
    tag: "± 2,5 jam",
  },
  {
    title: "Praktik & pengembangan karya",
    desc: "Siswa mempraktikkan personal branding, menyusun video identitas, dan mengembangkan website portofolio pribadi.",
    tag: "Praktik langsung",
  },
  {
    title: "Hasil karya & sertifikasi",
    desc: "Penyelesaian kegiatan, hasil karya digital siswa, dan e-certificate sesuai ketentuan program.",
    tag: "Output program",
  },
];

const FAQS = [
  {
    q: "Siapa yang dapat mengikuti program ini?",
    a: "Program ini ditujukan bagi siswa kelas XII atau siswa yang telah memiliki KTP. Pelaksanaan kegiatan dilakukan di sekolah mitra dengan kapasitas 100–150 siswa setiap gelombang.",
  },
  {
    q: "Bagaimana cara sekolah mengajukan kerja sama?",
    a: "Sekolah dapat mengisi formulir pengajuan kerja sama sekolah pada bagian Contact di halaman ini. NEW IDEA INDONESIA akan menindaklanjuti pengajuan melalui kontak yang dicantumkan.",
  },
  {
    q: "Apa saja hasil yang diperoleh peserta?",
    a: "Peserta mengikuti pembelajaran literasi keuangan digital, personal branding, dan website portofolio. Hasil program meliputi video personal branding, personal website portfolio, e-certificate, serta kesempatan fasilitasi pembukaan rekening digital BANK RAYA sesuai syarat dan ketentuan.",
  },
  {
    q: "Apakah kegiatan dilaksanakan secara daring?",
    a: "Metode pelaksanaan program adalah tatap muka di sekolah mitra, dengan durasi kegiatan ± 2,5 jam.",
  },
  {
    q: "Apakah pembukaan rekening digital wajib bagi peserta?",
    a: "Fasilitas pembukaan rekening digital merupakan kesempatan yang difasilitasi oleh mitra program. Pelaksanaannya mengikuti persyaratan dan ketentuan yang berlaku dari BANK RAYA.",
  },
  {
    q: "Berapa kapasitas peserta dalam satu gelombang?",
    a: "Kapasitas peserta adalah 100–150 siswa setiap gelombang, dengan pelaksanaan kegiatan di sekolah mitra yang telah dikoordinasikan dengan penyelenggara.",
  },
];

export default function Implementation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="implementation" aria-labelledby="implementation-title" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-shell relative">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="05">Implementation</SectionLabel>
            <h2 id="implementation-title" className="display-title mt-5 uppercase">
              How the
              <br />
              program <span className="text-royal">works</span>
              <span className="text-accent">.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-sm rounded-xl border border-navy/10 bg-[#F8FBFF] p-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-royal" aria-hidden="true" />
                <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.13em] text-navy">
                  Informasi pelaksanaan
                </p>
              </div>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-500">
                Satu sesi tatap muka di sekolah mitra, dirancang untuk 100–150 siswa setiap gelombang.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Fact sheet + photo */}
          <div className="space-y-5">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-[0_20px_50px_-42px_rgba(11,36,80,0.5)]">
                <div className="relative overflow-hidden bg-navy px-5 py-4 text-white">
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sky/80">
                        Program fact sheet
                      </p>
                      <p className="mt-1 font-display text-base font-extrabold">Lembar informasi program</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                </div>
                <dl className="grid divide-y divide-navy/8 sm:grid-cols-2 sm:divide-y-0">
                  {FACTS.map(({ icon: Icon, label, value }, i) => (
                    <div
                      key={label}
                      className={cn(
                        "flex gap-3 p-4 sm:p-5",
                        i < 4 && "sm:border-b sm:border-navy/8",
                        i % 2 === 0 ? "sm:border-r sm:border-navy/8" : "",
                      )}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ice text-royal">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-[0.56rem] font-bold uppercase tracking-[0.15em] text-slate-400">
                          {label}
                        </dt>
                        <dd className="mt-1 text-[0.8rem] font-semibold leading-snug text-navy sm:text-[0.84rem]">
                          {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <div className="flex items-start gap-2 border-t border-navy/8 bg-[#F8FBFF] px-4 py-3 sm:px-5">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal" aria-hidden="true" />
                  <p className="text-[0.68rem] leading-relaxed text-slate-500">
                    Lokasi pelaksanaan berada di sekolah mitra. Detail jadwal dan teknis kegiatan disesuaikan
                    melalui koordinasi dengan penyelenggara.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <figure className="hero-image-zoom relative overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                <img
                  src="/images/dokumentasi-program.jpg"
                  alt="Dokumentasi Program Edukasi Literasi Keuangan Digital dan Personal Branding Siswa di SMK Senopati, Rabu 18 November 2026"
                  width={825}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-[center_32%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-navy-deep/60 px-3 py-1.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-accent" aria-hidden="true" />
                  Dokumentasi kegiatan
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-sky">Ruang belajar</p>
                    <p className="mt-1 max-w-md font-display text-sm font-bold leading-snug text-white">
                      Literasi keuangan digital &amp; personal branding siswa — tatap muka, praktik langsung.
                    </p>
                    <p className="mt-1.5 text-[0.62rem] font-medium text-white/55">
                      SMK Senopati · Rabu, 18 November 2026
                    </p>
                  </div>
                  <a
                    href="#dokumentasi"
                    className="group inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 font-display text-[0.65rem] font-extrabold text-navy transition-colors hover:bg-accent"
                  >
                    Foto &amp; video
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Timeline */}
          <Reveal delay={120}>
            <div className="relative h-full rounded-2xl border border-navy/10 bg-[#F8FBFF] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-navy">
                  Alur pelaksanaan
                </p>
                <span className="rounded-full bg-white px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-royal ring-1 ring-navy/8">
                  4 tahap
                </span>
              </div>
              <div className="relative mt-6">
                <span
                  className="absolute bottom-3 left-[15px] top-2 w-px bg-gradient-to-b from-royal via-sky/70 to-accent/50"
                  aria-hidden="true"
                />
                <ol className="relative space-y-7">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="group relative flex gap-4 sm:gap-5">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-royal bg-white font-display text-[0.66rem] font-extrabold text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                      0{i + 1}
                    </span>
                    <div className="pb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-[0.92rem] font-extrabold leading-tight text-navy">
                          {step.title}
                        </h3>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-[0.1em] text-royal ring-1 ring-royal/15">
                          {step.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[0.8rem] leading-6 text-slate-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {["Personal branding", "Literasi keuangan", "Website portofolio"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-navy/10 bg-white px-2.5 py-2 text-center text-[0.61rem] font-semibold leading-tight text-navy/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-navy p-4">
                <div>
                  <p className="font-display text-[0.8rem] font-extrabold text-white">
                    Siap melaksanakan di sekolah Anda?
                  </p>
                  <p className="mt-0.5 text-[0.66rem] text-white/50">Ajukan kerja sama melalui formulir resmi.</p>
                </div>
                <a
                  href="#contact"
                  aria-label="Ajukan kerja sama sekolah melalui formulir"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-navy transition-transform hover:scale-105"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-20 grid gap-10 border-t border-navy/10 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Pertanyaan Umum</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-navy">
              Hal yang perlu
              <br />
              <span className="text-royal">diketahui</span> sekolah<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[0.88rem] leading-7 text-slate-600">
              Rangkuman informasi pelaksanaan program. Untuk pertanyaan lain, sampaikan melalui formulir
              pengajuan kerja sama.
            </p>
            <a href="#contact" className={cn(btnAccent, "mt-6")}>
              Tanyakan Program
              <ArrowUpRight />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
              {FAQS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q} className={cn(i !== 0 && "border-t border-navy/8")}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[#F8FBFF] sm:px-5"
                      >
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 font-mono text-[0.6rem] font-bold text-accent-deep">
                            0{i + 1}
                          </span>
                          <span
                            className={cn(
                              "font-display text-[0.83rem] font-bold leading-snug transition-colors sm:text-[0.9rem]",
                              isOpen ? "text-royal" : "text-navy",
                            )}
                          >
                            {item.q}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-180 border-royal bg-royal text-white"
                              : "border-navy/12 text-navy/50",
                          )}
                        >
                          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 pl-9 text-[0.8rem] leading-6 text-slate-600 sm:px-5 sm:pl-10">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
