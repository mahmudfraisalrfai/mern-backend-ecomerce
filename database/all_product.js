const men1 = "/static/men1.webp";
const men2 = "/static/men2.jpeg";
const men3 = "/static/men3.webp";
const men4 = "/static/men4.webp";
const men5 = "/static/men5.webp";
const men6 = "/static/men6.webp";
const men7 = "/static/men7.webp";
const men8 = "/static/men8.webp";
const men9 = "/static/men9.webp";
const men10 = "/static/men10.webp";
const men11 = "/static/men11.webp";
const men12 = "/static/men12.jpeg";
// womens const
const women1 = "/static/women1.jpeg";
const women2 = "/static/women2.jpeg";
const women3 = "/static/women3.webp";
const women4 = "/static/women4.webp";
const women5 = "/static/women5.webp";
const women6 = "/static/women6.jpeg";
const women7 = "/static/women7.jpeg";
const women8 = "/static/women8.jpeg";
const women9 = "/static/women9.webp";
const women10 = "/static/women10.jpeg";
const women11 = "/static/women11.webp";
const women12 = "/static/women12.webp";
// kids const
const kids1 = "/static/kids1.webp";
const kids2 = "/static/kids2.jpeg";
const kids3 = "/static/kids3.jpeg";
const kids4 = "/static/kids4.webp";
const kids5 = "/static/kids5.webp";
const kids6 = "/static/kids6.webp";
const kids7 = "/static/kids7.jpeg";
const kids8 = "/static/kids8.webp";
const kids9 = "/static/kids9.jpeg";
const kids10 = "/static/kids10.webp";
const kids11 = "/static/kids11.jpeg";
const kids12 = "/static/kids12.jpg";
const itemsData = [
  // Men Products
  {
    id: 1,
    name: "Men Classic T-Shirt",
    category: "Men",
    image: men1,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Classic cotton T-shirt, perfect for everyday wear.",
    stars: 4,
  },
  {
    id: 2,
    name: "Men Leather Jacket",
    category: "Men",
    image: men2,
    new_price: "$99.99",
    old_price: "$149.99",
    description: "Stylish leather jacket for a bold look.",
    stars: 2,
  },
  {
    id: 3,
    name: "Men Running Sneakers",
    category: "Men",
    image: men3,
    new_price: "$59.99",
    old_price: "$89.99",
    description: "Comfortable sneakers designed for running and sports.",
    stars: 4,
  },
  {
    id: 4,
    name: "Men Formal Shoes",
    category: "Men",
    image: men4,
    new_price: "$79.99",
    old_price: "$129.99",
    description: "Elegant formal shoes perfect for office wear.",
    stars: 5,
  },
  {
    id: 5,
    name: "Men Denim Jeans",
    category: "Men",
    image: men5,
    new_price: "$39.99",
    old_price: "$59.99",
    description: "Classic fit denim jeans for a casual look.",
    stars: 3,
  },
  {
    id: 6,
    name: "Men Smartwatch",
    category: "Men",
    image: men6,
    new_price: "$199.99",
    old_price: "$249.99",
    description: "Advanced smartwatch with multiple health features.",
    stars: 4,
  },
  {
    id: 7,
    name: "Men Sports Shorts",
    category: "Men",
    image: men7,
    new_price: "$24.99",
    old_price: "$34.99",
    description: "Lightweight and breathable shorts for sports activities.",
    stars: 1,
  },
  {
    id: 8,
    name: "Men Hoodie",
    category: "Men",
    image: men8,
    new_price: "$49.99",
    old_price: "$69.99",
    description: "Cozy hoodie, perfect for casual outings.",
    stars: 5,
  },
  {
    id: 9,
    name: "Men Sunglasses",
    category: "Men",
    image: men9,
    new_price: "$89.99",
    old_price: "$119.99",
    description: "Stylish sunglasses to protect your eyes from UV rays.",
    stars: 4,
  },
  {
    id: 10,
    name: "Men Casual Shirt",
    category: "Men",
    image: men10,
    new_price: "$29.99",
    old_price: "$49.99",
    description: "Relaxed fit casual shirt for everyday wear.",
    stars: 4,
  },
  {
    id: 11,
    name: "Men Cap",
    category: "Men",
    image: men11,
    new_price: "$14.99",
    old_price: "$19.99",
    description: "Classic baseball cap for a stylish look.",
    stars: 5,
  },
  {
    id: 12,
    name: "Men Sports Watch",
    category: "Men",
    image: men12,
    new_price: "$129.99",
    old_price: "$179.99",
    description: "Durable sports watch with waterproof features.",
    stars: 2,
  },

  // Women Products
  {
    id: 13,
    name: "Women Elegant Dress",
    category: "Women",
    image: women1,
    new_price: "$49.99",
    old_price: "$79.99",
    description: "Elegant evening dress for formal occasions.",
    stars: 5,
  },
  {
    id: 14,
    name: "Women Stylish Handbag",
    category: "Women",
    image: women2,
    new_price: "$79.99",
    old_price: "$129.99",
    description: "Chic handbag to complement your outfit.",
    stars: 4,
  },
  {
    id: 15,
    name: "Women High Heels",
    category: "Women",
    image: women3,
    new_price: "$59.99",
    old_price: "$99.99",
    description: "Comfortable high heels for a stylish appearance.",
    stars: 3,
  },
  {
    id: 16,
    name: "Women Leather Jacket",
    category: "Women",
    image: women4,
    new_price: "$99.99",
    old_price: "$149.99",
    description: "Bold and fashionable leather jacket.",
    stars: 2,
  },
  {
    id: 17,
    name: "Women Casual T-Shirt",
    category: "Women",
    image: women5,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Soft casual T-shirt for a relaxed fit.",
    stars: 1,
  },
  {
    id: 18,
    name: "Women Sandals",
    category: "Women",
    image: women6,
    new_price: "$29.99",
    old_price: "$49.99",
    description: "Comfortable sandals for daily wear.",
    stars: 4,
  },
  {
    id: 19,
    name: "Women Sunglasses",
    category: "Women",
    image: women7,
    new_price: "$89.99",
    old_price: "$119.99",
    description: "Stylish sunglasses for sunny days.",
    stars: 5,
  },
  {
    id: 20,
    name: "Women Running Shoes",
    category: "Women",
    image: women8,
    new_price: "$39.99",
    old_price: "$59.99",
    description: "Breathable running shoes for women.",
    stars: 4,
  },
  {
    id: 21,
    name: "Women Jeans",
    category: "Women",
    image: women9,
    new_price: "$29.99",
    old_price: "$49.99",
    description: "Classic women jeans with a perfect fit.",
    stars: 5,
  },
  {
    id: 22,
    name: "Women Smartwatch",
    category: "Women",
    image: women10,
    new_price: "$199.99",
    old_price: "$249.99",
    description: "Modern smartwatch with fitness tracking features.",
    stars: 3,
  },
  {
    id: 23,
    name: "Women Cap",
    category: "Women",
    image: women11,
    new_price: "$14.99",
    old_price: "$19.99",
    description: "Stylish cap for outdoor activities.",
    stars: 5,
  },
  {
    id: 24,
    name: "Women Sports Bra",
    category: "Women",
    image: women12,
    new_price: "$24.99",
    old_price: "$34.99",
    description: "Comfortable and supportive sports bra.",
    stars: 5,
  },

  // Kids Products
  {
    id: 25,
    name: "Kids T-Shirt",
    category: "Kids",
    image: kids1,
    new_price: "$12.99",
    old_price: "$19.99",
    description: "Colorful T-shirt for kids, perfect for playtime.",
    stars: 4,
  },
  {
    id: 26,
    name: "Kids Sneakers",
    category: "Kids",
    image: kids2,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Comfortable and durable sneakers for active kids.",
    stars: 4,
  },
  {
    id: 27,
    name: "Kids Jacket",
    category: "Kids",
    image: kids3,
    new_price: "$29.99",
    old_price: "$49.99",
    description: "Warm jacket for kids, perfect for chilly weather.",
    stars: 3,
  },
  {
    id: 28,
    name: "Kids Jeans",
    category: "Kids",
    image: kids4,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Comfortable jeans for everyday wear.",
    stars: 5,
  },
  {
    id: 29,
    name: "Kids Hoodie",
    category: "Kids",
    image: kids5,
    new_price: "$24.99",
    old_price: "$34.99",
    description: "Cozy hoodie for kids, ideal for casual wear.",
    stars: 4,
  },
  {
    id: 30,
    name: "Kids Sunglasses",
    category: "Kids",
    image: kids6,
    new_price: "$14.99",
    old_price: "$19.99",
    description: "Stylish sunglasses for kids with UV protection.",
    stars: 4,
  },
  {
    id: 31,
    name: "Kids Cap",
    category: "Kids",
    image: kids7,
    new_price: "$9.99",
    old_price: "$14.99",
    description: "Fun and colorful cap for kids.",
    stars: 4,
  },
  {
    id: 32,
    name: "Kids Backpack",
    category: "Kids",
    image: kids8,
    new_price: "$29.99",
    old_price: "$49.99",
    description: "Durable backpack for school and adventures.",
    stars: 5,
  },
  {
    id: 33,
    name: "Kids Dress",
    category: "Kids",
    image: kids9,
    new_price: "$24.99",
    old_price: "$39.99",
    description: "Cute dress for girls, perfect for special occasions.",
    stars: 3,
  },
  {
    id: 34,
    name: "Kids Sandals",
    category: "Kids",
    image: kids10,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Comfortable sandals for little feet.",
    stars: 1,
  },
  {
    id: 35,
    name: "Kids Pajamas",
    category: "Kids",
    image: kids11,
    new_price: "$19.99",
    old_price: "$29.99",
    description: "Soft pajamas for a comfortable night’s sleep.",
    stars: 4,
  },
  {
    id: 36,
    name: "Kids Watch",
    category: "Kids",
    image: kids12,
    new_price: "$29",
    old_price: "$29.99",
    description: "Fun and colorful watch for kids.",
    stars: 5,
  },
];
module.exports = itemsData;
