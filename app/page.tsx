"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const L = ({ children }: { children: React.ReactNode }) => (
  <span className="block overflow-hidden">
    <span data-line className="block">
      {children}
    </span>
  </span>
);
const big =
  "font-semibold uppercase tracking-tight leading-[0.85] text-[clamp(3.5rem,13vw,11rem)]";
const h2 =
  "font-semibold tracking-tight leading-none text-[clamp(2.5rem,6vw,5rem)]";
const eyebrow = "text-[11px] tracking-[0.2em] uppercase opacity-70";
const pad = "px-6 md:px-[75px]";
const services = [
  "AI & Automation",
  "Digital Products & Engineering",
  "Brand, Web & Growth",
  "Training & Digital Enablement",
];
const links = [
  "Home",
  "Services",
  "Industries",
  "Products",
  "Insights",
  "About",
  "Contact",
];
const Placeholder = ({
  label,
  className,
}: {
  label: string;
  className: string;
}) => (
  <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
    <div
      data-parallax
      className="absolute inset-[-10%] grid place-items-center bg-gradient-to-br from-neutral-700 to-neutral-900 text-xs uppercase tracking-widest opacity-60"
    >
      {label}
    </div>
  </div>
);

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const q = gsap.utils.selector(root);
        // Headline masked line reveals (hero, section titles, contact)
        q("[data-lines]").forEach((el) =>
          gsap.from(el.querySelectorAll("[data-line]"), {
            yPercent: 110,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }),
        );
        // Statement: scroll-scrubbed word reveal
        q("[data-scrub]").forEach((el) =>
          gsap.fromTo(
            el.querySelectorAll("[data-word]"),
            { opacity: 0.15 },
            {
              opacity: 1,
              stagger: 0.1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 75%",
                end: "bottom 50%",
                scrub: true,
              },
            },
          ),
        );
        // Divider rules draw in
        q("[data-rule]").forEach((el) =>
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }),
        );
        // Staggered rows / blocks
        q("[data-rows]").forEach((el) =>
          gsap.from(el.querySelectorAll("[data-row]"), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 80%" },
          }),
        );
        // Image clip-path wipe
        q("[data-clip]").forEach((el) =>
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.3,
              ease: "power4.inOut",
              scrollTrigger: { trigger: el, start: "top 80%" },
            },
          ),
        );
        // Parallax inside image frames
        q("[data-parallax]").forEach((el) =>
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, scrub: true },
            },
          ),
        );
        // Header hides on scroll down, returns on scroll up
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (s) =>
            gsap.to("#hdr", {
              yPercent: s.direction === 1 && s.scroll() > 200 ? -100 : 0,
              duration: 0.4,
              overwrite: true,
            }),
        });
      },
      root,
    );
    return () => {
      mm.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  const words = (s: string) =>
    s.split(" ").map((w, i) => (
      <span key={i} data-word>
        {w}{" "}
      </span>
    ));

  return (
    <div ref={root}>
      <header
        id="hdr"
        className={`fixed inset-x-0 top-0 z-40 flex h-[100px] items-center justify-between ${pad}`}
      >
        <a href="#" className="text-3xl font-semibold tracking-tight">
          joeveloper®
        </a>
        <span className={`hidden md:block ${eyebrow}`}>
          Digital Transformation / AI / Technology
        </span>
        <button
          onClick={() => setOpen(true)}
          className="group px-4 py-3 text-sm font-medium uppercase tracking-widest"
        >
          Menu{" "}
          <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
            +
          </span>
        </button>
      </header>

      {/* Menu overlay */}
      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-ink transition-transform duration-700 [transition-timing-function:cubic-bezier(.76,0,.24,1)] ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className={`flex h-[100px] items-center justify-between ${pad}`}>
          <span className="text-3xl font-semibold tracking-tight">
            joeveloper®
          </span>
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm font-medium uppercase tracking-widest"
          >
            Close ×
          </button>
        </div>
        <ul className={`grid gap-x-12 md:grid-cols-2 ${pad} pt-8`}>
          {links.map((l, i) => (
            <li
              key={l}
              style={{ transitionDelay: open ? `${300 + i * 70}ms` : "0ms" }}
              className={`border-t border-white/20 transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-4 text-4xl font-semibold tracking-tight md:text-6xl"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-4">
                  {l}
                </span>
                <span className="text-3xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {/* Hero — replace placeholder with a 12–18s seamless muted loop <video> + poster */}
        <section
          id="home"
          className="relative flex min-h-[800px] items-end overflow-hidden pb-24 pt-[200px]"
        >
          {/* <Placeholder label="Hero video poster" className="absolute inset-0" /> */}
          {/* <video
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video> */}
          <img
            src="/images/hero.png"
            alt="Hero video poster"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className={`relative ${pad}`}>
            <p className={`${eyebrow} mb-8`}>
              Transformation / Technology / People
            </p>
            <h1 data-lines className={big}>
              <L>We make</L>
              <L>technology</L>
              <L>work.</L>
            </h1>
            <p className="mt-10 max-w-xl text-lg opacity-80">
              We transform processes, products and possibilities through AI,
              software and digital expertise.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-block text-sm font-medium uppercase tracking-widest"
            >
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-paper">
                Discover Joeveloper
              </span>
              <span className="ml-2 inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </section>

        {/* Statement */}
        <section className={`${pad} py-32`}>
          <p className={`${eyebrow} mb-12`}>
            We connect strategy with execution
          </p>
          <h2
            data-scrub
            className={h2 + " max-w-4xl text-[clamp(2.5rem,8vw,7rem)]"}
          >
            {words("Progress is not a buzzword.")}
          </h2>
          <p className="mt-10 text-2xl font-medium">
            It is the work we deliver.
          </p>
          <p className="mt-6 max-w-2xl opacity-70">
            Consulting, engineering and people-focused digital adoption — all
            working together.
          </p>
        </section>

        {/* Services */}
        <section id="services" className={`${pad} py-24`}>
          <p className={`${eyebrow} mb-6`}>01 / Capabilities</p>
          <h2 data-lines className={`${h2} mb-16`}>
            <L>What we do.</L>
          </h2>
          <div data-rows>
            {services.map((s, i) => (
              <div key={s} data-row>
                <div data-rule className="h-px bg-white/25" />
                <a
                  href="#"
                  className="group flex items-center gap-6 py-8 transition-colors hover:text-accent md:gap-16"
                >
                  <span className="text-sm opacity-60">0{i + 1}</span>
                  <span className="flex-1 text-2xl font-semibold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-4 md:text-4xl">
                    {s}
                  </span>
                  <span className="text-3xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            ))}
            <div data-rule className="h-px bg-white/25" />
          </div>
        </section>

        {/* Work */}
        <section id="products" className={`${pad} py-24`}>
          <p className={`${eyebrow} mb-6`}>02 / Work & Innovation</p>
          <h2 data-lines className={`${h2} mb-16`}>
            <L>Ideas made tangible.</L>
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div data-clip>
              {/* <Placeholder
                label="Attengram — product image"
                className="aspect-[700/390]"
              /> */}
              <img
                src="/images/attengram.png"
                alt="Attengram — product image"
                className="aspect-[700/390]"
              />
            </div>
            <div data-rows>
              <p data-row className={`${eyebrow} mb-6`}>
                Attengram / Education Technology
              </p>
              <h3 data-row className="text-3xl font-semibold tracking-tight">
                From attendance to student intelligence.
              </h3>
              <p data-row className="mt-6 opacity-70">
                An education analytics platform designed to turn everyday
                academic data into meaningful insight.
              </p>
              <a
                data-row
                href="https://www.attengram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-block text-sm font-medium uppercase tracking-widest"
              >
                <span className="border-b border-transparent pb-1 transition-colors group-hover:border-paper">
                  View the product
                </span>
                <span className="ml-2 inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Global presence */}
        <section
          id="about"
          className={`${pad} grid items-center gap-12 py-24 md:grid-cols-2`}
        >
          <div>
            <p className={`${eyebrow} mb-6`}>03 / Where we work</p>
            <h2 data-lines className={`${h2} mb-16`}>
              <L>Built across borders.</L>
            </h2>
            <p
              data-lines
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold uppercase leading-none tracking-tight"
            >
              <L>Lagos / Paris</L>
            </p>
            <p className="mt-4 opacity-70">Locally present. Globally minded.</p>
          </div>
          <div data-clip>
            <img
              src="/images/global-team.png"
              alt="Global team image"
              className="aspect-[480/368]"
            />
          </div>
        </section>

        {/* Contact + footer */}
        <section id="contact" className={`${pad} pt-32`}>
          <p className={`${eyebrow} mb-10`}>Ready to make progress?</p>
          <h2 data-lines className={big}>
            <L>Let’s make</L>
            <L>it happen.</L>
          </h2>
          <a
            href="mailto:hello@joeveloper.com"
            className="group mt-14 inline-flex items-center gap-3 border border-white/40 px-8 py-5 text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            Book a consultation{" "}
            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <div data-rule className="mt-24 h-px bg-white/25" />
          <footer className="flex items-center justify-between py-8">
            <span className="text-2xl font-semibold">joeveloper®</span>
            <span className={eyebrow}>Lagos · Paris · Global</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
