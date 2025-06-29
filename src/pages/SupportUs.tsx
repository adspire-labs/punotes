
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Upload, Users, DollarSign, ExternalLink, Mail, MessageSquare } from 'lucide-react';

const SupportUs = () => {
  const supportOptions = [
    {
      icon: <Upload className="h-8 w-8 text-blue-600" />,
      title: 'Submit Study Materials',
      description: 'Share your notes, question papers, and study resources with the community.',
      action: 'Submit Materials',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Technical Contributions',
      description: 'Contribute code, design improvements, or technical expertise.',
      action: 'Contribute Now',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: 'Feedback & Ideas',
      description: 'Share your suggestions to help us improve the platform.',
      action: 'Give Feedback',
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
            <Heart className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Support PUNotes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us continue providing quality educational resources to Pokhara University students. 
            Your support makes a real difference in the academic journey of hundreds of students.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {option.description}
                </CardDescription>
                <Button asChild className="w-full">
                  <a 
                    href={option.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {option.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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

        {/* Impact Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Impact</CardTitle>
            <CardDescription>
              See how your support helps the PU student community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What Your Support Provides:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    24/7 website availability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Fast and reliable downloads
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Regular content updates
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    New feature development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Mobile-friendly experience
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Community Impact:</h4>
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

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions About Supporting Us?</h3>
            <p className="text-gray-600 mb-4">
              If you have questions about contributing, donations, or other ways to support PUNotes, 
              feel free to reach out to our team using the contact information above.
            </p>
            <p className="text-sm text-gray-500">
              We appreciate every form of support, big or small. Together, we can make education more accessible!
            </p>
          </div>
        </div>
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

export default SupportUs;
