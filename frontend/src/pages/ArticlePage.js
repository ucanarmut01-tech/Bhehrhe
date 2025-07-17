import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import AdBanner from "../components/AdBanner";
import SidebarAds from "../components/SidebarAds";
import { mockArticles } from "../data/mockData";
import { Clock, User, Eye, Share2, Heart, Bookmark, MessageCircle } from "lucide-react";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Find article by ID
    const foundArticle = mockArticles.find(a => a.id === parseInt(id));
    if (foundArticle) {
      setArticle({
        ...foundArticle,
        content: `
          <p>This is the full article content for "${foundArticle.title}". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <h2>Key Points</h2>
          <ul>
            <li>First important point about the topic</li>
            <li>Second crucial detail to consider</li>
            <li>Third significant insight</li>
          </ul>
          
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
          <h2>Impact and Implications</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          
          <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        `
      });
    }

    // Mock comments
    setComments([
      { id: 1, author: "John Doe", content: "Great article! Very informative.", timeAgo: "2 hours ago" },
      { id: 2, author: "Jane Smith", content: "Thanks for sharing this insight.", timeAgo: "4 hours ago" },
      { id: 3, author: "Mike Johnson", content: "Interesting perspective on the topic.", timeAgo: "6 hours ago" }
    ]);

    // Initialize AdSense
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "You",
        content: newComment,
        timeAgo: "Just now"
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Ad */}
      <AdBanner position="top" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.timeAgo}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Button variant="outline" size="sm" className="text-red-500 hover:bg-red-50">
                    <Heart className="w-4 h-4 mr-1" />
                    {article.likes}
                  </Button>
                  <Button variant="outline" size="sm" className="text-blue-500 hover:bg-blue-50">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-500 hover:bg-gray-50">
                    <Bookmark className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                </div>
                
                {/* In-content Ad */}
                <div className="my-8 p-4 bg-gray-100 rounded-lg">
                  <div className="h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    In-Article Advertisement
                  </div>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                {/* Bottom Article Ad */}
                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <div className="h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    End of Article Advertisement
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Comments Section */}
            <Card className="mt-8 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comments ({comments.length})
                </h3>
                
                {/* Add Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                  <Button type="submit" className="mt-2">
                    Post Comment
                  </Button>
                </form>
                
                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {comment.author[0]}
                        </div>
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
                      </div>
                      <p className="text-gray-700 ml-10">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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

export default ArticlePage;