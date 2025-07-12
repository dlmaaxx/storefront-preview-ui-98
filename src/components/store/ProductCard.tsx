import React from "react";
import { Product } from "@/types/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  return <Link to={`/products/${product.id}`}>
      <Card className="product-card h-full flex flex-col">
        <div className="relative pt-[100%] overflow-hidden">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-center transition-transform duration-500 hover:scale-110 object-cover" />
        </div>
        <CardContent className="flex-1 p-4">
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
          <p className="text-accent font-medium mt-1">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>;
};
export default ProductCard;