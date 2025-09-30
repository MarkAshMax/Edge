"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

const focusableSelectors = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
].join(",");

const supportsInert = typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const node = document.createElement("div");
    node.className = "mobile-nav-root";
    document.body.appendChild(node);
    portalRef.current = node;
    setMounted(true);
    return () => {
      document.body.removeChild(node);
      portalRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? (document.activeElement as HTMLElement) : null;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(focusableSelectors);
      if (focusable.length === 0) {
        event.preventDefault();
        panel.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(focusableSelectors);
    const toFocus = focusable && focusable.length ? focusable[0] : panel;
    toFocus?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      previouslyFocused.current?.focus?.();
      return;
    }
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.dataset.navOpen = "true";
    body.style.overflow = "hidden";

    const inertElements: { element: HTMLElement; ariaHidden?: string | null; pointerEvents?: string }[] = [];
    document.querySelectorAll<HTMLElement>("body > *").forEach((el) => {
      if (el === portalRef.current) return;
      if (supportsInert) {
        (el as HTMLElement & { inert: boolean }).inert = true;
        inertElements.push({ element: el });
      } else {
        inertElements.push({
          element: el,
          ariaHidden: el.getAttribute("aria-hidden"),
          pointerEvents: el.style.pointerEvents,
        });
        el.setAttribute("aria-hidden", "true");
        el.style.pointerEvents = "none";
      }
    });

    return () => {
      body.dataset.navOpen = "false";
      body.style.overflow = previousOverflow;
      inertElements.forEach(({ element, ariaHidden, pointerEvents }) => {
        if (supportsInert) {
          (element as HTMLElement & { inert: boolean }).inert = false;
        } else {
          if (ariaHidden === null) {
            element.removeAttribute("aria-hidden");
          } else {
            element.setAttribute("aria-hidden", ariaHidden);
          }
          element.style.pointerEvents = pointerEvents ?? "";
        }
      });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    onClose();
  }, [pathname, isOpen, onClose]);

  const navContent = useMemo(() => {
    if (!mounted || !portalRef.current) return null;

    return createPortal(
      <div data-open={isOpen} className="mobile-nav-overlay" aria-hidden={!isOpen}>
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation"
          onClick={onClose}
          data-testid="mobile-nav-backdrop"
        />
        <div
          ref={panelRef}
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          tabIndex={-1}
        >
          <div className="mobile-nav-header">
            <span className="mobile-nav-brand">Edge! Studio</span>
            <button type="button" className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav id="mobile-nav" role="navigation" className="mobile-nav-body">
            <ul className="mobile-nav-list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="mobile-nav-link" onClick={onClose}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-nav-footer">
            <Link href="/design" className="mobile-nav-cta">
              Start Designing
            </Link>
            <div className="mobile-nav-meta">
              <span>Support 9am – 6pm GMT</span>
              <span>Live chat · hello@edge.design</span>
            </div>
          </div>
        </div>
      </div>,
      portalRef.current
    );
  }, [isOpen, links, mounted, onClose]);

  return navContent;
}
