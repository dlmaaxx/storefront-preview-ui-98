
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCheck, ShoppingCart, Package } from "lucide-react";

const OrderConfirmationPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-6">
        <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCheck className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground">
          Thank you for your purchase. Your order has been received.
        </p>
      </div>

      <div className="glow-border rounded-lg p-6 mb-8">
        <p className="text-muted-foreground mb-2">Order ID</p>
        <p className="text-xl font-medium">{orderId}</p>
        <p className="text-sm text-muted-foreground mt-4">
          A confirmation email has been sent to your email address.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link to={`/orders/${orderId}`}>
            <Package className="mr-2 h-5 w-5" />
            Track Order
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
