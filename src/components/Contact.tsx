import { useRef, useState, type ComponentType, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Landmark,
  Loader2,
  MapPin,
  Send,
  ShieldCheck,
  TriangleAlert,
  Users,
} from "lucide-react";
import { cn } from "@/utils/cn";
import {
  ArrowUpRight,
  BrandLockup,
  Reveal,
  SectionLabel,
  WhatsAppIcon,
  btnAccent,
  btnGhostLight,
} from "@/components/ui";
import {
  OFFICIAL_WHATSAPP_DISPLAY,
  OFFICIAL_WHATSAPP_INTERNATIONAL,
  buildWhatsAppLink,
  submitCollaborationRequest,
  type CollaborationPayload,
  type CollaborationResult,
} from "@/lib/api";

type FormState = CollaborationPayload & { consent: boolean };
type FormErrors = Partial<Record<keyof FormState, string>>;

const PURPOSE_OPTIONS = [
  "Pengajuan kerja sama sekolah",
  "Informasi program",
  "Jadwal pelaksanaan",
  "Kolaborasi & kemitraan lainnya",
];

const SIZE_OPTIONS = ["Belum ditentukan", "100–150 siswa", "Kurang dari 100 siswa", "Lebih dari 150 siswa"];

const INITIAL_FORM: FormState = {
  nama: "",
  jabatan: "",
  sekolah: "",
  kota: "",
  whatsapp: "",
  email: "",
  tujuan: PURPOSE_OPTIONS[0],
  jumlah: SIZE_OPTIONS[1],
  pesan: "",
  consent: false,
};

const OFFICIAL_INFO: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp resmi",
    value: OFFICIAL_WHATSAPP_DISPLAY,
    href: buildWhatsAppLink(),
  },
  { icon: Building2, label: "Penyelenggara", value: "NEW IDEA INDONESIA" },
  { icon: Landmark, label: "Mitra", value: "BANK RAYA Cabang Sidoarjo" },
  { icon: MapPin, label: "Wilayah pelaksanaan", value: "Sekolah mitra · Sidoarjo, Jawa Timur" },
  { icon: Users, label: "Program", value: "Branding School Program · Personal Branding Student" },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (form.nama.trim().length < 2) errors.nama = "Mohon isi nama lengkap Anda.";
  if (form.jabatan.trim().length < 2) errors.jabatan = "Mohon isi jabatan Anda di sekolah.";
  if (form.sekolah.trim().length < 3) errors.sekolah = "Mohon isi nama sekolah Anda.";
  if (form.kota.trim().length < 3) errors.kota = "Mohon isi kota atau kabupaten sekolah.";
  const digits = form.whatsapp.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) {
    errors.whatsapp = "Nomor WhatsApp aktif terdiri dari 9–15 digit.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Format email belum sesuai. Contoh: nama@sekolah.sch.id";
  }
  if (!form.consent) errors.consent = "Mohon setujui penggunaan data untuk tindak lanjut pengajuan.";
  return errors;
}

const fieldWrapper = "flex flex-col gap-1.5";
const labelClass = "font-display text-[0.72rem] font-bold text-navy";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [result, setResult] = useState<CollaborationResult | null>(null);
  const [lastSubmitted, setLastSubmitted] = useState<FormState | null>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const openFormWith = (purpose: string) => {
    setForm((prev) => ({ ...prev, tujuan: purpose }));
    setStatus("idle");
    setErrors({});
    window.setTimeout(() => {
      formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => firstFieldRef.current?.focus({ preventScroll: true }), 550);
    }, 30);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const field = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      field?.focus();
      field?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    try {
      const response = await submitCollaborationRequest({
        nama: form.nama.trim(),
        jabatan: form.jabatan.trim(),
        sekolah: form.sekolah.trim(),
        kota: form.kota.trim(),
        whatsapp: form.whatsapp.replace(/\D/g, ""),
        email: form.email.trim(),
        tujuan: form.tujuan,
        jumlah: form.jumlah,
        pesan: form.pesan.trim(),
      });
      setResult(response);
      setLastSubmitted(form);
      setStatus("success");
      window.setTimeout(() => formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setResult(null);
    setLastSubmitted(null);
    setStatus("idle");
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-[#F6FAFF] py-20 sm:py-24 lg:py-28">
      <div className="grid-lines-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-shell relative">
        {/* CTA panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-10 text-white shadow-[0_40px_80px_-50px_rgba(11,36,80,0.8)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-56 w-56 rounded-full border border-sky/20" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 right-16 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
            <span
              className="pointer-events-none absolute -bottom-7 right-4 select-none font-display text-[4.5rem] font-extrabold uppercase leading-none tracking-tighter text-white/[0.045] sm:text-[7rem] lg:text-[9rem]"
              aria-hidden="true"
            >
              Identity
            </span>

            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <SectionLabel tone="light">Join the movement</SectionLabel>
                <h2
                  id="contact-title"
                  className="mt-4 max-w-2xl font-display text-[clamp(1.95rem,4.5vw,3.35rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-white"
                >
                  Your future starts
                  <br />
                  with your <span className="text-sky">identity</span>
                  <span className="text-accent">.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[0.9rem] leading-7 text-slate-300/80">
                  Mulai perjalanan membangun personal branding dan mengembangkan potensi bersama BRANDING
                  SCHOOL PROGRAM.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(btnAccent, "w-full")}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Hubungi Penyelenggara
                  <ArrowUpRight />
                </a>
                <button
                  type="button"
                  onClick={() => openFormWith("Pengajuan kerja sama sekolah")}
                  className={cn(btnGhostLight, "w-full")}
                >
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Ajukan Kerja Sama Sekolah
                </button>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[0.7rem] font-semibold text-white/70 transition-colors hover:border-emerald-400/40 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  WhatsApp resmi:
                  <span className="font-bold text-white">{OFFICIAL_WHATSAPP_DISPLAY}</span>
                  <ArrowUpRight className="h-3 w-3 text-sky" />
                </a>
                <div className="mt-1 flex justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <BrandLockup size="sm" tone="dark" />
                </div>
                <div className="flex items-center justify-center gap-2 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.13em] text-white/40">
                  <ShieldCheck className="h-3 w-3 text-sky" aria-hidden="true" />
                  Kanal resmi program
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact + form */}
        <div id="ajukan" className="scroll-mt-28 pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
            <div>
              <Reveal>
                <SectionLabel index="08">Info Kontak &amp; Kolaborasi</SectionLabel>
                <h3 className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-navy">
                  Mari bangun
                  <br />
                  generasi <span className="text-royal">berikutnya</span>
                  <span className="text-accent">.</span>
                </h3>
                <p className="mt-4 text-[0.9rem] leading-7 text-slate-600">
                  Sampaikan kebutuhan sekolah Anda melalui formulir pengajuan, atau hubungi langsung WhatsApp
                  resmi NEW IDEA INDONESIA di{" "}
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap font-semibold text-emerald-700 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-800"
                  >
                    {OFFICIAL_WHATSAPP_DISPLAY}
                  </a>
                  .
                </p>
              </Reveal>

              <Reveal delay={90}>
                <dl className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white">
                  {OFFICIAL_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-3 border-b border-navy/8 px-4 py-3.5 last:border-b-0">
                      <span
                        className={cn(
                          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                          href ? "bg-emerald-50 text-emerald-600" : "bg-ice text-royal",
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[0.53rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-[0.8rem] font-semibold leading-snug text-navy">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex flex-wrap items-center gap-1.5 text-emerald-700 transition-colors hover:text-emerald-800"
                            >
                              {value}
                              <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.1em] text-emerald-700">
                                Chat
                              </span>
                              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-5 rounded-2xl border border-navy/10 bg-white p-5">
                  <p className="flex items-center gap-2 font-display text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-navy">
                    <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
                    Kontak resmi WhatsApp
                  </p>
                  <p className="mt-2 text-[0.78rem] leading-6 text-slate-500">
                    Hubungi penyelenggara secara langsung untuk informasi program, jadwal, atau pengajuan kerja
                    sama sekolah. Cantumkan juga nomor WhatsApp aktif pada formulir agar mudah ditindaklanjuti.
                  </p>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3.5 flex items-center justify-between gap-3 rounded-xl bg-[#E9F9EF] p-3 ring-1 ring-emerald-500/20 transition-colors hover:bg-[#DDF5E7]"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <WhatsAppIcon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[0.52rem] font-bold uppercase tracking-[0.14em] text-emerald-700/70">
                          Chat langsung
                        </span>
                        <span className="block font-display text-[0.9rem] font-extrabold leading-tight text-emerald-900">
                          {OFFICIAL_WHATSAPP_DISPLAY}
                        </span>
                      </span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm transition-transform group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[0.62rem] text-slate-400">
                    <ShieldCheck className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                    Internasional: {OFFICIAL_WHATSAPP_INTERNATIONAL} · NEW IDEA INDONESIA
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-5 flex justify-center rounded-2xl border border-navy/10 bg-white px-4 py-5">
                  <BrandLockup size="sm" />
                </div>
              </Reveal>
            </div>

            {/* Form card */}
            <Reveal delay={80}>
              <div
                ref={formCardRef}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_30px_60px_-45px_rgba(11,36,80,0.55)]"
              >
                <div className="relative overflow-hidden bg-navy px-5 py-5 text-white sm:px-7">
                  <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-sky/80">
                        Formulir pengajuan
                      </p>
                      <h3 className="mt-1 font-display text-lg font-extrabold leading-tight text-white">
                        Ajukan Kerja Sama Sekolah
                      </h3>
                      <p className="mt-1 text-[0.72rem] leading-relaxed text-white/55">
                        Lengkapi data sekolah untuk penjajakan program.
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky">
                      <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {status === "success" && result && lastSubmitted ? (
                  <div className="p-5 sm:p-7" role="status" aria-live="polite">
                    <div className="flex flex-col items-center text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
                        <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <h4 className="mt-4 font-display text-xl font-extrabold text-navy">
                        Pengajuan siap ditindaklanjuti
                      </h4>
                      <p className="mt-2 max-w-md text-[0.82rem] leading-6 text-slate-500">
                        Terima kasih, {lastSubmitted.nama}. Ringkasan pengajuan dari{" "}
                        <strong className="font-semibold text-navy">{lastSubmitted.sekolah}</strong> sudah
                        disiapkan. Kirim ringkasan tersebut ke WhatsApp resmi agar segera ditindaklanjuti oleh
                        NEW IDEA INDONESIA.
                      </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-navy/10 bg-[#F8FBFF] p-4">
                      <div className="flex items-center justify-between gap-3 border-b border-navy/10 pb-3">
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Nomor referensi
                        </span>
                        <span className="rounded-md bg-navy px-2.5 py-1 font-mono text-[0.7rem] font-bold tracking-wider text-sky">
                          {result.reference}
                        </span>
                      </div>
                      <dl className="mt-3 grid gap-2.5 text-[0.76rem] sm:grid-cols-2">
                        <div>
                          <dt className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-slate-400">Tujuan</dt>
                          <dd className="mt-0.5 font-semibold text-navy">{lastSubmitted.tujuan}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-slate-400">Perkiraan peserta</dt>
                          <dd className="mt-0.5 font-semibold text-navy">{lastSubmitted.jumlah}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-slate-400">Kontak tindak lanjut</dt>
                          <dd className="mt-0.5 font-semibold text-navy">
                            {lastSubmitted.whatsapp} · {lastSubmitted.email}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-4 flex items-start gap-2 rounded-lg border border-accent/25 bg-[#FFF9EC] p-3">
                      <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-deep" aria-hidden="true" />
                      <p className="text-[0.68rem] leading-relaxed text-[#8a6512]">
                        Simpan nomor referensi di atas. Data pada halaman ini tersimpan di perangkat Anda;
                        pengajuan menjadi tindak lanjut resmi setelah ringkasan dikirim ke WhatsApp.
                      </p>
                    </div>

                    <a
                      href={buildWhatsAppLink(
                        [
                          "Halo NEW IDEA INDONESIA, saya ingin mengajukan kerja sama sekolah untuk BRANDING SCHOOL PROGRAM.",
                          "",
                          `Nomor referensi: ${result.reference}`,
                          `Nama: ${lastSubmitted.nama}`,
                          `Jabatan: ${lastSubmitted.jabatan}`,
                          `Sekolah: ${lastSubmitted.sekolah}`,
                          `Kota/Kabupaten: ${lastSubmitted.kota}`,
                          `WhatsApp: ${lastSubmitted.whatsapp}`,
                          `Email: ${lastSubmitted.email}`,
                          `Tujuan: ${lastSubmitted.tujuan}`,
                          `Perkiraan peserta: ${lastSubmitted.jumlah}`,
                          `Pesan: ${lastSubmitted.pesan || "-"}`,
                        ].join("\n"),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1FA855] px-4 py-3.5 font-display text-sm font-bold text-white shadow-[0_12px_30px_-14px_rgba(31,168,85,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#188B46]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Kirim Ringkasan via WhatsApp
                      <ArrowUpRight />
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="group/btn mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy/15 px-4 py-3 font-display text-sm font-bold text-navy transition-colors hover:bg-ice"
                    >
                      Kirim Pengajuan Lain
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                    </button>
                    <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[0.62rem] leading-relaxed text-slate-400">
                      <ShieldCheck className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                      Ditujukan ke WhatsApp resmi {OFFICIAL_WHATSAPP_DISPLAY}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className={fieldWrapper}>
                        <label htmlFor="nama" className={labelClass}>
                          Nama lengkap <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          ref={firstFieldRef}
                          id="nama"
                          name="nama"
                          type="text"
                          autoComplete="name"
                          placeholder="Nama perwakilan sekolah"
                          value={form.nama}
                          onChange={(e) => update("nama", e.target.value)}
                          aria-invalid={Boolean(errors.nama)}
                          aria-describedby={errors.nama ? "nama-error" : undefined}
                          className={cn("field", errors.nama && "field-error")}
                        />
                        {errors.nama && (
                          <p id="nama-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.nama}
                          </p>
                        )}
                      </div>

                      <div className={fieldWrapper}>
                        <label htmlFor="jabatan" className={labelClass}>
                          Jabatan <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          id="jabatan"
                          name="jabatan"
                          type="text"
                          autoComplete="organization-title"
                          placeholder="Contoh: Kepala Sekolah / Guru BK"
                          value={form.jabatan}
                          onChange={(e) => update("jabatan", e.target.value)}
                          aria-invalid={Boolean(errors.jabatan)}
                          aria-describedby={errors.jabatan ? "jabatan-error" : undefined}
                          className={cn("field", errors.jabatan && "field-error")}
                        />
                        {errors.jabatan && (
                          <p id="jabatan-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.jabatan}
                          </p>
                        )}
                      </div>

                      <div className={cn(fieldWrapper, "sm:col-span-2")}>
                        <label htmlFor="sekolah" className={labelClass}>
                          Nama sekolah <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          id="sekolah"
                          name="sekolah"
                          type="text"
                          autoComplete="organization"
                          placeholder="Nama sekolah mitra"
                          value={form.sekolah}
                          onChange={(e) => update("sekolah", e.target.value)}
                          aria-invalid={Boolean(errors.sekolah)}
                          aria-describedby={errors.sekolah ? "sekolah-error" : undefined}
                          className={cn("field", errors.sekolah && "field-error")}
                        />
                        {errors.sekolah && (
                          <p id="sekolah-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.sekolah}
                          </p>
                        )}
                      </div>

                      <div className={fieldWrapper}>
                        <label htmlFor="kota" className={labelClass}>
                          Kota / Kabupaten <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          id="kota"
                          name="kota"
                          type="text"
                          autoComplete="address-level2"
                          placeholder="Contoh: Sidoarjo"
                          value={form.kota}
                          onChange={(e) => update("kota", e.target.value)}
                          aria-invalid={Boolean(errors.kota)}
                          aria-describedby={errors.kota ? "kota-error" : undefined}
                          className={cn("field", errors.kota && "field-error")}
                        />
                        {errors.kota && (
                          <p id="kota-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.kota}
                          </p>
                        )}
                      </div>

                      <div className={fieldWrapper}>
                        <label htmlFor="whatsapp" className={labelClass}>
                          Nomor WhatsApp <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="08xxxxxxxxxx"
                          value={form.whatsapp}
                          onChange={(e) => update("whatsapp", e.target.value)}
                          aria-invalid={Boolean(errors.whatsapp)}
                          aria-describedby={errors.whatsapp ? "whatsapp-error" : "whatsapp-help"}
                          className={cn("field", errors.whatsapp && "field-error")}
                        />
                        {errors.whatsapp ? (
                          <p id="whatsapp-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.whatsapp}
                          </p>
                        ) : (
                          <p id="whatsapp-help" className="text-[0.62rem] text-slate-400">
                            Digunakan untuk konfirmasi tindak lanjut.
                          </p>
                        )}
                      </div>

                      <div className={cn(fieldWrapper, "sm:col-span-2")}>
                        <label htmlFor="email" className={labelClass}>
                          Email <span className="text-accent-deep">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="nama@sekolah.sch.id"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={cn("field", errors.email && "field-error")}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-[0.68rem] font-medium text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className={fieldWrapper}>
                        <label htmlFor="tujuan" className={labelClass}>
                          Tujuan pengajuan
                        </label>
                        <select
                          id="tujuan"
                          name="tujuan"
                          value={form.tujuan}
                          onChange={(e) => update("tujuan", e.target.value)}
                          className="field"
                        >
                          {PURPOSE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={fieldWrapper}>
                        <label htmlFor="jumlah" className={labelClass}>
                          Perkiraan jumlah siswa
                        </label>
                        <select
                          id="jumlah"
                          name="jumlah"
                          value={form.jumlah}
                          onChange={(e) => update("jumlah", e.target.value)}
                          className="field"
                        >
                          {SIZE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={cn(fieldWrapper, "sm:col-span-2")}>
                        <label htmlFor="pesan" className={labelClass}>
                          Pesan / kebutuhan sekolah{" "}
                          <span className="font-medium normal-case tracking-normal text-slate-400">(opsional)</span>
                        </label>
                        <textarea
                          id="pesan"
                          name="pesan"
                          rows={3}
                          placeholder="Contoh: usulan jadwal, jumlah kelas, atau kebutuhan khusus sekolah"
                          value={form.pesan}
                          onChange={(e) => update("pesan", e.target.value)}
                          className={cn("field resize-none", errors.pesan && "field-error")}
                        />
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-navy/10 bg-[#F8FBFF] p-3.5">
                      <label htmlFor="consent" className="flex cursor-pointer items-start gap-2.5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? "consent-error" : undefined}
                          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-navy/25 accent-royal"
                        />
                        <span className="text-[0.7rem] leading-relaxed text-slate-500">
                          Saya menyetujui data yang dicantumkan digunakan oleh penyelenggara untuk menindaklanjuti
                          pengajuan program ini. <span className="text-accent-deep">*</span>
                        </span>
                      </label>
                      {errors.consent && (
                        <p id="consent-error" className="mt-1.5 text-[0.68rem] font-medium text-red-600">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div role="alert" className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[0.72rem] text-red-700">
                        <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        Pengajuan belum berhasil dikirim. Silakan periksa koneksi Anda lalu coba kembali.
                      </div>
                    )}

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-center gap-1.5 text-[0.62rem] text-slate-400">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                        Dilanjutkan ke WhatsApp resmi {OFFICIAL_WHATSAPP_DISPLAY}.
                      </p>
                      <button type="submit" disabled={status === "sending"} className={cn(btnAccent, "w-full sm:w-auto")}>
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            Kirim Pengajuan
                            <ArrowUpRight />
                          </>
                        )}
                      </button>
                    </div>
                    <p className="mt-3 text-center text-[0.6rem] text-slate-400 sm:text-right">
                      Kolom bertanda <span className="text-accent-deep">*</span> wajib diisi.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* mini trust strip */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-navy/8 bg-white/70 px-5 py-4">
            {[
              "Penyelenggara: NEW IDEA INDONESIA",
              "Mitra: BANK RAYA Cabang Sidoarjo",
              "Tatap muka di sekolah mitra",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[0.65rem] font-semibold text-slate-500">
                <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

