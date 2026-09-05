"use client";

import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [
  "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2>{t.process.title}</h2>
          <p className="section-sub">{t.process.sub}</p>
        </div>

        <div className="process__grid process__grid--timeline reveal">
          <div className="process__track">
            <div className="process__track-fill" />
          </div>
          {t.process.steps.map((step, index) => (
            <div
              className="process-step reveal"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="process-step__badge">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="currentColor" d={ICONS[index]} />
                </svg>
              </div>
              <span className="process-step__num">{t.process.stepLabel} {`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="process-step__tag">{step.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
