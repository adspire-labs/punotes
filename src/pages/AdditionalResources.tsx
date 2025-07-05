
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

      return matchesSearch && matchesCategory && matchesCollege && matchesBatch;
    });
  }, [resources, searchTerm, selectedCategory, selectedCollege, selectedBatch]);

  // Get unique values for filters
  const categories = [...new Set(resources.map(r => r.category))];
  const colleges = [...new Set(resources.map(r => r.college))];
  const batches = [...new Set(resources.map(r => r.batch))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Video className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h1>
          <p className="text-xl text-gray-600">
            Video editing, digital marketing, and other skill-based resources for students
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">College</label>
                <Select value={selectedCollege} onValueChange={setSelectedCollege}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Colleges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colleges</SelectItem>
                    {colleges.map((college) => (
                      <SelectItem key={college} value={college}>{college}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Batch</label>
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Batches" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Batches</SelectItem>
                    {batches.map((batch) => (
                      <SelectItem key={batch} value={batch}>{batch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Resources ({filteredResources.length} found)
          </h2>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="mt-1 space-x-1">
                        {resource.type.map((type, index) => (
                          <span key={index} className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
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
                      <p className="text-sm font-medium text-gray-900">Category:</p>
                      <p className="text-sm text-gray-600">{resource.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-900">College & Batch:</p>
                      <p className="text-sm text-gray-600">{resource.college} - {resource.batch}</p>
                    </div>
                    
                    {resource.description && (
                      <div>
                        <p className="text-sm font-medium text-gray-900">Description:</p>
                        <p className="text-sm text-gray-600">{resource.description}</p>
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
