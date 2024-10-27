import { APP_PATH } from "./pages";

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
    image: `${APP_PATH}/images/pho.webp`,
  },
  {
    header: "Pho-4-Ever",
    subHeader: "Spicy and Savory Bún Bò Huế",
    tag: "Family Recipe Beef Lemongrass Noodle Soup",
    image: `${APP_PATH}images/bunBoHue.webp`,
  },
  {
    header: "Pho-4-Ever",
    subHeader: "Savory Fried Egg Rolls",
    tag: "Leaves you wanting more",
    image: `${APP_PATH}images/eggrolls.webp`,
  },
];
