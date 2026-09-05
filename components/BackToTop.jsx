"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top${visible ? " is-visible" : ""}`}
      aria-label="Wróć na górę"
    >
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path fill="currentColor" d="M12 4l-8 8 1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12z" />
      </svg>
    </button>
  );
}
