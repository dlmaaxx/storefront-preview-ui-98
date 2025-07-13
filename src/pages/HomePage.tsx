import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/store/ProductCard";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { ShoppingCart, ArrowRight, Shield, Zap, RefreshCw, CreditCard } from "lucide-react";
const HomePage = () => {
  // Featured products (just show first 4)
  const featuredProducts = products.slice(0, 4);
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-red via-blood-red to-crimson-red opacity-90" />
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

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Choose</span> Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We pride ourselves on delivering the highest quality game enhancement tools with exceptional customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Secure & Reliable */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Our products come with advanced anti-ban protection to keep your account safe.
              </p>
            </div>
          </div>

          {/* Fast Performance */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-muted-foreground">
                Optimized code ensures you get the advantage without lag or performance issues.
              </p>
            </div>
          </div>

          {/* Regular Updates */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-muted-foreground">
                We constantly update our products to stay ahead of game patches and ensure compatibility.
              </p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple secure payment methods with instant delivery of your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      </div>
    </>
  );
};
export default HomePage;
