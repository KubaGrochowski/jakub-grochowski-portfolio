"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="/" className="brand">
            <span className="brand__name">
              Jakub<span className="accent">.</span>Grochowski
            </span>
          </a>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer__right">
          <div className="footer__contact">
            <a href="mailto:grochowski.business@gmail.com">grochowski.business@gmail.com</a>
            <a href="tel:+48692625334">692 625 334</a>
          </div>

          <div className="footer__socials">
          <a href="https://www.linkedin.com/in/jakub-grochowski-ba55283b1/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a href="https://github.com/KubaGrochowski" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.19c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.25-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/grochu_88/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.42.46.66.25 1.22.6 1.77 1.15.5.5.86 1.02 1.15 1.77.25.63.42 1.36.46 2.42.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.42-.25.66-.6 1.22-1.15 1.77-.5.5-1.02.86-1.77 1.15-.63.25-1.36.42-2.42.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.46-.66-.25-1.22-.6-1.77-1.15-.5-.5-.86-1.02-1.15-1.77-.25-.63-.42-1.36-.46-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.42.25-.66.6-1.22 1.15-1.77.5-.5 1.02-.86 1.77-1.15.63-.25 1.36-.42 2.42-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.4-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
            </svg>
          </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Jakub Grochowski. {t.footer.rights}</p>
        <Link href="/polityka-prywatnosci" className="footer__privacy">{t.footer.privacy}</Link>
      </div>
    </footer>
  );
}
