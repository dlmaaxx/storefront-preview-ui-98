
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code, Terminal, User } from "lucide-react";

const CheatPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Cheat Codes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Unlock special features and advantages with our exclusive cheat codes for premium members.
        </p>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="checkout">Checkout</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-primary mb-2" />
                <CardTitle>DARKARMY50</CardTitle>
                <CardDescription>Get 50% off all products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Apply this code during checkout to receive a 50% discount on all products in your cart. 
                  Limited to one use per customer.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("DARKARMY50")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Terminal className="h-6 w-6 text-primary mb-2" />
                <CardTitle>FREESHIP</CardTitle>
                <CardDescription>Free shipping on all orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Enter this code at checkout to get free shipping on your entire order, 
                  regardless of order value or destination.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("FREESHIP")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="checkout">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <User className="h-6 w-6 text-primary mb-2" />
                <CardTitle>VIP2025</CardTitle>
                <CardDescription>VIP member status for one year</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Enter this secret code during registration to automatically get VIP membership 
                  status for one year. Includes early access to new products.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("VIP2025")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Terminal className="h-6 w-6 text-primary mb-2" />
                <CardTitle>BUNDLE25</CardTitle>
                <CardDescription>25% off when buying 3+ items</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Add at least 3 items to your cart and use this code at checkout to 
                  receive a 25% discount on your entire order.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("BUNDLE25")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="account">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-primary mb-2" />
                <CardTitle>DARKMODE</CardTitle>
                <CardDescription>Enable hidden dark mode features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  This code unlocks enhanced dark mode features and exclusive UI elements 
                  that are not available to regular users.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("DARKMODE")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <User className="h-6 w-6 text-primary mb-2" />
                <CardTitle>LOYALTY100</CardTitle>
                <CardDescription>100 bonus loyalty points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Enter this code in your account settings to instantly receive 100 bonus 
                  loyalty points that can be used for future purchases.
                </p>
                <Button variant="outline" onClick={() => navigator.clipboard.writeText("LOYALTY100")}>
                  Copy Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-card/50 border border-border/40 rounded-lg p-6 mt-12">
        <h2 className="text-xl font-semibold mb-4">How to Use Cheat Codes</h2>
        <ol className="space-y-4 ml-6 list-decimal">
          <li>Copy the desired cheat code by clicking the "Copy Code" button</li>
          <li>Navigate to the checkout page or account settings (depending on the code type)</li>
          <li>Paste the code in the designated promo code or coupon field</li>
          <li>Apply the code and enjoy the benefits!</li>
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: Some codes may have usage restrictions or expiration dates. All codes are subject to availability.
        </p>
      </div>
    </div>
  );
};

export default CheatPage;
