import { motion, useReducedMotion } from "framer-motion";

export function ChocolateDrip({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 140"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="drip-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b1a12" />
          <stop offset="55%" stopColor="#3B241B" />
          <stop offset="100%" stopColor="#55362a" />
        </linearGradient>
      </defs>
      <path
        d="M0 0h400v18c-14 2-18 26-24 26s-9-18-20-18-11 46-19 46-12-44-22-44-12 78-22 78-11-78-22-78-10 66-21 66-11-62-21-62-9 30-20 30-9-28-20-28-10 44-19 44-11-46-22-46-12 24-24 24-18-22-26-22-7 12-18 12-9-18-20-18-12 22-20 22-9-22-21-22-10 34-20 34-11-34-22-34-12 16-24 16V0Z"
        fill="url(#drip-grad)"
      />
    </svg>
  );
}

export function Strawberry({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 62c-9 0-19-9-19-21 0-9 8-17 19-17s19 8 19 17c0 12-10 21-19 21Z"
        fill="#E0483F"
      />
      <path d="M32 62c-5 0-11-4-11-12 0 6 4 10 11 10s11-4 11-10c0 8-6 12-11 12Z" fill="#B8332D" opacity=".55" />
      <g fill="#F5B83D">
        <circle cx="26" cy="34" r="1.4" />
        <circle cx="34" cy="30" r="1.4" />
        <circle cx="38" cy="39" r="1.4" />
        <circle cx="30" cy="43" r="1.4" />
        <circle cx="24" cy="44" r="1.4" />
        <circle cx="36" cy="50" r="1.2" />
        <circle cx="28" cy="53" r="1.2" />
      </g>
      <path
        d="M32 24c-6-9-18-6-18-6 3 5 8 8 13 8-7 3-9 10-9 10 6 0 10-4 12-8 3 6 8 9 13 9 0 0-1-8-7-11 5-1 9-4 11-8 0 0-10-3-15 6Z"
        fill="#4C8B3F"
      />
    </svg>
  );
}

export function MintLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M8 56C6 32 22 10 56 8c-2 30-22 46-48 48Z" fill="#4F9A5A" />
      <path d="M12 52C22 36 34 24 50 16" stroke="#2F6B3A" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M28 44c6-1 10-4 14-9M22 50c1-6 3-9 6-12" stroke="#2F6B3A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ChocolateChunk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 18 32 8l22 10v26L32 56 10 44V18Z" fill="#3B241B" />
      <path d="M10 18 32 28l22-10" fill="none" stroke="#55362a" strokeWidth="2.4" />
      <path d="M32 28v28" stroke="#55362a" strokeWidth="2.4" />
      <path d="M18 22.5 27 18" stroke="#6b4636" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OrangeSlice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="27" fill="#F09A2E" />
      <circle cx="32" cy="32" r="22" fill="#F8B84C" />
      <g stroke="#F0912B" strokeWidth="3" strokeLinecap="round">
        <path d="M32 12v40M12 32h40M18 18l28 28M46 18 18 46" />
      </g>
      <circle cx="32" cy="32" r="5" fill="#FDEBC9" />
    </svg>
  );
}

const floaters = [
  { C: Strawberry, className: "left-[4%] top-[16%] h-12 w-12 sm:h-16 sm:w-16", delay: 0, drift: -18 },
  { C: MintLeaf, className: "right-[40%] top-[8%] h-10 w-10 sm:h-14 sm:w-14", delay: 1.2, drift: 16 },
  { C: ChocolateChunk, className: "right-[6%] top-[54%] h-10 w-10 sm:h-14 sm:w-14", delay: 0.6, drift: -12 },
  { C: OrangeSlice, className: "left-[10%] bottom-[10%] h-11 w-11 sm:h-16 sm:w-16", delay: 1.8, drift: 14 },
];

export function FloatingIngredients({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={className} aria-hidden="true">
      {floaters.map(({ C, className: cls, delay, drift }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute drop-shadow-[0_14px_28px_rgba(21,13,9,0.35)] ${cls}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 + delay * 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, drift, 0], rotate: [0, i % 2 ? 8 : -8, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay }}
            className="h-full w-full"
          >
            <C className="h-full w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function SunBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" opacity=".5">
        {Array.from({ length: 28 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + 96 * Math.cos((i / 28) * Math.PI * 2)}
            y2={100 + 96 * Math.sin((i / 28) * Math.PI * 2)}
          />
        ))}
      </g>
    </svg>
  );
}
