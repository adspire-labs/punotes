
import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Search, Filter, BookOpen, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import blogPostsData from '@/data/blogPosts.json';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  imageUrl: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
}

const Blog = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = blogPostsData;

  const categories = [
    'For +2 Science/Management',
    'For BBA Students', 
    'For B.E./Engineering Students',
    'Exam Tips & Study Hacks',
    'Career Guidance',
    'Educational News & Notices'
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchTerm, selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Educational Blog | Study Tips, Career Guidance & Academic Resources</title>
        <meta name="description" content="Discover expert study tips, career guidance, and educational resources for NEB Class 12, BBA, and Engineering students in Nepal." />
        <meta name="keywords" content="study tips, career guidance, NEB class 12, BBA, engineering, education blog nepal" />
        
        {/* Schema Markup for Educational Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "StudyHub Nepal",
            "url": "https://yourdomain.com",
            "description": "Comprehensive educational resources and study materials for Nepali students"
          })}
        </script>
      </head>

      <div className="min-h-screen bg-background dark:bg-background">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4">Educational Blog</h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground">
              Study tips, career guidance, and educational insights for students
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground dark:text-foreground mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">FEATURED</span>
                      </div>
                      <CardTitle className="text-lg text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground dark:text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Filters */}
          <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground dark:text-foreground">
                <Filter className="h-5 w-5 mr-2" />
                Filter Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Search Articles</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    <Input
                      placeholder="Search by title, content, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                      <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-popover-foreground dark:text-popover-foreground">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
              All Articles ({filteredPosts.length} found)
            </h2>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <Card className="bg-card dark:bg-card border-border dark:border-border">
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground dark:text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">No Articles Found</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">Try adjusting your search terms or category filter.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-muted-foreground mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.featured && (
                        <span className="text-blue-600 dark:text-blue-400 font-medium">FEATURED</span>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground dark:text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
