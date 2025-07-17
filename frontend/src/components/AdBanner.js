import React, { useEffect, useRef } from "react";

const AdBanner = ({ position = "top", size = "large" }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Initialize AdSense ad
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  const getAdSize = () => {
    switch (size) {
      case "small":
        return { width: "320px", height: "100px" };
      case "medium":
        return { width: "728px", height: "90px" };
      case "large":
        return { width: "970px", height: "250px" };
      case "square":
        return { width: "300px", height: "250px" };
      default:
        return { width: "728px", height: "90px" };
    }
  };

  const adSize = getAdSize();

  return (
    <div className={`w-full flex justify-center py-4 ${position === 'top' ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="relative">
        {/* Google AdSense Display Ad */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "inline-block",
            width: adSize.width,
            height: adSize.height,
          }}
          data-ad-client="ca-pub-3960881132748338"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        
        {/* Fallback/Demo Ad */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg opacity-20 pointer-events-none">
          Advertisement
        </div>
      </div>
    </div>
  );
};

export default AdBanner;