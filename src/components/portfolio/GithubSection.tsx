import { GitFork, Github, Star, Users } from "lucide-react";

const repos = [
  { name: "lumen-ui", desc: "Glow-rich React UI kit", stars: "2.4k", forks: "180", lang: "TypeScript" },
  { name: "echo-vector", desc: "Hybrid semantic search", stars: "890", forks: "62", lang: "Python" },
  { name: "sigil-auth", desc: "Passkey-first auth lib", stars: "1.2k", forks: "94", lang: "TypeScript" },
];

export const GithubSection = () => (
  <section className="relative py-32">
    <div className="container">
      <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 04 — open source</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
              I build in the <span className="text-gradient">open</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Open source is where I learned, taught, and shipped my best work. Contributions welcome.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { i: Star, v: "4.8k", l: "Stars" },
                { i: GitFork, v: "420", l: "Forks" },
                { i: Users, v: "150+", l: "Contributors" },
              ].map((s) => (
                <div key={s.l} className="text-center p-4 rounded-xl bg-muted/30 border border-border">
                  <s.i className="h-5 w-5 mx-auto text-primary-glow mb-2" />
                  <div className="font-display font-bold text-2xl text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground font-mono">{s.l}</div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow-primary hover:glow-violet transition-smooth hover:scale-105"
            >
              <Github className="h-4 w-4" />
              View Full Profile
            </a>
          </div>

          <div className="space-y-3">
            {repos.map((r, i) => (
              <a
                key={r.name}
                href="#"
                className="group block rounded-xl glass p-5 hover:border-primary/40 hover:glow-soft transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono font-medium text-foreground group-hover:text-primary-glow transition-smooth">
                      {r.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{r.lang}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
