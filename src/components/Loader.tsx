import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="grid h-24 w-24 place-items-center rounded-3xl bg-[var(--gradient-ice)] glow-ice"
            >
              <Snowflake className="h-12 w-12 text-primary-foreground" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mx-auto mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-xs uppercase tracking-[0.4em] text-primary glow-text"
            >
              Cooling up…
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
