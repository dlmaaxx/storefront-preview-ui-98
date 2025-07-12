
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { demoOrders } from "@/data/orders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Package } from "lucide-react";

const OrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = demoOrders.filter(
    (order) => order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "processing":
        return "bg-blue-500/20 text-blue-500 border-blue-500/50";
      case "shipped":
        return "bg-purple-500/20 text-purple-500 border-purple-500/50";
      case "delivered":
        return "bg-green-500/20 text-green-500 border-green-500/50";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      <div className="mb-8">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search by order ID..."
            className="bg-muted/70 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="p-4 bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  <Badge className={`${getStatusColor(order.status)} capitalize`}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Items</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.items.length}</span>
                      <div className="flex -space-x-2">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="h-8 w-8 rounded-full border-2 border-background overflow-hidden"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total</p>
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <Button asChild>
                      <Link to={`/orders/${order.id}`}>
                        <Package className="mr-2 h-4 w-4" />
                        Track Order
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl font-semibold mb-2">No orders found</p>
            <p className="text-muted-foreground mb-6">
              {searchQuery
                ? "No orders match your search criteria."
                : "You haven't placed any orders yet."}
            </p>
            <Button asChild>
              <Link to="/products">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Start Shopping
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrdersPage;
