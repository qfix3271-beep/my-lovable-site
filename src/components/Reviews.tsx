import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Asad R.", role: "Vehari Cantt", text: "Inverter AC ki cooling 30 minute mein bahal kar di. Bohat professional team hai." },
  { name: "Hina K.", role: "Vehari City", text: "Deep freezer urgent repair ke liye same day aaye. Cleanly kaam kiya, rate bhi munasib." },
  { name: "Bilal S.", role: "Burewala", text: "Pura ghar ki wiring upgrade karwai. Fast, safe and reasonable. Highly recommend." },
  { name: "Nadia M.", role: "Vehari", text: "Refrigerator ki gas charging best rate par. 6 mahine se chal raha, koi issue nahi." },
];

export function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">Reviews</span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">What our <span className="text-gradient-ice">customers say.</span></h2>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <Quote className="absolute -top-2 left-6 h-24 w-24 text-primary/10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="flex justify-center gap-1 text-primary glow-text">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-primary" />
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-foreground/90 sm:text-xl">
                &ldquo;{reviews[i].text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-ice)] text-sm font-bold text-primary-foreground">
                  {reviews[i].name[0]}
                </span>
                <div className="text-left">
                  <div className="text-sm font-semibold">{reviews[i].name}</div>
                  <div className="text-xs text-muted-foreground">{reviews[i].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)} className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={() => setI((p) => (p + 1) % reviews.length)} className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
