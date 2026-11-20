import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, SectionLabel } from "@/components/ui/Primitives";
import { findService, services, serviceEnquiry } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  if (!service) return { title: "Service not found | Joeveloper" };
  return {
    title: service.title + " | Joeveloper Services",
    description: service.description,
    alternates: { canonical: "/services/" + service.slug },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();

  const nextService = services[(services.findIndex((item) => item.slug === service.slug) + 1) % services.length];

  return (
    <main id="main">
      <section className="inner-hero detail-hero section-dark" aria-labelledby="detail-title">
        <div className="container-wide inner-hero-content">
          <div className="detail-breadcrumb">
            <Link href="/services">ALL SERVICES</Link><span aria-hidden="true">/</span><span>{service.number}</span>
          </div>
          <h1 id="detail-title" className="inner-hero-title">
            {service.title.split(" & ")[0]}
            {service.title.includes(" & ") ? <><br /><span className="text-electric">& {service.title.split(" & ")[1]}</span></> : null}
          </h1>
          <p className="inner-hero-summary">{service.description}</p>
        </div>
      </section>

      <section className="service-opportunity section-light" aria-labelledby="opportunity-title">
        <div className="container-wide">
          <SectionLabel>THE OPPORTUNITY</SectionLabel>
          <h2 id="opportunity-title" className="section-title">{service.tagline}</h2>
          <p className="opportunity-copy">{service.opportunity}</p>
        </div>
      </section>

      <section className="service-offers section-bluewash" aria-labelledby="offers-title">
        <div className="container-wide">
          <SectionLabel>WHAT WE CAN HELP YOU DO</SectionLabel>
          <h2 id="offers-title" className="section-title">Capabilities in action.</h2>
          <ul className="offer-list">
            {service.offers.map((offering, index) => (
              <li key={offering}>
                <span className="service-directory-number">0{index + 1}</span>
                <span>{offering}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-method section-light" aria-labelledby="method-title">
        <div className="container-wide">
          <SectionLabel>OUR APPROACH</SectionLabel>
          <h2 id="method-title" className="section-title">A clear path forward.</h2>
          <div className="method-grid">
            {service.process.map((step, index) => (
              <article key={step.title} className="method-item">
                <p className="method-number">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-outcomes section-bluewash" aria-labelledby="outcomes-title">
        <div className="container-wide outcomes-layout">
          <div>
            <SectionLabel>THE VALUE</SectionLabel>
            <h2 id="outcomes-title" className="section-title">Designed for meaningful progress.</h2>
          </div>
          <ul className="outcome-list">
            {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </section>

      <section className="service-contact section-dark" aria-labelledby="detail-contact-title">
        <div className="container-wide">
          <p className="eyebrow muted-light">LET’S BUILD WHAT’S NEXT</p>
          <h2 id="detail-contact-title" className="service-contact-title">Tell us what needs to change.</h2>
          <a href={serviceEnquiry(service.subject)} className="contact-button">
            DISCUSS YOUR PROJECT <Arrow />
          </a>
          <div className="service-next">
            <span>EXPLORE ANOTHER CAPABILITY</span>
            <Link href={"/services/" + nextService.slug}>{nextService.title} <Arrow /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
