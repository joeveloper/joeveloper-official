import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="global-footer section-dark">
      <div className="container-wide global-footer-inner">
        <Link href="/" className="wordmark" aria-label="Joeveloper home">
          joeveloper<span className="trademark">®</span>
        </Link>
        <span>LAGOS · PARIS · GLOBAL</span>
        <a href="mailto:hello@joeveloper.xyz">hello@joeveloper.xyz</a>
      </div>
    </footer>
  );
}
