import React, { useEffect, useRef } from "react";
import { Card } from "./ui/card";

const SidebarAds = () => {
  const ad1Ref = useRef(null);
  const ad2Ref = useRef(null);
  const ad3Ref = useRef(null);

  useEffect(() => {
    // Initialize multiple AdSense ads
    if (window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
        window.adsbygoogle.push({});
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  const SidebarAd = ({ adRef, slot = "1234567890" }) => (
    <Card className="p-4 mb-6 bg-white shadow-lg">
      <div className="text-xs text-gray-500 mb-2">Advertisement</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          height: "280px",
        }}
        data-ad-client="ca-pub-3960881132748338"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      
      {/* Fallback/Demo Ad */}
      <div className="bg-gradient-to-br from-green-400 to-blue-500 h-64 flex items-center justify-center text-white font-bold text-lg rounded-lg mt-2 opacity-20">
        Sidebar Ad
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <SidebarAd adRef={ad1Ref} slot="1111111111" />
      
      {/* Newsletter Signup with Ad */}
      <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <h3 className="text-lg font-bold mb-2">Stay Updated!</h3>
        <p className="text-sm mb-4">Get the latest trending content</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 px-3 py-2 rounded-l-lg text-gray-800"
          />
          <button className="bg-white text-purple-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </Card>
      
      <SidebarAd adRef={ad2Ref} slot="2222222222" />
      
      {/* Popular Categories */}
      <Card className="p-6 bg-white">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Popular Categories</h3>
        <div className="space-y-2">
          {["Technology", "Business", "Health", "Entertainment", "Sports", "Travel"].map((category) => (
            <div key={category} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <span className="text-gray-700">{category}</span>
              <span className="text-sm text-gray-500">124</span>
            </div>
          ))}
        </div>
      </Card>
      
      <SidebarAd adRef={ad3Ref} slot="3333333333" />
    </div>
  );
};

export default SidebarAds;