const groups = [
  {
    title: "Frontend",
    color: "from-primary to-secondary",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "from-accent to-primary",
    skills: [
      { name: "Node.js / Bun", level: 90 },
      { name: "Python / FastAPI", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Edge Functions", level: 82 },
    ],
  },
  {
    title: "AI & Data",
    color: "from-secondary to-accent",
    skills: [
      { name: "LLMs / RAG", level: 90 },
      { name: "PyTorch", level: 78 },
      { name: "Vector DBs", level: 85 },
      { name: "LangChain", level: 80 },
    ],
  },
];

const tools = [
  "Git", "Docker", "AWS", "Vercel", "Supabase", "Figma", "Linear", "Vitest",
  "GraphQL", "Redis", "Kubernetes", "OpenAI", "Anthropic", "Hugging Face",
];

export const Skills = () => (
  <section id="skills" className="relative py-32">
    <div className="container">
      <div className="text-center mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 02 — skills</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
          The <span className="text-gradient">stack</span> behind the magic
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {groups.map((g, gi) => (
          <div
            key={g.title}
            className="glass rounded-2xl p-6 neon-border animate-fade-up"
            style={{ animationDelay: `${gi * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-10 w-1 rounded-full bg-gradient-to-b ${g.color}`} />
              <h3 className="font-display font-bold text-xl">{g.title}</h3>
            </div>
            <div className="space-y-5">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${g.color} relative`}
                      style={{ width: `${s.level}%` }}
                    >
                      <div className="absolute inset-0 shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
          // toolbox
        </p>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-primary/10 transition-smooth cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
