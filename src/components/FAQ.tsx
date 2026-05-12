import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do you offer same‑day AC repair in Vehari?", a: "Yes — for most calls received before 6 PM we dispatch a technician the same day across Vehari city and nearby areas." },
  { q: "How much does AC gas charging cost?", a: "It depends on the refrigerant (R22, R32, R410a) and unit size. We share a transparent quote on the spot, no hidden fees." },
  { q: "Do you repair inverter ACs and PCBs?", a: "Absolutely. Our technicians are trained on inverter PCBs, sensors and compressor tuning for all major brands." },
  { q: "Is there a warranty on repairs?", a: "Yes. Standard repairs come with a service warranty. Genuine spare parts include the manufacturer's warranty." },
  { q: "Do you handle home electrical work too?", a: "Yes — wiring, rewiring, panel upgrades, lighting, and emergency electrical fixes are all part of our service." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">FAQ</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Quick <span className="text-gradient-ice">answers.</span></h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`overflow-hidden rounded-2xl glass transition-all ${isOpen ? "border-primary/40" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium sm:text-base">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
