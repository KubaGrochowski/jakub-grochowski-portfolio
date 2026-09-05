"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [
  "M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l2 3v1H8v-1l2-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v10h16V6H4z",
  "M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z",
  "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
  "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z",
  "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
];

export default function Pricing() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2>{t.pricing.title}</h2>
          <p className="section-sub">{t.pricing.sub}</p>
        </div>

        <div className="pricing-grid">
          {t.pricing.plans.map((plan, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className="pricing-card reveal"
                key={index}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="pricing-card__icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d={ICONS[index]} />
                  </svg>
                </div>
                <h3>{plan.title}</h3>
                <p className="pricing-card__price">{plan.price}</p>
                <p className="pricing-card__desc">{plan.desc}</p>

                <button
                  type="button"
                  className="pricing-card__toggle"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? t.pricing.hideExamples : t.pricing.showExamples}
                  <svg
                    className={isOpen ? "is-open" : ""}
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                <div className={`pricing-card__examples${isOpen ? " is-open" : ""}`}>
                  <div className="pricing-card__examples-inner">
                    <ul>
                      {plan.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="pricing-note">{t.pricing.note}</p>
      </div>
    </section>
  );
}
