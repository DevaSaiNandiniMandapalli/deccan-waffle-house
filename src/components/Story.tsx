import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Flame, HeartHandshake, Leaf } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "../data/site";
import { ChocolateDrip } from "./Art";

const pillars = [
  {
    icon: Flame,
    title: "Made to order",
    body: "Waffles hit the iron when you order, so every edge stays crisp and every centre stays soft.",
  },
  {
    icon: Leaf,
    title: "Fresh finishes",
    body: "Fruit, sauces and toppings are prepped through the day — not stacked up and left waiting.",
  },
  {
    icon: HeartHandshake,
    title: "Served with happiness",
    body: "A counter that knows its regulars, and a team that wants your evening to be a good one.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);

  return (
    <section id="story" className="grain relative overflow-hidden bg-cocoa py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_10%,rgba(245,184,61,0.12),transparent_60%)]" />
      <div className="shell relative">
        <SectionHeading
          index="02"
          eyebrow="Our story"
          title="More than a craving. It’s a Deccan moment."
          tone="dark"
          description="A Hyderabad original — golden waffles, cold mocktails and the kind of counter you keep coming back to."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[9rem] border border-cream/15">
                <motion.img
                  src="/images/story-waffle.webp"
                  alt="Chocolate sauce being poured over a freshly baked waffle"
                  width={900}
                  height={1200}
                  loading="lazy"
                  style={reduce ? undefined : { y, scale: 1.08 }}
                  className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent" />
                <ChocolateDrip className="absolute -top-px left-0 h-14 w-full" />
              </div>

              <div className="absolute -right-3 bottom-6 rotate-[-4deg] rounded-2xl border border-espresso/20 bg-gold px-5 py-4 text-espresso shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)] sm:-right-6">
                <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.24em] text-espresso/60">Since day one</p>
                <p className="mt-1 font-display text-xl leading-none">Good mood food</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.05}>
              <p className="font-display text-[1.25rem] leading-relaxed text-cream/90 sm:text-[1.45rem]">{site.story}</p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-cream/60">{site.storySecondary}</p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={0.1 + i * 0.08}>
                  <div className="h-full rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.07]">
                    <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg text-cream">{title}</h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-cream/55">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-gold/60 pl-5">
                <p className="font-display text-lg italic text-cream/85">
                  “A waffle is simple. Getting people to come back for it is the craft.”
                </p>
                <footer className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-cream/40">
                  The Deccan Waffle House team
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
