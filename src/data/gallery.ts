export type GalleryCategory = "Signature Waffles" | "Chocolate Specials" | "Mocktails" | "Fries" | "Our Stalls";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Controls masonry height so the grid keeps an editorial rhythm. */
  ratio: "tall" | "wide" | "square";
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Signature Waffles",
  "Chocolate Specials",
  "Mocktails",
  "Fries",
  "Our Stalls",
];

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "images/waffle-strawberry.webp",
    alt: "Waffle topped with fresh strawberries and a dusting of sugar",
    caption: "Strawberries, cream and a warm waffle",
    category: "Signature Waffles",
    ratio: "tall",
  },
  {
    id: "g2",
    src: "images/hero-waffle-wide.webp",
    alt: "Chocolate-covered waffle broken open to show a soft centre",
    caption: "Chocolate, poured generously",
    category: "Chocolate Specials",
    ratio: "wide",
  },
  {
    id: "g3",
    src: "images/mocktail-mojito.webp",
    alt: "Tall glass of mint mojito with ice and lime",
    caption: "Mint mojito, shaken cold",
    category: "Mocktails",
    ratio: "tall",
  },
  {
    id: "g4",
    src: "images/fries-cheese.webp",
    alt: "Basket of fries covered in melted cheese",
    caption: "Cheese overload fries",
    category: "Fries",
    ratio: "square",
  },
  {
    id: "g5",
    src: "images/waffle-choco.webp",
    alt: "Stack of chocolate waffles with chocolate sauce",
    caption: "The chocolate chapter",
    category: "Chocolate Specials",
    ratio: "tall",
  },
  {
    id: "g6",
    src: "images/waffle-fruit.webp",
    alt: "Waffles served with fresh fruit",
    caption: "Fruit on everything",
    category: "Signature Waffles",
    ratio: "square",
  },
  {
    id: "g7",
    src: "images/mocktail-blue.webp",
    alt: "Bright blue mocktail served in a glass",
    caption: "Blue Lagoon",
    category: "Mocktails",
    ratio: "wide",
  },
  {
    id: "g8",
    src: "images/fries-peri.webp",
    alt: "Peri peri fries piled in a bowl",
    caption: "Peri peri, extra dust",
    category: "Fries",
    ratio: "tall",
  },
  {
    id: "g9",
    src: "images/shop-interior.webp",
    alt: "Cosy interior of a waffle shop with seating and warm lights",
    caption: "The counter, where it all starts",
    category: "Our Stalls",
    ratio: "wide",
  },
  {
    id: "g10",
    src: "images/waffle-icecream.webp",
    alt: "Waffle served with a scoop of ice cream",
    caption: "Waffle à la mode",
    category: "Signature Waffles",
    ratio: "square",
  },
  {
    id: "g11",
    src: "images/mocktail-pina.webp",
    alt: "Two tropical mocktails with fruit garnish",
    caption: "Piña colada, no proof needed",
    category: "Mocktails",
    ratio: "tall",
  },
  {
    id: "g12",
    src: "images/shop-counter.webp",
    alt: "Warmly lit restaurant counter and dining room",
    caption: "Made to order, every time",
    category: "Our Stalls",
    ratio: "square",
  },
  {
    id: "g13",
    src: "images/waffle-pizza.webp",
    alt: "Chocolate dessert pizza cut into slices",
    caption: "Waffle pizza, sliced for the table",
    category: "Chocolate Specials",
    ratio: "wide",
  },
  {
    id: "g14",
    src: "images/bowl-brownie.webp",
    alt: "Warm brownie bowl with chocolate sauce",
    caption: "Bowl cakes, loaded to the rim",
    category: "Chocolate Specials",
    ratio: "tall",
  },
  {
    id: "g15",
    src: "images/nuggets.webp",
    alt: "Crisp golden chicken nuggets",
    caption: "Hot nuggets, straight from the fryer",
    category: "Fries",
    ratio: "square",
  },
  {
    id: "g16",
    src: "images/mocktail-curacao.webp",
    alt: "Bright blue curacao mocktail over ice",
    caption: "Blue curacao mojito",
    category: "Mocktails",
    ratio: "square",
  },
  {
    id: "g17",
    src: "images/waffle-redvelvet.webp",
    alt: "Red velvet waffle with cream",
    caption: "Red velvet, straight off the iron",
    category: "Signature Waffles",
    ratio: "wide",
  },
];
