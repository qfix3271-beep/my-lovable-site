import { useEffect, useState } from "react";
import { Snowflake, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong glow-ice/30" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-ice)] text-primary-foreground glow-ice">
              <Snowflake className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-xs tracking-[0.25em] text-primary uppercase">Pakistan</div>
              <div className="text-sm font-semibold">Refrigeration & Electric</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+923039007386"
            className="hidden rounded-xl bg-[var(--gradient-ice)] px-4 py-2 text-sm font-semibold text-primary-foreground glow-ice transition-transform hover:scale-105 md:block"
          >
            Call Now
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-4 md:hidden animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-foreground/80 hover:bg-white/5 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+923039007386"
                className="mt-2 rounded-xl bg-[var(--gradient-ice)] px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Call +92 303 9007386
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
