export type Menu_Item = {
  name: string;
  desc: string;
  price?: string;
  priceTwo?: string;
};

export const beverages: Menu_Item[] = [
  {
    name: "Fountain Soda (Nước Ngọt)",
    desc: "Coke Products. Includes free refills.",
    price: "$1.99",
  },
  {
    name: "Iced Tea (Trà Đá)",
    desc: "Unsweetened or Sweetened. Includes free refills.",
    price: "$1.99",
  },
  {
    name: "Vietnamese Iced Coffee (Cà Phê Sữa Đá)",
    desc: "Special filtered traditional Vietnamese-grown dark roast and condensed milk served over ice. No refills.",
    price: "$4.50",
  },
  {
    name: "Iced Thai Tea (Trà Thái)",
    desc: "This tea beverage is made from Ceylon tea, sweetened, topped with cream, and served over ice. No refills.",
    price: "$3.50",
  },
  {
    name: "Vietnamese Hot Tea (Trà Nóng)",
    desc: "Traditional Vietnamese Jasmine tea steeped in hot water. Served per teapot.",
    price: "(S) $2.50",
    priceTwo: "(L) $3.50",
  },
  {
    name: "Boba Tea",
    desc: "Ten different flavors of drink all with tapioca boba pearls: Avocado, Black Milk Tea, Coconut, Durian, Mango, Passionfruit, Strawberry, Taro, Thai Tea, Watermelon.",
    price: "$5.00",
  },
];

export const appetizers: Menu_Item[] = [
  {
    name: "Fried Egg Rolls (Chả Giò)",
    desc: "Seasoned pork, onion, carrot, jicama, and glass noodles wrapped in rice paper sheets and deep-fried to golden brown perfection.",
    price: "$1.50 each",
  },
  {
    name: "Summer Rolls (Gỏi Cuốn)",
    desc: "Shrimp, pork, rice vermicelli, cilantro, and fresh mixed greens wrapped in rice paper. Served with our house peanut sauce on the side. CONTAINS NUTS.",
    price: "$2.00 each",
  },
  {
    name: "Crab Rangoons",
    desc: "Deep-fried shells filled with sweet cream cheese. Served with our house sweet and sour sauce. ",
    price: "(3) $2.50",
    priceTwo: "(6) $4.50",
  },
  {
    name: "Steamed Dumplings",
    desc: "Steamed dumplings filled with moist & juicy ground pork and vegetables. Served with our House soy sauce viginerette.",
    price: "(5) $3.99",
  },
];

export const specials: Menu_Item[] = [
  {
    name: "B1. Bún Bò Huế (Spicy Beef & Pork Noodle Soup)",
    desc: "Beef based noodle soup with different layers of beef, pork, shrimp, and fish flavors. Slightly spicy and savory lemongrass flavored beef noodle soup served with pork sausage, beef flank, and brisket.",
    price: "$11.99",
  },
  {
    name: "B2. Bún Chả Giò (Fried Egg Rolls and Rice Noodles)",
    desc: "Rice noodles topped with 3 deep-fried egg rolls. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with roasted peanuts.",
    price: "$8.99",
  },
  {
    name: "B3. Bún Thit Nuong (Grilled Pork and Rice Noodles)",
    desc: `Rice noodles topped with lemongrass-seasoned pork. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with roasted peanuts.`,
    price: "",
  },
];

export const pho: Menu_Item[] = [];

export const rice: Menu_Item[] = [];

export const extras: Menu_Item[] = [];
