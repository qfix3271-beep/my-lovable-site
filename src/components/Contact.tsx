import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Let&apos;s bring back the <span className="text-gradient-ice">cold.</span></h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: MapPin, title: "Address", value: "Pakistan Refrigeration & Electric Service, Vehari" },
              { icon: Phone, title: "Phone", value: "+92 303 9007386", href: "tel:+923039007386" },
              { icon: Clock, title: "Open Hours", value: "Open Daily — Closes 10 PM" },
              { icon: Mail, title: "WhatsApp", value: "Message us anytime", href: "https://wa.me/923039007386" },
            ].map((c) => (
              <motion.a
                key={c.title}
                href={c.href || "#"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 rounded-2xl glass p-5 transition hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary glow-ice/30">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
                  <div className="mt-1 text-sm font-medium">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="overflow-hidden rounded-2xl border-ice">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Vehari,Pakistan&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.8)" }}
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl glass-strong p-6 sm:p-8 lg:col-span-3"
          >
            <h3 className="text-xl font-semibold">Get a free inspection</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what&apos;s wrong — we&apos;ll call you back within an hour.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input label="Your name" name="name" required />
              <Input label="Phone number" name="phone" type="tel" required />
              <Input label="Area in Vehari" name="area" />
              <Input label="Service" name="service" placeholder="e.g. AC gas charging" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="Brief description of the issue"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-ice)] px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-ice transition hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? "Request received — we'll call you" : "Send request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
