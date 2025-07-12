import React, { useState } from "react";
import { Product } from "@/types/store";
import ProductCard from "./ProductCard";
import { GridIcon, LayoutList, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
interface ProductGridProps {
  products: Product[];
}
const ProductGrid: React.FC<ProductGridProps> = ({
  products
}) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("default");

  // Extract unique categories
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter products by search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === null || categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Function to insert promotional banner after the 4th product
  const insertPromoBanner = (products: Product[]) => {
    if (products.length <= 4) return products;
    let result = [];
    for (let i = 0; i < products.length; i++) {
      result.push(products[i]);
      // After the 4th product, insert a promo banner
      if (i === 3) {
        // We use a special id to identify the promo item
        result.push({
          id: -1,
          // Use a negative ID to distinguish from real products
          name: "Promo Banner",
          price: 0,
          description: "",
          image: "",
          category: "promo"
        });
      }
    }
    return result;
  };

  // Insert promo banner in grid view
  const displayProducts = viewMode === "grid" ? insertPromoBanner(sortedProducts) : sortedProducts;
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto md:flex-1 max-w-md">
          <Input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
          <Select value={categoryFilter || "all"} onValueChange={value => setCategoryFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>

          <ToggleGroup type="single" value={viewMode} onValueChange={value => value && setViewMode(value as "grid" | "list")}>
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <GridIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <LayoutList className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {displayProducts.length === 0 ? <div className="text-center py-12">
          <p className="text-muted-foreground">No products found.</p>
        </div> : viewMode === "grid" ? <div className="product-grid">
          {displayProducts.map(product => {
        if (product.id === -1) {
          // Render promo banner
          return;
        }
        return <ProductCard key={product.id} product={product} />;
      })}
        </div> : <div className="space-y-4">
          {sortedProducts.map(product => <div key={product.id} className="product-card flex overflow-hidden">
              <div className="w-32 h-32 shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-accent font-medium mt-1">${product.price.toFixed(2)}</p>
                <p className="text-muted-foreground text-sm mt-2 flex-1">
                  {product.description}
                </p>
                <div className="mt-4">
                  <Button size="sm" onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>)}
        </div>}
    </div>;
};
export default ProductGrid;