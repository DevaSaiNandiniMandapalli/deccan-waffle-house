import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WaffleMark } from "./Logo";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const seen = sessionStorage.getItem("dwh-visited");
    const duration = seen || reduce ? 350 : 1650;
    const t = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("dwh-visited", "1");
      window.setTimeout(onDone, 500);
    }, duration);
    return () => window.clearTimeout(t);
  }, [onDone, reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-espresso text-cream"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="grain absolute inset-0" />
          <motion.div
            initial={{ scale: 0.82, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <WaffleMark className="h-16 w-16" />
          </motion.div>
          <motion.p
            className="eyebrow mt-6 text-gold/80"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Deccan Waffle House
          </motion.p>
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-cream/15">
            <motion.div
              className="h-full rounded-full bg-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: reduce ? 0.2 : 1.3, ease: "easeInOut" }}
            />
          </div>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-cream/40">Warming the waffle iron</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
