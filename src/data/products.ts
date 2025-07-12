
import { Product } from "@/types/store";

export const products: Product[] = [
  {
    id: 1,
    name: "Dark Mist T-Shirt",
    price: 29.99,
    description: "Premium black cotton t-shirt with minimalist purple graphic design.",
    image: "/lovable-uploads/719c5410-91d0-42e5-8ed1-47825d6f55e6.png",
    category: "clothing"
  },
  {
    id: 2,
    name: "Void Walker Hoodie",
    price: 59.99,
    description: "Oversized black hoodie with purple accents and neon glow print.",
    image: "/lovable-uploads/27e0da2a-ff42-4885-b56e-07ebaca5d762.png",
    category: "clothing"
  },
  {
    id: 3,
    name: "Spectral Mug",
    price: 19.99,
    description: "Temperature-sensitive mug that reveals hidden design when hot.",
    image: "/lovable-uploads/d79b9bfd-ecc4-43c4-8f3d-afbf767602e6.png",
    category: "accessories"
  },
  {
    id: 4,
    name: "Ethereal Poster Set",
    price: 24.99,
    description: "Set of 3 holographic prints featuring mystical art.",
    image: "/lovable-uploads/e1099824-3cba-468c-80dd-76edb93fa838.png",
    category: "art"
  },
  {
    id: 5,
    name: "Shadow Beanie",
    price: 22.99,
    description: "Embroidered beanie with subtle logo and purple accent thread.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "clothing"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
