import { BadgeCheck, Globe2, Landmark, Play, ShieldCheck, Video } from "lucide-react";
import { cn } from "@/utils/cn";
import { Reveal, SectionLabel } from "@/components/ui";

/* ---------- Mini visual illustrations (CSS/SVG only) ---------- */
function VideoVisual() {
  return (
    <div className="relative h-[150px] overflow-hidden rounded-xl bg-navy-deep">
      <img
        src="/media/branding-school-01-poster.jpg"
        alt=""
        aria-hidden="true"
        width={608}
        height={1080}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-[center_35%] opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Video preview
      </span>
      <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-royal shadow-lg">
        <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
      </span>
      <div className="absolute inset-x-3 bottom-3">
        <div className="relative h-1 w-full rounded-full bg-white/20">
          <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-accent" />
          <span className="absolute -top-[3px] left-2/3 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-navy-deep bg-white" />
        </div>
        <div className="mt-2 flex items-center justify-between text-[0.48rem] font-semibold uppercase tracking-wider text-white/60">
          <span>My identity</span>
          <span>00:45</span>
        </div>
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-xl border border-navy/10 bg-ice p-3">
      <div className="grid-lines-light absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="relative w-full rounded-lg border border-navy/10 bg-white p-2.5 shadow-md">
        <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-royal/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-sky" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          <span className="ml-1 flex flex-1 items-center gap-1 rounded bg-slate-50 px-1.5 py-0.5 text-[0.44rem] font-medium text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            namasiswa.my.id
          </span>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="flex-1">
            <div className="h-1.5 w-3/4 rounded-full bg-navy" />
            <div className="mt-1 h-1 w-full rounded-full bg-slate-200" />
            <div className="mt-1 h-1 w-2/3 rounded-full bg-slate-200" />
            <div className="mt-2 flex gap-1">
              <span className="h-3.5 w-2/3 rounded bg-royal text-[0.35rem]" />
              <span className="h-3.5 w-1/3 rounded bg-ice" />
            </div>
          </div>
          <div className="h-12 w-9 shrink-0 rounded-md bg-gradient-to-br from-royal to-sky" />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="h-3.5 rounded bg-ice" />
          <div className="h-3.5 rounded bg-[#F4F9FF]" />
          <div className="h-3.5 rounded bg-accent/25" />
        </div>
      </div>
    </div>
  );
}

function CertificateVisual() {
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-xl border border-accent/20 bg-[#FFF9EC] p-4">
      <div className="relative w-full rotate-[-2deg] rounded-md border border-accent/30 bg-white px-3 py-2.5 shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[0.4rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
              Certificate of completion
            </p>
            <div className="mt-1 h-1.5 w-20 rounded-full bg-navy" />
            <div className="mt-1 h-1 w-14 rounded-full bg-slate-200" />
          </div>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent-deep">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="h-1 w-10 rounded bg-slate-200" />
            <div className="mt-0.5 h-0.5 w-8 rounded bg-slate-100" />
          </div>
          <div className="flex items-center gap-1">
            <span className="h-px w-7 bg-slate-200" />
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-royal/10 text-royal">
              <ShieldCheck className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-accent/10" aria-hidden="true" />
    </div>
  );
}

function BankingVisual() {
  return (
    <div className="relative flex h-[150px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-royal via-royal to-navy p-3">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative w-[74%] rounded-xl border border-white/20 bg-white/10 p-2.5 shadow-xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[0.44rem] font-bold uppercase tracking-[0.12em] text-white/80">
            <Landmark className="h-2.5 w-2.5 text-sky" aria-hidden="true" />
            Rekening digital
          </span>
          <span className="h-3 w-4 rounded-[2px] bg-gradient-to-br from-[#FFE0A3] to-accent/70" />
        </div>
        <p className="mt-2 font-display text-[0.58rem] font-bold tracking-[0.18em] text-white/65">
          •••• •••• 2026
        </p>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-[0.38rem] uppercase tracking-wider text-white/45">Saldo</p>
            <p className="font-display text-[0.72rem] font-extrabold text-white">Rp —</p>
          </div>
          <div className="flex gap-1">
            <span className="h-3 w-3 rounded-full bg-accent/80" />
            <span className="h-3 w-3 rounded-full bg-sky/70" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-4 h-14 w-14 rounded-full border-4 border-white/10" aria-hidden="true" />
    </div>
  );
}

const BENEFITS = [
  {
    icon: Video,
    no: "01",
    title: "Video Personal Branding",
    desc: "Siswa memiliki video yang memperkenalkan identitas dan potensi dirinya.",
    tag: "Hasil karya",
    visual: <VideoVisual />,
  },
  {
    icon: Globe2,
    no: "02",
    title: "Personal Website Portfolio",
    desc: "Siswa memiliki website pribadi untuk menampilkan profil dan karya digital.",
    tag: "Identitas digital",
    visual: <WebsiteVisual />,
  },
  {
    icon: BadgeCheck,
    no: "03",
    title: "E-Certificate",
    desc: "Peserta memperoleh sertifikat elektronik setelah mengikuti kegiatan sesuai ketentuan program.",
    tag: "Sertifikasi",
    visual: <CertificateVisual />,
  },
  {
    icon: Landmark,
    no: "04",
    title: "Digital Banking Facilitation",
    desc: "Kesempatan fasilitasi pembukaan rekening digital BANK RAYA secara gratis sesuai persyaratan dan ketentuan yang berlaku.",
    tag: "Fasilitas mitra",
    visual: <BankingVisual />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-title" className="relative overflow-hidden bg-[#F6FAFF] py-20 sm:py-24 lg:py-28">
      <div className="grid-lines-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-shell relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="04">Program Benefits</SectionLabel>
            <h2 id="benefits-title" className="display-title mt-5 uppercase">
              What will
              <br />
              you <span className="text-royal">get</span>
              <span className="text-accent">?</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-md text-[0.92rem] leading-7 text-slate-600">
              Hasil nyata yang dibawa pulang peserta: identitas digital, karya yang dapat ditunjukkan, serta
              pengalaman langsung memanfaatkan teknologi dan layanan keuangan digital.
            </p>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, no, title, desc, tag, visual }, i) => (
            <Reveal key={no} delay={i * 80} className="h-full">
              <article className="card-lift group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-3.5 shadow-[0_14px_36px_-30px_rgba(11,36,80,0.4)]">
                <div className="transition-transform duration-500 group-hover:-translate-y-0.5">{visual}</div>
                <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
                  <div className="flex items-center justify-between">
                    <span className={cn("font-mono text-[0.62rem] font-bold tracking-widest", "text-accent-deep")}>
                      {no}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ice text-royal">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-[0.94rem] font-extrabold uppercase leading-[1.2] tracking-[-0.01em] text-navy">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.78rem] leading-6 text-slate-600">{desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-navy/8 pt-3">
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {tag}
                    </span>
                    <span className="h-1 w-6 rounded-full bg-accent transition-all duration-300 group-hover:w-10" aria-hidden="true" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-6 flex items-start gap-2 rounded-xl border border-navy/8 bg-white/70 px-4 py-3 text-[0.7rem] leading-relaxed text-slate-500">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal" aria-hidden="true" />
            Fasilitasi pembukaan rekening digital merupakan kesempatan dari mitra program dan mengikuti
            persyaratan serta ketentuan yang berlaku. E-certificate diberikan setelah peserta mengikuti kegiatan
            sesuai ketentuan program.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
