import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { MENU_NOTE, formatPrice, menu } from "../data/menu";
import { PHONES } from "../data/site";

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const reduce = useReducedMotion();
  const category = useMemo(() => menu.find((c) => c.id === active) ?? menu[0], [active]);

  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-20 sm:py-28" aria-labelledby="menu-title">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="shell relative">
        <SectionHeading
          index="01"
          eyebrow="The menu"
          title="Pick your craving."
          description="Signature waffles, bowl cakes, waffle pizzas, mocktails, fries and nuggets — the full counter menu, priced exactly as it is in store."
          aside={
            <a href={`tel:${PHONES[0].tel}`} className="btn btn-dark mt-6 inline-flex">
              <Phone className="h-4 w-4" />
              Check today's specials
            </a>
          }
        />
        <h2 id="menu-title" className="sr-only">
          Our menu
        </h2>

        {/* category tabs */}
        <div className="relative mt-10 border-b border-espresso/12 sm:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-cream to-transparent lg:hidden"
          />
          <div
            role="tablist"
            aria-label="Menu categories"
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0"
          >
            {menu.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={isActive}
                  aria-controls="menu-panel"
                  onClick={(event) => {
                    setActive(c.id);
                    const track = event.currentTarget.parentElement;
                    if (track && track.scrollWidth > track.clientWidth) {
                      track.scrollTo({ left: event.currentTarget.offsetLeft - 24, behavior: "smooth" });
                    }
                  }}
                  className={`relative shrink-0 px-4 py-4 text-[0.72rem] font-bold uppercase tracking-[0.13em] transition-colors sm:px-4 lg:px-3.5 lg:text-[0.7rem] ${
                    isActive ? "text-espresso" : "text-espresso/40 hover:text-espresso/70"
                  }`}
                >
                  {c.short ?? c.label}
                  <span className="ml-2 align-super text-[0.55rem] text-caramel/70">{c.items.length}</span>
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab"
                      className="absolute inset-x-2 -bottom-px h-[3px] rounded-full bg-espresso"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.8rem] italic text-espresso/50">{category.blurb}</p>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-espresso/35">
            {category.items.length} items
          </p>
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
              initial="hidden"
              animate="show"
              exit="out"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
                out: { opacity: 0, transition: { duration: 0.18 } },
              }}
            >
              {category.items.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : 26 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-espresso/10 bg-white/60 shadow-[0_18px_40px_-32px_rgba(33,22,16,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-espresso/20 hover:shadow-[0_30px_60px_-32px_rgba(33,22,16,0.55)]">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={720}
                        height={900}
                        loading="lazy"
                        decoding="async"
                        className="h-52 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] sm:h-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-70" />
                      <span
                        className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-espresso/80 backdrop-blur"
                        title={item.vegetarian ? "Vegetarian" : "Non-vegetarian"}
                      >
                        <span
                          className={`inline-block h-2 w-2 rounded-[2px] ${
                            item.vegetarian ? "bg-green-700" : "bg-red-700"
                          }`}
                          aria-hidden="true"
                        />
                        {item.vegetarian ? "Veg" : "Non-veg"}
                      </span>
                      <span className="absolute bottom-4 right-4 rounded-full bg-gold px-3 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-espresso">
                        {formatPrice(item)}
                      </span>
                      {item.tag && (
                        <span className="absolute bottom-4 left-4 rounded-full bg-espresso/80 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[1.35rem] leading-tight text-espresso">{item.name}</h3>
                        <ArrowUpRight
                          className="mt-1 h-4 w-4 shrink-0 text-espresso/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-caramel"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-[0.87rem] leading-relaxed text-espresso/60">{item.description}</p>
                      {item.prices.length > 1 && (
                        <p className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-espresso/10 pt-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-espresso/55">
                          {item.prices.map((p) => (
                            <span key={p.label}>
                              {p.label} <span className="text-espresso">₹{p.amount}</span>
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-espresso/10 bg-sand/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="max-w-2xl text-[0.82rem] leading-relaxed text-espresso/60">{MENU_NOTE}</p>
          <a href="#contact" className="btn btn-dark shrink-0">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
