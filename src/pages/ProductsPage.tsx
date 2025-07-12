
import React from "react";
import { products } from "@/data/products";
import ProductGrid from "@/components/store/ProductGrid";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;
