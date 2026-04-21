import girl from "@/assets/girl-tech.jpg";

export const Identity = () => (
  <section id="identity" className="relative py-32 overflow-hidden">
    {/* Big aura */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl animate-float" />
    </div>

    <div className="container">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden neon-border animate-pulse-glow">
            <img
              src={girl}
              alt="Portrait of a woman engineer with neon code reflections"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-mono text-xs text-primary-glow mb-1">// status</div>
              <div className="font-display text-xl text-foreground">building the future, one commit at a time</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 05 — manifesto</span>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-[1.05]">
            Coding isn't just <span className="text-muted-foreground/80 line-through">logic</span>.
          </h2>
          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05] mt-2">
            It's <span className="text-gradient animate-gradient bg-gradient-neon bg-clip-text">creativity, intuition, and power.</span>
          </h2>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            I write software the way artists paint — with discipline, with feeling, with edge.
            Tech doesn't have a gender, but the way I show up in it absolutely does.
            And that's a feature, not a bug.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {["she/her", "engineer", "builder"].map((tag) => (
              <div key={tag} className="text-center p-4 rounded-xl glass">
                <span className="font-mono text-sm text-gradient">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
