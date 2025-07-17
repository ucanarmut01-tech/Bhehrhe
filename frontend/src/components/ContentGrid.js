import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, User, Eye, Share2, Heart } from "lucide-react";

const ContentGrid = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{article.views}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
                <Clock className="w-4 h-4 ml-2" />
                <span>{article.timeAgo}</span>
              </div>
              
              <Link to={`/article/${article.id}`}>
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    {article.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                <Link to={`/article/${article.id}`}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Insert ads between content */}
          {(index + 1) % 6 === 0 && (
            <div className="md:col-span-2 lg:col-span-3 my-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                In-Content Advertisement
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContentGrid;