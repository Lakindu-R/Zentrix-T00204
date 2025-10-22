import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../../public/logo.webp';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'How to works', href: '#how' },
  { name: 'Technology', href: '#tech' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Community', href: '#community' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].href);
  const containerRef = useRef<HTMLDivElement | null>(null); // nav links container
  const linksRef = useRef<(HTMLLIElement | null)[]>([]); // refs to each link element
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // position the animated underline under the active link
  function updateUnderline() {
    const idx = NAV_LINKS.findIndex((l) => l.href === active);
    const el = linksRef.current[idx];
    const container = containerRef.current;
    const underline = underlineRef.current;
    if (!el || !underline || !container) return;

    const elRect = el.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();

    const left = elRect.left - contRect.left;
    underline.style.transform = `translateX(${left}px)`;
    underline.style.width = `${elRect.width}px`;
  }

  // scroll-spy: observe sections by id and set active when intersecting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0,
    };

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace('#', '');
      const section = document.getElementById(id);
      if (!section) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(link.href);
          }
        });
      }, options);
      obs.observe(section);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // update underline on active change, resize, font load, etc.
  useEffect(() => {
    updateUnderline();
    const onResize = () => updateUnderline();
    window.addEventListener('resize', onResize);
    // also recalc when fonts/images loaded
    window.addEventListener('load', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };
  }, [active, mobileOpen]);

  // close mobile menu when clicking a link
  function handleLinkClick(href: string) {
    setActive(href);
    setMobileOpen(false);
    // scroll behavior - smooth to section
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* Backdrop blur overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className="sticky max-w-[1680px] top-0 z-50 my-[32px] mx-auto">
        <nav className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between rounded-full border border-white bg-black px-6 py-3">
            {/* Left: Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <a href="">
                    <img src={Logo} alt="" className=''/>
                  </a>
                </div>
              </div>
            </div>

            {/* links */}
            <div className="hidden xl:flex xl:flex-1 xl:justify-center">
              <div ref={containerRef} className="relative inline-block">
                <ul className="flex items-center gap-8 text-white">
                  {NAV_LINKS.map((link, idx) => (
                    <li
                      key={link.href}
                      ref={(el) => {
                        linksRef.current[idx] = el;
                      }}
                      className="relative"
                    >
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className={`px-1 py-1 text-sm transition-colors ${
                          active === link.href ? 'text-white' : 'text-white/80'
                        }`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* underline */}
                <span
                  ref={underlineRef}
                  className="absolute bottom-0 left-0 h-[2px] bg-white transition-transform duration-300"
                  style={{ width: 0, transform: 'translateX(0)' }}
                  aria-hidden
                />
              </div>
            </div>

            {/*button + mobile toggle */}
            <div className="flex items-center gap-4">
              <button className="hidden items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:opacity-95 xl:inline-flex">
                Get Demo →
              </button>

              {/* Mobile hamburger */}
              <button
                className="inline-flex items-center justify-center rounded-full border border-white p-2 text-white xl:hidden"
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
              >
                {/* simple hamburger icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu (below navbar) */}
          <div
            className={`relative z-50 mt-3 overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden ${
              mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-lg border border-white bg-black/95 p-4">
              <ul className="flex flex-col gap-3 text-white">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full px-3 py-2 text-left text-sm ${
                        active === link.href
                          ? 'underline underline-offset-4'
                          : ''
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button className="w-full rounded-full bg-white px-4 py-2 text-black">
                    Get Demo →
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
