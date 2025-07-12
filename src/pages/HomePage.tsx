import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/store/ProductCard";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { ShoppingCart, ArrowRight } from "lucide-react";
const HomePage = () => {
  // Featured products (just show first 4)
  const featuredProducts = products.slice(0, 4);
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-purple via-medium-purple to-light-purple opacity-90" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/716aa367-fb39-4f87-99f4-f84af3cd3d60.png')] bg-cover bg-center opacity-30 mix-blend-overlay" style={{
        backgroundPosition: "center 30%"
      }} />
        
        <div className="relative z-10 px-6 py-24 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            DARK ARMY STORE
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-foreground/90">
            Premium merchandise with a dark aesthetic. Express your style with our unique collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/products">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/orders">
                Track Order
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* Collections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-80 rounded-xl overflow-hidden glow-border animate-pulse-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-medium-purple to-soft-pink opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="relative h-full flex flex-col justify-center p-8">
            <h3 className="text-2xl font-bold mb-2">Clothing Collection</h3>
            <p className="mb-4 text-foreground/80">Unique designs for the digital underground.</p>
            <Button variant="outline" className="self-start" asChild>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative h-80 rounded-xl overflow-hidden glow-border animate-pulse-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-soft-pink to-light-purple opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="relative h-full flex flex-col justify-center p-8">
            <h3 className="text-2xl font-bold mb-2">Accessories</h3>
            <p className="mb-4 text-foreground/80">Complete your look with our premium accessories.</p>
            <Button variant="outline" className="self-start" asChild>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      </div>
    </>
  );
};
export default HomePage;