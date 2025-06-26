
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import { Plus, Download, Copy, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface StudyMaterial {
  id: number;
  stream: string[];
  semester: string[];
  subject: string;
  type: string;
  driveLink: string;
  description: string;
}

const AdminMaterials = () => {
  const { toast } = useToast();
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [formData, setFormData] = useState({
    stream: '',
    semester: '',
    subject: '',
    type: '',
    driveLink: '',
    description: ''
  });

  const streams = [
    { value: 'bca', label: 'BCA (Bachelor of Computer Application)' },
    { value: 'bba', label: 'BBA (Bachelor of Business Administration)' },
    { value: 'bbs', label: 'BBS (Bachelor of Business Studies)' },
    { value: 'be', label: 'BE (Bachelor of Engineering)' },
    { value: 'bsc', label: 'BSc (Bachelor of Science)' }
  ];

  const semesters = [
    { value: '1', label: '1st Semester' },
    { value: '2', label: '2nd Semester' },
    { value: '3', label: '3rd Semester' },
    { value: '4', label: '4th Semester' },
    { value: '5', label: '5th Semester' },
    { value: '6', label: '6th Semester' },
    { value: '7', label: '7th Semester' },
    { value: '8', label: '8th Semester' }
  ];

  const materialTypes = [
    'Notes',
    'Question Bank',
    'Solutions',
    'Imp Files',
    'Literature'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddMaterial = () => {
    if (!formData.stream || !formData.semester || !formData.subject || !formData.type || !formData.driveLink) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newMaterial: StudyMaterial = {
      id: Date.now(),
      stream: [formData.stream],
      semester: [formData.semester],
      subject: formData.subject,
      type: formData.type,
      driveLink: formData.driveLink,
      description: formData.description || `${formData.type} for ${formData.subject}.`
    };

    setMaterials(prev => [...prev, newMaterial]);
    setFormData({
      stream: '',
      semester: '',
      subject: '',
      type: '',
      driveLink: '',
      description: ''
    });

    toast({
      title: "Success",
      description: "Material added successfully!"
    });
  };

  const handleRemoveMaterial = (id: number) => {
    setMaterials(prev => prev.filter(material => material.id !== id));
    toast({
      title: "Success",
      description: "Material removed successfully!"
    });
  };

  const generateJSON = () => {
    return JSON.stringify(materials, null, 2);
  };

  const handleCopyJSON = () => {
    const jsonData = generateJSON();
    navigator.clipboard.writeText(jsonData);
    toast({
      title: "Success",
      description: "JSON copied to clipboard!"
    });
  };

  const handleDownloadJSON = () => {
    const jsonData = generateJSON();
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'study-materials.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Success",
      description: "JSON file downloaded!"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin - Manage Study Materials</h1>
          <p className="text-gray-600">
            Add new study materials and export the data for updating the main application.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add Material Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Material
              </CardTitle>
              <CardDescription>
                Fill in the details to add a new study material
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stream">Stream *</Label>
                  <Select value={formData.stream} onValueChange={(value) => handleInputChange('stream', value)}>
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

                <div className="space-y-2">
                  <Label htmlFor="semester">Semester *</Label>
                  <Select value={formData.semester} onValueChange={(value) => handleInputChange('semester', value)}>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject Name *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="e.g., Computer Fundamentals"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Material Type *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material type" />
                  </SelectTrigger>
                  <SelectContent>
                    {materialTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="driveLink">Google Drive Link *</Label>
                <Input
                  id="driveLink"
                  value={formData.driveLink}
                  onChange={(e) => handleInputChange('driveLink', e.target.value)}
                  placeholder="https://drive.google.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Brief description of the material..."
                  rows={3}
                />
              </div>

              <Button onClick={handleAddMaterial} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Material
              </Button>
            </CardContent>
          </Card>

          {/* Materials Preview & Export */}
          <Card>
            <CardHeader>
              <CardTitle>Added Materials ({materials.length})</CardTitle>
              <CardDescription>
                Preview and export your materials as JSON
              </CardDescription>
            </CardHeader>
            <CardContent>
              {materials.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No materials added yet. Add some materials using the form on the left.
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                    {materials.map((material) => (
                      <div key={material.id} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">{material.subject}</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveMaterial(material.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Stream:</strong> {material.stream.join(', ').toUpperCase()} | 
                          <strong> Semester:</strong> {material.semester.join(', ')} | 
                          <strong> Type:</strong> {material.type}
                        </p>
                        <p className="text-xs text-gray-500">{material.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleCopyJSON} variant="outline" className="flex-1">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy JSON
                    </Button>
                    <Button onClick={handleDownloadJSON} variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download JSON
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Fill in the form on the left to add study materials one by one</li>
              <li>Preview your added materials in the right panel</li>
              <li>Once you're satisfied, copy the JSON data or download it as a file</li>
              <li>Replace the content of <code className="bg-gray-100 px-1 rounded">src/data/studyMaterials.json</code> with your new JSON data</li>
              <li>The changes will be reflected on the Study Materials page</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminMaterials;
