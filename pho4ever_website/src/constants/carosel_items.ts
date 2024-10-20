export type carouselItem = {
  header: string;
  subHeader: string;
  tag: string;
  image: string;
};

export const carouselItems: carouselItem[] = [
  {
    header: "Pho-4-Ever",
    subHeader: "Authentic Vietnamese Phở",
    tag: "A taste of Southeast Asia",
    image: "./images/pho.webp",
  },
  {
    header: "Pho-4-Ever",
    subHeader: "Spicy and Savory Bún Bò Huế",
    tag: "Family Recipe Beef Lemongrass Noodle Soup",
    image: "./images/bunBoHue.webp",
  },
  {
    header: "Pho-4-Ever",
    subHeader: "Savory Fried Egg Rolls",
    tag: "Leaves you wanting more",
    image: "./images/eggrolls.webp",
  },
];
