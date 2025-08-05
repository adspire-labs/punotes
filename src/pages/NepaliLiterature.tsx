import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, BookOpen, Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import nepaliLiteratureData from '@/data/nepaliLiterature.json';

interface LiteratureBook {
  id: number;
  title: string;
  author: string;
  category: string;
  type: string[];
  driveLink: string;
  description: string;
}

const NepaliLiterature = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const books: LiteratureBook[] = nepaliLiteratureData;

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      const matchesType = selectedType === 'all' || book.type.includes(selectedType);
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [books, searchTerm, selectedCategory, selectedType]);

  const categories = useMemo(() => {
    const categorySet = new Set(books.map(book => book.category));
    return Array.from(categorySet).sort();
  }, [books]);

  const types = useMemo(() => {
    const typeSet = new Set(books.flatMap(book => book.type));
    return Array.from(typeSet).sort();
  }, [books]);

  const handleBookClick = (driveLink: string) => {
    window.open(driveLink, '_blank');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
            <BookOpen className="h-10 w-10 text-primary" />
            नेपाली साहित्य संग्रह
          </h1>
          <p className="text-muted-foreground text-lg">
            Classic and contemporary Nepali literature collection for readers and students
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search books, authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                {filteredBooks.length} of {books.length} books
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card 
              key={book.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm"
              onClick={() => handleBookClick(book.driveLink)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-foreground line-clamp-2 mb-2">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-medium">
                      लेखक: {book.author}
                    </CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary/60 flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {book.category}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {book.type.map((type, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {book.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No books found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find more books.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      </div>
    </>
  );
};

export default NepaliLiterature;