import { ArrowDown, Clock3, MapPin, Sparkles, Users, Play, Check, Globe2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { ArrowUpRight, ProgramTag, btnAccent, btnGhostLight } from "@/components/ui";

const HERO_STATS = [
  { icon: Clock3, value: "± 2,5 Jam", label: "Durasi kegiatan" },
  { icon: Users, value: "100–150", label: "Peserta per gelombang" },
  { icon: MapPin, value: "Sekolah Mitra", label: "Lokasi pelaksanaan" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy text-white">
      {/* Visual background */}
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-[-5%] h-[520px] w-[520px] rounded-full border border-sky/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 right-[4%] h-[360px] w-[360px] rounded-full border border-sky/10" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-sky/25 to-transparent" aria-hidden="true" />

      <div className="container-shell relative z-10 grid items-center gap-14 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-24 lg:pt-16">
        {/* ---------------- Copy ---------------- */}
        <div>
          <ProgramTag tone="light" />

          <div className="mt-7 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-display text-[0.72rem] font-bold uppercase leading-tight tracking-[0.19em] text-sky">
              Branding School Program
              <span className="mt-1 block text-[0.6rem] tracking-[0.14em] text-white/45">
                New Idea Indonesia <span className="text-accent">×</span> Bank Raya Cabang Sidoarjo
              </span>
            </p>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,6.9vw,4.65rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-white">
            <span className="block">Build your</span>
            <span className="block bg-gradient-to-r from-sky via-[#a9d8ff] to-white bg-clip-text text-transparent">
              identity<span className="text-accent">.</span>
            </span>
            <span className="block pt-1.5">Create your</span>
            <span className="block">
              future<span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-display text-base font-semibold leading-snug text-white sm:text-lg">
            Bangun Potensimu. <span className="text-sky">Tunjukkan Identitasmu.</span> Siapkan Masa Depanmu.
          </p>

          <p className="mt-4 max-w-xl text-[0.9rem] leading-7 text-slate-200/90 sm:text-[0.95rem]">
            <strong className="font-semibold text-white">BRANDING SCHOOL PROGRAM</strong> hadir untuk membekali
            generasi muda dengan keterampilan personal branding, literasi keuangan digital, dan teknologi kreatif
            agar siap menghadapi tantangan masa depan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#learning" className={cn(btnAccent, "w-full sm:w-auto")}>
              Jelajahi Program
              <ArrowUpRight />
            </a>
            <a href="#about" className={cn(btnGhostLight, "w-full sm:w-auto")}>
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Pelajari Selengkapnya
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-0 border-y border-white/10 bg-white/[0.03]">
            {HERO_STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={cn(
                  "px-2 py-4 sm:px-5",
                  i !== HERO_STATS.length - 1 && "border-r border-white/10",
                )}
              >
                <Icon className="mb-2 h-4 w-4 text-sky" aria-hidden="true" />
                <p className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
                  {value}
                </p>
                <p className="mt-1 text-[0.58rem] font-medium uppercase leading-tight tracking-[0.11em] text-white/45 sm:text-[0.62rem]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Visual ---------------- */}
        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
          <div className="relative h-[470px] sm:h-[540px] lg:h-[590px]">
            {/* decorative geometry */}
            <div
              className="absolute -right-2 top-8 hidden h-24 w-24 rounded-full border border-dashed border-sky/30 sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -left-3 bottom-16 h-16 w-16 rounded-full bg-accent/15 blur-xl"
              aria-hidden="true"
            />
            <span
              className="absolute -left-1 top-0 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-sky/50 [writing-mode:vertical-rl]"
              aria-hidden="true"
            >
              Future generation · 01
            </span>

            {/* main photograph */}
            <figure className="hero-image-zoom absolute right-0 top-3 z-10 h-[80%] w-[79%] overflow-hidden rounded-[26px] border border-white/15 bg-white/5 p-1.5 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.65)]">
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <img
                  src="/images/dokumentasi-02.jpg"
                  alt="Siswa sekolah mitra mengikuti sesi program dengan perangkat digital masing-masing"
                  width={900}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_38%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/15 to-transparent" />
                <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-navy-deep/55 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/85">
                    Sekolah mitra
                  </span>
                </span>
                <span className="absolute right-3 top-4 rounded-full border border-white/20 bg-navy-deep/55 px-2.5 py-1.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
                  01 / Future
                </span>
                <figcaption className="absolute inset-x-0 top-16 px-4">
                  <p className="max-w-[210px] font-display text-[0.8rem] font-bold leading-snug text-white sm:max-w-[240px] sm:text-[0.9rem]">
                    Masa depan dimulai dari identitas yang dibangun hari ini.
                  </p>
                  <p className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-sky/85">
                    Personal branding · Literasi digital
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* floating: personal branding */}
            <div className="animate-float absolute -left-1 top-0 z-30 w-[52%] max-w-[190px] rounded-2xl border border-white/50 bg-white p-3.5 text-navy shadow-[0_24px_50px_-20px_rgba(2,10,25,0.65)] sm:left-0 sm:w-[54%] sm:p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ice text-royal">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-[0.68rem] font-extrabold leading-none">Personal Branding</p>
                  <p className="mt-1 text-[0.55rem] uppercase tracking-wider text-slate-400">Identity building</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-royal to-sky" />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[0.52rem] font-semibold text-slate-400">
                <span>Potensi diri</span>
                <span className="text-royal">82%</span>
              </div>
            </div>

            {/* floating: official documentation video */}
            <a
              href="#dokumentasi"
              aria-label="Lihat dokumentasi video kegiatan program"
              className="animate-float-alt group absolute -left-1 bottom-4 z-30 block w-[41%] max-w-[165px] sm:left-2"
            >
              <div className="overflow-hidden rounded-2xl border-[3px] border-royal/70 bg-navy-soft shadow-[0_24px_45px_-18px_rgba(2,10,25,0.7)] transition-colors group-hover:border-accent">
                <div className="relative aspect-[4/5]">
                  <img
                    src="/media/branding-school-01-poster.jpg"
                    alt="Dokumentasi video kegiatan literasi keuangan digital menggunakan smartphone"
                    width={608}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-royal shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  </span>
                  <span className="absolute right-1.5 top-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[0.42rem] font-extrabold uppercase tracking-[0.1em] text-navy-deep">
                    Video
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-2.5">
                    <p className="text-[0.47rem] font-bold uppercase tracking-[0.13em] text-sky">Dokumentasi</p>
                    <p className="text-[0.62rem] font-bold leading-tight text-white">Kegiatan program</p>
                  </div>
                </div>
              </div>
            </a>

            {/* floating: portfolio website */}
            <div className="absolute -right-1 bottom-0 z-40 w-[58%] max-w-[225px] rounded-xl border border-white/60 bg-white p-3 text-navy shadow-[0_26px_50px_-22px_rgba(2,10,25,0.7)] sm:right-0">
              <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A80]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFD180]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#B9F6CA]" />
                <span className="ml-1 flex flex-1 items-center gap-1 truncate rounded bg-slate-50 px-1.5 py-1 text-[0.48rem] font-medium text-slate-400">
                  <Globe2 className="h-2 w-2 text-royal" aria-hidden="true" />
                  portofolio.siswa
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky font-display text-[0.6rem] font-extrabold text-white">
                  N
                </span>
                <div className="flex-1">
                  <div className="h-1.5 w-3/4 rounded-full bg-navy/80" />
                  <div className="mt-1 h-1 w-1/2 rounded-full bg-slate-200" />
                </div>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1">
                <div className="h-5 rounded bg-ice" />
                <div className="h-5 rounded bg-royal/15" />
                <div className="h-5 rounded bg-accent/20" />
              </div>
              <p className="mt-1.5 text-[0.45rem] font-bold uppercase tracking-[0.11em] text-slate-400">
                Personal website portfolio
              </p>
            </div>

            {/* floating: duration badge */}
            <div className="absolute right-[2%] top-[42%] z-20 hidden h-[74px] w-[74px] flex-col items-center justify-center rounded-full border-[5px] border-navy bg-accent text-navy shadow-xl sm:flex">
              <span className="font-display text-lg font-extrabold leading-none">±2,5</span>
              <span className="text-[0.5rem] font-bold uppercase tracking-[0.12em]">Jam</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 pl-1 sm:mt-3">
            <p className="hidden max-w-[190px] text-[0.6rem] leading-relaxed text-white/40 sm:block">
              Belajar langsung, berkarya nyata, dan tampil percaya diri di dunia digital.
            </p>
            <a
              href="#partnership"
              className="group flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-sky"
            >
              Kolaborasi
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-sky/60">
                <ArrowDown className="h-3 w-3" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
