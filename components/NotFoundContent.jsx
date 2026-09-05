"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <span className="not-found__code">404</span>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.desc}</p>
        <Link href="/" className="btn btn--primary">
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
