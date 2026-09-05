"use client";

import { useEffect } from "react";

// Handles scroll-reveal for `.reveal` elements and animates `.skill-bar__fill`
// widths into view. Renders nothing — it just wires up global DOM behavior
// once the page has mounted (mirrors the previous static-site script).
export default function ScrollFx() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const groupIos = [];
    document.querySelectorAll(".skill-group").forEach((group) => {
      const widths = [];
      group.querySelectorAll(".skill-bar__fill").forEach((fill) => {
        widths.push([fill, fill.style.width]);
        fill.style.width = "0";
      });
      const groupIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              widths.forEach(([fill, w]) => (fill.style.width = w));
              groupIo.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      groupIo.observe(group);
      groupIos.push(groupIo);
    });

    return () => {
      io.disconnect();
      groupIos.forEach((g) => g.disconnect());
    };
  }, []);

  return null;
}
