
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOrderById } from "@/data/orders";
import OrderTracker from "@/components/store/OrderTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const OrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const order = id ? getOrderById(id) : undefined;

  useEffect(() => {
    if (!order) {
      // If order not found, redirect to orders page after a short delay
      const timer = setTimeout(() => {
        navigate("/orders");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [order, navigate]);

  if (!order) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The order you're looking for doesn't exist or has been removed.
        </p>
        <p className="text-muted-foreground mb-4">
          Redirecting to orders page...
        </p>
        <Button onClick={() => navigate("/orders")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go to Orders
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Order Details</h1>
      </div>

      <OrderTracker order={order} />
    </div>
  );
};

export default OrderDetailPage;
