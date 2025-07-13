
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from '@/contexts/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomNavbar: React.FC = () => {
  const { cartItems } = useCart();
  const isMobile = useIsMobile();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Orders', path: '/orders' },
    
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-purple-600/30 dark:bg-purple-900/30 backdrop-blur-lg shadow-lg py-2" 
        : "bg-transparent dark:bg-transparent backdrop-blur-sm py-3"
      } border-b border-purple-300/10 dark:border-purple-600/10`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <img 
                src="https://i.postimg.cc/3wcGZdRg/image-removebg-preview-2.png" 
                alt="Logo" 
                className="h-12 w-12 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full"></div>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">SAKIB CHEATS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium text-base transition-colors ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-purple-100 hover:text-white"
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                location.pathname === link.path ? "after:scale-x-100" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative overflow-hidden transition-all duration-300 hover:bg-white/20 text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-glow shadow-lg">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="transition-all duration-300 hover:bg-white/20 text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right"
                className="bg-gradient-to-b from-purple-600/90 to-purple-900/95 backdrop-blur-xl border-l border-purple-300/30"
              >
                <div className="flex justify-center mb-8 mt-6">
                  <Link to="/" className="flex flex-col items-center gap-2">
                    <div className="overflow-hidden rounded-full p-1 bg-white/10 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                      <img 
                        src="/lovable-uploads/befead1e-c7b5-4ad6-9754-d0993fd49443.png" 
                        alt="Logo" 
                        className="h-20 w-20 rounded-full"
                      />
                    </div>
                    <span className="font-bold text-xl mt-2 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">StoreFront</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-lg font-medium ${
                        location.pathname === link.path
                          ? "text-white"
                          : "text-purple-100"
                      } hover:text-white transition-colors py-3 border-b border-purple-300/20 flex items-center`}
                    >
                      <span className="ml-2">{link.name}</span>
                      {location.pathname === link.path && (
                        <div className="w-1 h-8 bg-white rounded-full ml-auto animate-pulse"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
