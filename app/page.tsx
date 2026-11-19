"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "AI & Automation",
    description: "Better workflows, better decisions, and practical AI adoption.",
    subject: "AI and automation consultation",
  },
  {
    number: "02",
    title: "Digital Products & Engineering",
    description: "Thoughtful software, modern platforms, and connected systems.",
    subject: "Software development consultation",
  },
  {
    number: "03",
    title: "Brand, Web & Growth",
    description: "Digital identities and experiences that help ambitious brands grow.",
    subject: "Digital presence and growth consultation",
  },
  {
    number: "04",
    title: "Training & Digital Enablement",
    description: "Give teams the confidence and skills to work differently.",
    subject: "Digital transformation training consultation",
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const industries = ["Public sector", "Education", "Aviation & mobility", "Growing businesses"];
const email = "hello@joeveloper.com";
const consultationLink = "mailto:" + email + "?subject=" + encodeURIComponent("Digital transformation consultation");
const heroVideo = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

function Arrow({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={className}>↗</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-electric">{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButton.current?.focus());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Joeveloper home">
          joeveloper<span className="trademark">®</span>
        </a>
        <span className="header-caption">DIGITAL TRANSFORMATION / AI / TECHNOLOGY</span>
        <button
          ref={menuButton}
          type="button"
          className="menu-trigger"
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          MENU <span aria-hidden="true">+</span>
        </button>
      </header>

      <nav
        ref={menuRef}
        id="site-menu"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        className={menuOpen ? "menu-overlay is-open" : "menu-overlay"}
        inert={!menuOpen}
      >
        <div className="menu-top container-wide">
          <span className="wordmark">joeveloper<span className="trademark">®</span></span>
          <span className="menu-top-label">EXPLORE</span>
          <button ref={closeButton} type="button" className="close-trigger" onClick={closeMenu}>
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="menu-content container-wide">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="menu-link"
              onClick={closeMenu}
            >
              <span>{item.label}</span><Arrow />
            </a>
          ))}
        </div>
        <div className="menu-bottom container-wide">
          <span>LAGOS / PARIS / GLOBAL</span>
          <a href={consultationLink} onClick={closeMenu}>START A CONVERSATION <Arrow /></a>
        </div>
      </nav>

      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <Image
            src="/images/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="hero-background"
          />
          {heroVideo && !videoFailed && (
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              poster="/images/hero.png"
              onError={() => setVideoFailed(true)}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          )}
          <div className="hero-shade" />
          <div className="hero-inner container-wide">
            <p className="eyebrow hero-eyebrow">TRANSFORMATION / TECHNOLOGY / PEOPLE</p>
            <h1 id="hero-title" className="hero-title">
              <span>WE MAKE</span>
              <span>TECHNOLOGY</span>
              <span className="text-electric">WORK.</span>
            </h1>
            <p className="hero-summary">
              We help ambitious organizations transform how they operate, compete and grow
              through AI, software and digital expertise.
            </p>
            <a href="#services" className="text-link light-link">
              DISCOVER JOEVELOPER <Arrow />
            </a>
          </div>
          <div className="hero-bottom container-wide" aria-hidden="true">
            <span>SCROLL TO EXPLORE ↓</span>
            <span>LAGOS ↗ PARIS ↗ EVERYWHERE</span>
          </div>
        </section>

        <section className="statement section-dark" aria-labelledby="statement-title">
          <div className="container-wide">
            <p className="eyebrow muted-light">WE CONNECT STRATEGY WITH EXECUTION</p>
            <h2 id="statement-title">Progress is not<br />a buzzword<span className="text-electric">.</span></h2>
            <p className="statement-highlight">It is the work we deliver.</p>
            <p className="body-copy light-copy">
              Consulting, engineering and people-focused digital adoption — all working together.
              We turn complex challenges into useful, lasting solutions.
            </p>
          </div>
        </section>

        <section id="services" className="services-section section-light" aria-labelledby="services-title">
          <div className="container-wide">
            <SectionLabel>01 / CAPABILITIES</SectionLabel>
            <h2 id="services-title" className="section-title">What we do.</h2>
            <div className="service-list">
              {services.map((item) => (
                <a
                  key={item.number}
                  className="service-row"
                  href={"mailto:" + email + "?subject=" + encodeURIComponent(item.subject)}
                  aria-label={"Discuss " + item.title}
                >
                  <span className="service-number">{item.number}</span>
                  <span className="service-detail">
                    <span className="service-title">{item.title}</span>
                    <span className="service-description">{item.description}</span>
                  </span>
                  <Arrow className="row-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="industries-section section-dark" aria-labelledby="industries-title">
          <div className="container-wide industries-layout">
            <div>
              <p className="eyebrow muted-light">02 / INDUSTRIES</p>
              <h2 id="industries-title" className="section-title">Technology for real-world challenges.</h2>
              <p className="body-copy light-copy">
                We apply strategy and technology with an understanding of the environments
                where people and organizations work.
              </p>
            </div>
            <ul className="industry-list">
              {industries.map((item, i) => (
                <li key={item}><span>0{i + 1}</span>{item}<Arrow /></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="products" className="products-section section-bluewash" aria-labelledby="products-title">
          <div className="container-wide">
            <SectionLabel>03 / WORK & INNOVATION</SectionLabel>
            <h2 id="products-title" className="section-title">Ideas made tangible.</h2>
            <div className="product-layout">
              <div className="project-image">
                <Image src="/images/attengram.png" alt="Digital analytics workspace illustrating the Attengram education platform" fill sizes="(max-width: 800px) 100vw, 55vw" />
              </div>
              <div className="product-content">
                <p className="eyebrow text-electric">ATTENGRAM / EDUCATION TECHNOLOGY</p>
                <h3>From attendance to student intelligence.</h3>
                <p className="body-copy">
                  An education technology platform helping institutions connect attendance,
                  engagement and data-driven student success.
                </p>
                <a className="text-link" href="https://attengram.com/" target="_blank" rel="noopener noreferrer">
                  EXPLORE ATTENGRAM <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-light" aria-labelledby="about-title">
          <div className="container-wide about-layout">
            <div>
              <SectionLabel>04 / WHERE WE WORK</SectionLabel>
              <h2 id="about-title" className="section-title">Built across borders.</h2>
              <p className="locations">LAGOS <span>/</span> PARIS</p>
              <p className="body-copy">Locally present. Globally minded. Helping teams move forward across markets and industries.</p>
              <a className="text-link" href={consultationLink}>WORK WITH US <Arrow /></a>
            </div>
            <div className="team-image">
              <Image src="/images/global-team.png" alt="Technology professionals collaborating in a modern workspace" fill sizes="(max-width: 800px) 100vw, 42vw" />
            </div>
          </div>
        </section>

        <section id="insights" className="insights-section section-bluewash" aria-labelledby="insights-title">
          <div className="container-wide insight-layout">
            <div>
              <SectionLabel>05 / PERSPECTIVES</SectionLabel>
              <h2 id="insights-title" className="section-title">Ideas worth exploring.</h2>
            </div>
            <div>
              <p className="body-copy">
                Practical thinking on responsible AI adoption, digital operations, and building
                technology that delivers business value. Our publications are in development.
              </p>
              <a href={"mailto:" + email + "?subject=" + encodeURIComponent("Joeveloper insights enquiry")} className="text-link">
                GET IN TOUCH <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-dark" aria-labelledby="contact-title">
          <div className="container-wide">
            <p className="eyebrow muted-light">READY TO MAKE PROGRESS?</p>
            <h2 id="contact-title" className="contact-title">Let’s make<br /><span className="text-electric">it happen.</span></h2>
            <a href={consultationLink} className="contact-button">
              BOOK A CONSULTATION <Arrow />
            </a>
            <footer className="site-footer">
              <a href="#home" className="wordmark">joeveloper<span className="trademark">®</span></a>
              <span>LAGOS · PARIS · GLOBAL</span>
              <a href={"mailto:" + email}>{email}</a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
