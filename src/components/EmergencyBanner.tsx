import { Zap } from "lucide-react";

export function EmergencyBanner() {
  return (
    <a
      href="tel:+923039007386"
      className="group block border-y border-primary/30 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 text-sm">
        <Zap className="h-4 w-4 animate-flicker text-primary glow-text" />
        <span className="text-foreground/90">
          <span className="font-semibold text-primary">Emergency?</span> 24/7 service available — tap to call now
        </span>
        <span className="hidden font-mono text-primary/90 sm:inline">+92 303 9007386</span>
      </div>
    </a>
  );
}
