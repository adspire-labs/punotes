
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Upload, FileText, MessageSquare, Users } from 'lucide-react';

const SubmitMaterials = () => {
  const contributionTypes = [
    {
      icon: <Upload className="h-8 w-8 text-blue-600" />,
      title: 'Submit Study Materials',
      description: 'Share your notes, question papers, and study resources with fellow students.',
      buttonText: 'Submit Materials',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Technical Contributions',
      description: 'Help improve the website with code, design, or technical expertise.',
      buttonText: 'Contribute Technically',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: 'Feedback & Suggestions',
      description: 'Share your ideas to help us improve the platform for all students.',
      buttonText: 'Give Feedback',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contribute to PUNotes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help build the best study resource platform for Pokhara University students. 
            Your contributions make a difference in the academic journey of hundreds of students.
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {contributionTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {type.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="w-full">
                  <a 
                    href={type.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {type.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Submission Guidelines</CardTitle>
            <CardDescription>
              Please follow these guidelines when submitting materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Study Materials:</h4>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                  <li>Ensure materials are relevant to Pokhara University curriculum</li>
                  <li>Provide clear subject name, stream, and semester information</li>
                  <li>Upload files to Google Drive and make them publicly accessible</li>
                  <li>Include a brief description of the content</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Technical Contributions:</h4>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                  <li>Describe the improvement or feature you want to add</li>
                  <li>Include your technical background and availability</li>
                  <li>Mention specific skills (coding, design, testing, etc.)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Standards:</h4>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside ml-4">
                  <li>All submissions are reviewed before publication</li>
                  <li>Materials should be original or properly attributed</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Maintain academic integrity in all contributions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Impact */}
        <Card>
          <CardHeader>
            <CardTitle>Your Impact</CardTitle>
            <CardDescription>
              See how your contributions help the PU student community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What Your Contributions Provide:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Free access to quality study materials
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Better exam preparation resources
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Collaborative learning environment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Improved website functionality
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Community Stats:</h4>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">1000+</div>
                    <div className="text-sm text-blue-800">Students Helped Monthly</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-green-800">Study Materials Available</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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

export default SubmitMaterials;
