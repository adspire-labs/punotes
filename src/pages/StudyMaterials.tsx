
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { ExternalLink, BookOpen, FileText, HelpCircle, Search } from 'lucide-react';

const StudyMaterials = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const streams = [
    { value: 'all', label: 'All Streams' },
    { value: 'bca', label: 'BCA (Bachelor of Computer Application)' },
    { value: 'bba', label: 'BBA (Bachelor of Business Administration)' },
    { value: 'bbs', label: 'BBS (Bachelor of Business Studies)' },
    { value: 'be', label: 'BE (Bachelor of Engineering)' },
    { value: 'bsc', label: 'BSc (Bachelor of Science)' }
  ];

  const semesters = [
    { value: 'all', label: 'All Semesters' },
    { value: '1', label: '1st Semester' },
    { value: '2', label: '2nd Semester' },
    { value: '3', label: '3rd Semester' },
    { value: '4', label: '4th Semester' },
    { value: '5', label: '5th Semester' },
    { value: '6', label: '6th Semester' },
    { value: '7', label: '7th Semester' },
    { value: '8', label: '8th Semester' }
  ];

  // Sample data - replace with your actual Google Drive links
  const studyMaterials = [
    {
      id: 1,
      stream: 'bca',
      semester: '1',
      subject: 'Computer Fundamentals',
      type: 'Notes',
      driveLink: 'https://drive.google.com/drive/folders/sample1',
      description: 'Complete notes for Computer Fundamentals including basics of computer hardware and software.'
    },
    {
      id: 2,
      stream: 'bca',
      semester: '1',
      subject: 'Mathematics I',
      type: 'Old Questions',
      driveLink: 'https://drive.google.com/drive/folders/sample2',
      description: 'Previous year question papers for Mathematics I with solutions.'
    },
    {
      id: 3,
      stream: 'bca',
      semester: '2',
      subject: 'Programming in C',
      type: 'Notes',
      driveLink: 'https://drive.google.com/drive/folders/sample3',
      description: 'Complete C programming notes with examples and practice problems.'
    },
    {
      id: 4,
      stream: 'bba',
      semester: '1',
      subject: 'Principles of Management',
      type: 'Syllabus',
      driveLink: 'https://drive.google.com/drive/folders/sample4',
      description: 'Official syllabus for Principles of Management course.'
    },
    {
      id: 5,
      stream: 'be',
      semester: '1',
      subject: 'Engineering Mathematics',
      type: 'Notes',
      driveLink: 'https://drive.google.com/drive/folders/sample5',
      description: 'Comprehensive notes for Engineering Mathematics covering all topics.'
    }
  ];

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesStream = selectedStream === 'all' || material.stream === selectedStream;
    const matchesSemester = selectedSemester === 'all' || material.semester === selectedSemester;
    const matchesSearch = searchQuery === '' || 
      material.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStream && matchesSemester && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Notes':
        return <BookOpen className="h-5 w-5 text-blue-600" />;
      case 'Old Questions':
        return <HelpCircle className="h-5 w-5 text-green-600" />;
      case 'Syllabus':
        return <FileText className="h-5 w-5 text-purple-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Notes':
        return 'bg-blue-100 text-blue-800';
      case 'Old Questions':
        return 'bg-green-100 text-green-800';
      case 'Syllabus':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Group materials by type for categorized view
  const materialsByType = {
    Notes: filteredMaterials.filter(m => m.type === 'Notes'),
    'Old Questions': filteredMaterials.filter(m => m.type === 'Old Questions'),
    Syllabus: filteredMaterials.filter(m => m.type === 'Syllabus')
  };

  const MaterialCard = ({ material }: { material: any }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            {getTypeIcon(material.type)}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(material.type)}`}>
              {material.type}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg">{material.subject}</CardTitle>
        <CardDescription>
          <div className="space-y-1">
            <p><span className="font-medium">Stream:</span> {material.stream.toUpperCase()}</p>
            <p><span className="font-medium">Semester:</span> {material.semester}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
        <Button asChild className="w-full">
          <a 
            href={material.driveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Access on Google Drive
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Materials</h1>
          <p className="text-gray-600">
            Browse and access study materials organized by stream, semester, and subject. 
            All materials are hosted on Google Drive for easy access.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by subject, description, or material type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filters */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Materials</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                  <Select value={selectedStream} onValueChange={setSelectedStream}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stream" />
                    </SelectTrigger>
                    <SelectContent>
                      {streams.map((stream) => (
                        <SelectItem key={stream.value} value={stream.value}>
                          {stream.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map((semester) => (
                        <SelectItem key={semester.value} value={semester.value}>
                          {semester.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    onClick={() => {
                      setSelectedStream('all');
                      setSelectedSemester('all');
                      setSelectedSubject('all');
                      setSearchQuery('');
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredMaterials.length} materials {searchQuery && `for "${searchQuery}"`}
          </p>
        </div>

        {/* Categorized View */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({filteredMaterials.length})</TabsTrigger>
            <TabsTrigger value="notes">Notes ({materialsByType.Notes.length})</TabsTrigger>
            <TabsTrigger value="questions">Questions ({materialsByType['Old Questions'].length})</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus ({materialsByType.Syllabus.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="notes" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsByType.Notes.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="questions" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsByType['Old Questions'].map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="syllabus" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsByType.Syllabus.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No materials found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters, or check back later for new materials.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyMaterials;
