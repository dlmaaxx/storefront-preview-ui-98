
import { Order } from "@/types/store";

export const demoOrders: Order[] = [
  {
    id: "ORD-12345",
    date: "2025-04-30",
    items: [
      {
        product: {
          id: 1,
          name: "Dark Mist T-Shirt",
          price: 29.99,
          description: "Premium black cotton t-shirt with minimalist purple graphic design.",
          image: "/lovable-uploads/716aa367-fb39-4f87-99f4-f84af3cd3d60.png",
          category: "clothing"
        },
        quantity: 1
      },
      {
        product: {
          id: 3,
          name: "Spectral Mug",
          price: 19.99,
          description: "Temperature-sensitive mug that reveals hidden design when hot.",
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
          category: "accessories"
        },
        quantity: 2
      }
    ],
    total: 69.97,
    status: "shipped",
    trackingInfo: {
      carrier: "Nexus Shipping",
      trackingNumber: "NSX8372945126",
      estimatedDelivery: "2025-05-08"
    }
  }
];

export const getOrderById = (id: string): Order | undefined => {
  return demoOrders.find(order => order.id === id);
};
