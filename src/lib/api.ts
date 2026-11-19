/**
 * Collaboration request transport.
 *
 * Set COLLABORATION_ENDPOINT to the official form/API endpoint when it becomes
 * available (e.g. from an environment variable passed at build time). The
 * request payload is JSON-serialisable and ready for a backend, CRM, or
 * Google Sheets webhook.
 */
const COLLABORATION_ENDPOINT: string = "";

export interface CollaborationPayload {
  nama: string;
  jabatan: string;
  sekolah: string;
  kota: string;
  whatsapp: string;
  email: string;
  tujuan: string;
  jumlah: string;
  pesan: string;
}

export interface CollaborationResult {
  reference: string;
  submittedAt: string;
}

function createReference(): string {
  const now = new Date();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BSP-${now.getFullYear()}-${random}`;
}

/**
 * Official programme contact. The WhatsApp number is the confirmed public
 * channel provided by the organisers (0812-3592-716). The email address has
 * not been confirmed yet, so email-based routing stays disabled until then.
 */
export const OFFICIAL_WHATSAPP = "628123592716";
export const OFFICIAL_WHATSAPP_DISPLAY = "0812-3592-716";
export const OFFICIAL_WHATSAPP_INTERNATIONAL = "+62 812-3592-716";
export const OFFICIAL_EMAIL = "";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo NEW IDEA INDONESIA, saya ingin mengetahui informasi mengenai BRANDING SCHOOL PROGRAM (Personal Branding Student) kerja sama dengan BANK RAYA Cabang Sidoarjo.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${OFFICIAL_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export async function submitCollaborationRequest(
  payload: CollaborationPayload,
): Promise<CollaborationResult> {
  if (COLLABORATION_ENDPOINT) {
    const response = await fetch(COLLABORATION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Pengajuan belum berhasil dikirim. Silakan coba kembali.");
    }

    return (await response.json()) as CollaborationResult;
  }

  // Front-end fallback until the official backend endpoint is connected.
  await new Promise((resolve) => setTimeout(resolve, 900));
  const result: CollaborationResult = {
    reference: createReference(),
    submittedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(
      "bsp:last-collaboration-request",
      JSON.stringify({ payload, ...result }),
    );
  } catch {
    // Storage can be unavailable in private mode; the form still succeeds.
  }

  return result;
}
