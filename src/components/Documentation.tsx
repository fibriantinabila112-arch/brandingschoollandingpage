import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, ImageIcon, Play, Video, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Reveal, SectionLabel } from "@/components/ui";

type MediaKind = "photo" | "video";

interface MediaItem {
  kind: MediaKind;
  src: string;
  poster?: string;
  title: string;
  caption: string;
  meta: string;
  alt: string;
  className: string;
}

const MEDIA: MediaItem[] = [
  {
    kind: "photo",
    src: "/images/dokumentasi-01.jpg",
    title: "Program edukasi di sekolah mitra",
    caption:
      "Siswa mengikuti Program Edukasi Literasi Keuangan Digital & Personal Branding Siswa bersama NEW IDEA INDONESIA dan BANK RAYA.",
    meta: "SMK Senopati · 18 November 2026",
    alt: "Ratusan siswa duduk mengikuti program edukasi dengan banner Literasi Keuangan Digital dan Personal Branding Siswa",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    kind: "video",
    src: "/media/branding-school-01.mp4",
    poster: "/media/branding-school-01-poster.jpg",
    title: "Praktik literasi keuangan digital",
    caption:
      "Peserta mempraktikkan pemanfaatan layanan keuangan digital melalui perangkat masing-masing selama sesi berlangsung.",
    meta: "Video kegiatan · 00:03",
    alt: "Siswa mempraktikkan penggunaan smartphone untuk literasi keuangan digital",
    className: "lg:row-span-2",
  },
  {
    kind: "video",
    src: "/media/branding-school-02.mp4",
    poster: "/media/branding-school-02-poster.jpg",
    title: "Materi personal branding siswa",
    caption:
      "Pemaparan materi personal branding dan literasi keuangan digital secara tatap muka di sekolah mitra.",
    meta: "Video kegiatan · 00:06",
    alt: "Pemateri menyampaikan materi personal branding di depan siswa",
    className: "lg:row-span-2",
  },
  {
    kind: "photo",
    src: "/images/dokumentasi-03.jpg",
    title: "Peserta kegiatan",
    caption:
      "Siswa kelas XII mengikuti sesi dengan antusias, termasuk saat mengoperasikan perangkat digital masing-masing.",
    meta: "Peserta · 100–150 siswa",
    alt: "Para siswa duduk di aula sambil memegang dan melihat perangkat digital masing-masing",
    className: "sm:col-span-2 lg:col-span-2",
  },
  {
    kind: "photo",
    src: "/images/dokumentasi-hall.jpg",
    title: "Suasana pelaksanaan program",
    caption:
      "Pelaksanaan program secara tatap muka di sekolah mitra, didukung perangkat presentasi dan pendampingan langsung.",
    meta: "Sekolah mitra · Sidoarjo",
    alt: "Suasana aula sekolah mitra saat kegiatan program edukasi berlangsung",
    className: "sm:col-span-2 lg:col-span-2",
  },
];

/**
 * Remote copies of the official videos act as a resilience fallback if the
 * locally hosted files are unavailable (for example after a deploy that drops
 * binary assets). Playback stays on the page either way.
 */
const REMOTE_VIDEO_FALLBACK: Record<string, string> = {
  "/media/branding-school-01.mp4":
    "https://lh3.googleusercontent.com/pw/AP1GczOtsXo-KrTeKsS4nS96nPdRehDg6wrnWUIlhHMWvMB1Q1Wv6R9I0M6xTZqTKzw-fv5vQM4aComBcYVql_2YDtEmxukovdWNb447VG9Onq2NeTF3uf4=dv",
  "/media/branding-school-02.mp4":
    "https://lh3.googleusercontent.com/pw/AP1GczMIRTgdfAGE1ZLxqUvfMHzROczGoQkN-bE1G7Wy94tKzcBqkVCeD6T7jFOtZ_KJ1-zsHWHEXmOpzBy_Icrql8qjClUf4LhI2bUW6wfJiwscOiBpTWI=dv",
};

const FILTERS: { id: "all" | MediaKind; label: string; icon: typeof ImageIcon }[] = [
  { id: "all", label: "Semua Media", icon: Expand },
  { id: "photo", label: "Foto", icon: ImageIcon },
  { id: "video", label: "Video", icon: Video },
];

export default function Documentation() {
  const [filter, setFilter] = useState<"all" | MediaKind>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const visible = MEDIA.filter((item) => filter === "all" || item.kind === filter);
  const active = activeIndex !== null ? visible[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  const pauseInlineVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => video?.pause());
    setPlayingSrc(null);
  }, []);

  const playInline = useCallback((item: MediaItem) => {
    const target = videoRefs.current[item.src];
    if (!target) return;
    Object.entries(videoRefs.current).forEach(([src, video]) => {
      if (src !== item.src) video?.pause();
    });
    target.muted = false;
    const attempt = target.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        // Autoplay policies can still block playback; native controls stay available.
        setPlayingSrc(null);
      });
    }
    setPlayingSrc(item.src);
  }, []);

  const openLightbox = useCallback(
    (index: number) => {
      pauseInlineVideos();
      setActiveIndex(index);
    },
    [pauseInlineVideos],
  );

  useEffect(() => {
    pauseInlineVideos();
  }, [filter, pauseInlineVideos]);
  const step = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, step]);

  return (
    <section
              id="dokumentasi"
      aria-labelledby="dokumentasi-title"
      className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-royal/25 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="container-shell relative">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="06" tone="light">
              Program Documentation
            </SectionLabel>
            <h2
              id="dokumentasi-title"
              className="mt-5 font-display text-[clamp(2.05rem,4.6vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-white"
            >
              Documentation
              <br />
              <span className="text-sky">in action</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-lg text-[0.9rem] leading-7 text-slate-300/80">
              Dokumentasi kegiatan Program Edukasi Literasi Keuangan Digital &amp; Personal Branding Siswa di
              sekolah mitra, Rabu 18 November 2026.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter dokumentasi">
                {FILTERS.map(({ id, label, icon: Icon }) => {
                  const isActive = filter === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setFilter(id);
                        setActiveIndex(null);
                      }}
                      aria-pressed={isActive}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-display text-[0.68rem] font-bold uppercase tracking-[0.1em] transition-colors",
                        isActive
                          ? "border-accent bg-accent text-navy-deep"
                          : "border-white/15 bg-white/[0.04] text-white/60 hover:border-sky/40 hover:text-white",
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white/35">
                <span className="h-1 w-1 rotate-45 bg-accent" aria-hidden="true" />
                {visible.length} media · dokumentasi resmi
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-9 grid auto-rows-[230px] grid-flow-dense grid-cols-1 gap-3 sm:auto-rows-[220px] sm:grid-cols-2 lg:auto-rows-[248px] lg:grid-cols-4 lg:gap-4">
            {visible.map((item, index) => {
              if (item.kind === "video") {
                const isPlaying = playingSrc === item.src;
                return (
                  <div
                    key={item.src}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border bg-black text-left",
                      "transition-all duration-500",
                      isPlaying
                        ? "border-accent/70 shadow-[0_28px_60px_-30px_rgba(245,158,11,0.35)]"
                        : "border-white/12 hover:border-sky/45 hover:shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)]",
                      item.className,
                      isPlaying && "max-lg:row-span-2 max-sm:row-span-3",
                    )}
                  >
                    <video
                      ref={(node) => {
                        videoRefs.current[item.src] = node;
                      }}
                      src={item.src}
                      poster={item.poster}
                      preload="metadata"
                      playsInline
                      controls
                      onPlay={() => setPlayingSrc(item.src)}
                      onEnded={() => setPlayingSrc(null)}
                      onError={(event) => {
                        const video = event.currentTarget;
                        const remote = REMOTE_VIDEO_FALLBACK[item.src];
                        if (!remote || video.dataset.fallback === "remote") return;
                        video.dataset.fallback = "remote";
                        video.src = remote;
                        video.load();
                      }}
                      aria-label={item.alt}
                      className={cn(
                        "h-full w-full bg-black",
                        isPlaying ? "object-contain" : "object-cover",
                      )}
                    >
                      Peramban Anda tidak mendukung pemutaran video.
                    </video>

                    {!isPlaying && (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent opacity-90" />
                        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-deep/65 px-2.5 py-1 text-[0.53rem] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                          <Video className="h-3 w-3 text-accent" aria-hidden="true" />
                          Video
                        </span>
                        <button
                          type="button"
                          onClick={() => playInline(item)}
                          aria-label={`Putar video langsung di halaman: ${item.title}`}
                          className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/95 text-royal shadow-xl transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 h-5 w-5 fill-current" aria-hidden="true" />
                          </span>
                        </button>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
                          <p className="font-display text-[0.86rem] font-extrabold leading-snug text-white sm:text-[0.92rem]">
                            {item.title}
                          </p>
                          <p className="mt-1 flex items-center justify-between gap-2">
                            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-sky/75">
                              {item.meta}
                            </span>
                            <span className="flex items-center gap-1 text-[0.52rem] font-bold uppercase tracking-[0.1em] text-white/70">
                              <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                              Putar di sini
                            </span>
                          </p>
                        </div>
                      </>
                    )}

                    {isPlaying && (
                      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start gap-2 bg-gradient-to-b from-black/90 via-black/55 to-transparent p-3 pb-8">
                        <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[0.48rem] font-extrabold uppercase tracking-[0.1em] text-navy-deep">
                          <span className="h-1 w-1 rounded-full bg-navy-deep" aria-hidden="true" />
                          Sedang diputar
                        </span>
                        <span className="font-display text-[0.72rem] font-bold leading-snug text-white sm:text-[0.78rem]">
                          {item.title}
                        </span>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      aria-label={`Buka ${item.title} di layar besar`}
                      title="Perbesar video"
                      className={cn(
                        "absolute right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-navy-deep/75 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-navy-deep",
                        isPlaying ? "bottom-14" : "top-2.5",
                      )}
                    >
                      <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                );
              }

              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Perbesar foto: ${item.title}`}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-white/12 bg-navy text-left",
                    "transition-all duration-500 hover:border-sky/45 hover:shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)]",
                    item.className,
                  )}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent opacity-90" />

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-deep/65 px-2.5 py-1 text-[0.53rem] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                    <ImageIcon className="h-3 w-3 text-sky" aria-hidden="true" />
                    Foto
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-4">
                    <span className="block font-display text-[0.86rem] font-extrabold leading-snug text-white sm:text-[0.92rem]">
                      {item.title}
                    </span>
                    <span className="mt-1 flex items-center justify-between gap-2">
                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-sky/75">
                        {item.meta}
                      </span>
                      <Expand className="h-3.5 w-3.5 shrink-0 text-white/40 transition-colors group-hover:text-accent" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-[0.7rem] leading-relaxed text-white/45">
            <Video className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" aria-hidden="true" />
            Video dapat diputar langsung di halaman ini dengan menekan tombol putar. Gunakan ikon perbesar
            untuk memutar video di layar besar, atau klik foto untuk melihatnya lebih besar.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-display text-[0.86rem] font-bold text-white">{active.title}</p>
                <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-sky/70">
                  {active.meta}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Media sebelumnya"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-sky/50 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Media berikutnya"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-sky/50 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Tutup dokumentasi"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-navy transition-transform hover:scale-105"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex max-h-[70vh] items-center justify-center bg-black">
              {active.kind === "video" ? (
                <video
                  key={active.src}
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-full object-contain"
                >
                  Peramban Anda tidak mendukung pemutaran video.
                </video>
              ) : (
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[70vh] w-full object-contain"
                />
              )}
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-[0.82rem] leading-6 text-slate-300/85">{active.caption}</p>
              <p className="mt-2 flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white/35">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                NEW IDEA INDONESIA × BANK RAYA · SMK Senopati
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
