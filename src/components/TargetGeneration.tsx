import { ArrowRight, Palette, Rocket, ScanFace, Smartphone, Sparkles } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/ui";

const TRAITS = [
  { icon: Palette, label: "Kreatif" },
  { icon: Rocket, label: "Inovatif" },
  { icon: ScanFace, label: "Percaya Diri" },
  { icon: Smartphone, label: "Melek Digital" },
];

export default function TargetGeneration() {
  return (
    <section
      id="generation"
      aria-labelledby="generation-title"
      className="relative overflow-hidden bg-ice py-20 sm:py-24 lg:py-28"
    >
      <div className="grid-lines-light pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky/25 blur-[90px]"
        aria-hidden="true"
      />
      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Image collage */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[520px] pb-20 pr-3 sm:pb-14 sm:pr-8">
            <div
              className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-tl-[26px] border-l-2 border-t-2 border-accent/50 sm:block"
              aria-hidden="true"
            />
            <figure className="hero-image-zoom relative overflow-hidden rounded-[26px] border-[6px] border-white shadow-[0_36px_70px_-40px_rgba(11,36,80,0.5)]">
              <img
                src="/images/dokumentasi-02.jpg"
                alt="Siswa sekolah mitra mengikuti kegiatan program dengan antusias"
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[center_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 top-0 bg-gradient-to-b from-navy-deep/75 via-navy-deep/20 to-transparent p-4 pb-10 sm:p-5">
                <p className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-sky">
                  Future generation
                </p>
                <p className="mt-1 max-w-[260px] font-display text-[0.92rem] font-bold leading-snug text-white">
                  Setiap siswa memiliki potensi dan kesempatan untuk berkembang.
                </p>
              </figcaption>
            </figure>

            <figure className="absolute -bottom-2 right-0 z-10 w-[54%] max-w-[250px] overflow-hidden rounded-2xl border-[5px] border-ice shadow-[0_24px_50px_-24px_rgba(11,36,80,0.5)]">
              <div className="relative">
                <img
                  src="/images/dokumentasi-03.jpg"
                  alt="Dokumentasi peserta program menggunakan perangkat digital di sekolah mitra"
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-[center_45%]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-2.5 pb-2 pt-6 text-[0.48rem] font-bold uppercase tracking-[0.12em] text-white">
                  Dokumentasi program
                </span>
              </div>
            </figure>

            <div className="absolute -left-2 bottom-[24%] z-20 flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full border-[6px] border-ice bg-accent text-center text-navy shadow-xl sm:-left-4 sm:bottom-[18%]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span className="mt-0.5 font-display text-[0.58rem] font-extrabold uppercase leading-tight tracking-wide">
                Future
                <br />
                ready
              </span>
            </div>

            <div className="absolute -right-1 bottom-[30%] z-20 hidden rounded-xl border border-navy/10 bg-white px-3.5 py-2.5 shadow-lg sm:block">
              <p className="font-display text-lg font-extrabold leading-none text-navy">100–150</p>
              <p className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.12em] text-slate-400">
                Siswa per gelombang
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionLabel index="07">Target Generation</SectionLabel>
            <h2 id="generation-title" className="display-title mt-5 uppercase">
              Preparing
              <br />
              <span className="text-royal">future</span> generation
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.93rem] leading-7 text-slate-600">
              Kami percaya setiap siswa memiliki potensi dan kesempatan untuk berkembang. Melalui{" "}
              <strong className="font-semibold text-navy">BRANDING SCHOOL PROGRAM</strong>, siswa didorong untuk
              menjadi generasi yang kreatif, inovatif, percaya diri, melek digital, dan siap menghadapi peluang
              masa depan.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
              {TRAITS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="card-lift flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-3.5 shadow-[0_10px_24px_-24px_rgba(11,36,80,0.4)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ice text-royal">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[0.8rem] font-bold text-navy">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-7 flex items-start gap-4 rounded-2xl border border-white bg-white/70 p-5 backdrop-blur-sm">
              <span className="h-full w-1 self-stretch rounded-full bg-accent" aria-hidden="true" />
              <div>
                <p className="font-display text-[0.95rem] font-extrabold leading-snug text-navy">
                  Menyiapkan Generasi Inovatif Masa Depan.
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-6 text-slate-500">
                  Identitas yang baik adalah awal dari peluang yang lebih luas — di pendidikan lanjutan maupun
                  dunia kerja.
                </p>
                <a
                  href="#learning"
                  className="group mt-3 inline-flex items-center gap-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] text-royal transition-colors hover:text-navy"
                >
                  Lihat program belajar
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
