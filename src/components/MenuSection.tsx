import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { MENU_NOTE, formatPrice, menu, type MenuCategory } from "../data/menu";
import { PHONES } from "../data/site";

const ALL_ITEMS = menu.reduce((total, category) => total + category.items.length, 0);
const ALL_PRICES = menu.flatMap((category) => category.items.flatMap((item) => item.prices.map((p) => p.amount)));
const LOW_PRICE = Math.min(...ALL_PRICES);
const HIGH_PRICE = Math.max(...ALL_PRICES);

function rangeLabel(category: MenuCategory) {
  const amounts = category.items.flatMap((item) => item.prices.map((p) => p.amount));
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return min === max ? `₹${min}` : `₹${min}–₹${max}`;
}

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const category = useMemo(() => menu.find((c) => c.id === active) ?? menu[0], [active]);

  const select = (id: string, track?: HTMLElement | null) => {
    setActive(id);
    if (track && track.scrollWidth > track.clientWidth) {
      const button = track.querySelector<HTMLElement>(`#tab-${id}`);
      if (button) track.scrollTo({ left: button.offsetLeft - 20, behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="relative overflow-x-clip bg-cream pb-16 pt-20 sm:pb-24 sm:pt-28" aria-labelledby="menu-title">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-[38rem] h-72 w-72 rounded-full bg-amber/10 blur-3xl" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          index="01"
          eyebrow="The full counter menu"
          title="Pick your craving."
          description="Signature waffles, bowl cakes, waffle pizzas, mocktails, fries and nuggets — the complete counter menu, priced exactly as it is in store."
          aside={
            <a href={`tel:${PHONES[0].tel}`} className="btn btn-dark mt-6 inline-flex">
              <Phone className="h-4 w-4" />
              Pre-order on call
            </a>
          }
        />
        <h2 id="menu-title" className="sr-only">
          Our menu
        </h2>

        <dl className="mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:max-w-2xl sm:gap-4">
          {[
            { label: "Categories", value: String(menu.length) },
            { label: "On the card", value: `${ALL_ITEMS} dishes` },
            { label: "Price range", value: `₹${LOW_PRICE}–₹${HIGH_PRICE}` },
          ].map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-espresso/10 bg-white/55 px-3 py-3 sm:px-4 sm:py-4">
              <dt className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-espresso/40 sm:text-[0.6rem]">
                {fact.label}
              </dt>
              <dd className="mt-1 font-display text-[0.98rem] leading-tight text-espresso sm:text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="sticky top-[4rem] z-30 -mx-5 mt-8 border-b border-espresso/10 bg-cream/92 px-5 py-2 backdrop-blur-md sm:top-[4.5rem] sm:-mx-6 sm:px-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent lg:hidden"
            />
            <div
              ref={railRef}
              role="tablist"
              aria-label="Menu categories"
              className="no-scrollbar flex gap-2 overflow-x-auto py-1"
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
                    onClick={() => select(c.id, railRef.current)}
                    className={`relative inline-flex min-h-[2.5rem] shrink-0 items-center rounded-full border px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.11em] transition-all duration-300 sm:text-[0.7rem] lg:px-4 ${
                      isActive
                        ? "border-espresso bg-espresso text-cream shadow-[0_10px_24px_-16px_rgba(33,22,16,0.9)]"
                        : "border-espresso/15 bg-white/40 text-espresso/55 hover:border-espresso/30 hover:text-espresso"
                    }`}
                  >
                    {c.short ?? c.label}
                    <span className={`ml-1.5 text-[0.55rem] ${isActive ? "text-gold" : "text-caramel/60"}`}>
                      {c.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="pt-8 sm:pt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-espresso/10 pb-5">
                <div>
                  <h3 className="font-display text-[1.7rem] leading-none text-espresso sm:text-4xl">{category.label}</h3>
                  <p className="mt-2 max-w-xl text-[0.85rem] leading-relaxed text-espresso/55">{category.blurb}</p>
                </div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-espresso/40">
                  {category.items.length} dishes · {rangeLabel(category)}
                </p>
              </div>

              <motion.ul
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
                initial="hidden"
                animate="show"
                exit="out"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
                  out: {},
                }}
              >
                {category.items.map((item) => {
                  const hasSizes = item.prices.length > 1;
                  return (
                    <motion.li
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, y: reduce ? 0 : 22 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                      }}
                    >
                      <article className="group relative flex h-full items-stretch overflow-hidden rounded-[1.35rem] border border-espresso/10 bg-white/70 shadow-[0_16px_38px_-34px_rgba(33,22,16,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-caramel/40 hover:shadow-[0_28px_54px_-32px_rgba(33,22,16,0.5)] sm:block">
                        <div className="relative w-[36%] shrink-0 overflow-hidden sm:w-full">
                          <img
                            src={item.image}
                            alt={item.name}
                            width={720}
                            height={900}
                            loading="lazy"
                            decoding="async"
                            className="h-full min-h-[7.5rem] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] sm:h-52 lg:h-56"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent opacity-80 sm:from-espresso/50" />
                          {item.tag && (
                            <span className="absolute bottom-3 left-3 hidden rounded-full bg-espresso/75 px-2.5 py-1 text-[0.52rem] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur sm:inline-flex">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-4 sm:gap-2 sm:p-5">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display text-[1.1rem] leading-tight text-espresso sm:text-[1.3rem]">
                              {item.name}
                            </h4>
                            <span className="shrink-0 rounded-full bg-gold/20 px-2 py-1 font-display text-[0.82rem] leading-none text-cocoa sm:bg-transparent sm:px-0 sm:py-0 sm:text-[1.05rem]">
                              {hasSizes ? `from ₹${item.prices[0].amount}` : formatPrice(item)}
                            </span>
                          </div>
                          <p className="line-clamp-3 text-[0.78rem] leading-relaxed text-espresso/55 sm:line-clamp-none sm:text-[0.86rem]">
                            {item.description}
                          </p>
                          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2">
                            <span
                              className="inline-flex items-center gap-1.5 text-[0.52rem] font-bold uppercase tracking-[0.14em] text-espresso/50"
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
                            {hasSizes &&
                              item.prices.map((p) => (
                                <span
                                  key={p.label}
                                  className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-espresso/45"
                                >
                                  {p.label} <span className="text-espresso/80">₹{p.amount}</span>
                                </span>
                              ))}
                          </div>
                        </div>
                      </article>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[1.4rem] border border-dashed border-caramel/45 bg-sand/45 p-5 sm:p-6">
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-caramel">Good to know</p>
            <p className="mt-2 max-w-2xl text-[0.85rem] leading-relaxed text-espresso/65">{MENU_NOTE}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Fresh off the iron", "Made to order", "Dine-in & takeaway"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-espresso/12 bg-cream/70 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-espresso/60"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-[1.4rem] bg-espresso p-5 text-cream sm:p-6">
            <div>
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-gold">Hungry now?</p>
              <p className="mt-2 font-display text-[1.4rem] leading-tight sm:text-2xl">
                Call the counter, we'll have it hot.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <a href={`tel:${PHONES[0].tel}`} className="btn btn-gold justify-center">
                <Phone className="h-4 w-4" />
                {PHONES[0].display}
              </a>
              <a href="#branches" className="btn btn-outline justify-center border-cream/25 text-cream hover:bg-cream/10">
                <MapPin className="h-4 w-4" />
                Find a stall
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
