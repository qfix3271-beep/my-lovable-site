import { Snowflake } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Snowflake className="h-4 w-4 text-primary" />
          <span>© {new Date().getFullYear()} Pakistan Refrigeration & Electric Service · Vehari</span>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-primary/80">We Bring Back The Cold</div>
      </div>
    </footer>
  );
}
