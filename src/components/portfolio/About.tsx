import { Brain, Code2, Sparkles, Target } from "lucide-react";

const traits = [
  { icon: Brain, label: "Problem Solver", desc: "I dissect complex challenges into elegant systems." },
  { icon: Code2, label: "Clean Code", desc: "Architecture and craft over quick hacks." },
  { icon: Sparkles, label: "AI Native", desc: "Building with LLMs, vector search & ML pipelines." },
  { icon: Target, label: "Outcome Driven", desc: "Code that ships, scales and creates real impact." },
];

export const About = () => (
  <section id="about" className="relative py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 01 — about</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Engineer by training.<br />
            <span className="text-gradient">Creator</span> by nature.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a software engineer obsessed with the intersection of{" "}
              <span className="text-foreground font-medium">artificial intelligence</span>,
              full-stack architecture, and the kind of design that doesn't just work — it sings.
            </p>
            <p>
              From neural nets to pixel-perfect interfaces, I treat every line of code as a
              creative act. 
            </p>
            <p className="font-mono text-sm text-primary-glow/80">
              <span className="text-muted-foreground">// </span>currently exploring agentic systems & generative UI
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <div
              key={t.label}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover-lift neon-border animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary glow-primary group-hover:scale-110 transition-smooth">
                <t.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
