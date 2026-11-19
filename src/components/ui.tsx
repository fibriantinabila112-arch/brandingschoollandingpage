import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={cn("reveal", shown && "is-visible", className)} style={style}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section label                                                       */
/* ------------------------------------------------------------------ */
export function SectionLabel({
  index,
  children,
  tone = "dark",
  className,
}: {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("label-kicker", tone === "light" ? "text-sky" : "text-royal", className)}>
      <span className="h-2 w-2 rounded-[2px] bg-accent" aria-hidden="true" />
      <span>{children}</span>
      {index && (
        <>
          <span className={cn("h-px w-7", tone === "light" ? "bg-white/25" : "bg-navy/15")} aria-hidden="true" />
          <span className={cn("font-mono text-[0.65rem] tracking-[0.12em]", tone === "light" ? "text-white/40" : "text-navy/35")}>
            {index}
          </span>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Brand lockup — official logos only, unchanged                       */
/* ------------------------------------------------------------------ */
type LogoSize = "xs" | "sm" | "md" | "lg";

const tilePadding: Record<LogoSize, string> = {
  xs: "px-1.5 py-1 rounded-md",
  sm: "px-2 py-1.5 rounded-lg",
  md: "px-3 py-2 rounded-xl",
  lg: "px-4 py-3 sm:px-5 sm:py-4 rounded-2xl",
};

const newIdeaHeight: Record<LogoSize, string> = {
  xs: "h-3.5",
  sm: "h-5 sm:h-6",
  md: "h-7",
  lg: "h-8 sm:h-11",
};

const bankRayaHeight: Record<LogoSize, string> = {
  xs: "h-6",
  sm: "h-8 sm:h-10",
  md: "h-12",
  lg: "h-16 sm:h-24",
};

const crossSize: Record<LogoSize, string> = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
};

export function BrandLockup({
  size = "sm",
  tone = "light",
  className,
}: {
  size?: LogoSize;
  tone?: "light" | "dark";
  className?: string;
}) {
  const tileClass = cn(
    "bg-white ring-1 ring-navy/10 shadow-sm flex items-center justify-center",
    tilePadding[size],
  );
  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      <div className={tileClass}>
        <img
          src="/logos/new-idea-indonesia.png"
          alt="Logo NEW IDEA INDONESIA"
          width={1200}
          height={384}
          loading="eager"
          decoding="async"
          className={cn("w-auto object-contain", newIdeaHeight[size])}
        />
      </div>
      <span
        aria-hidden="true"
        className={cn(
          "font-display font-semibold",
          crossSize[size],
          tone === "dark" ? "text-white/45" : "text-navy/35",
        )}
      >
        ×
      </span>
      <div className={tileClass}>
        <img
          src="/logos/bank-raya.png"
          alt="Logo BANK RAYA Cabang Sidoarjo"
          width={1200}
          height={800}
          loading="eager"
          decoding="async"
          className={cn("w-auto object-contain", bankRayaHeight[size])}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */
export const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-xl font-display text-sm font-bold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

export const btnAccent = cn(
  buttonBase,
  "bg-accent px-5 py-3.5 text-navy-deep shadow-[0_10px_30px_-12px_rgba(245,158,11,0.8)] hover:-translate-y-0.5 hover:bg-[#ffae1f] hover:shadow-[0_16px_36px_-14px_rgba(245,158,11,0.9)]",
);

export const btnGhostLight = cn(
  buttonBase,
  "border border-white/25 bg-white/[0.06] px-5 py-3.5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.12]",
);

export const btnNavy = cn(
  buttonBase,
  "bg-navy px-5 py-3.5 text-white shadow-[0_12px_28px_-16px_rgba(11,36,80,0.8)] hover:-translate-y-0.5 hover:bg-royal",
);

export const btnOutlineNavy = cn(
  buttonBase,
  "border border-navy/15 bg-white px-5 py-3.5 text-navy hover:-translate-y-0.5 hover:border-navy/30 hover:bg-ice",
);

/* ------------------------------------------------------------------ */
/* Misc                                                                */
/* ------------------------------------------------------------------ */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.23 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5", className)}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ProgramTag({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-display text-[0.63rem] font-bold uppercase tracking-[0.17em]",
        tone === "light"
          ? "border-white/18 bg-white/[0.07] text-sky"
          : "border-navy/10 bg-white text-royal shadow-sm",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
      Personal Branding Student Program
    </span>
  );
}
