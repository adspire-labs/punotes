
import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, BookOpen, Search, Filter } from 'lucide-react';
import studyMaterialsData from '@/data/studyMaterials.json';

interface StreamSemesterPair {
  stream: string;
  semester: string;
}

interface StudyMaterial {
  id: number;
  availableIn: StreamSemesterPair[];
  subject: string;
  type: string[];
  driveLink: string;
  description: string;
}

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Sort materials alphabetically by subject name
  const materials: StudyMaterial[] = useMemo(() => {
    return [...studyMaterialsData].sort((a, b) => a.subject.localeCompare(b.subject));
  }, []);

  const filteredMaterials = useMemo(() => {
    return materials.filter(material => {
      const matchesSearch = material.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          material.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStream = selectedStream === 'all' || 
                          material.availableIn.some(pair => pair.stream === selectedStream);
      
      const matchesSemester = selectedSemester === 'all' || 
                            material.availableIn.some(pair => pair.semester === selectedSemester);
      
      const matchesType = selectedType === 'all' || material.type.includes(selectedType);

      // For specific stream and semester combination
      if (selectedStream !== 'all' && selectedSemester !== 'all') {
        const hasExactMatch = material.availableIn.some(
          pair => pair.stream === selectedStream && pair.semester === selectedSemester
        );
        return matchesSearch && hasExactMatch && matchesType;
      }

      return matchesSearch && matchesStream && matchesSemester && matchesType;
    });
  }, [materials, searchTerm, selectedStream, selectedSemester, selectedType]);

  const getStreamDisplayName = (stream: string) => {
    const streamNames: { [key: string]: string } = {
      'bca': 'BCA',
      'bba': 'BBA', 
      'bbs': 'BBS',
      'be': 'BE',
      'bsc': 'BSc',
      'bi': 'BBA BI'
    };
    return streamNames[stream] || stream;
  };

  const getSemesterDisplayName = (semester: string) => {
    const ordinal = semester === '1' ? 'st' : semester === '2' ? 'nd' : semester === '3' ? 'rd' : 'th';
    return `${semester}${ordinal} Semester`;
  };

  const formatAvailability = (availableIn: StreamSemesterPair[]) => {
    return availableIn.map(pair => 
      `${getStreamDisplayName(pair.stream)} - ${getSemesterDisplayName(pair.semester)}`
    ).join(', ');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Materials</h1>
          <p className="text-xl text-gray-600">
            Access quality study materials for Pokhara University students
          </p>
        </div>

        {/* BE Study Materials Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>BE Study Materials</CardTitle>
            <CardDescription>
              External resources for Bachelor of Engineering students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                You can search BE notes using this tool below.
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://notesearch.bloggernepal.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Search BE Notes
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
          {/* Additional Link Study Materials Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>
              External resources for Bachelor of Engineering students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                You can search BE notes using this tool below.
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://notesearch.bloggernepal.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Search BE Notes
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Stream</label>
                <Select value={selectedStream} onValueChange={setSelectedStream}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Streams" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Streams</SelectItem>
                    
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="bi">BBA BI</SelectItem>
                    <SelectItem value="bca">BCA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Semester</label>
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Semesters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="1">1st Semester</SelectItem>
                    <SelectItem value="2">2nd Semester</SelectItem>
                    <SelectItem value="3">3rd Semester</SelectItem>
                    <SelectItem value="4">4th Semester</SelectItem>
                    <SelectItem value="5">5th Semester</SelectItem>
                    <SelectItem value="6">6th Semester</SelectItem>
                    <SelectItem value="7">7th Semester</SelectItem>
                    <SelectItem value="8">8th Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Notes">Notes</SelectItem>
                    <SelectItem value="Question Bank">Question Bank</SelectItem>
                    <SelectItem value="Solutions">Solutions</SelectItem>
                    <SelectItem value="Literature">Literature</SelectItem>
                    <SelectItem value="Imp Files">Imp Files</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Study Materials ({filteredMaterials.length} found)
          </h2>
        </div>

        {/* Materials Grid */}
        {filteredMaterials.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No materials found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{material.subject}</CardTitle>
                      <CardDescription className="mt-1 space-x-1">
                        {material.type.map((type, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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
                      <p className="text-sm font-medium text-gray-900">Available in:</p>
                      <p className="text-sm text-gray-600">
                        {formatAvailability(material.availableIn)}
                      </p>
                    </div>
                    
                    {material.description && (
                      <div>
                        <p className="text-sm font-medium text-gray-900">Description:</p>
                        <p className="text-sm text-gray-600">{material.description}</p>
                      </div>
                    )}
                    
                    <Button asChild className="w-full">
                      <a 
                        href={material.driveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access Material
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

export default StudyMaterials;
