"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus({
        state: "success",
        message: t.contactForm.success,
      });
      form.reset();
    } catch {
      setStatus({
        state: "error",
        message: t.contactForm.error,
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">{t.contactForm.name}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact">{t.contactForm.contact}</label>
          <input type="text" id="contact" name="contact" required />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="subject">{t.contactForm.subject}</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div className="form-field">
        <label htmlFor="message">{t.contactForm.message}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>
      <button type="submit" className="btn btn--primary btn--block" disabled={status.state === "sending"}>
        {status.state === "sending" ? t.contactForm.sending : t.contactForm.send}
      </button>
      <p className={`form-note${status.state === "error" ? " is-error" : ""}`}>{status.message}</p>
    </form>
  );
}
