import type { ReactNode } from "react";
import Reveal, { RevealText } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  tone?: "light" | "dark";
  aside?: ReactNode;
  align?: "between" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  aside,
  align = "between",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end ${
        align === "center" ? "text-center lg:text-left" : ""
      }`}
    >
      <div>
        <Reveal>
          <div className={`flex items-center gap-4 ${align === "center" ? "justify-center lg:justify-start" : ""}`}>
            <span className={`eyebrow ${dark ? "text-gold" : "text-caramel"}`}>{index}</span>
            <span className={`h-px w-10 ${dark ? "bg-cream/25" : "bg-espresso/20"}`} />
            <span className={`eyebrow ${dark ? "text-cream/55" : "text-espresso/50"}`}>{eyebrow}</span>
          </div>
        </Reveal>
        <RevealText
          text={title}
          className={`display-lg mt-5 max-w-3xl ${dark ? "text-cream" : "text-espresso"}`}
          delay={0.05}
        />
      </div>
      {(description || aside) && (
        <Reveal delay={0.15}>
          <div className={align === "center" ? "lg:text-right" : ""}>
            {description && (
              <p className={`max-w-md text-[0.95rem] leading-relaxed ${dark ? "text-cream/65" : "text-espresso/65"} ${align === "center" ? "mx-auto lg:ml-auto lg:mr-0" : ""}`}>
                {description}
              </p>
            )}
            {aside}
          </div>
        </Reveal>
      )}
    </div>
  );
}
