export type Offer = {
  id: string;
  title: string;
  detail: string;
  price: string;
  tag?: string;
  image?: string;
};

/**
 * OFFERS — hidden until a verified offer exists.
 *
 * Add an object here and the offers section appears automatically.
 * Do not publish combinations, prices or discounts that the business
 * has not confirmed.
 */
export const offers: Offer[] = [];

export const offersEnabled = offers.length > 0;
