import { Clock3, MapPin, Sparkles, Users } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/ui";

const STATS = [
  { icon: Clock3, value: "± 2,5 Jam", label: "Durasi Kegiatan" },
  { icon: Users, value: "100–150", label: "Peserta Setiap Gelombang" },
  { icon: MapPin, value: "Sekolah Mitra", label: "Lokasi Pelaksanaan" },
];

const HIGHLIGHTS = ["Edukatif", "Praktik langsung", "Karya digital"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-[#F6FAFF] py-20 sm:py-24 lg:py-28">
      <div className="grid-lines-light pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-sky/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 xl:gap-20">
          {/* Image composition */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[540px] pb-16 pr-4 sm:pr-8">
              <div
                className="absolute -left-3 top-8 hidden h-[85%] w-[92%] rounded-[32px] border-2 border-accent/45 sm:block"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute -right-2 -top-4 hidden grid-cols-4 gap-1.5 sm:grid" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-navy/25" />
                ))}
              </div>

              <figure className="hero-image-zoom relative overflow-hidden rounded-[26px] border border-white bg-white p-2 shadow-[0_36px_70px_-40px_rgba(11,36,80,0.55)]">
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src="/images/dokumentasi-01.jpg"
                    alt="Siswa mengikuti Program Edukasi Literasi Keuangan Digital dan Personal Branding Siswa di sekolah mitra"
                    width={1400}
                    height={1050}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[5/4] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <MapPin className="h-3 w-3 text-royal" aria-hidden="true" />
                    <span className="text-[0.58rem] font-bold uppercase tracking-[0.13em] text-navy">
                      Tatap muka di sekolah
                    </span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {HIGHLIGHTS.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.52rem] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                      Dokumentasi 2026
                    </span>
                  </div>
                </div>
              </figure>

              {/* Floating duration card */}
              <div className="animate-float absolute -bottom-8 right-0 z-10 w-[62%] max-w-[250px] rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_24px_50px_-28px_rgba(11,36,80,0.5)] sm:right-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ice text-royal">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-[0.72rem] font-extrabold leading-tight text-navy">
                      Dari materi menjadi karya.
                    </p>
                    <p className="mt-0.5 text-[0.6rem] leading-relaxed text-slate-500">
                      Identitas dan portofolio digital sejak dini.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 bottom-24 z-10 hidden rounded-xl bg-navy px-4 py-3 text-white shadow-xl sm:block">
                <p className="font-display text-lg font-extrabold leading-none">± 2,5</p>
                <p className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.15em] text-sky">Jam kegiatan</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel index="01">About Program</SectionLabel>
              <h2 id="about-title" className="display-title mt-5 uppercase">
                About <span className="text-royal">Branding School</span>
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-4 font-display text-[0.92rem] font-bold leading-snug text-royal">
                Personal Branding Student: Menyiapkan Generasi Inovatif Masa Depan!
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-5 space-y-4 text-[0.92rem] leading-7 text-slate-600">
                <p>
                  <strong className="font-semibold text-navy">BRANDING SCHOOL PROGRAM</strong> merupakan program
                  edukasi dan pengembangan potensi siswa yang diinisiasi oleh{" "}
                  <strong className="font-semibold text-navy">NEW IDEA INDONESIA</strong> bekerja sama dengan{" "}
                  <strong className="font-semibold text-navy">BANK RAYA</strong>. Program ini bertujuan membekali
                  generasi muda dengan kemampuan membangun personal branding, meningkatkan literasi keuangan
                  digital, serta memanfaatkan teknologi untuk mengembangkan potensi dan peluang masa depan.
                </p>
                <p>
                  Melalui pendekatan edukatif dan praktik langsung, siswa tidak hanya mendapatkan materi, tetapi
                  juga diarahkan untuk menghasilkan karya digital yang dapat digunakan sebagai identitas dan
                  portofolio profesional sejak dini.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="card-lift rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_12px_30px_-26px_rgba(11,36,80,0.45)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ice text-royal">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-3 font-display text-[1.05rem] font-extrabold leading-tight tracking-tight text-navy">
                      {value}
                    </p>
                    <p className="mt-1 text-[0.63rem] font-medium uppercase leading-snug tracking-[0.09em] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy/10 pt-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-navy/40">
                  Fokus program
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {["Personal branding", "Literasi keuangan digital", "Website portofolio"].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-[0.73rem] font-semibold text-navy">
                      <span className="h-1 w-1 rotate-45 bg-accent" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
