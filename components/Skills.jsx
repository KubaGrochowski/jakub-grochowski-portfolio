"use client";

import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [
  "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.55-.22-1.05-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z",
  "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.skills.eyebrow}</span>
          <h2>{t.skills.title}</h2>
        </div>

        <div className="why-grid">
          {t.skills.reasons.map((reason, index) => (
            <div
              className="why-card reveal"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="why-card__glow" />
              <span className="why-card__number">{`0${index + 1}`}</span>
              <div className="why-card__icon">
                <svg viewBox="0 0 24 24" width="30" height="30">
                  <path fill="currentColor" d={ICONS[index]} />
                </svg>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
