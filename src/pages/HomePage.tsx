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
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/FRNd937g/image.png')] bg-cover bg-center opacity-30 mix-blend-overlay" style={{
        backgroundPosition: "center 30%"
      }} />
        
        <div className="relative z-10 px-6 py-24 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            SAKIB STORE
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

   

      {/* CTA Section */}
      
      </div>
    </>
  );
};
export default HomePage;
