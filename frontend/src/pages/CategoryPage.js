import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentGrid from "../components/ContentGrid";
import AdBanner from "../components/AdBanner";
import SidebarAds from "../components/SidebarAds";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { mockArticles } from "../data/mockData";
import { Filter, Grid, List, TrendingUp } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    // Filter articles by category
    const categoryMap = {
      tech: "Technology",
      business: "Business",
      health: "Health",
      entertainment: "Entertainment",
      sports: "Sports"
    };

    const categoryName = categoryMap[category] || "Technology";
    const filteredArticles = mockArticles.filter(article => 
      article.category === categoryName
    );

    // Sort articles
    const sortedArticles = [...filteredArticles].sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return parseInt(b.views.replace("K", "")) - parseInt(a.views.replace("K", ""));
        case "liked":
          return b.likes - a.likes;
        default:
          return 0; // Keep original order for recent
      }
    });

    setArticles(sortedArticles);
  }, [category, sortBy]);

  const categoryInfo = {
    tech: { name: "Technology", icon: "💻", color: "bg-blue-600" },
    business: { name: "Business", icon: "📈", color: "bg-green-600" },
    health: { name: "Health", icon: "🏥", color: "bg-red-600" },
    entertainment: { name: "Entertainment", icon: "🎬", color: "bg-purple-600" },
    sports: { name: "Sports", icon: "⚽", color: "bg-orange-600" }
  };

  const currentCategory = categoryInfo[category] || categoryInfo.tech;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Ad */}
      <AdBanner position="top" />
      
      {/* Category Header */}
      <div className={`${currentCategory.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-4xl">{currentCategory.icon}</span>
            <h1 className="text-4xl font-bold">{currentCategory.name}</h1>
            <Badge variant="secondary" className="bg-white text-gray-800">
              {articles.length} Articles
            </Badge>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl">
            Stay up to date with the latest {currentCategory.name.toLowerCase()} news, 
            trends, and insights from around the world.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant={sortBy === "recent" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("recent")}
                  >
                    Recent
                  </Button>
                  <Button
                    variant={sortBy === "popular" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("popular")}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Popular
                  </Button>
                  <Button
                    variant={sortBy === "liked" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy("liked")}
                  >
                    Most Liked
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Category Ad */}
            <div className="mb-8">
              <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                {currentCategory.name} Category Advertisement
              </div>
            </div>
            
            {/* Articles Grid */}
            <ContentGrid articles={articles} />
            
            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Load More Articles
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SidebarAds />
          </div>
        </div>
      </div>
      
      {/* Bottom Ad */}
      <AdBanner position="bottom" />
    </div>
  );
};

export default CategoryPage;