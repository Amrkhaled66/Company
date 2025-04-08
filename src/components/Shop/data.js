import img1 from "src/assets/shop/1.webp";
import img2 from "src/assets/shop/2.webp";
import img3 from "src/assets/shop/3.webp";

const categories = [
  "Programming (3)",
  "Business Style (3)",
  "AI Services (3)",
  "Electronics (3)",
  "Home Appliances (3)",
  "Fashion (3)",
];

const brands = ["Apple", "OPPO", "Relame", "Samsung", "Xiaomi", "Vivo"];

const colors = [
  { name: "Red", hex: "#FF0000" }, // Red
  { name: "Yellow", hex: "#FFFF00" }, // Yellow
  { name: "Blue", hex: "#0000FF" }, // Blue
  { name: "Lavender", hex: "#87CEEB" }, // Light Blue (Lavender)
  { name: "Black", hex: "#000000" }, // Black

];

const data = [
  {
    img: img1,
    type: "headphone",
    category: "Electronics",
    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
    color: "black",
    brand: "Apple",
  },
  {
    img: img2,
    type: "headphone",
    category: "Electronics",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",
    category: "Electronics",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img1,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
    discountPrice: "888",
  },
  {
    img: img2,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
    discountPrice: "888",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
    discountPrice: "888",
  },
  {
    img: img1,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img2,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
  {
    img: img3,
    type: "headphone",

    name: "BoomPop 2S Wireless Noise ...",
    stars: 4,
    price: "999",
  },
];

export { categories, brands, colors };

export default data;
