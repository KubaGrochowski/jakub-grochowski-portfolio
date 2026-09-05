"use client";

import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [
  "M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l2 3v1H8v-1l2-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v10h16V6H4z",
  "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z",
  "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.title}</h2>
        </div>

        <div className="specialization reveal">
          <svg className="specialization__quote" viewBox="0 0 24 24" width="36" height="36">
            <path fill="currentColor" d="M9.5 9C7 9 5 11 5 13.5S7 18 9.5 18c.36 0 .7-.05 1.03-.13C9.9 19.6 8.2 21 6 21v2c4 0 7-3.13 7-7v-2.5C13 11 11.5 9 9.5 9zm9 0C16 9 14 11 14 13.5s2 4.5 4.5 4.5c.36 0 .7-.05 1.03-.13-.63 1.73-2.33 3.13-4.53 3.13v2c4 0 7-3.13 7-7v-2.5c0-2.5-1.5-4.5-3.5-4.5z" />
          </svg>
          <p className="specialization__text">
            {t.services.textBefore} <span className="accent-text">{t.services.textHighlight}</span>
            {t.services.textAfter}
          </p>
        </div>

        <div className="services-grid">
          {t.services.cards.map((card, index) => (
            <div
              className="service-tile reveal"
              key={index}
              style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
            >
              <div className="service-tile__glow" />
              <div className="service-tile__icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d={ICONS[index]} />
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
