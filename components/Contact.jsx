"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section section--contact" id="contact">
      <div className="contact-banner">
        <div className="aurora-blob aurora-blob--1" />
        <div className="aurora-blob aurora-blob--2" />
        <div className="aurora-blob aurora-blob--3" />
        <svg className="contact-banner__arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M2 12h19M14 5l7 7-7 7" />
        </svg>
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>
              {t.contact.titleBefore} <span className="accent-text">{t.contact.titleHighlight}</span>
            </h2>
            <p className="section-sub">{t.contact.sub}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact-info-card reveal" style={{ transitionDelay: "0s" }}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div>
                <span className="fact-label">{t.contact.email}</span>
                <a href="mailto:grochowski.business@gmail.com" className="fact-value fact-value--link">
                  grochowski.business@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-info-card reveal" style={{ transitionDelay: "0.1s" }}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <div>
                <span className="fact-label">{t.contact.phone}</span>
                <a href="tel:+48692625334" className="fact-value fact-value--link">692 625 334</a>
              </div>
            </div>
            <div className="contact-info-card reveal" style={{ transitionDelay: "0.2s" }}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <div>
                <span className="fact-label">{t.contact.location}</span>
                <span className="fact-value">Toruń, 87-100</span>
              </div>
            </div>

            <div className="social-row reveal" style={{ transitionDelay: "0.3s" }}>
              <a href="https://www.linkedin.com/in/jakub-grochowski-ba55283b1/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a href="https://github.com/KubaGrochowski" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.19c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.25-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/grochu_88/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.42.46.66.25 1.22.6 1.77 1.15.5.5.86 1.02 1.15 1.77.25.63.42 1.36.46 2.42.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.42-.25.66-.6 1.22-1.15 1.77-.5.5-1.02.86-1.77 1.15-.63.25-1.36.42-2.42.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.46-.66-.25-1.22-.6-1.77-1.15-.5-.5-.86-1.02-1.15-1.77-.25-.63-.42-1.36-.46-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.42.25-.66.6-1.22 1.15-1.77.5-.5 1.02-.86 1.77-1.15.63-.25 1.36-.42 2.42-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.4-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
