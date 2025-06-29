
import { useState } from 'react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import {
  ExternalLink, BookOpen, FileText, HelpCircle, Search
} from 'lucide-react';
import studyMaterialsData from '@/data/studyMaterials.json';

const StudyMaterials = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');
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

  const allTypes = [
    'Notes',
    'Question Bank',
    'Solutions',
    'Imp Files',
    'Literature'
  ];

  const filteredMaterials = studyMaterialsData.filter(material => {
    const matchesStreamSemester = selectedStream === 'all' && selectedSemester === 'all' ||
      material.availableIn.some(availability => 
        (selectedStream === 'all' || availability.stream === selectedStream) &&
        (selectedSemester === 'all' || availability.semester === selectedSemester)
      );

    const matchesSearch = searchQuery === '' ||
      material.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStreamSemester && matchesSearch;
  });

  const materialsByType = Object.fromEntries(
    allTypes.map(type => [type, filteredMaterials.filter(m => m.type === type)])
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Notes': return <BookOpen className="h-5 w-5 text-blue-600" />;
      case 'Question Bank': return <HelpCircle className="h-5 w-5 text-green-600" />;
      case 'Solutions': return <FileText className="h-5 w-5 text-orange-600" />;
      case 'Imp Files': return <FileText className="h-5 w-5 text-red-600" />;
      case 'Literature': return <FileText className="h-5 w-5 text-purple-600" />;
      default: return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Notes': return 'bg-blue-100 text-blue-800';
      case 'Question Bank': return 'bg-green-100 text-green-800';
      case 'Solutions': return 'bg-orange-100 text-orange-800';
      case 'Imp Files': return 'bg-red-100 text-red-800';
      case 'Literature': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatAvailability = (availableIn: Array<{stream: string, semester: string}>) => {
    return availableIn.map(item => 
      `${item.stream.toUpperCase()} - ${item.semester}${getOrdinalSuffix(item.semester)} Semester`
    ).join(', ');
  };

  const getOrdinalSuffix = (num: string) => {
    const n = parseInt(num);
    if (n >= 11 && n <= 13) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
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
          <p className="text-sm">
            <strong>Available in:</strong> {formatAvailability(material.availableIn)}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
        <Button asChild className="w-full">
          <a href={material.driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Materials</h1>
          <p className="text-gray-600">
            Browse categorized study materials hosted on Google Drive.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by subject, description, or material type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <p className="text-gray-600 mb-4">
          Showing {filteredMaterials.length} materials {searchQuery && `for "${searchQuery}"`}
        </p>

        <Tabs defaultValue="all" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="grid w-max min-w-full grid-cols-6 mb-6">
              <TabsTrigger value="all" className="text-xs sm:text-sm px-2 sm:px-3 whitespace-nowrap">
                All ({filteredMaterials.length})
              </TabsTrigger>
              {allTypes.map((type) => {
                const tabValue = type.toLowerCase().replace(/\s/g, '');
                return (
                  <TabsTrigger key={tabValue} value={tabValue} className="text-xs sm:text-sm px-2 sm:px-3 whitespace-nowrap">
                    {type} ({materialsByType[type]?.length || 0})
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </TabsContent>

          {allTypes.map((type) => {
            const tabValue = type.toLowerCase().replace(/\s/g, '');
            return (
              <TabsContent key={tabValue} value={tabValue} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {materialsByType[type]?.map((material) => (
                    <MaterialCard key={material.id} material={material} />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No materials found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>

      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-2">
          Powered by <span className="text-blue-600 font-semibold">AdspireLabs</span>
        </p>
        <p className="text-xs text-gray-400">
          Building innovative solutions for educational excellence
        </p>
      </div>
    </div>
  );
};

export default StudyMaterials;
