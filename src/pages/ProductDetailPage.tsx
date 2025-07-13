
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, ArrowLeft, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate("/products")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Product Image */}
        <div className="overflow-hidden rounded-lg glow-border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl text-accent font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-4">Quantity:</span>
              <div className="flex items-center border border-border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-muted-foreground">Category:</span>{" "}
              <span className="capitalize">{product.category}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Additional Product Details */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Product Details</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
          Maecenas eget justo sit amet nisi tincidunt fringilla. Sed euismod 
          tellus vel metus ultrices, vel pharetra dui tincidunt. Fusce euismod, 
          velit vel aliquam bibendum, nunc nisl aliquam nunc, vel aliquam nisl 
          nunc vel nunc.
        </p>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
