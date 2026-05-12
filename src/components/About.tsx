import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import img from "@/assets/g-ac.jpg";

const features = [
  "Same Day Service",
  "Expert Technicians",
  "Affordable Rates",
  "Emergency Support",
  "Genuine Parts",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border-ice glow-ice/40">
            <img
              src={img}
              alt="Workshop"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/10" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass-strong px-6 py-4 sm:block">
            <div className="text-3xl font-bold text-gradient-ice">10+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Years in Vehari</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
            About Us
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Cold air, clean wires, <span className="text-gradient-ice">zero hassle.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pakistan Refrigeration and Electric Service provides expert cooling and electrical solutions in Vehari with fast service, experienced technicians, and affordable pricing. From a single split AC to a full shop‑wide rewiring, we show up on time and finish clean.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+923039007386" className="rounded-2xl bg-[var(--gradient-ice)] px-5 py-3 text-sm font-semibold text-primary-foreground glow-ice">Call the team</a>
            <a href="#contact" className="rounded-2xl border-ice px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10">Get free inspection</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
