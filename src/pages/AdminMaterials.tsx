
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, Download, Lock } from 'lucide-react';

interface StreamSemesterPair {
  stream: string;
  semester: string;
}

interface StudyMaterial {
  id: number;
  availableIn: StreamSemesterPair[];
  subject: string;
  type: string;
  driveLink: string;
  description: string;
}

const AdminMaterials = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [currentMaterial, setCurrentMaterial] = useState<StudyMaterial>({
    id: 1,
    availableIn: [{ stream: '', semester: '' }],
    subject: '',
    type: '',
    driveLink: '',
    description: ''
  });

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const addStreamSemesterPair = () => {
    setCurrentMaterial({
      ...currentMaterial,
      availableIn: [...currentMaterial.availableIn, { stream: '', semester: '' }]
    });
  };

  const removeStreamSemesterPair = (index: number) => {
    const newPairs = currentMaterial.availableIn.filter((_, i) => i !== index);
    setCurrentMaterial({
      ...currentMaterial,
      availableIn: newPairs.length > 0 ? newPairs : [{ stream: '', semester: '' }]
    });
  };

  const updateStreamSemesterPair = (index: number, field: 'stream' | 'semester', value: string) => {
    const newPairs = [...currentMaterial.availableIn];
    newPairs[index][field] = value;
    setCurrentMaterial({
      ...currentMaterial,
      availableIn: newPairs
    });
  };

  const addMaterial = () => {
    if (!currentMaterial.subject || !currentMaterial.type || !currentMaterial.driveLink) {
      alert('Please fill in all required fields');
      return;
    }

    const validPairs = currentMaterial.availableIn.filter(pair => pair.stream && pair.semester);
    if (validPairs.length === 0) {
      alert('Please add at least one valid stream-semester pair');
      return;
    }

    const newMaterial = {
      ...currentMaterial,
      availableIn: validPairs,
      id: materials.length + 1
    };

    setMaterials([...materials, newMaterial]);
    setCurrentMaterial({
      id: materials.length + 2,
      availableIn: [{ stream: '', semester: '' }],
      subject: '',
      type: '',
      driveLink: '',
      description: ''
    });
  };

  const deleteMaterial = (id: number) => {
    setMaterials(materials.filter(material => material.id !== id));
  };

  const generateJSON = () => {
    const jsonString = JSON.stringify(materials, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'studyMaterials.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-md mx-auto px-4 py-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-6 w-6 mr-2" />
                Admin Access
              </CardTitle>
              <CardDescription>
                Enter password to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
              <p className="text-sm text-gray-500 text-center">
                This panel generates JSON files for study materials
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Panel - JSON Generator</h1>
          <p className="text-gray-600">
            Generate JSON files for study materials. Download and manually replace src/data/studyMaterials.json
          </p>
        </div>

        {/* Add Material Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Material</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Subject *</label>
              <Input
                value={currentMaterial.subject}
                onChange={(e) => setCurrentMaterial({...currentMaterial, subject: e.target.value})}
                placeholder="e.g., Computer Fundamentals"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Type *</label>
              <Select value={currentMaterial.type} onValueChange={(value) => setCurrentMaterial({...currentMaterial, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Notes">Notes</SelectItem>
                  <SelectItem value="Question Bank">Question Bank</SelectItem>
                  <SelectItem value="Solutions">Solutions</SelectItem>
                  <SelectItem value="Literature">Literature</SelectItem>
                  <SelectItem value="Imp Files">Imp Files</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Drive Link *</label>
              <Input
                value={currentMaterial.driveLink}
                onChange={(e) => setCurrentMaterial({...currentMaterial, driveLink: e.target.value})}
                placeholder="https://drive.google.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea
                value={currentMaterial.description}
                onChange={(e) => setCurrentMaterial({...currentMaterial, description: e.target.value})}
                placeholder="Brief description of the material"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Available In (Stream-Semester Pairs) *</label>
              {currentMaterial.availableIn.map((pair, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Select value={pair.stream} onValueChange={(value) => updateStreamSemesterPair(index, 'stream', value)}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bca">BCA</SelectItem>
                      <SelectItem value="bba">BBA</SelectItem>
                      <SelectItem value="bbs">BBS</SelectItem>
                      <SelectItem value="be">BE</SelectItem>
                      <SelectItem value="bsc">BSc</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={pair.semester} onValueChange={(value) => updateStreamSemesterPair(index, 'semester', value)}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Semester" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => removeStreamSemesterPair(index)}
                    disabled={currentMaterial.availableIn.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addStreamSemesterPair}>
                <Plus className="h-4 w-4 mr-2" />
                Add Stream-Semester Pair
              </Button>
            </div>

            <Button onClick={addMaterial} className="w-full">
              Add Material
            </Button>
          </CardContent>
        </Card>

        {/* Materials List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Added Materials ({materials.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {materials.length === 0 ? (
              <p className="text-gray-500">No materials added yet</p>
            ) : (
              <div className="space-y-4">
                {materials.map((material) => (
                  <div key={material.id} className="border rounded p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{material.subject}</h4>
                        <p className="text-sm text-gray-600">{material.type}</p>
                        <p className="text-sm text-gray-600">
                          Available in: {material.availableIn.map(pair => `${pair.stream.toUpperCase()} - ${pair.semester}${pair.semester === '1' ? 'st' : pair.semester === '2' ? 'nd' : pair.semester === '3' ? 'rd' : 'th'} Semester`).join(', ')}
                        </p>
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => deleteMaterial(material.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Generate JSON */}
        <Card>
          <CardHeader>
            <CardTitle>Generate JSON</CardTitle>
            <CardDescription>
              Download the JSON file and manually replace src/data/studyMaterials.json in your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={generateJSON} disabled={materials.length === 0} className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download JSON File
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminMaterials;
