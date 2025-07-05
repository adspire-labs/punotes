
import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Video, Search, Filter, BookOpen } from 'lucide-react';
import additionalResourcesData from '@/data/additionalResources.json';

interface AdditionalResource {
  id: number;
  title: string;
  category: string;
  college: string;
  batch: string;
  type: string[];
  driveLink: string;
  description: string;
}

const AdditionalResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCollege, setSelectedCollege] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Sort resources alphabetically by title
  const resources: AdditionalResource[] = useMemo(() => {
    return [...additionalResourcesData].sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesCollege = selectedCollege === 'all' || resource.college === selectedCollege;
      const matchesBatch = selectedBatch === 'all' || resource.batch === selectedBatch;
      const matchesType = selectedType === 'all' || resource.type.includes(selectedType);

      return matchesSearch && matchesCategory && matchesCollege && matchesBatch && matchesType;
    });
  }, [resources, searchTerm, selectedCategory, selectedCollege, selectedBatch, selectedType]);

  // Get unique values for filters
  const categories = [...new Set(resources.map(r => r.category))];
  const colleges = [...new Set(resources.map(r => r.college))];
  const batches = [...new Set(resources.map(r => r.batch))];
  const types = [...new Set(resources.flatMap(r => r.type))];

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Video className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4">Additional Resources</h1>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground">
            Video editing, digital marketing, and other skill-based resources for students
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground dark:text-foreground">
              <Filter className="h-5 w-5 mr-2" />
              Filter Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                  <Input
                    placeholder="Search resources..."
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
                      <SelectItem key={category} value={category} className="text-popover-foreground dark:text-popover-foreground">{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                    <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">All Types</SelectItem>
                    {types.map((type) => (
                      <SelectItem key={type} value={type} className="text-popover-foreground dark:text-popover-foreground">{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Institution</label>
                <Select value={selectedCollege} onValueChange={setSelectedCollege}>
                  <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                    <SelectValue placeholder="All Colleges" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                    <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">All Institutions</SelectItem>
                    {colleges.map((college) => (
                      <SelectItem key={college} value={college} className="text-popover-foreground dark:text-popover-foreground">{college}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">Batch</label>
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                  <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                    <SelectValue placeholder="All Batches" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                    <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">All Batches</SelectItem>
                    {batches.map((batch) => (
                      <SelectItem key={batch} value={batch} className="text-popover-foreground dark:text-popover-foreground">{batch}</SelectItem>
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
            Resources ({filteredResources.length} found)
          </h2>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <Card className="bg-card dark:bg-card border-border dark:border-border">
            <CardContent className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground dark:text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">No resources found</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-foreground dark:text-foreground">{resource.title}</CardTitle>
                      <CardDescription className="mt-1 space-x-1">
                        {resource.type.map((type, index) => (
                          <span key={index} className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground dark:text-foreground">Category:</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{resource.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground dark:text-foreground">College & Batch:</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{resource.college} - {resource.batch}</p>
                    </div>
                    
                    {resource.description && (
                      <div>
                        <p className="text-sm font-medium text-foreground dark:text-foreground">Description:</p>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">{resource.description}</p>
                      </div>
                    )}
                    
                    <Button asChild className="w-full">
                      <a 
                        href={resource.driveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access Resource
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalResources;
