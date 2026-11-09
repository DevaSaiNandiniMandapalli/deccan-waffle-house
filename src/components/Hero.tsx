import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "../data/site";
import { ChocolateDrip, FloatingIngredients, SunBurst } from "./Art";

const words = ["Good mood.", "Great waffles."];

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="grain relative isolate overflow-hidden bg-espresso pt-28 pb-0 text-cream sm:pt-32 lg:min-h-[100svh] lg:pt-32"
      aria-label="Introduction"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_18%,rgba(233,138,50,0.28),transparent_58%),radial-gradient(90%_70%_at_8%_92%,rgba(245,184,61,0.14),transparent_62%)]" />
        <SunBurst className="absolute -right-40 top-[-18%] h-[46rem] w-[46rem] text-gold/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso to-transparent" />
      </div>

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* copy */}
        <motion.div style={reduce ? undefined : { y: copyY, opacity: copyOpacity }} className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <span className="eyebrow text-cream/75">Hyderabad&nbsp;· Waffles · Mocktails · Fries</span>
          </motion.div>

          <h1 className="display-xl mt-6">
            {words.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-gold italic" : "text-cream"}`}
                  initial={{ y: "110%", rotate: 2 }}
                  animate={ready ? { y: 0, rotate: 0 } : {}}
                  transition={{ duration: 1, delay: 0.22 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-cream/70 sm:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.68 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#menu" className="btn btn-gold group">
              Explore our menu
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#branches" className="btn btn-outline group">
              Find your nearest stall
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 hidden max-w-md grid-cols-3 gap-4 border-t border-cream/10 pt-5 sm:grid"
          >
            {[
              ["Baked", "to order"],
              ["Served", "all day"],
              ["Made in", site.city],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-cream/40">{k}</dt>
                <dd className="mt-1 font-display text-sm text-cream/90">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* image */}
        <motion.div
          className="relative mx-auto w-full max-w-[30rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div style={reduce ? undefined : { y: imgY, scale: imgScale }} className="relative">
            <div className="relative overflow-hidden rounded-t-[15rem] rounded-b-[2.2rem] border border-cream/15 bg-cocoa shadow-[0_50px_80px_-40px_rgba(0,0,0,0.9)]">
              <img
                src="images/hero-waffle-wide.webp"
                alt="A chocolate-loaded waffle served warm, with sauce pouring over the edges"
                width={1800}
                height={1125}
                className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-espresso/10" />
              <ChocolateDrip className="absolute -top-[1px] left-0 h-16 w-full sm:h-20" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="eyebrow text-gold/85">House favourite</p>
                  <p className="mt-1 font-display text-xl text-cream">Death by Chocolate</p>
                </div>
                <span className="rounded-full border border-cream/25 bg-espresso/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
                  Ask at counter
                </span>
              </div>
            </div>

            <FloatingIngredients className="absolute inset-0 -z-10" />

            {/* rotating seal */}
            <div className="absolute -left-4 bottom-24 hidden h-28 w-28 items-center justify-center sm:flex lg:-left-10">
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_26s_linear_infinite] motion-reduce:animate-none">
                <defs>
                  <path id="sealPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="52" fill="#211610" stroke="#F5B83D" strokeWidth="1" opacity=".92" />
                <text className="fill-gold text-[9.5px] font-bold uppercase tracking-[0.34em]">
                  <textPath href="#sealPath">Made fresh · Hyderabad · Made fresh ·</textPath>
                </text>
              </svg>
              <span className="font-display text-2xl italic text-gold">DWH</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ticker */}
      <div className="relative mt-14 border-y border-cream/10 bg-espresso/60 py-4 backdrop-blur sm:mt-16">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-8">
                {["Golden waffles", "Cold mocktails", "Crispy fries", "Loaded snacks", "Made to order"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cream/60">{t}</span>
                    <span className="text-gold" aria-hidden="true">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
