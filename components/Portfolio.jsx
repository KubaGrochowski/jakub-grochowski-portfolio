"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const META = [
  { image: "/project-beetoobee.png", href: "https://beetoobee.pl" },
  { image: "/project-biuro-rachunkowe.png", href: "https://www.biurorachunkoweciechanow.pl" },
  { image: "/project-premium-top-service.png", href: "https://www.premiumtopservice.com" },
];

function domainFromHref(href) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="portfolio">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h2>{t.portfolio.title}</h2>
          <p className="section-sub">{t.portfolio.sub}</p>
        </div>

        <div className="grid grid--3">
          {t.portfolio.projects.map((project, index) => {
            const meta = META[index];
            const Wrapper = meta.href ? "a" : "article";
            const wrapperProps = meta.href
              ? { href: meta.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                className="card project-card reveal"
                key={index}
                style={{ transitionDelay: `${index * 0.12}s` }}
                {...wrapperProps}
              >
                <div className="project-card__thumb">
                  {meta.href && (
                    <div className="browser-bar">
                      <span className="browser-bar__dot" />
                      <span className="browser-bar__dot" />
                      <span className="browser-bar__dot" />
                      <span className="browser-bar__url">{domainFromHref(meta.href)}</span>
                    </div>
                  )}
                  <div className="project-card__thumb-img-wrap">
                    {meta.image ? (
                      <Image
                        src={meta.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 760px) 100vw, 380px"
                        className="project-card__thumb-img"
                      />
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </div>
                </div>
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  {project.result && <p className="project-card__result">{project.result}</p>}
                  <div className="tag-row">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="chip chip--sm" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
