
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckoutFormData } from "@/types/store";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/sonner";

const CheckoutForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Checkout form submitted:", data);
    console.log("Cart items:", cartItems);
    
    // Simulate order creation
    const orderId = `ORD-${Math.floor(Math.random() * 90000) + 10000}`;
    toast.success("Order placed successfully!");
    
    // Clear cart and redirect to order confirmation
    clearCart();
    navigate(`/order-confirmation/${orderId}`);
  };

  if (cartItems.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => navigate("/products")} className="w-full">
            Browse Products
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  {...register("name", { required: "Name is required" })} 
                  placeholder="John Doe"
                  className="bg-muted/70"
                />
                {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })} 
                  placeholder="johndoe@example.com"
                  className="bg-muted/70"
                />
                {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipping Address</h3>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address" 
                {...register("address", { required: "Address is required" })} 
                placeholder="123 Main St"
                className="bg-muted/70"
              />
              {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city" 
                  {...register("city", { required: "City is required" })} 
                  placeholder="New York"
                  className="bg-muted/70"
                />
                {errors.city && <p className="text-destructive text-sm">{errors.city.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input 
                  id="zipCode" 
                  {...register("zipCode", { required: "Zip code is required" })} 
                  placeholder="10001"
                  className="bg-muted/70"
                />
                {errors.zipCode && <p className="text-destructive text-sm">{errors.zipCode.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input 
                  id="country" 
                  {...register("country", { required: "Country is required" })} 
                  placeholder="United States"
                  className="bg-muted/70"
                />
                {errors.country && <p className="text-destructive text-sm">{errors.country.message}</p>}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Payment Information</h3>
            <p className="text-muted-foreground text-sm">
              Payment processing will be implemented later with Stripe.
            </p>
            
            <div className="rounded-md bg-muted/50 p-4 border border-border">
              <p className="font-medium">Order Total: ${cartTotal.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in cart
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Place Order
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CheckoutForm;
