"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicyContent() {
  const { t } = useLanguage();
  const l = t.legal;

  return (
    <section className="section legal">
      <div className="container legal__container">
        <Link href="/" className="legal__back">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
          </svg>
          {l.back}
        </Link>

        <span className="eyebrow">{l.eyebrow}</span>
        <h1>{l.title}</h1>
        <p className="legal__updated">{l.updated}</p>

        <p>{l.intro}</p>

        <h2>{l.h1}</h2>
        <p>
          {l.p1Before}
          <a href="mailto:grochowski.business@gmail.com">grochowski.business@gmail.com</a>.
        </p>

        <h2>{l.h2}</h2>
        <p>{l.p2}</p>

        <h2>{l.h3}</h2>
        <p>
          {l.p3Before}
          <strong>Vercel Analytics</strong>
          {l.p3After}
        </p>

        <h2>{l.h4}</h2>
        <p>{l.p4}</p>

        <h2>{l.h5}</h2>
        <p>
          {l.p5Before}
          <strong>Resend</strong>
          {l.p5After}
        </p>

        <h2>{l.h6}</h2>
        <p>{l.p6}</p>

        <h2>{l.h7}</h2>
        <p>{l.p7Intro}</p>
        <ul className="legal__list">
          {l.list7.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{l.p7Outro}</p>

        <h2>{l.h8}</h2>
        <p>{l.p8}</p>

        <h2>{l.h9}</h2>
        <p>{l.p9}</p>
      </div>
    </section>
  );
}
