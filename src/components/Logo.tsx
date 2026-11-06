import clsx from "clsx";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
};

export function WaffleMark({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="none">
      <rect
        x="1.6"
        y="1.6"
        width="44.8"
        height="44.8"
        rx="13"
        stroke={tone === "light" ? "#F5B83D" : "#3B241B"}
        strokeWidth="2.6"
      />
      <g stroke={tone === "light" ? "#F5B83D" : "#3B241B"} strokeWidth="2.2" strokeLinecap="round">
        <path d="M16.6 3v42M31.4 3v42M3 16.6h42M3 31.4h42" />
      </g>
      <circle cx="24" cy="24" r="3.1" fill={tone === "light" ? "#E98A32" : "#E98A32"} />
    </svg>
  );
}

export default function Logo({ className, tone = "light", compact = false }: LogoProps) {
  const ink = tone === "light" ? "text-cream" : "text-espresso";
  return (
    <span className={clsx("flex items-center gap-3", className)}>
      <WaffleMark className={compact ? "h-9 w-9" : "h-11 w-11"} tone={tone} />
      <span className={clsx("flex flex-col leading-none", ink)}>
        <span
          className={clsx(
            "font-display font-semibold tracking-[0.02em]",
            compact ? "text-[1.05rem]" : "text-[1.25rem] sm:text-[1.4rem]",
          )}
        >
          DECCAN
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-[0.53rem] font-bold uppercase tracking-[0.34em] opacity-80 sm:text-[0.58rem]">
          Waffle House
        </span>
      </span>
    </span>
  );
}
