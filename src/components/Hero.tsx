import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Sparkles, Snowflake } from "lucide-react";
import hero from "@/assets/hero-ac.jpg";

const phrases = [
  "Cooling Experts You Can Trust",
  "We Bring Back The Cold",
  "Premium AC & Refrigerator Repair",
];

function useTyping(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setIdx((i) => (i + 1) % words.length);
          }
        }
      },
      del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(phrases);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="AC repair specialist with ice blue lighting"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,oklch(0.2_0.08_230/0.6),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Floating icons */}
      <Snowflake className="absolute left-[8%] top-[30%] h-10 w-10 text-primary/40 animate-float" style={{ animationDelay: "0s" }} />
      <Snowflake className="absolute right-[12%] top-[22%] h-6 w-6 text-accent/40 animate-float" style={{ animationDelay: "1s" }} />
      <Sparkles className="absolute right-[20%] bottom-[28%] h-8 w-8 text-primary/30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Vehari · Open Now
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-ice glow-text">Pakistan</span>
          <br />
          <span className="text-foreground">Refrigeration</span>
          <span className="text-primary"> & </span>
          <span className="text-foreground">Electric</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Professional AC, Refrigerator & Electric Repair Services in Vehari.
          Same‑day service. Expert technicians. Affordable rates.
        </motion.p>

        <div className="mt-4 h-7 text-sm font-medium text-primary md:text-base">
          <span className="glow-text">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 bg-primary animate-flicker" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="tel:+923039007386"
            className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--gradient-ice)] px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ice transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href="https://wa.me/923039007386"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl glass-strong px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border-ice px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Get Free Inspection
          </a>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            ["10+", "Years"],
            ["5000+", "Repairs"],
            ["24/7", "Support"],
            ["Same Day", "Service"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl glass p-4 text-center">
              <div className="text-2xl font-bold text-gradient-ice">{v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
