"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
        </div>

        <div className="about-stories">
          <div className="about-story reveal" style={{ transitionDelay: "0s" }}>
            <div className="about-story__glow" />
            <div className="about-story__icon">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
            <span className="about-story__label">{t.about.label1}</span>
            <p>
              Mam <span className="accent-text">18 lat</span> i mieszkam w{" "}
              <span className="accent-text">Toruniu</span>, mieście w którym się
              urodziłem — pięknym, z pociągającą starówką i urokliwym bulwarem. Uczę
              się w <span className="accent-text">Technikum nr 13</span>, w klasie
              czwartej.
            </p>
          </div>

          <div className="about-story reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="about-story__glow" />
            <div className="about-story__icon">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="about-story__label">{t.about.label2}</span>
            <p>
              Nigdy nie miałem problemu z aktywnościami — od zawsze lubiłem
              przeróżne sporty, ale to <span className="accent-text">piłka nożna</span>{" "}
              przyciągała i przyciąga mnie najbardziej. Staram się też regularnie
              chodzić na siłownię, głównie dla zdrowia, ale też dla sylwetki i
              lepszego samopoczucia. W wieku 9 lat zachorowałem na cukrzycę typu 1 —
              nauczyłem się tym nie przejmować, co sprawiło, że{" "}
              <span className="accent-text">nie ogranicza mnie ona w żaden sposób</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
