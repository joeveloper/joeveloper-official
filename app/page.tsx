"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { services } from "@/lib/services";
import { Arrow, SectionLabel } from "@/components/ui/Primitives";

const industries = ["Public sector", "Education", "Aviation & mobility", "Growing businesses"];
const email = "hello@joeveloper.xyz";
const consultationLink = "mailto:" + email + "?subject=" + encodeURIComponent("Digital transformation consultation");
const heroVideo = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

export default function Home() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setAllowMotion(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  return (
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
          {heroVideo && allowMotion && !videoFailed && (
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
            {/* <span>SCROLL TO EXPLORE ↓</span> */}
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
                  href={"/services/" + item.slug}
                  aria-label={"Explore " + item.title}
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
            </div>
        </section>
      </main>
  );
}
