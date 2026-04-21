import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "Full-Stack Developer", "Problem Solver", "Code Architect"];

export const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid z-0" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono text-muted-foreground mb-8 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span>Open to new opportunities</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground/90">Aurora</span>
            <span className="block text-gradient animate-gradient bg-gradient-neon bg-clip-text text-transparent">
              Vega
            </span>
          </h1>

          <p className="font-mono text-base sm:text-lg text-muted-foreground mb-4 animate-fade-up min-h-[1.5em]" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary-glow">{">"}</span> Software Engineer | <span className="text-foreground">{text}</span>
            <span className="animate-blink text-primary-glow">_</span>
          </p>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Building code that turns <span className="text-foreground font-medium">ideas into reality</span>.
            Where logic meets <span className="text-gradient font-semibold">intuition</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow-primary hover:glow-violet transition-smooth hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass border border-border px-7 py-3.5 font-medium text-foreground hover:border-primary/50 hover:glow-soft transition-smooth"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { v: "5+", l: "Years coding" },
              { v: "30+", l: "Projects shipped" },
              { v: "12+", l: "Tech stacks" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono uppercase tracking-widest">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
