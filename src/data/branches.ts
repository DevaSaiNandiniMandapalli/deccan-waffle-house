import { PHONES } from "./site";

export type Branch = {
  id: string;
  name: string;
  locality: string;
  /** Null until the owner confirms the street address. */
  address: string | null;
  /** Null until the owner confirms trading hours. */
  hours: string | null;
  phones: { label: string; display: string; tel: string; whatsapp: string }[];
  /** Approximate, city-level coordinates used only for the map preview. */
  coords: { lat: number; lng: number } | null;
  mapsQuery: string;
  note?: string;
};

/**
 * BRANCH DIRECTORY — single source of truth.
 *
 * To add an outlet, copy an object below and fill in the verified details.
 * The directory, search, map and contact form all read from this array.
 * Only add a branch once its address and phone number are confirmed.
 */
export const branches: Branch[] = [
  {
    id: "hyderabad-city",
    name: "Deccan Waffle House — Hyderabad",
    locality: "Hyderabad, Telangana",
    address: null,
    hours: null,
    phones: PHONES.map((p) => ({ ...p })),
    coords: { lat: 17.385, lng: 78.4867 },
    mapsQuery: "Deccan Waffle House Hyderabad",
    note: "Street address and trading hours are awaiting owner confirmation.",
  },
];

export const branchStatus = {
  confirmed: branches.filter((b) => b.address).length,
  awaiting: branches.filter((b) => !b.address).length,
};

export function directionsUrl(branch: Branch) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`;
}

export function embedMapUrl(branch: Branch) {
  const { lat, lng } = branch.coords ?? { lat: 17.385, lng: 78.4867 };
  const d = 0.035;
  const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}
