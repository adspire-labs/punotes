import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import { Plus, Download, Copy, Trash2, X, Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [customStreams, setCustomStreams] = useState<string[]>([]);
  const [newStreamName, setNewStreamName] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    streams: [] as string[],
    semesters: [] as string[],
    subject: '',
    type: '',
    driveLink: '',
    description: ''
  });

  const ADMIN_PASSWORD = 'admin123'; // Change this to your desired password

  useEffect(() => {
    // Load materials from localStorage on component mount
    const savedMaterials = localStorage.getItem('studyMaterials');
    const savedStreams = localStorage.getItem('customStreams');
    
    if (savedMaterials) {
      setMaterials(JSON.parse(savedMaterials));
    }
    if (savedStreams) {
      setCustomStreams(JSON.parse(savedStreams));
    }
  }, []);

  useEffect(() => {
    // Auto-save materials to localStorage whenever materials change
    localStorage.setItem('studyMaterials', JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    // Auto-save custom streams to localStorage whenever they change
    localStorage.setItem('customStreams', JSON.stringify(customStreams));
  }, [customStreams]);

  const defaultStreams = [
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

  const allStreams = [...defaultStreams, ...customStreams.map(stream => ({ value: stream.toLowerCase(), label: stream }))];

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Welcome to Admin Panel!"
      });
    } else {
      toast({
        title: "Error",
        description: "Incorrect password!",
        variant: "destructive"
      });
    }
  };

  const handleAddCustomStream = () => {
    if (newStreamName.trim() && !customStreams.includes(newStreamName.trim())) {
      setCustomStreams([...customStreams, newStreamName.trim()]);
      setNewStreamName('');
      toast({
        title: "Success",
        description: "New stream added successfully!"
      });
    }
  };

  const handleRemoveCustomStream = (streamToRemove: string) => {
    setCustomStreams(customStreams.filter(stream => stream !== streamToRemove));
    toast({
      title: "Success",
      description: "Stream removed successfully!"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStreamChange = (streamValue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      streams: checked 
        ? [...prev.streams, streamValue]
        : prev.streams.filter(s => s !== streamValue)
    }));
  };

  const handleSemesterChange = (semesterValue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      semesters: checked 
        ? [...prev.semesters, semesterValue]
        : prev.semesters.filter(s => s !== semesterValue)
    }));
  };

  const handleAddMaterial = () => {
    if (!formData.streams.length || !formData.semesters.length || !formData.subject || !formData.type || !formData.driveLink) {
      toast({
        title: "Error",
        description: "Please fill in all required fields including at least one stream and semester",
        variant: "destructive"
      });
      return;
    }

    const newMaterial: StudyMaterial = {
      id: Date.now(),
      stream: formData.streams,
      semester: formData.semesters,
      subject: formData.subject,
      type: formData.type,
      driveLink: formData.driveLink,
      description: formData.description || `${formData.type} for ${formData.subject}.`
    };

    setMaterials(prev => [...prev, newMaterial]);
    setFormData({
      streams: [],
      semesters: [],
      subject: '',
      type: '',
      driveLink: '',
      description: ''
    });

    toast({
      title: "Success",
      description: "Material added and saved automatically!"
    });
  };

  const handleDeleteMaterial = (id: number) => {
    setMaterials(prev => prev.filter(material => material.id !== id));
    setDeleteConfirmId(null);
    toast({
      title: "Success",
      description: "Material deleted successfully!"
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

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lock className="h-12 w-12 text-blue-600" />
            </div>
            <CardTitle>Admin Panel Access</CardTitle>
            <CardDescription>
              Enter the admin password to access the materials management panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login to Admin Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin - Manage Study Materials</h1>
            <p className="text-gray-600">
              Add new study materials and export JSON data to update the website.
            </p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="text-red-600 hover:text-red-700"
          >
            <Lock className="h-4 w-4 mr-2" />
            Logout
          </Button>
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
            <CardContent className="space-y-6">
              {/* Custom Stream Management */}
              <div className="space-y-2">
                <Label>Add Custom Stream</Label>
                <div className="flex gap-2">
                  <Input
                    value={newStreamName}
                    onChange={(e) => setNewStreamName(e.target.value)}
                    placeholder="e.g., MCA, MBA"
                  />
                  <Button onClick={handleAddCustomStream} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {customStreams.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {customStreams.map((stream) => (
                      <div key={stream} className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded text-sm">
                        {stream}
                        <button onClick={() => handleRemoveCustomStream(stream)}>
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Stream Selection */}
              <div className="space-y-2">
                <Label>Select Streams *</Label>
                <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto border rounded p-2">
                  {allStreams.map((stream) => (
                    <div key={stream.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={stream.value}
                        checked={formData.streams.includes(stream.value)}
                        onCheckedChange={(checked) => handleStreamChange(stream.value, !!checked)}
                      />
                      <Label htmlFor={stream.value} className="text-sm">{stream.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semester Selection */}
              <div className="space-y-2">
                <Label>Select Semesters *</Label>
                <div className="grid grid-cols-2 gap-2">
                  {semesters.map((semester) => (
                    <div key={semester.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={semester.value}
                        checked={formData.semesters.includes(semester.value)}
                        onCheckedChange={(checked) => handleSemesterChange(semester.value, !!checked)}
                      />
                      <Label htmlFor={semester.value} className="text-sm">{semester.label}</Label>
                    </div>
                  ))}
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
                            onClick={() => setDeleteConfirmId(material.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Streams:</strong> {material.stream.join(', ').toUpperCase()} | 
                          <strong> Semesters:</strong> {material.semester.join(', ')} | 
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
            <CardTitle>How to Update the Website</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-800 mb-2">📋 Manual Update Process</h4>
              <p className="text-sm text-blue-700">
                Follow these steps to update the website with new materials for all users to see.
              </p>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-sm">
              <li>
                <strong>Add Materials:</strong> Use the form on the left to add all your study materials. 
                You can add custom streams and select multiple streams/semesters for each material.
              </li>
              <li>
                <strong>Export JSON:</strong> Once you've added all materials, click "Copy JSON" or "Download JSON" 
                to get the complete data in JSON format.
              </li>
              <li>
                <strong>Update the Data File:</strong> Replace the content of <code className="bg-gray-100 px-2 py-1 rounded">src/data/studyMaterials.json</code> 
                with your new JSON data. This file contains all the study materials shown on the website.
              </li>
              <li>
                <strong>Deploy Changes:</strong> After updating the JSON file, the changes will be live 
                for all users once the website is deployed.
              </li>
            </ol>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> Materials added here are only saved locally in your browser. 
                To make them visible to all users, you must follow the manual update process above.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmId !== null} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this material? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => deleteConfirmId && handleDeleteMaterial(deleteConfirmId)}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMaterials;
