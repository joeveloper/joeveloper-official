import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <main id="main" className="service-not-found section-dark">
      <div className="container-wide">
        <p className="eyebrow muted-light">SERVICE NOT FOUND</p>
        <h1>That page isn't available.</h1>
        <p>Explore our capabilities to find what you're looking for.</p>
        <Link href="/services" className="text-link">BACK TO SERVICES ↗</Link>
      </div>
    </main>
  );
}
