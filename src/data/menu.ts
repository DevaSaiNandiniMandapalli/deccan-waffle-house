export type MenuPrice = {
  /** Shown before the amount, e.g. "Medium" / "Large". */
  label?: string;
  amount: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  vegetarian: boolean;
  prices: MenuPrice[];
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Shorter label used in the tab bar on narrow screens. */
  short?: string;
  blurb: string;
  items: MenuItem[];
};

/** Prices transcribed from the in-store menu card. */
export const MENU_NOTE =
  "Extra toppings ₹10. Prices are in rupees, taken from our in-store menu card — the counter confirms anything new on the day.";

export const menu: MenuCategory[] = [
  {
    id: "signature",
    short: "Signature",
    label: "Signature Waffles",
    blurb: "The house favourites — baked to order, loaded at the counter.",
    items: [
      {
        id: "nutella-chocolate-waffle",
        name: "Nutella Chocolate Waffle",
        description: "A hot waffle flooded with Nutella, cut into shareable squares.",
        image: "images/waffle-choco.webp",
        vegetarian: true,
        prices: [{ amount: 100 }],
      },
      {
        id: "belgian-waffle",
        name: "Belgian Waffle",
        description: "Deep pockets, crisp edges, soft centre — the classic done properly.",
        image: "images/waffle-belgian.webp",
        vegetarian: true,
        prices: [{ amount: 90 }],
      },
      {
        id: "brownie-waffle",
        name: "Brownie Waffle",
        description: "Warm brownie crumble over a fresh waffle with chocolate sauce.",
        image: "images/bowl-brownie.webp",
        vegetarian: true,
        prices: [{ amount: 90 }],
      },
      {
        id: "oreo-waffle",
        name: "Oreo Waffle",
        description: "Crushed Oreo, cream and chocolate over a golden waffle.",
        image: "images/waffle-oreo.webp",
        vegetarian: true,
        prices: [{ amount: 100 }],
      },
      {
        id: "red-velvet-waffle",
        name: "Red Velvet Waffle",
        description: "Cocoa-red waffle with a cream-cheese style finish.",
        image: "images/waffle-redvelvet.webp",
        vegetarian: true,
        prices: [{ amount: 100 }],
      },
      {
        id: "kit-kat-waffle",
        name: "Kit Kat Waffle",
        description: "Chocolate wafer pieces piled on with a warm chocolate drizzle.",
        image: "images/waffle-stack.webp",
        vegetarian: true,
        prices: [{ amount: 110 }],
      },
      {
        id: "sandwich-waffle",
        name: "Sandwich Waffle",
        description: "Two waffles pressed around a generous sweet filling.",
        image: "images/waffle-sandwich.webp",
        vegetarian: true,
        prices: [{ amount: 110 }],
      },
      {
        id: "blueberry-waffle",
        name: "Blueberry Waffle",
        description: "Berry compote spooned over a warm waffle, with a little cream.",
        image: "images/waffle-fruit.webp",
        vegetarian: true,
        prices: [{ amount: 80 }],
      },
      {
        id: "mango-waffle",
        name: "Mango Waffle",
        description: "Seasonal mango and cream on a crisp-edged waffle.",
        image: "images/waffle-strawberry.webp",
        vegetarian: true,
        prices: [{ amount: 80 }],
      },
    ],
  },
  {
    id: "bowls",
    short: "Bowls",
    label: "Bowl Cakes",
    blurb: "Warm cake in a bowl, buried under chocolate and toppings.",
    items: [
      {
        id: "classic-bowl",
        name: "Classic Bowl",
        description: "A warm baked bowl cake with a simple chocolate finish.",
        image: "images/bowl-cake.webp",
        vegetarian: true,
        prices: [{ amount: 100 }],
      },
      {
        id: "milk-chocolate-overload",
        name: "Milk Chocolate Overload",
        description: "Milk chocolate sauce poured over the top and down the sides.",
        image: "images/bowl-sundae.webp",
        vegetarian: true,
        prices: [{ amount: 120 }],
      },
      {
        id: "white-chocolate-overload",
        name: "White Chocolate Overload",
        description: "White chocolate over a warm bowl cake — sweet, creamy, rich.",
        image: "images/waffle-bite.webp",
        vegetarian: true,
        prices: [{ amount: 120 }],
      },
      {
        id: "brownie-overload",
        name: "Brownie Overload",
        description: "Brownie chunks folded through the bowl with chocolate sauce.",
        image: "images/bowl-brownie.webp",
        vegetarian: true,
        prices: [{ amount: 130 }],
      },
      {
        id: "triple-chocolate-overload",
        name: "Triple Chocolate Overload",
        description: "Dark, milk and white chocolate in one bowl. Order it to share.",
        image: "images/waffle-icecream.webp",
        vegetarian: true,
        prices: [{ amount: 140 }],
      },
    ],
  },
  {
    id: "pizza",
    short: "Waffle Pizza",
    label: "Waffle Pizza",
    blurb: "A whole waffle base, sliced like a pizza and loaded edge to edge.",
    items: [
      {
        id: "dark-chocolate-pizza",
        name: "Dark Chocolate Pizza",
        description: "Dark chocolate across a full waffle base, cut into slices.",
        image: "images/waffle-pizza.webp",
        vegetarian: true,
        prices: [{ amount: 200 }],
        tag: "To share",
      },
      {
        id: "white-chocolate-pizza",
        name: "White Chocolate Pizza",
        description: "White chocolate on a soft waffle base — the sweetest slice on the card.",
        image: "images/waffle-plate.webp",
        vegetarian: true,
        prices: [{ amount: 220 }],
        tag: "To share",
      },
      {
        id: "milk-chocolate-pizza",
        name: "Milk Chocolate Pizza",
        description: "Milk chocolate, poured warm, with a dusting to finish.",
        image: "images/waffle-choco.webp",
        vegetarian: true,
        prices: [{ amount: 220 }],
        tag: "To share",
      },
      {
        id: "mix-chocolate-pizza",
        name: "Mix Chocolate Pizza",
        description: "Two chocolates on one base — half dark, half milk.",
        image: "images/waffle-fruit.webp",
        vegetarian: true,
        prices: [{ amount: 230 }],
        tag: "To share",
      },
      {
        id: "nutella-chocolate-pizza",
        name: "Nutella Chocolate Pizza",
        description: "The full Nutella treatment on a pizza-sized waffle base.",
        image: "images/waffle-pizza.webp",
        vegetarian: true,
        prices: [{ amount: 260 }],
        tag: "To share",
      },
    ],
  },
  {
    id: "classic",
    short: "Classic",
    label: "Classic Waffles",
    blurb: "The straightforward ones — pick your chocolate and go.",
    items: [
      {
        id: "classic-dark",
        name: "Classic Dark Chocolate",
        description: "A plain golden waffle with dark chocolate poured over.",
        image: "images/waffle-belgian.webp",
        vegetarian: true,
        prices: [{ amount: 50 }],
      },
      {
        id: "classic-milk",
        name: "Classic Milk Chocolate",
        description: "Our everyday waffle with a milk chocolate finish.",
        image: "images/waffle-syrup.webp",
        vegetarian: true,
        prices: [{ amount: 60 }],
      },
      {
        id: "classic-white",
        name: "Classic White Chocolate",
        description: "Warm waffle, white chocolate, nothing else in the way.",
        image: "images/waffle-plate.webp",
        vegetarian: true,
        prices: [{ amount: 60 }],
      },
    ],
  },
  {
    id: "biscuit",
    short: "Biscuit",
    label: "Biscuit Waffles",
    blurb: "Small, crisp and quick — the ₹40 starter waffle.",
    items: [
      {
        id: "biscuit-dark",
        name: "Biscuit Dark Chocolate",
        description: "A bite-sized crisp waffle with dark chocolate.",
        image: "images/waffle-bite.webp",
        vegetarian: true,
        prices: [{ amount: 40 }],
      },
      {
        id: "biscuit-milk",
        name: "Biscuit Milk Chocolate",
        description: "Crisp biscuit waffle, milk chocolate finish.",
        image: "images/waffle-syrup.webp",
        vegetarian: true,
        prices: [{ amount: 40 }],
      },
      {
        id: "biscuit-white",
        name: "Biscuit White Chocolate",
        description: "Crisp biscuit waffle with white chocolate.",
        image: "images/waffle-bite.webp",
        vegetarian: true,
        prices: [{ amount: 40 }],
      },
    ],
  },
  {
    id: "mocktails",
    short: "Mocktails",
    label: "Mocktails",
    blurb: "Shaken over ice, zero alcohol, made to cut through the chocolate.",
    items: [
      {
        id: "virgin-mojito",
        name: "Virgin Mojito",
        description: "Mint, lime and soda over crushed ice — the house cooler.",
        image: "images/mocktail-mojito.webp",
        vegetarian: true,
        prices: [{ amount: 60 }],
      },
      {
        id: "blue-curacao-mojito",
        name: "Blue Curacao Mojito",
        description: "Blue curacao, lime and mint — bright blue, sharp finish.",
        image: "images/mocktail-curacao.webp",
        vegetarian: true,
        prices: [{ amount: 60 }],
      },
      {
        id: "strawberry-mojito",
        name: "Strawberry Mojito",
        description: "Strawberry, mint and lime, shaken and served ice cold.",
        image: "images/mocktail-strawberry.webp",
        vegetarian: true,
        prices: [{ amount: 70 }],
      },
      {
        id: "mango-mojito",
        name: "Mango Mojito",
        description: "Mango and mint with a fizzy lift — sweet and cold.",
        image: "images/mocktail-pina.webp",
        vegetarian: true,
        prices: [{ amount: 70 }],
      },
      {
        id: "blueberry-mojito",
        name: "Blueberry Mojito",
        description: "Blueberry, lime and mint over plenty of ice.",
        image: "images/mocktail-blue.webp",
        vegetarian: true,
        prices: [{ amount: 70 }],
      },
    ],
  },
  {
    id: "fries",
    short: "Fries",
    label: "Fries",
    blurb: "Fried to order. Available in medium and large.",
    items: [
      {
        id: "classic-fries",
        name: "Classic Fries",
        description: "Golden fries, salted while hot.",
        image: "images/fries-classic.webp",
        vegetarian: true,
        prices: [
          { label: "Medium", amount: 60 },
          { label: "Large", amount: 90 },
        ],
      },
      {
        id: "peri-peri-fries",
        name: "Peri Peri Fries",
        description: "Tossed in a smoky, spicy peri peri seasoning.",
        image: "images/fries-peri.webp",
        vegetarian: true,
        prices: [
          { label: "Medium", amount: 70 },
          { label: "Large", amount: 110 },
        ],
      },
    ],
  },
  {
    id: "nuggets",
    short: "Nuggets",
    label: "Nuggets",
    blurb: "Crisp on the outside, hot all the way through.",
    items: [
      {
        id: "veg-nuggets",
        name: "Veg Nuggets",
        description: "Vegetable nuggets, fried golden and served hot.",
        image: "images/nuggets-plate.webp",
        vegetarian: true,
        prices: [{ amount: 70 }],
      },
      {
        id: "chicken-nuggets",
        name: "Chicken Nuggets",
        description: "Classic chicken nuggets with a crisp crumb.",
        image: "images/nuggets.webp",
        vegetarian: false,
        prices: [{ amount: 90 }],
      },
    ],
  },
];

export function formatPrice(item: MenuItem): string {
  if (item.prices.length === 0) return "Ask at counter";
  if (item.prices.length === 1) return `₹${item.prices[0].amount}`;
  return item.prices.map((p) => `₹${p.amount}`).join(" / ");
}
