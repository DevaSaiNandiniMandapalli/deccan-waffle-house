import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, PHONES } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-espresso/10 bg-cream/90 py-2 shadow-[0_10px_40px_-24px_rgba(33,22,16,0.6)] backdrop-blur-xl"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <a href="#top" aria-label="Deccan Waffle House — home" className="shrink-0">
            <Logo tone={scrolled ? "dark" : "light"} compact={scrolled} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative inline-flex items-center py-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                  scrolled ? "text-espresso/70 hover:text-espresso" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${PHONES[0].tel}`} className={`btn hidden md:inline-flex ${scrolled ? "btn-dark" : "btn-gold"}`}>
              Call the counter
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled ? "border-espresso/20 text-espresso" : "border-cream/30 text-cream"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-espresso text-cream lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="grain absolute inset-0" />
            <div className="shell relative flex items-center justify-between py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="shell relative flex flex-1 flex-col justify-center gap-1 pb-10"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                  className="group flex items-baseline justify-between border-b border-cream/10 py-4"
                >
                  <span className="display-md text-cream transition-colors group-hover:text-gold">{link.label}</span>
                  <span className="eyebrow text-gold/60">0{i + 1}</span>
                </motion.a>
              ))}
            </motion.nav>

            <div className="shell relative border-t border-cream/10 py-5">
              <p className="eyebrow text-gold/70">Call us</p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                {PHONES.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="font-display text-lg text-cream">
                    {p.display}
                  </a>
                ))}
              </div>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold mt-5 w-full">
                Find your nearest stall
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
