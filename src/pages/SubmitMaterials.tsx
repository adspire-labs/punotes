
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, Info, ExternalLink, FileText, Users, Award } from 'lucide-react';

const SubmitMaterials = () => {
  const guidelines = [
    {
      title: 'Quality Content',
      description: 'Ensure your materials are accurate, well-organized, and helpful for other students.'
    },
    {
      title: 'Proper Format',
      description: 'Submit materials in common formats (PDF, DOC, etc.) that are easily accessible.'
    },
    {
      title: 'Clear Labeling',
      description: 'Include subject name, semester, and type of material (notes, questions, syllabus).'
    },
    {
      title: 'Original Work',
      description: 'Only submit materials you have created or have permission to share.'
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Help Fellow Students',
      description: 'Your contributions help create a stronger academic community.'
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: 'Recognition',
      description: 'Get recognized as a valued contributor to the PU student community.'
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: 'Build Your Portfolio',
      description: 'Showcase your academic work and organizational skills.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Upload className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit Study Materials</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your knowledge with the PU community. Help fellow students by contributing 
            your notes, assignments, and study resources.
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">How It Works</AlertTitle>
          <AlertDescription className="text-blue-700">
            Fill out our Google Form with your materials and details. Our team will review and 
            organize your submission before adding it to the platform.
          </AlertDescription>
        </Alert>

        {/* Submission Form Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-blue-100">
            <CardTitle className="text-2xl text-blue-800">Ready to Contribute?</CardTitle>
            <CardDescription className="text-blue-600">
              Click the button below to access our submission form
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Can Submit</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Course Notes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Previous Year Questions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Assignment Solutions</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Syllabus Documents</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Reference Materials</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Study Guides</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <ExternalLink className="mr-2 h-5 w-5" />
                Open Submission Form
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                * Form will open in a new tab. You'll need a Google account to submit.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Submission Guidelines
            </CardTitle>
            <CardDescription>
              Please follow these guidelines to ensure your submission is accepted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{guideline.title}</h4>
                    <p className="text-sm text-gray-600">{guideline.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Why Contribute?</CardTitle>
            <CardDescription>
              Benefits of sharing your study materials with the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have questions about submitting materials or need technical assistance, 
              feel free to reach out to our team.
            </p>
            <p className="text-sm text-gray-500">
              We typically review and process submissions within 2-3 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitMaterials;
