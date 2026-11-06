import { ArrowUpRight, Instagram, Facebook, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, PHONES, site } from "../data/site";
import { branches, directionsUrl } from "../data/branches";
import { credits } from "../data/credits";

export default function Footer() {
  const year = new Date().getFullYear();
  const { instagram, facebook } = site.socials;

  return (
    <footer className="grain relative overflow-hidden bg-espresso pt-16 text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="shell relative">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.2fr_0.6fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-display text-lg italic text-cream/70">“{site.tagline}”</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {instagram ? (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Deccan Waffle House on Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/12 px-3 py-2 text-[0.6rem] uppercase tracking-[0.16em] text-cream/35">
                  <Instagram className="h-3.5 w-3.5" /> Handle to be confirmed
                </span>
              )}
              {facebook ? (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Deccan Waffle House on Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/12 px-3 py-2 text-[0.6rem] uppercase tracking-[0.16em] text-cream/35">
                  <Facebook className="h-3.5 w-3.5" /> Profile to be linked
                </span>
              )}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-gold/70">Explore</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#top" className="text-[0.85rem] text-cream/60 transition-colors hover:text-cream">
                  Home
                </a>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.85rem] text-cream/60 transition-colors hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold/70">Branches</p>
            <ul className="mt-4 space-y-3">
              {branches.map((b) => (
                <li key={b.id}>
                  <a
                    href={directionsUrl(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-[0.85rem] text-cream/60 transition-colors hover:text-cream"
                  >
                    <span>
                      {b.locality}
                      <span className="mt-0.5 block text-[0.68rem] text-cream/30">
                        {b.address ?? "Address to be confirmed"}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-1 h-3 w-3 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li className="text-[0.72rem] text-cream/30">New outlets added as they open.</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold/70">Talk to us</p>
            <ul className="mt-4 space-y-2.5">
              {PHONES.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="inline-flex items-center gap-2 text-[0.88rem] text-cream/70 transition-colors hover:text-cream"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.72rem] leading-relaxed text-cream/35">
              {site.city}, {site.state}
              <br />
              Opening hours vary by outlet.
            </p>
            <a href="#contact" className="btn btn-gold mt-4 !px-4 !py-2.5 !text-[0.62rem]">
              Send an enquiry
            </a>
          </div>
        </div>

        <details className="group border-t border-cream/10 py-5">
          <summary className="cursor-pointer list-none text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cream/35 transition-colors hover:text-cream/60">
            Photography credits & disclosure
          </summary>
          <div className="mt-4 space-y-2">
            <p className="text-[0.7rem] leading-relaxed text-cream/40">
              All food and interior photography on this site is illustrative stock imagery licensed for reuse — it is not
              photography of the actual Deccan Waffle House outlet. Menu items reflect the brand's published offering and
              are priced at the counter.
            </p>
            <ul className="grid gap-1.5 text-[0.65rem] text-cream/30 sm:grid-cols-2">
              {credits.map((c) => (
                <li key={c.asset}>
                  {c.title} — {c.author} ({c.license}){" "}
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                    source
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>

        <div className="overflow-hidden border-t border-cream/10 pt-8">
          <p
            className="select-none whitespace-nowrap text-[13vw] font-display leading-[0.85] tracking-tight text-cream/[0.06] sm:text-[9vw]"
            aria-hidden="true"
          >
            Deccan Waffle House
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/10 py-6 text-[0.66rem] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Deccan Waffle House. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Made for cravings. Served with happiness.</span>
            <a href="#top" className="transition-colors hover:text-gold">
              Back to top ↑
            </a>
          </p>
        </div>
        <div className="h-16 md:hidden" aria-hidden="true" />
      </div>
    </footer>
  );
}
