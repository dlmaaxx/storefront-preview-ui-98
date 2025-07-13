
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User, Code, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-purple/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">SAKIB CHEATS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/design" className="text-foreground hover:text-primary transition-colors">
              Design
            </Link>
           
            <Link to="/orders" className="text-foreground hover:text-primary transition-colors">
              Orders
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative max-w-md flex-1 mx-6">
            <Input
              type="search"
              placeholder="Search products..."
              className="bg-muted/70 border-none focus-visible:ring-primary"
            />
            <Button size="icon" variant="ghost" className="absolute right-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md bg-card border-border">
                <div className="h-full flex flex-col">
                  <div className="py-4 border-b border-border">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    {/* Cart content will be rendered via CartSheet component */}
                    <p className="text-muted-foreground text-center">Cart content here</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <Link to="/cart">
                      <Button className="w-full">View Cart & Checkout</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="bg-muted/70 border-none focus-visible:ring-primary w-full"
              />
              <Button size="icon" variant="ghost" className="absolute right-0 top-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="py-2 text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/design" className="py-2 text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Design
              </Link>
              <Link to="/cheat" className="py-2 text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Code className="h-4 w-4" />
                Cheat Codes
              </Link>
              <Link to="/orders" className="py-2 text-foreground hover:text-primary transition-colors">
                Orders
              </Link>
              <Link to="/account" className="py-2 text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <User className="h-4 w-4" />
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
