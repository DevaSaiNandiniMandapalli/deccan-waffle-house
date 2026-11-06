import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PHONES, site } from "../data/site";
import { branches, directionsUrl } from "../data/branches";

type Errors = Partial<Record<"name" | "phone" | "branch" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", branch: branches[0]?.name ?? "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [waLink, setWaLink] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setWaLink(null);
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please tell us your name.";
    const digits = form.phone.replace(/[^\d]/g, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.branch) e.branch = "Choose the outlet you are asking about.";
    if (form.message.trim().length < 5) e.message = "Add a few words so we can help.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const text = [
      `Hi Deccan Waffle House!`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Outlet: ${form.branch}`,
      ``,
      form.message.trim(),
    ].join("\n");

    const link = `https://wa.me/${PHONES[0].whatsapp}?text=${encodeURIComponent(text)}`;
    setWaLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClass = (key: keyof Errors) =>
    `w-full rounded-xl border bg-cream/[0.06] px-4 py-3 text-[0.92rem] text-cream placeholder:text-cream/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
      errors[key] ? "border-red-400/70" : "border-cream/15 focus:border-gold/60"
    }`;

  return (
    <section id="contact" className="grain relative overflow-hidden bg-espresso py-20 text-cream sm:py-28" aria-labelledby="contact-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_0%,rgba(245,184,61,0.16),transparent_55%)]" />
      <div className="shell relative">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let’s get you fed."
          tone="dark"
          description="Questions about an outlet, a large order or a custom waffle board? Call the counter or send us a WhatsApp message."
        />
        <h2 id="contact-title" className="sr-only">
          Contact Deccan Waffle House
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="space-y-4">
            {PHONES.map((p, i) => (
              <Reveal key={p.tel} delay={i * 0.06}>
                <div className="group rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 transition-colors hover:border-gold/40">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-gold/70">{p.label}</p>
                  <a
                    href={`tel:${p.tel}`}
                    className="mt-1 block font-display text-2xl text-cream transition-colors group-hover:text-gold sm:text-[1.7rem]"
                  >
                    {p.display}
                  </a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`tel:${p.tel}`} className="btn btn-gold !px-4 !py-2 !text-[0.62rem]">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${p.whatsapp}?text=${encodeURIComponent("Hi Deccan Waffle House!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-cream/25 !px-4 !py-2 !text-[0.62rem] text-cream hover:bg-cream hover:text-espresso"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <a
                href={directionsUrl(branches[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cream/12 bg-cream/[0.04] p-5 transition-colors hover:border-gold/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-lg text-cream">Find us on the map</span>
                  <span className="mt-0.5 block text-[0.78rem] text-cream/55">
                    Open {site.city} outlets in Google Maps for live directions.
                  </span>
                </span>
              </a>
            </Reveal>

            <p className="pt-1 text-[0.72rem] leading-relaxed text-cream/40">
              WhatsApp replies happen during counter hours. For same-day bulk orders (10+ waffles), please call ahead so we
              can plan the batch.
            </p>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-[1.7rem] border border-cream/12 bg-cream/[0.05] p-6 backdrop-blur-sm sm:p-8"
            >
              <h3 className="font-display text-2xl text-cream">Send an enquiry</h3>
              <p className="mt-1 text-[0.8rem] text-cream/50">
                This opens WhatsApp with your message ready to send.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/60">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass("name")}
                    placeholder="Aarav"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-[0.7rem] text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/60">
                    Mobile
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone")(e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputClass("phone")}
                    placeholder="98765 43210"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-[0.7rem] text-red-300">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="branch" className="mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/60">
                    Outlet
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={form.branch}
                    onChange={(e) => update("branch")(e.target.value)}
                    aria-invalid={Boolean(errors.branch)}
                    className={`${inputClass("branch")} appearance-none`}
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name} className="bg-espresso text-cream">
                        {b.name} — {b.locality}
                      </option>
                    ))}
                    <option value="Not sure yet" className="bg-espresso text-cream">
                      Not sure yet
                    </option>
                  </select>
                  {errors.branch && <p className="mt-1.5 text-[0.7rem] text-red-300">{errors.branch}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="I'd like to know about today's waffles and mocktails…"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-[0.7rem] text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button type="submit" className="btn btn-gold mt-6 w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send on WhatsApp
              </button>

              {waLink && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-start gap-3 rounded-xl border border-green-400/30 bg-green-400/10 p-3.5"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-300" aria-hidden="true" />
                  <p className="text-[0.76rem] leading-relaxed text-cream/75">
                    WhatsApp should have opened with your message.{" "}
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-bold text-gold underline">
                      Tap here
                    </a>{" "}
                    if it did not.
                  </p>
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
