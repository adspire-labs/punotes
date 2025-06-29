
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Download, Upload, Lock, Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from '@/components/Navigation';
import studyMaterialsData from '@/data/studyMaterials.json';
import { toast } from 'sonner';

const AdminMaterials = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [materials, setMaterials] = useState(studyMaterialsData);
  const [customStreams, setCustomStreams] = useState<string[]>([]);
  const [newStreamName, setNewStreamName] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    subject: '',
    type: '',
    description: '',
    driveLink: '',
    streams: [] as string[],
    semesters: [] as string[]
  });

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid password');
    }
  };

  const defaultStreams = ['bca', 'bba', 'bbs', 'be', 'bsc'];
  const allStreams = [...defaultStreams, ...customStreams];
  const allSemesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const materialTypes = ['Notes', 'Question Bank', 'Solutions', 'Imp Files', 'Literature'];

  const addCustomStream = () => {
    if (newStreamName.trim() && !allStreams.includes(newStreamName.toLowerCase())) {
      setCustomStreams([...customStreams, newStreamName.toLowerCase()]);
      setNewStreamName('');
      toast.success(`Stream "${newStreamName}" added successfully!`);
    }
  };

  const handleStreamToggle = (stream: string) => {
    setFormData(prev => ({
      ...prev,
      streams: prev.streams.includes(stream)
        ? prev.streams.filter(s => s !== stream)
        : [...prev.streams, stream]
    }));
  };

  const handleSemesterToggle = (semester: string) => {
    setFormData(prev => ({
      ...prev,
      semesters: prev.semesters.includes(semester)
        ? prev.semesters.filter(s => s !== semester)
        : [...prev.semesters, semester]
    }));
  };

  const addMaterial = () => {
    if (!formData.subject || !formData.type || !formData.description || !formData.driveLink || 
        formData.streams.length === 0 || formData.semesters.length === 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newMaterial = {
      id: Date.now(),
      stream: formData.streams,
      semester: formData.semesters,
      subject: formData.subject,
      type: formData.type,
      driveLink: formData.driveLink,
      description: formData.description
    };

    setMaterials([...materials, newMaterial]);
    setFormData({
      subject: '',
      type: '',
      description: '',
      driveLink: '',
      streams: [],
      semesters: []
    });
    toast.success('Material added successfully!');
  };

  const deleteMaterial = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
    toast.success('Material deleted successfully!');
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(materials, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'studyMaterials.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    toast.success('JSON file exported successfully!');
  };

  const importFromJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        setMaterials(jsonData);
        toast.success('Data imported successfully!');
      } catch (error) {
        toast.error('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-md mx-auto pt-20">
          <Card>
            <CardHeader className="text-center">
              <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>Enter password to access admin panel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Materials Management</h1>
          <p className="text-gray-600">
            Manage study materials for the PUNotes website.
          </p>
        </div>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <AlertDescription>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-900">Manual Website Update Process</h3>
              <p className="text-blue-800">
                To update the website with new materials for all users to see:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-blue-800 ml-4">
                <li>Add your materials using the form below</li>
                <li>Click "Export JSON" to download the updated materials file</li>
                <li>Open your code editor and navigate to <code className="bg-blue-100 px-1 rounded">src/data/studyMaterials.json</code></li>
                <li>Replace the entire content of that file with the exported JSON data</li>
                <li>Save the file and deploy your changes to make them live for all users</li>
              </ol>
              <p className="text-sm text-blue-700 mt-2">
                This ensures all users see the updated materials when they visit the Study Materials page.
              </p>
            </div>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="add" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="add">Add Material</TabsTrigger>
            <TabsTrigger value="manage">Manage Materials</TabsTrigger>
            <TabsTrigger value="export">Export/Import</TabsTrigger>
          </TabsList>

          <TabsContent value="add" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Study Material</CardTitle>
                <CardDescription>Fill in the details to add a new study material</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="subject">Subject Name</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="e.g., Computer Fundamentals"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="type">Material Type</Label>
                    <Select onValueChange={(value) => setFormData({...formData, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {materialTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Brief description of the material"
                  />
                </div>

                <div>
                  <Label htmlFor="driveLink">Google Drive Link</Label>
                  <Input
                    id="driveLink"
                    value={formData.driveLink}
                    onChange={(e) => setFormData({...formData, driveLink: e.target.value})}
                    placeholder="https://drive.google.com/..."
                  />
                </div>

                <div>
                  <Label>Add Custom Stream (Optional)</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newStreamName}
                      onChange={(e) => setNewStreamName(e.target.value)}
                      placeholder="e.g., MCA, MBA"
                    />
                    <Button onClick={addCustomStream} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Select Streams</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allStreams.map((stream) => (
                      <Badge
                        key={stream}
                        variant={formData.streams.includes(stream) ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => handleStreamToggle(stream)}
                      >
                        {stream.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Select Semesters</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {allSemesters.map((semester) => (
                      <Badge
                        key={semester}
                        variant={formData.semesters.includes(semester) ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => handleSemesterToggle(semester)}
                      >
                        {semester}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button onClick={addMaterial} className="w-full">
                  Add Material
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>Current Materials ({materials.length})</CardTitle>
                <CardDescription>Manage existing study materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{material.subject}</h3>
                        <p className="text-sm text-gray-600">
                          {material.type} • {Array.isArray(material.stream) ? material.stream.join(', ') : material.stream} • 
                          Sem {Array.isArray(material.semester) ? material.semester.join(', ') : material.semester}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{material.description}</p>
                      </div>
                      <Button
                        onClick={() => deleteMaterial(material.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Export Materials</CardTitle>
                  <CardDescription>Download current materials as JSON</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={exportToJSON} className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export JSON
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Import Materials</CardTitle>
                  <CardDescription>Upload JSON file to replace current materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    type="file"
                    accept=".json"
                    onChange={importFromJSON}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-500">
                    <Upload className="inline h-4 w-4 mr-1" />
                    Select a JSON file to import
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
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

export default AdminMaterials;
