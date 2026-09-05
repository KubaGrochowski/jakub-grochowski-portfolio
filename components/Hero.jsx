"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" />
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="tag-pill reveal" style={{ transitionDelay: "0s" }}>
            <span className="dot dot--pulse" /> {t.hero.badge}
          </span>
          <h1 className="hero__title reveal" style={{ transitionDelay: "0.1s" }}>
            {t.hero.greeting} <span className="accent-text">{t.hero.name}</span>
          </h1>
          <p className="hero__role reveal" style={{ transitionDelay: "0.2s" }}>
            {t.hero.role}
          </p>
          <p className="hero__desc reveal" style={{ transitionDelay: "0.3s" }}>
            {t.hero.desc}
          </p>
          <div className="hero__cta reveal" style={{ transitionDelay: "0.4s" }}>
            <a href="#portfolio" className="btn btn--primary">{t.hero.ctaPrimary}</a>
            <a href="#contact" className="btn btn--ghost">{t.hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero__visual reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="avatar-card">
            <div className="avatar-card__ring" />
            <div className="avatar-card__photo-wrap">
              <Image
                src="/jakub-grochowski-v2.png"
                alt="Jakub Grochowski"
                fill
                sizes="340px"
                className="avatar-card__photo"
                priority
              />
            </div>
            <div className="avatar-card__badge">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <circle cx="12" cy="5.5" r="2.6" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M8.8 9.2c.6-.6 1.4-.9 2.2-.9h2c.8 0 1.6.3 2.2.9l2.3-1.8a1.2 1.2 0 1 1 1.5 1.9l-2.6 2 .9 2.7a1.2 1.2 0 1 1-2.3.8l-.7-2-.6.2v3.4a1.2 1.2 0 1 1-2.4 0v-3.4l-.6-.2-.7 2a1.2 1.2 0 1 1-2.3-.8l.9-2.7-2.6-2a1.2 1.2 0 1 1 1.5-1.9z"
                />
              </svg>
              {t.hero.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
