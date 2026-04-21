import { ArrowLeft, ArrowUpRight, Github, Mail, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { WavyAccent } from "@/components/portfolio/WavyAccent";
import { useEffect } from "react";

const webApps = [
  {
    name: "TaskForge",
    desc: "Collaborative task management web app with real-time sync, drag-and-drop boards and AI-assisted prioritization.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
    accent: "from-primary to-secondary",
    github: "#",
    demo: "#",
    tag: "SaaS",
  },
  {
    name: "PixelPress",
    desc: "Headless CMS dashboard for content creators — markdown-first, blazing fast, with one-click deploys.",
    stack: ["Next.js", "tRPC", "Postgres"],
    accent: "from-secondary to-accent",
    github: "#",
    demo: "#",
    tag: "Dashboard",
  },
  {
    name: "Lumen Booking",
    desc: "Modern booking & scheduling web app for studios and freelancers with Stripe checkout and calendar sync.",
    stack: ["React", "Node.js", "Stripe", "Postgres"],
    accent: "from-accent to-primary",
    github: "#",
    demo: "#",
    tag: "Marketplace",
  },
  {
    name: "Orbit Chat",
    desc: "Real-time team chat app with threads, presence, file sharing and voice rooms over WebRTC.",
    stack: ["React", "WebSockets", "WebRTC", "Redis"],
    accent: "from-primary to-accent",
    github: "#",
    demo: "#",
    tag: "Real-time",
  },
  {
    name: "Insight Studio",
    desc: "Analytics web app for indie founders — funnels, retention and AI-generated insights from raw events.",
    stack: ["React", "ClickHouse", "OpenAI"],
    accent: "from-secondary to-primary",
    github: "#",
    demo: "#",
    tag: "Analytics",
  },
  {
    name: "Nova Portfolio",
    desc: "Portfolio builder for creatives with live theme editor, custom domains and zero-config deploys.",
    stack: ["React", "Vite", "Tailwind", "Edge Functions"],
    accent: "from-accent to-secondary",
    github: "#",
    demo: "#",
    tag: "Builder",
  },
];

const WebApps = () => {
  useEffect(() => {
    document.title = "Web Apps — Sabrina | Available for Custom Builds";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-grid z-0 opacity-50" />

        <div className="container relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary-glow transition-smooth mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono text-muted-foreground mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span>Available for new projects</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-7xl tracking-tight leading-[1.05] mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground/90">Web Apps</span>
              <span className="block text-gradient animate-gradient bg-gradient-neon bg-clip-text text-transparent">
                I build & ship.
              </span>
            </h1>

            <div className="max-w-md mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <WavyAccent strokeWidth={3} />
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              A collection of <span className="text-foreground font-medium">web applications</span> I've designed and developed —
              from SaaS dashboards to real-time collaborative tools. <span className="text-gradient font-semibold">I'm available to build custom web apps</span> for your idea, business or startup.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow-primary hover:glow-violet transition-smooth hover:scale-105"
              >
                <Zap className="h-4 w-4" />
                Hire me to build yours
              </a>
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-2 rounded-full glass border border-border px-7 py-3.5 font-medium text-foreground hover:border-primary/50 hover:glow-soft transition-smooth"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of web apps */}
      <section className="relative pb-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ all — web apps</span>
            <span className="font-mono text-xs text-muted-foreground">{webApps.length} projects</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {webApps.map((p, i) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-2xl glass p-7 hover-lift neon-border animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />

                <div className="relative flex items-start justify-between mb-5">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.accent} glow-soft flex items-center justify-center font-display font-bold text-primary-foreground text-lg`}>
                    {p.name[0]}
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-primary-glow">
                    {p.tag}
                  </span>
                </div>

                <h3 className="relative font-display font-bold text-2xl mb-2 text-foreground group-hover:text-gradient transition-smooth">
                  {p.name}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>

                <div className="relative flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="relative flex gap-2">
                  <a href={p.github} className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-soft transition-smooth" aria-label={`${p.name} GitHub`}>
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.demo} className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-soft transition-smooth" aria-label={`${p.name} demo`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Availability CTA */}
      <section id="contact-cta" className="relative py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl glass neon-border p-10 sm:p-16 text-center">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/25 blur-3xl animate-float" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono text-muted-foreground mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                <span>Currently accepting new clients</span>
              </div>

              <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight mb-6">
                Got an idea? <br />
                <span className="text-gradient animate-gradient bg-gradient-neon bg-clip-text text-transparent">
                  I'll turn it into a web app.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                I'm available to design and develop custom web applications — from MVP to production.
                Dashboards, SaaS, marketplaces, internal tools. Let's build something amazing together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-medium text-primary-foreground glow-primary hover:glow-violet transition-smooth hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  Start a project with me
                </Link>
                <a
                  href="mailto:hello@sabrina.dev"
                  className="group inline-flex items-center gap-2 rounded-full glass border border-border px-8 py-4 font-medium text-foreground hover:border-primary/50 hover:glow-soft transition-smooth"
                >
                  hello@sabrina.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WebApps;
