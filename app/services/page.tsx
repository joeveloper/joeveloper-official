import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, SectionLabel } from "@/components/ui/Primitives";
import { services, serviceEnquiry } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Joeveloper — AI, Software & Digital Transformation",
  description: "Explore Joeveloper's AI and automation, software engineering, digital presence and training services for businesses and institutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="inner-hero section-dark" aria-labelledby="services-hero">
        <div className="container-wide inner-hero-content">
          <p className="eyebrow muted-light">WHAT WE DO / CAPABILITIES</p>
          <h1 id="services-hero" className="inner-hero-title">
            Technology for<br /><span className="text-electric">what comes next.</span>
          </h1>
          <p className="inner-hero-summary">
            We combine strategy, AI, engineering and creative thinking to help organizations
            transform the way they work, connect and grow.
          </p>
          <p className="inner-hero-location">LAGOS / PARIS / EVERYWHERE</p>
        </div>
      </section>

      <section className="services-index section-light" aria-labelledby="capabilities-title">
        <div className="container-wide">
          <SectionLabel>01—04 / OUR CAPABILITIES</SectionLabel>
          <h2 id="capabilities-title" className="section-title">From ambition to action.</h2>
          <div className="service-directory">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={"/services/" + service.slug}
                className="service-directory-row"
              >
                <span className="service-directory-number">{service.number}</span>
                <span className="service-directory-content">
                  <span className="service-directory-title">{service.title}</span>
                  <span className="service-directory-tagline">{service.tagline}</span>
                  <span className="service-directory-offers">{service.offers.slice(0, 3).join("  ·  ")}</span>
                </span>
                <Arrow className="service-directory-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-outro section-bluewash" aria-labelledby="service-outro-title">
        <div className="container-wide split-outro">
          <div>
            <SectionLabel>HOW WE WORK</SectionLabel>
            <h2 id="service-outro-title" className="section-title">Built around your reality.</h2>
          </div>
          <div>
            <p className="body-copy">
              Every transformation begins by understanding what needs to change. We
              define a focused path, deliver useful technology and support the people
              who will use it.
            </p>
            <Link href="/#about" className="text-link">MEET JOEVELOPER <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="service-contact section-dark" aria-labelledby="services-contact">
        <div className="container-wide">
          <p className="eyebrow muted-light">READY TO MOVE FORWARD?</p>
          <h2 id="services-contact" className="service-contact-title">Let’s make progress.</h2>
          <a className="contact-button" href={serviceEnquiry("Digital transformation consultation")}>
            START A CONVERSATION <Arrow />
          </a>
        </div>
      </section>
    </main>
  );
}
