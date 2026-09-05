// ==========================================================
// Jakub Grochowski — Portfolio interactions
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  const backToTop = document.getElementById("backToTop");
  const yearEl = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  const accordion = document.getElementById("accordion");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar scroll state + back-to-top visibility
  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    navbar.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu toggle
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-open");
      navLinks.classList.remove("is-open");
    });
  });

  // Scroll reveal + skill bar fill animation
  const revealEls = document.querySelectorAll(".reveal");
  const skillFills = document.querySelectorAll(".skill-bar__fill");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          if (entry.target.classList.contains("skills__grid") || entry.target.querySelector?.(".skill-bar__fill")) {
            entry.target.querySelectorAll(".skill-bar__fill").forEach((fill) => {
              fill.style.width = fill.style.width || fill.dataset.width;
            });
          }
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => io.observe(el));

  // Ensure skill bars fill on their own reveal (they sit inside .skill-group.reveal)
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
  });

  // FAQ accordion
  if (accordion) {
    accordion.querySelectorAll(".accordion-item__head").forEach((head) => {
      head.addEventListener("click", () => {
        const item = head.closest(".accordion-item");
        const body = item.querySelector(".accordion-item__body");
        const isOpen = item.classList.contains("is-open");

        accordion.querySelectorAll(".accordion-item").forEach((other) => {
          other.classList.remove("is-open");
          other.querySelector(".accordion-item__body").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("is-open");
          body.style.maxHeight = body.scrollHeight + 60 + "px";
        }
      });
    });
  }

  // Contact form (client-side only — no backend wired up yet)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.textContent = "Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.";
      contactForm.reset();
    });
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll("main .section, .hero");
  const navAnchors = document.querySelectorAll(".nav-link");

  const sectionIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: "-80px 0px -60% 0px" }
  );
  sections.forEach((s) => sectionIo.observe(s));
});
