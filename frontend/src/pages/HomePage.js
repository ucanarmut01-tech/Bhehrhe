import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AdBanner from "../components/AdBanner";
import ContentGrid from "../components/ContentGrid";
import SidebarAds from "../components/SidebarAds";
import { mockArticles } from "../data/mockData";

const HomePage = () => {
  useEffect(() => {
    // Initialize AdSense ads
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* AdSense Auto Ads */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3960881132748338" crossorigin="anonymous"></script>
          <amp-auto-ads type="adsense" data-ad-client="ca-pub-3960881132748338"></amp-auto-ads>
        `
      }} />
      
      {/* Top Banner Ad */}
      <AdBanner position="top" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Content with Ads */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ContentGrid articles={mockArticles} />
            
            {/* Mid-content Ad */}
            <div className="my-8">
              <AdBanner position="middle" />
            </div>
            
            {/* More Content */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Trending Now</h2>
              <ContentGrid articles={mockArticles.slice(0, 6)} />
            </div>
          </div>
          
          {/* Sidebar with Ads */}
          <div className="lg:col-span-1">
            <SidebarAds />
          </div>
        </div>
      </div>
      
      {/* Bottom Banner Ad */}
      <AdBanner position="bottom" />
    </div>
  );
};

export default HomePage;