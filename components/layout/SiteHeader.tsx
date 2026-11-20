"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Primitives";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Products", href: "/#products" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  useEffect(() => {
    dismiss();
  }, [path, dismiss]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss(true);
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const elements = Array.from(menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((el) => el.getClientRects().length > 0);
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
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
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Joeveloper home">
          joeveloper<span className="trademark">®</span>
        </Link>
        <span className="header-caption">DIGITAL TRANSFORMATION / AI / TECHNOLOGY</span>
        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          MENU <span aria-hidden="true">+</span>
        </button>
      </header>
      <nav
        ref={menuRef}
        id="site-menu"
        aria-label="Main navigation"
        aria-hidden={!open}
        className={open ? "menu-overlay is-open" : "menu-overlay"}
        inert={!open}
      >
        <div className="menu-top container-wide">
          <Link href="/" className="wordmark" onClick={() => dismiss()}>
            joeveloper<span className="trademark">®</span>
          </Link>
          <span className="menu-top-label">EXPLORE</span>
          <button ref={closeRef} type="button" className="close-trigger" onClick={() => dismiss(true)}>
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="menu-content container-wide">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="menu-link"
              aria-current={item.href === path ? "page" : undefined}
              onClick={() => dismiss()}
            >
              <span>{item.label}</span><Arrow />
            </Link>
          ))}
        </div>
        <div className="menu-bottom container-wide">
          <span>LAGOS / PARIS / GLOBAL</span>
          <Link href="/#contact" onClick={() => dismiss()}>
            START A CONVERSATION <Arrow />
          </Link>
        </div>
      </nav>
    </>
  );
}
