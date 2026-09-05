"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const LINKS = [
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#process", label: t.nav.process },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#pricing", label: t.nav.pricing },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main .section, .hero");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("id"));
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -60% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`} id="navbar">
      <div className="container navbar__inner">
        <a href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">
            Jakub<span className="accent">.</span>Grochowski
          </span>
        </a>

        <nav className={`nav-links${open ? " is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${active === link.href.split("#")[1] ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="/#contact" className="btn-wipe">
            <span className="btn-wipe__border"></span>
            {t.nav.contact}
          </a>
          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label="Otwórz menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
