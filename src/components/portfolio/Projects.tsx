import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "NeuroDesk",
    desc: "AI-powered productivity workspace with agentic task execution and multi-model orchestration.",
    stack: ["Next.js", "OpenAI", "Postgres", "tRPC"],
    accent: "from-primary to-secondary",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    name: "Lumen UI",
    desc: "Open-source design system for dark, glow-rich interfaces. Used in 2k+ projects.",
    stack: ["React", "Tailwind", "Storybook"],
    accent: "from-secondary to-accent",
    github: "#",
    demo: "#",
  },
  {
    name: "Echo Vector",
    desc: "Semantic search engine for technical docs with hybrid retrieval & re-ranking.",
    stack: ["Python", "FastAPI", "Qdrant"],
    accent: "from-accent to-primary",
    github: "#",
    demo: "#",
  },
  {
    name: "Pulse Analytics",
    desc: "Real-time event analytics with sub-100ms streaming dashboards.",
    stack: ["Bun", "ClickHouse", "WebSockets"],
    accent: "from-primary to-accent",
    github: "#",
  },
  {
    name: "Sigil",
    desc: "Developer-first auth library with passkeys, magic links, and MFA out of the box.",
    stack: ["TypeScript", "Edge", "WebAuthn"],
    accent: "from-secondary to-primary",
    github: "#",
  },
];

export const Projects = () => (
  <section id="projects" className="relative py-32">
    <div className="container">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 03 — projects</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Recent <span className="text-gradient">builds</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A selection of products, libraries and experiments — from AI agents to design systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`group relative overflow-hidden rounded-2xl glass p-7 hover-lift neon-border animate-fade-up flex flex-col ${
              p.featured ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Glow gradient */}
            <div
              className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
            />

            <div className="relative flex items-start justify-between mb-5">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.accent} glow-soft flex items-center justify-center font-display font-bold text-primary-foreground text-lg`}>
                {p.name[0]}
              </div>
              <div className="flex gap-2">
                <a
                  href={p.github}
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-soft transition-smooth"
                  aria-label={`${p.name} GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-soft transition-smooth"
                    aria-label={`${p.name} demo`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="relative font-display font-bold text-2xl mb-2 text-foreground group-hover:text-gradient transition-smooth">
              {p.name}
            </h3>
            <p className="relative text-muted-foreground leading-relaxed mb-6 flex-1">
              {p.desc}
            </p>

            <div className="relative flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
