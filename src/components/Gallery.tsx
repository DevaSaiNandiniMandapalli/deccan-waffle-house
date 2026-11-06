import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GALLERY_CATEGORIES, gallery, type GalleryCategory } from "../data/gallery";

const ratioClass = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="The gallery"
          title="Everything looks better golden."
          description="A look at the plates, the pours and the counters that make a Deccan evening. Illustrative photography — the real thing is better."
        />
        <h2 id="gallery-title" className="sr-only">
          Food gallery
        </h2>

        <Reveal>
          <div className="no-scrollbar mt-9 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {(["All", ...GALLERY_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setFilter(cat);
                  setOpenIndex(null);
                }}
                aria-pressed={filter === cat}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.13em] transition-all duration-300 ${
                  filter === cat
                    ? "border-espresso bg-espresso text-cream"
                    : "border-espresso/15 text-espresso/55 hover:border-espresso/40 hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-6 columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((item) => {
              const globalIndex = items.findIndex((i) => i.id === item.id);
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setOpenIndex(globalIndex)}
                  className="group relative block w-full overflow-hidden rounded-[1.3rem] border border-espresso/10 text-left break-inside-avoid"
                  aria-label={`Open image: ${item.caption}`}
                >
                  <div className={`${ratioClass[item.ratio]} w-full overflow-hidden`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 inline-flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-cream/90 text-espresso opacity-0 backdrop-blur transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-4 bottom-4 translate-y-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-cream opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-espresso/95 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            onClick={close}
          >
            <div className="flex items-center justify-between text-cream">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream/50">{current.category}</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[72svh] w-auto max-w-full rounded-2xl object-contain shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]"
              />
              <figcaption className="max-w-lg text-center">
                <p className="font-display text-xl text-cream">{current.caption}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">
                  {openIndex !== null ? `${openIndex + 1} / ${items.length}` : ""}
                </p>
              </figcaption>
            </motion.figure>

            <div className="flex items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-espresso"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
