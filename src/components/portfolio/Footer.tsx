export const Footer = () => (
  <footer className="relative border-t border-border/50 py-10 mt-20">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurora Vega — crafted with <span className="text-primary-glow">code</span> & <span className="text-secondary">caffeine</span>
      </div>
      <div className="font-mono text-xs text-muted-foreground">
        designed & built from scratch ✦
      </div>
    </div>
  </footer>
);
