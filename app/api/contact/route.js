import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "grochowski.business@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.contact || !body.message) {
    return NextResponse.json({ error: "Brak wymaganych pól." }, { status: 400 });
  }

  const { name, contact, subject, message } = body;

  if (!process.env.RESEND_API_KEY) {
    console.log("Nowa wiadomość z formularza kontaktowego (RESEND_API_KEY nie ustawiony):", body);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: EMAIL_REGEX.test(contact) ? contact : undefined,
      subject: subject ? `Nowa wiadomość: ${subject}` : "Nowa wiadomość z formularza kontaktowego",
      html: `
        <h2>Nowa wiadomość z portfolio</h2>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email / telefon:</strong> ${escapeHtml(contact)}</p>
        ${subject ? `<p><strong>Temat:</strong> ${escapeHtml(subject)}</p>` : ""}
        <p><strong>Wiadomość:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Błąd wysyłki e-mail:", error);
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
