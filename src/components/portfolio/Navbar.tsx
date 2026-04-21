import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/web-apps", label: "Web Apps" },
  { href: "/#identity", label: "Manifesto" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-smooth",
            scrolled ? "glass glow-soft" : "bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary glow-primary">
              <span className="font-mono text-sm">S</span>
            </span>
            <span className="text-gradient">sabrina.dev</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-neon group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 hover:glow-primary transition-smooth"
          >
            <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse-glow" />
            Available
          </a>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-6 bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-6 bg-foreground transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-6 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
