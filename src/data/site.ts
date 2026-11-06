export const PHONES = [
  { label: "Counter line", display: "+91 63031 38325", tel: "+916303138325", whatsapp: "916303138325" },
  { label: "Counter line", display: "+91 70997 65052", tel: "+917099765052", whatsapp: "917099765052" },
] as const;

export const site = {
  name: "Deccan Waffle House",
  shortName: "DWH",
  city: "Hyderabad",
  state: "Telangana",
  tagline: "Made for cravings. Served with happiness.",
  headline: "Good mood. Great waffles.",
  intro:
    "From golden waffles to refreshing mocktails and irresistible bites, discover your next favourite craving.",
  /** Set these once the owner confirms the handles. Null hides the link. */
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  /** Used for "open in maps" searches until street addresses are confirmed. */
  cityMapQuery: "Deccan Waffle House Hyderabad",
  /** Section copy is owner-editable below. */
  story:
    "Deccan Waffle House is a Hyderabad original built around one simple idea — that a good waffle can turn an ordinary evening into a good mood. We bake golden, crisp-edged Belgian-style waffles to order, finish them with chocolate, fruit and our house toppings, and pour mocktails cold enough to cut through the sweetness.",
  storySecondary:
    "Fries are fried fresh, sandwiches are stacked generously, and every plate leaves the counter the way we would want it served to us. It is street-side food, made with café care.",
};

export const NAV_LINKS = [
  { label: "Our Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Our Branches", href: "#branches" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;
