import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { branches, directionsUrl } from "../data/branches";
import { PHONES } from "../data/site";

export default function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-2 rounded-full border border-cream/10 bg-espresso/95 p-1.5 shadow-[0_20px_40px_-16px_rgba(21,13,9,0.8)] backdrop-blur-xl">
            <a
              href={`tel:${PHONES[0].tel}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-espresso"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call now
            </a>
            <a
              href={directionsUrl(branches[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/25 px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-cream"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Directions
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
