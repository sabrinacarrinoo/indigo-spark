import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent ✨", { description: "I'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-glow">/ 06 — contact</span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-tight">
              Let's build something <span className="text-gradient">amazing</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Open to senior engineering roles, AI consulting, and ambitious collaborations.
              The weirder the idea, the better.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { i: Mail, l: "hello@sabrina.dev", h: "mailto:hello@sabrina.dev" },
                { i: Linkedin, l: "linkedin.com/in/sabrina", h: "#" },
                { i: Github, l: "github.com/sabrina", h: "#" },
              ].map((c) => (
                <a
                  key={c.l}
                  href={c.h}
                  className="group flex items-center gap-4 rounded-xl glass p-4 hover:border-primary/50 hover:glow-soft transition-smooth"
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-soft group-hover:glow-primary transition-smooth">
                    <c.i className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-mono text-sm text-foreground">{c.l}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 neon-border space-y-5 h-fit">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                required
                type="text"
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-soft transition-smooth"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-soft transition-smooth"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label htmlFor="msg" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="msg"
                required
                rows={5}
                className="w-full rounded-xl bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-soft transition-smooth resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-medium text-primary-foreground glow-primary hover:glow-violet transition-smooth hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
