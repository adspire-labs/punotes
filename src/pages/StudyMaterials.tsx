import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, BookOpen, Search, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import studyMaterialsData from '@/data/studyMaterials.json';
import beStudyMaterialsData from '@/data/beStudyMaterials.json';
import class12ScienceMaterialsData from '@/data/class12ScienceMaterials.json';

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
  topics?: string[];
  examBoard?: string;
  level?: string;
}

const StudyMaterials = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Combine all materials and sort alphabetically by subject name
  const materials: StudyMaterial[] = useMemo(() => {
    return [...studyMaterialsData, ...beStudyMaterialsData, ...class12ScienceMaterialsData]
      .sort((a, b) => a.subject.localeCompare(b.subject));
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
      'bi': 'BBA BI',
      'class12': 'Class 12 NEB'
    };
    return streamNames[stream] || stream;
  };

  const getSemesterDisplayName = (semester: string) => {
    if (semester === 'science') return 'Science';
    if (semester === 'management') return 'Management';
    const ordinal = semester === '1' ? 'st' : semester === '2' ? 'nd' : semester === '3' ? 'rd' : 'th';
    return `${semester}${ordinal} Semester`;
  };

  const formatAvailability = (availableIn: StreamSemesterPair[]) => {
    return availableIn.map(pair => 
      `${getStreamDisplayName(pair.stream)} - ${getSemesterDisplayName(pair.semester)}`
    ).join(', ');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Study Materials | Notes, Question Banks & Solutions for NEB, BBA, BE Students</title>
        <meta name="description" content="Access comprehensive study materials including notes, question banks, and solutions for Class 12 NEB, BBA, BE, and other academic programs in Nepal." />
        <meta name="keywords" content="study materials nepal, class 12 neb notes, bba study materials, be engineering notes, question banks, solutions" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourdomain.com/"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Study Materials",
                "item": "https://yourdomain.com/study-materials"
              }
            ]
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
            <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4">{t('study.title')}</h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground">
              {t('study.subtitle')}
            </p>
          </div>

          {/* Class 12 NEB Science Materials Highlight */}
          <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-foreground">Class 12 NEB Science Materials</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                Complete study materials for all Class 12 Science subjects as per NEB curriculum
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      NEB Class 12 Science Materials Now Available!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Access comprehensive study materials for Physics, Chemistry, Biology, Mathematics, Computer Science, and English. 
                      All materials are aligned with the latest NEB syllabus and include notes, question banks, past papers, solutions, and model questions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                        6 Core Subjects
                      </span>
                      <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                        NEB Aligned
                      </span>
                      <span className="inline-block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                        Complete Materials
                      </span>
                      <span className="inline-block bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">
                        Past Papers Included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BE Study Materials Integration*/} 
          <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-foreground">{t('study.beTitle')}</CardTitle>
              <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                {t('study.beDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Complete BE Study Materials Now Available!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Access comprehensive study materials for all BE semesters including notes, previous year questions, 
                      lab materials, and resources directly integrated from the NCIT community repository. 
                      Use the filters below to find materials for your specific semester and subject.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                        35+ Subjects
                      </span>
                      <span className="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                        All 8 Semesters
                      </span>
                      <span className="inline-block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                        Notes & Code
                      </span>
                      <span className="inline-block bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">
                        Previous Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground dark:text-foreground">
                <Filter className="h-5 w-5 mr-2" />
                {t('study.filterMaterials')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">{t('study.search')}</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground dark:text-muted-foreground" />
                    <Input
                      placeholder={t('study.searchPlaceholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">{t('study.stream')}</label>
                  <Select value={selectedStream} onValueChange={setSelectedStream}>
                    <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                      <SelectValue placeholder={t('study.allStreams')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                      <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">{t('study.allStreams')}</SelectItem>
                      <SelectItem value="class12" className="text-popover-foreground dark:text-popover-foreground">Class 12 NEB</SelectItem>
                      <SelectItem value="bba" className="text-popover-foreground dark:text-popover-foreground">BBA</SelectItem>
                      <SelectItem value="bi" className="text-popover-foreground dark:text-popover-foreground">BBA BI</SelectItem>
                      <SelectItem value="bca" className="text-popover-foreground dark:text-popover-foreground">BCA</SelectItem>
                      <SelectItem value="be" className="text-popover-foreground dark:text-popover-foreground">BE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">{t('study.semester')}</label>
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                      <SelectValue placeholder={t('study.allSemesters')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                      <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">{t('study.allSemesters')}</SelectItem>
                      <SelectItem value="science" className="text-popover-foreground dark:text-popover-foreground">Science</SelectItem>
                      <SelectItem value="management" className="text-popover-foreground dark:text-popover-foreground">Management</SelectItem>
                      <SelectItem value="1" className="text-popover-foreground dark:text-popover-foreground">1st Semester</SelectItem>
                      <SelectItem value="2" className="text-popover-foreground dark:text-popover-foreground">2nd Semester</SelectItem>
                      <SelectItem value="3" className="text-popover-foreground dark:text-popover-foreground">3rd Semester</SelectItem>
                      <SelectItem value="4" className="text-popover-foreground dark:text-popover-foreground">4th Semester</SelectItem>
                      <SelectItem value="5" className="text-popover-foreground dark:text-popover-foreground">5th Semester</SelectItem>
                      <SelectItem value="6" className="text-popover-foreground dark:text-popover-foreground">6th Semester</SelectItem>
                      <SelectItem value="7" className="text-popover-foreground dark:text-popover-foreground">7th Semester</SelectItem>
                      <SelectItem value="8" className="text-popover-foreground dark:text-popover-foreground">8th Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground dark:text-foreground">{t('study.type')}</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-background dark:bg-background border-input dark:border-input text-foreground dark:text-foreground">
                      <SelectValue placeholder={t('study.allTypes')} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                      <SelectItem value="all" className="text-popover-foreground dark:text-popover-foreground">{t('study.allTypes')}</SelectItem>
                      <SelectItem value="Notes" className="text-popover-foreground dark:text-popover-foreground">Notes</SelectItem>
                      <SelectItem value="Question Bank" className="text-popover-foreground dark:text-popover-foreground">Question Bank</SelectItem>
                      <SelectItem value="Past Papers" className="text-popover-foreground dark:text-popover-foreground">Past Papers</SelectItem>
                      <SelectItem value="Solutions" className="text-popover-foreground dark:text-popover-foreground">Solutions</SelectItem>
                      <SelectItem value="Model Questions" className="text-popover-foreground dark:text-popover-foreground">Model Questions</SelectItem>
                      <SelectItem value="Literature" className="text-popover-foreground dark:text-popover-foreground">Literature</SelectItem>
                      <SelectItem value="Imp Files" className="text-popover-foreground dark:text-popover-foreground">Imp Files</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground dark:text-foreground">
              {t('study.title')} ({filteredMaterials.length} {t('study.found')})
            </h2>
          </div>

          {/* Materials Grid */}
          {filteredMaterials.length === 0 ? (
            <Card className="bg-card dark:bg-card border-border dark:border-border">
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground dark:text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">{t('study.noMaterials')}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">{t('study.noMaterialsDesc')}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-foreground dark:text-foreground">{material.subject}</CardTitle>
                        <CardDescription className="mt-1 space-x-1">
                          {material.type.map((type, index) => (
                            <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
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
                        <p className="text-sm font-medium text-foreground dark:text-foreground">{t('study.availableIn')}</p>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          {formatAvailability(material.availableIn)}
                        </p>
                      </div>
                      
                      {material.description && (
                        <div>
                          <p className="text-sm font-medium text-foreground dark:text-foreground">{t('study.description')}</p>
                          <p className="text-sm text-muted-foreground dark:text-muted-foreground">{material.description}</p>
                        </div>
                      )}

                      {material.topics && (
                        <div>
                          <p className="text-sm font-medium text-foreground dark:text-foreground">Topics Covered</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {material.topics.slice(0, 3).map((topic, index) => (
                              <span key={index} className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                                {topic}
                              </span>
                            ))}
                            {material.topics.length > 3 && (
                              <span className="inline-block text-xs text-muted-foreground dark:text-muted-foreground">
                                +{material.topics.length - 3} more
                              </span>
                            )}
                          </div>
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
                          {t('study.accessMaterial')}
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
    </>
  );
};

export default StudyMaterials;
