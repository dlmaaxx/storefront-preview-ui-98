
import React from "react";
import { Order } from "@/types/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, Truck, Package, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface OrderTrackerProps {
  order: Order;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ order }) => {
  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5" />;
      case "processing":
        return <Package className="h-5 w-5" />;
      case "shipped":
        return <Truck className="h-5 w-5" />;
      case "delivered":
        return <CheckCheck className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "processing":
        return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "shipped":
        return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      case "delivered":
        return "bg-green-500/20 text-green-500 border-green-500/50";
    }
  };

  const statusSteps = [
    { status: "pending", label: "Order Received" },
    { status: "processing", label: "Processing" },
    { status: "shipped", label: "Shipped" },
    { status: "delivered", label: "Delivered" },
  ];

  const currentStepIndex = statusSteps.findIndex(
    (step) => step.status === order.status
  );

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle>Order #{order.id}</CardTitle>
          <Badge className={`${getStatusColor(order.status)} capitalize`}>
            {order.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Placed on {new Date(order.date).toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Tracker */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            {statusSteps.map((step, index) => (
              <div 
                key={step.status} 
                className="flex flex-col items-center z-10"
              >
                <div 
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                    index <= currentStepIndex 
                      ? "border-primary bg-primary/20 text-primary" 
                      : "border-muted-foreground/30 text-muted-foreground/50"
                  }`}
                >
                  {getStatusIcon(step.status as Order["status"])}
                </div>
                <span 
                  className={`text-xs mt-2 ${
                    index <= currentStepIndex 
                      ? "text-primary" 
                      : "text-muted-foreground/50"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted-foreground/20">
            <div 
              className="h-full bg-primary transition-all" 
              style={{ 
                width: `${
                  currentStepIndex === 0 
                    ? 0 
                    : currentStepIndex === statusSteps.length - 1 
                      ? "100%" 
                      : `${(currentStepIndex / (statusSteps.length - 1)) * 100}%`
                }` 
              }}
            />
          </div>
        </div>

        {/* Tracking Info */}
        {order.trackingInfo && (
          <div className="rounded-md bg-muted/30 p-4 glow-border">
            <h3 className="font-medium mb-2">Tracking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Carrier</p>
                <p>{order.trackingInfo.carrier}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Tracking Number</p>
                <p>{order.trackingInfo.trackingNumber}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground">Estimated Delivery</p>
                <p>{new Date(order.trackingInfo.estimatedDelivery).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Order Summary */}
        <div>
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <Separator />
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;
