import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WELCOME_SUBJECT, welcomeEmailHtml, welcomeEmailText } from "@/lib/welcomeEmail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SignupBody {
  email?: unknown;
  // honeypot — bots fill this; humans don't see it
  website?: unknown;
}

export async function POST(req: Request) {
  let body: SignupBody;
  try {
    body = (await req.json()) as SignupBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot — silently succeed so the bot moves on
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "Adaptive Antivirus Team <onboarding@resend.dev>";
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from,
      to: email,
      subject: WELCOME_SUBJECT,
      html: welcomeEmailHtml(),
      text: welcomeEmailText(),
      headers: {
        "List-Unsubscribe": "<mailto:unsubscribe@adaptive-antivirus.vercel.app>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });

    if (result.error) {
      console.error("[signup] resend error", result.error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[signup] unexpected error", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
