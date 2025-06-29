
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Upload, Users, DollarSign, Mail } from 'lucide-react';

const AdminMaterials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Management</h1>
          <p className="text-gray-600">
            Submit materials, view submissions, and contribute to the PUNotes community.
          </p>
        </div>

        {/* Submit Materials Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="h-6 w-6 mr-2 text-blue-600" />
              Submit Study Materials
            </CardTitle>
            <CardDescription>
              Share your notes, question papers, and study resources with the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">
                Help fellow students by submitting your study materials. All contributions are reviewed before publishing.
              </p>
              <Button asChild size="lg">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Submit Materials
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* View Submissions Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>
              View materials submitted by the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg border">
              <iframe 
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-9PSpUKqbbCxZK82ZTknKNRVyzv0lxDOim1Sy_E3bDfD85HbF5LoX7ZTSKzMZnxtdeGzDuvZ0gAoc/pubhtml?widget=true&amp;headers=false"
                width="100%" 
                height="500" 
                className="rounded border w-full"
                title="Study Material Submissions"
              />
            </div>
          </CardContent>
        </Card>

        {/* BE Materials Section */}
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
                We do not store BE materials on this site. You can search BE notes using the external tool below.
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

        {/* Technical Contributions Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-purple-600" />
              Technical Contributions
            </CardTitle>
            <CardDescription>
              Contribute code, design improvements, or technical expertise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">
                Contribute code, design improvements, or technical expertise to help Punotes grow.
              </p>
              <Button asChild size="lg" variant="outline">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Contribute Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Financial Support Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-green-600" />
              Financial Support
            </CardTitle>
            <CardDescription>
              Help us maintain and improve the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                Help us cover hosting, domain, and development costs. Your donations help us improve the platform and ensure free access for all PU students.
              </p>
              <p className="text-gray-700 font-medium">
                Monthly Expense: <strong>Rs. 6,500</strong>
              </p>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center text-gray-500">
                <p className="text-lg mb-2">QR Code for donations will be added here.</p>
                <p className="text-sm">We accept donations via multiple digital payment methods.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-600" />
              Contact Us
            </CardTitle>
            <CardDescription>
              Get in touch with the PUNotes team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Saroj:</span>
                <a href="mailto:info@sarozpokhrel.com.np" className="text-blue-600 hover:underline">
                  info@sarozpokhrel.com.np
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Rahul:</span>
                <a href="mailto:rahulkanwaredu@gmail.com" className="text-blue-600 hover:underline">
                  rahulkanwaredu@gmail.com
                </a>
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

export default AdminMaterials;
