
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Settings, User } from "lucide-react";

const DesignPage = () => {
  const designServices = [
    {
      title: "Logo Design",
      description: "Professional logo design tailored to your brand identity",
      icon: <Layout className="h-8 w-8 text-primary" />,
      price: "From €500",
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity package including logo, color palette, and typography",
      icon: <Settings className="h-8 w-8 text-primary" />,
      price: "From €1200",
    },
    {
      title: "Custom Graphics",
      description: "Custom graphics and illustrations for your marketing materials",
      icon: <User className="h-8 w-8 text-primary" />,
      price: "From €300",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Design Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Elevate your brand with our professional design services. We create stunning visuals that capture your brand's essence.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 p-8 mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">LOGO EDITE</h2>
          <p className="text-white/90 mb-6 text-lg">
            Personnalisez votre identité visuelle avec nos services de conception de logo professionnels
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <p className="text-white/80 font-semibold">À PARTIR DE</p>
            <p className="text-white text-2xl font-bold">500 <span className="text-sm">€</span></p>
          </div>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
            Commencer votre projet
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {designServices.map((service, index) => (
          <Card key={index} className="border-border/40 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-lg mb-4">{service.price}</p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Section */}
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Design Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {["Consultation", "Concept", "Revision", "Delivery"].map((step, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full bg-primary/10 h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p className="text-sm text-muted-foreground">
                {index === 0 && "We discuss your needs and brand vision"}
                {index === 1 && "We create initial design concepts"}
                {index === 2 && "Refine based on your feedback"}
                {index === 3 && "Final files in all required formats"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
