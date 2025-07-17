import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Amazing Content
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore the latest trends, breaking news, and viral content from around the world. 
              Stay informed and entertained with our curated collection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Subscribe Now
              </Button>
            </div>
          </div>
          
          {/* Hero Ad Space */}
          <div className="relative">
            <Card className="p-8 bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                Premium Ad Space
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-200">Featured Advertisement</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;