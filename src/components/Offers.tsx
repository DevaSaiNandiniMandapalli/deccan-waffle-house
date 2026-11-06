import { ArrowUpRight, Tag } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { offers, offersEnabled } from "../data/offers";

export default function Offers() {
  if (!offersEnabled) return null;

  return (
    <section id="offers" className="relative overflow-hidden bg-espresso py-20 text-cream sm:py-28" aria-labelledby="offers-title">
      <div className="shell relative">
        <SectionHeading
          index="05"
          eyebrow="Combos & offers"
          title="Better together."
          description="Current combinations, confirmed by the counter. Ask about today's pairing when you order."
          tone="dark"
        />
        <h2 id="offers-title" className="sr-only">
          Offers and combos
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-cream/12 bg-cream/[0.05]">
                {offer.image && (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="p-6">
                  {offer.tag && <span className="eyebrow text-gold/80">{offer.tag}</span>}
                  <h3 className="mt-2 font-display text-2xl text-cream">{offer.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-cream/60">{offer.detail}</p>
                  <p className="mt-4 flex items-center gap-2 font-display text-xl text-gold">
                    <Tag className="h-4 w-4" aria-hidden="true" />
                    {offer.price}
                  </p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-cream/70 hover:text-gold">
                    Ask at the counter
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
