export type Menu_Item = {
  name: string
  desc?: string
  price?: string
  priceTwo?: string
}

export const beverages: Menu_Item[] = [
  {
    name: 'Fountain Soda (Nước Ngọt)',
    desc: 'Coke Products. Includes free refills.',
    price: '$1.99',
  },
  {
    name: 'Iced Tea (Trà Đá)',
    desc: 'Unsweetened or Sweetened. Includes free refills.',
    price: '$1.99',
  },
  {
    name: 'Vietnamese Iced Coffee (Cà Phê Sữa Đá)',
    desc: 'Special filtered traditional Vietnamese-grown dark roast and condensed milk served over ice. No refills.',
    price: '$4.50',
  },
  {
    name: 'Iced Thai Tea (Trà Thái)',
    desc: 'This tea beverage is made from Ceylon tea, sweetened, topped with cream, and served over ice. No refills.',
    price: '$3.50',
  },
  {
    name: 'Vietnamese Hot Tea (Trà Nóng)',
    desc: 'Traditional Vietnamese Jasmine tea steeped in hot water. Served per teapot.',
    price: '(S) $2.50',
    priceTwo: '(L) $3.50',
  },
  {
    name: 'Boba Tea',
    desc: 'Ten different flavors of drink all with tapioca boba pearls: Avocado, Black Milk Tea, Coconut, Durian, Mango, Passionfruit, Strawberry, Taro, Thai Tea, Watermelon.',
    price: '$5.00',
  },
]

export const appetizers: Menu_Item[] = [
  {
    name: 'Fried Egg Rolls (Chả Giò)',
    desc: 'Seasoned pork, onion, carrot, jicama, and glass noodles wrapped in rice paper sheets and deep-fried to golden brown perfection.',
    price: '$1.50 each',
  },
  {
    name: 'Summer Rolls (Gỏi Cuốn)',
    desc: 'Shrimp, pork, rice vermicelli, cilantro, and fresh mixed greens wrapped in rice paper. Served with our house peanut sauce on the side. CONTAINS NUTS.',
    price: '$2.00 each',
  },
  {
    name: 'Crab Rangoons',
    desc: 'Deep-fried shells filled with sweet cream cheese. Served with our house sweet and sour sauce. ',
    price: '(3) $2.50',
    priceTwo: '(6) $4.50',
  },
  {
    name: 'Steamed Dumplings',
    desc: 'Steamed dumplings filled with moist & juicy ground pork and vegetables. Served with our House soy sauce viginerette.',
    price: '(5) $3.99',
  },
]

export const specials: Menu_Item[] = [
  {
    name: 'B1. Bún Bò Huế (Spicy Beef & Pork Noodle Soup)',
    desc: 'Beef based noodle soup with different layers of beef, pork, shrimp, and fish flavors. Slightly spicy and savory lemongrass flavored beef noodle soup served with pork sausage, beef flank, and brisket.',
    price: '$11.99',
  },
  {
    name: 'B2. Bún Chả Giò (Fried Egg Rolls and Rice Noodles)',
    desc: 'Rice noodles topped with 3 deep-fried egg rolls. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with roasted peanuts.',
    price: '$8.99',
  },
  {
    name: 'B3. Bún Thit Nuong (Grilled Pork and Rice Noodles)',
    desc: `Rice noodles topped with lemongrass-seasoned pork. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with roasted peanuts.`,
    price: '$10.99',
  },
  {
    name: 'B4. Bún Đau Hu (Fried Tofu and Rice Noodles):',
    desc: 'Rice noodles topped with fried tofu. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with onion oil.',
    price: '$10.99',
  },
  {
    name: 'B5. Bánh Mì #1 (Roasted Pork Sandwich)',
    desc: 'Vietnamese seasoned roasted pork, jambon, pork sausage, butter, potted meat,pickled carrots and daikon, cucumber, cilantro, black pepper, pork meat sauce, and fresh jalapenos served in a toasted sub sandwich.',
    price: '$6.00',
  },
  {
    name: 'B6. Bánh Mì #2 (Grilled Pork Sandwich)',
    desc: 'Vietnamese lemongrass-seasoned pork, butter, pickled carrots and daikon, cucumber, cilantro, black pepper, pork meat sauce, and fresh jalapenos served in a toasted sub sandwich.',
    price: '$6.00',
  },
]

export const pho: Menu_Item[] = [
  {
    name: 'P1. Phở Tái (Rare Steak Pho)',
    desc: 'Beef noodle soup with thin slices of rare eye of round steak.',
  },
  {
    name: 'P2. Phở Bò Viên (Meatball Pho)',
    desc: 'Beef noodle soup with homemade beef meatballs.',
  },
  {
    name: 'P3. Phở Tái Nam (Rare Steak and Flank Pho)',
    desc: 'Beef noodle soup with slices of rare eye of round steak and beef flank.',
  },
  {
    name: 'P4. Phở Tái Bò Viên (Rare Steak and Meatball Pho)',
    desc: 'Beef noodle soup with slices of rare eye of round steak & homemade meatballs.',
  },
  {
    name: 'P5. Phở Chín (Well-Done Brisket Pho)',
    desc: 'Beef noodle soup with slices of well-done beef flank.',
  },
  {
    name: 'P6. Phở Tái Nam Bò Viên (Rare Steak, Flank, & Meatball Pho)',
    desc: 'Beef noodle soup with slices of rare eye of round steak, flank, & meatballs.',
  },
  {
    name: 'P7. Phở Gà (Chicken Pho)',
    desc: 'Chicken breast & noodles in signature beef broth. Chicken broth upon request depending on house availability.',
  },
  {
    name: 'P8. Phở Chay (Vegetable Pho)',
    desc: 'Mushrooms, carrots, broccoli, and noodles in signature beef broth. Vegetable broth upon request depending on house availability.',
  },
  {
    name: 'P9. Phở Đặc Biệt (Special Deluxe Pho)',
    desc: 'Traditional beef noodle soup with slices of rare eye of round steak, flank, brisket, tendons (upon request), and meatballs.',
    price: '$11.99',
  },
  {
    name: 'P10. Phở Hai San (Seafood Pho)',
    desc: 'Traditional seafood noodle soup with shrimp and imitation crab. ',
    price: '$11.99',
  },
]

export const rice: Menu_Item[] = [
  {
    name: 'C1. Cơm Thit Nuong (Grilled Pork and Rice)',
    desc: 'Steamed rice and lemongrass seasoned grilled pork. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with onion oil. ',
    price: '$10.99',
  },
  {
    name: 'C2. Cơm Thit Xa Xiu (Barbacue Pork and Rice)',
    desc: 'Steamed rice and barbecue-seasoned grilled pork. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with onion oil. ',
    price: '$10.99',
  },
  {
    name: 'C3. Cơm Đau Hu (Fried Tofu and Rice)',
    desc: 'Steamed rice and fried tofu. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with onion oil.',
    price: '$10.99',
  },
  {
    name: 'C4. Cơm Thịt Gà (Grilled Chicken and Rice)',
    desc: 'Rice and lemongrass-seasoned grilled chicken thighs. Sauteed with our house sauce. Served with fresh lettuce, cucumber, pickled carrots and daikon, and our House sweet and sour fish sauce on the side. Topped with onion oil. ',
    price: '$10.99',
  },
]

export const extras: Menu_Item[] = [
  {
    name: '1. Extra meat (of any sort)',
    price: '$3.00',
  },
  {
    name: '2. Extra Shrimp',
    price: '$5.00',
  },
  {
    name: '3. Extra sauces (of any sort)',
    price: '$1.00',
  },
  {
    name: '4. Extra pickled carrots and daikon',
    price: '$3.00',
  },
  {
    name: '5. Extra Pho Vegetables (beansprouts, basil, jalapeños)',
    price: '$3.00',
  },
  {
    name: '6. Extra noodles',
    price: '$3.00',
  },
  {
    name: '7. Fried Tofu',
    price: '$3.00',
  },
  {
    name: '8. Steamed Rice',
    price: '$3.00',
  },
  {
    name: '9. [Add] Vegetables (Broccoli, Carrots, Mushrooms)',
    price: '$3.00',
  },
]
