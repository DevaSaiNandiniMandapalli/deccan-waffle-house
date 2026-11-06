export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  vegetarian: boolean;
  /** Null until confirmed by the owner — the UI shows "Ask at counter". */
  price: number | null;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const MENU_NOTE =
  "Prices and final availability are confirmed at the counter. Our full card changes with the season, so ask the team for today's specials.";

export const menu: MenuCategory[] = [
  {
    id: "waffles",
    label: "Waffles",
    blurb: "Baked to order, crisp at the edges, soft in the middle.",
    items: [
      {
        id: "belgian-classic",
        name: "Belgian Classic",
        description: "Our golden base waffle, dusted and served warm with a light drizzle.",
        image: "/images/waffle-belgian.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "death-by-chocolate",
        name: "Death by Chocolate",
        description: "Dark chocolate poured over a hot waffle, finished with chocolate shavings.",
        image: "/images/waffle-choco.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "strawberry-fields",
        name: "Strawberry Fields",
        description: "Fresh strawberries and cream on a warm waffle, with a soft sugar finish.",
        image: "/images/waffle-strawberry.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "fruit-orchard",
        name: "Fruit Orchard",
        description: "Seasonal fruit piled high — bright, juicy and made for sharing.",
        image: "/images/waffle-fruit.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "a-la-mode",
        name: "Waffle à la Mode",
        description: "A hot waffle with a scoop of ice cream melting into every square.",
        image: "/images/waffle-icecream.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "deccan-stack",
        name: "The Deccan Stack",
        description: "A tall stack built for the table — layer it with the toppings you love.",
        image: "/images/waffle-stack.webp",
        vegetarian: true,
        price: null,
      },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    blurb: "Cold, fizzy and shaken fresh — zero alcohol, all mood.",
    items: [
      {
        id: "mint-mojito",
        name: "Fresh Mint Mojito",
        description: "Mint, lime and soda over ice. The reset button between waffles.",
        image: "/images/mocktail-mojito.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "blue-lagoon",
        name: "Blue Lagoon",
        description: "A bright blue, citrus-forward cooler that looks as good as it tastes.",
        image: "/images/mocktail-blue.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "fruit-punch",
        name: "Fruit Punch Fizz",
        description: "Mixed fruit, a squeeze of citrus and a sparkling finish.",
        image: "/images/mocktail-fruit.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "pina-colada",
        name: "Virgin Piña Colada",
        description: "Creamy coconut and pineapple, shaken and served ice cold.",
        image: "/images/mocktail-pina.webp",
        vegetarian: true,
        price: null,
      },
    ],
  },
  {
    id: "fries",
    label: "Fries",
    blurb: "Fried fresh, seasoned properly, gone in minutes.",
    items: [
      {
        id: "classic-fries",
        name: "Classic Salted Fries",
        description: "Golden, crisp and simply salted — the one that starts every order.",
        image: "/images/fries-classic.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "cheese-fries",
        name: "Cheese Overload Fries",
        description: "Hot fries under a generous pour of molten cheese.",
        image: "/images/fries-cheese.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "peri-peri-fries",
        name: "Peri Peri Fries",
        description: "Dusted with a smoky, punchy peri peri seasoning.",
        image: "/images/fries-peri.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "masala-fries",
        name: "Masala Fries",
        description: "Indian-spiced fries with a warm, chatpata kick.",
        image: "/images/fries-masala.webp",
        vegetarian: true,
        price: null,
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    blurb: "The quick bites that turn a craving into a full table.",
    items: [
      {
        id: "club-sandwich",
        name: "Club Sandwich",
        description: "Layered, toasted and stacked — a proper knife-and-fork sandwich.",
        image: "/images/snack-sandwich.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "veg-burger",
        name: "Veg Burger & Fries",
        description: "A soft bun, a crisp patty and a side of our classic fries.",
        image: "/images/snack-burger.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "brownie-ice-cream",
        name: "Brownie & Ice Cream",
        description: "A warm chocolate brownie with vanilla ice cream on top.",
        image: "/images/snack-brownie.webp",
        vegetarian: true,
        price: null,
      },
      {
        id: "waffle-sundae",
        name: "Waffle Sundae",
        description: "Waffle pieces, ice cream and sauce in one cold, crunchy bowl.",
        image: "/images/waffle-plate.webp",
        vegetarian: true,
        price: null,
      },
    ],
  },
];
