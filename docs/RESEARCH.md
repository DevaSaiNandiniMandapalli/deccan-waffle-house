# DECCAN WAFFLE HOUSE — Research Log

Researched: 6 Nov 2026. Sources queried: Brave Search, Bing (en-IN), Yahoo, DuckDuckGo (blocked), Google (bot wall), OpenStreetMap/Nominatim, Photon (OSM geocoder), Instagram handle probes, Openverse.

## 1. What was verified

| Item | Status | Evidence |
|---|---|---|
| Brand name "DECCAN WAFFLE HOUSE" | **Owner-supplied** (signage) | Client brief + signage description |
| Category: waffles, mocktails, fries, snacks | **Owner-supplied** | Client brief |
| Base city: Hyderabad, Telangana | **Owner-supplied** | Client brief |
| Contact numbers +91 63031 38325 / +91 70997 65052 | **Owner-supplied** (appear on signage) | Client brief. No public listing found matching either number. |
| Colours: #F5B83D, #E98A32, #3B241B, #FFF4DF, #211610 | **Owner-supplied** | Client brief |
| The supplied shop photograph | **Not received** | No image was attached to the brief; workspace is empty. |

## 2. What could NOT be verified

No public web presence could be verified for the exact business name:

- Exact-phrase searches for "Deccan Waffle House" returned no matching business on Brave, Bing (en-IN) or Yahoo.
- Phone-number searches for both numbers returned no business listing.
- No matching POI in OpenStreetMap / Photon for Hyderabad.
- No public Zomato, Swiggy, Justdial, Tripadvisor, Facebook or Instagram listing was found.
- Instagram handle probes (`deccanwafflehouse`, `deccanwaffles`, `deccan_waffle_house`) redirect to login and cannot be confirmed.

**Do not confuse with:** "Waffle House" (Hyderabad, Hitech City / Banjara Hills — a separate, unrelated brand), "Deccan House" (restaurants in India/Canada), "The Belgian Waffle Co.", or the US "Waffle House".

## 3. Consequences for this build

- **Branches:** the branch directory is fully implemented and data-driven, but it ships with **one owner-supplied Hyderabad outlet record whose address/hours await owner confirmation** plus clearly-labelled "reserved outlet" slots (not fictional branches). No invented street address, locality, rating or opening time is displayed.
- **Menu:** category structure and item names follow the brief's categories (waffles / mocktails / fries / snacks). **No prices, ratings or "best-seller" claims are invented** — price fields are `null` until confirmed and render as "Ask at counter".
- **Offers:** section is hidden by default because no verified offer exists. It renders automatically when an owner adds entries in `src/data/offers.ts`.
- **Photos:** all photography is illustrative stock (credits in `src/data/credits.ts`). They are **not** presented as photographs of this business.
- **Social:** Instagram/Facebook links are `null` until the owner supplies handles; the UI hides them rather than linking to a wrong account.
- **WhatsApp:** enabled only for the owner-supplied numbers, and flagged for owner confirmation.

## 4. Owner confirmation checklist

1. Confirm the exact street address, locality and pin for each outlet.
2. Confirm trading hours per outlet.
3. Confirm which number belongs to which outlet (and whether both are WhatsApp-enabled).
4. Confirm the Instagram / Facebook handles.
5. Send the actual signage photograph and any store/food photographs for authentic replacement.
6. Confirm the real menu with prices, and any live offers.
7. Confirm whether the kitchen is 100% vegetarian.
