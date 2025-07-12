
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CheckoutForm from "@/components/store/CheckoutForm";
import { ArrowLeft } from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-4"
          asChild
        >
          <Link to="/cart">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
