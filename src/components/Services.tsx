import { motion } from "framer-motion";
import {
  Wind, Wrench, Refrigerator, Snowflake, Zap, Plug,
  Fuel, Cable, WashingMachine,
} from "lucide-react";

const services = [
  { icon: Wind, title: "AC Repair", desc: "Diagnostics, gas leak fixes, cooling restoration." },
  { icon: Wrench, title: "AC Installation", desc: "Split & inverter unit setup with leak‑proof piping." },
  { icon: Refrigerator, title: "Refrigerator Repair", desc: "Compressor, thermostat & gas top‑up." },
  { icon: Snowflake, title: "Deep Freezer Repair", desc: "Commercial & domestic deep freezer service." },
  { icon: Zap, title: "Electric Work", desc: "Lighting, sockets, breakers & full home electrical." },
  { icon: Plug, title: "Inverter AC Service", desc: "PCB checks, sensor replacement, full tune‑up." },
  { icon: Fuel, title: "Gas Charging", desc: "R22, R32, R410a refrigerant recharge with vacuuming." },
  { icon: Cable, title: "Wiring Services", desc: "New wiring, rewiring & safety upgrades." },
  { icon: WashingMachine, title: "Washing Machine Repair", desc: "Motor, drum & control board servicing." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Cooling & electrical, <span className="text-gradient-ice">done right.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            One trusted team for every cold‑chain and electrical need in Vehari.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.85 0.18 210 / 0.18), transparent 60%)" }}
              />
              <div className="absolute inset-x-0 top-0 h-px animate-shimmer opacity-0 group-hover:opacity-100" />
              <span className="relative inline-grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-ice)]/10 border-ice text-primary glow-ice/40 group-hover:animate-float">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="relative mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-primary/80">
                <span>Book service</span>
                <span className="h-px w-8 bg-primary/60 transition-all group-hover:w-14" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
