import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, MapPin, MessageCircle, Navigation, Phone, Search, Store, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { branches, directionsUrl, embedMapUrl, type Branch } from "../data/branches";

function BranchCard({
  branch,
  index,
  selected,
  onSelect,
}: {
  branch: Branch;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  const confirmed = Boolean(branch.address);
  return (
    <motion.article
      layout
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.6rem] border p-6 transition-all duration-400 ${
        selected
          ? "border-espresso bg-white shadow-[0_26px_50px_-34px_rgba(33,22,16,0.6)]"
          : "border-espresso/10 bg-white/55 hover:border-espresso/25 hover:bg-white/80"
      }`}
      aria-current={selected ? "true" : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-espresso font-display text-sm text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-xl leading-tight text-espresso">{branch.name}</h3>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8rem] text-espresso/55">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {branch.locality}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[0.53rem] font-bold uppercase tracking-[0.14em] ${
            confirmed ? "bg-green-800/10 text-green-900" : "bg-amber/15 text-caramel"
          }`}
        >
          {confirmed ? "Confirmed" : "Address soon"}
        </span>
      </div>

      <div className="mt-5 space-y-2.5 text-[0.85rem] text-espresso/65">
        <p className="flex items-start gap-2">
          <Store className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden="true" />
          <span>{branch.address ?? branch.note ?? "Street address awaiting confirmation."}</span>
        </p>
        <p className="flex items-start gap-2">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden="true" />
          <span>{branch.hours ?? "Opening hours awaiting confirmation."}</span>
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {branch.phones.map((p) => (
          <a
            key={p.tel}
            href={`tel:${p.tel}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-espresso/15 px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-espresso/80 transition-colors hover:border-espresso hover:bg-espresso hover:text-cream"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {p.display}
          </a>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-espresso/10 pt-4">
        <a
          href={directionsUrl(branch)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="btn btn-dark flex-1 !px-4 !py-2.5 !text-[0.68rem]"
        >
          <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
          Get directions
        </a>
        <a
          href={`https://wa.me/${branch.phones[0].whatsapp}?text=${encodeURIComponent(
            `Hi Deccan Waffle House, I'd like to ask about the ${branch.name} outlet.`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`WhatsApp ${branch.name}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso/70 transition-colors hover:border-espresso hover:text-espresso"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Branches() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(branches[0]?.id ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter((b) => `${b.name} ${b.locality}`.toLowerCase().includes(q));
  }, [query]);

  const selected = branches.find((b) => b.id === selectedId) ?? filtered[0] ?? branches[0];
  const awaiting = branches.filter((b) => !b.address).length;

  return (
    <section id="branches" className="relative overflow-hidden bg-sand py-20 sm:py-28" aria-labelledby="branches-title">
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
      <div className="shell relative">
        <SectionHeading
          index="03"
          eyebrow="Our branches"
          title="Find your Deccan."
          description="Your favourite flavours, closer than ever. Pick an outlet for directions, a direct line to the counter and WhatsApp ordering questions."
          aside={
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-espresso/15 px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-espresso/60">
                <BadgeCheck className="h-3.5 w-3.5 text-green-800" aria-hidden="true" />
                {branches.length} outlet{branches.length === 1 ? "" : "s"} live
              </span>
              {awaiting > 0 && (
                <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-amber/10 px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-caramel">
                  {awaiting} awaiting address
                </span>
              )}
            </div>
          }
        />
        <h2 id="branches-title" className="sr-only">
          Find your nearest Deccan Waffle House
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Reveal>
              <label className="relative flex items-center gap-3 rounded-full border border-espresso/15 bg-white/70 px-5 py-3.5 focus-within:border-espresso/40">
                <Search className="h-4 w-4 text-espresso/40" aria-hidden="true" />
                <span className="sr-only">Search branches by area</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by area or branch name"
                  className="w-full bg-transparent text-[0.9rem] text-espresso placeholder:text-espresso/35 focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-espresso/40 hover:text-espresso"
                  >
                    Clear
                  </button>
                )}
              </label>
            </Reveal>

            <div className="mt-5 space-y-4">
              <AnimatePresence initial={false}>
                {filtered.map((branch) => (
                  <BranchCard
                    key={branch.id}
                    branch={branch}
                    index={branches.findIndex((b) => b.id === branch.id)}
                    selected={selected?.id === branch.id}
                    onSelect={() => setSelectedId(branch.id)}
                  />
                ))}
              </AnimatePresence>
              {filtered.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[1.6rem] border border-dashed border-espresso/20 bg-white/50 p-8 text-center"
                >
                  <p className="font-display text-xl text-espresso">No outlet matched “{query}”.</p>
                  <p className="mx-auto mt-2 max-w-sm text-[0.85rem] text-espresso/55">
                    We are still adding every Deccan to this map. Call us and we will point you to the nearest counter.
                  </p>
                  <a href="#contact" className="btn btn-dark mt-5">
                    Contact the team
                  </a>
                </motion.div>
              )}

              <div className="rounded-[1.6rem] border border-espresso/15 bg-espresso p-6 text-cream">
                <p className="eyebrow text-gold/80">More Deccans coming</p>
                <p className="mt-2 font-display text-xl">Another outlet opening near you?</p>
                <p className="mt-2 max-w-sm text-[0.85rem] leading-relaxed text-cream/60">
                  This directory is built to grow. Every new stall gets its own card, directions, hours and direct line as
                  soon as the details are confirmed.
                </p>
                <a href="#contact" className="btn btn-gold mt-5">
                  Ask us where we are
                </a>
              </div>
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[1.8rem] border border-espresso/15 bg-white shadow-[0_30px_60px_-40px_rgba(33,22,16,0.6)]">
              <div className="flex items-center justify-between gap-3 border-b border-espresso/10 px-5 py-4">
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-espresso/40">Map preview</p>
                  <p className="font-display text-lg text-espresso">{selected?.locality ?? "Hyderabad"}</p>
                </div>
                <a
                  href={selected ? directionsUrl(selected) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-caramel hover:text-espresso"
                >
                  Open maps
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="relative aspect-[4/3] w-full bg-sand">
                <iframe
                  key={selected?.id}
                  title={`Map of ${selected?.name ?? "Deccan Waffle House"}`}
                  src={selected ? embedMapUrl(selected) : undefined}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 px-5 py-5">
                <p className="text-[0.72rem] leading-relaxed text-espresso/50">
                  The pin shows the city area until the exact outlet location is confirmed. Use “Get directions” for live
                  Google Maps routing.
                </p>
                {selected && (
                  <div className="flex flex-wrap gap-2">
                    <a href={`tel:${selected.phones[0].tel}`} className="btn btn-dark flex-1 !px-4 !py-2.5 !text-[0.66rem]">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      Call now
                    </a>
                    <a
                      href={directionsUrl(selected)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-1 border border-espresso/20 !px-4 !py-2.5 !text-[0.66rem] text-espresso hover:bg-espresso hover:text-cream"
                    >
                      Directions
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
