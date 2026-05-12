import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Wrench, Clock, Zap } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2, ease: "easeOut" });
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Wrench, value: 5000, suffix: "+", label: "Repairs Done" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support" },
  { icon: Zap, value: 60, suffix: "min", label: "Avg Response" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Numbers that <span className="text-gradient-ice">stay cold.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl glass-strong p-6 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary glow-ice/30">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 text-4xl font-bold text-gradient-ice glow-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
