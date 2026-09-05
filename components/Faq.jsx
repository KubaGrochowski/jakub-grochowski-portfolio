"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2>{t.faq.title}</h2>
          <p className="section-sub">{t.faq.sub}</p>
        </div>

        <div className="accordion">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className="accordion-item reveal"
                key={index}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className={`accordion-item__interactive${isOpen ? " is-open" : ""}`}>
                  <button
                    className="accordion-item__head"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                  <div className="accordion-item__body">
                    <div className="accordion-item__body-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
