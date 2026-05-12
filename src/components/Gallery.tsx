import { motion } from "framer-motion";
import g1 from "@/assets/hero-ac.jpg";
import g2 from "@/assets/g-fridge.jpg";
import g3 from "@/assets/g-ac.jpg";
import g4 from "@/assets/g-electric.jpg";
import g5 from "@/assets/g-freezer.jpg";

const items = [
  { src: g1, label: "AC Diagnostics", span: "lg:col-span-2 lg:row-span-2" },
  { src: g2, label: "Refrigerator Service", span: "" },
  { src: g3, label: "Outdoor Unit", span: "" },
  { src: g4, label: "Electric Panel", span: "lg:col-span-2" },
  { src: g5, label: "Deep Freezer", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Work Gallery</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">From the <span className="text-gradient-ice">field.</span></h2>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl border-ice ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
              <figcaption className="absolute bottom-3 left-4 text-sm font-medium text-foreground/90 glow-text">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
