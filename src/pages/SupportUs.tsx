import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Code, DollarSign, ExternalLink } from 'lucide-react';

const SupportUs = () => {
  const supportOptions = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Become a Website Volunteer',
      description: 'Help us maintain and improve the website. Join our team of dedicated volunteers.',
      action: 'Fill Volunteer Form',
      link: '#volunteer-form'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: 'Financial Support',
      description: 'Support our hosting costs and development efforts through donations.',
      action: 'Donate Now',
      link: '#donate'
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: 'Technical Contributions',
      description: 'Contribute code, design improvements, or technical expertise.',
      action: 'Get Involved',
      link: '#technical'
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
                  <a href={option.link}>
                    {option.action}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteer Form Section */}
        <Card id="volunteer-form" className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-600" />
              Website Volunteer Application
            </CardTitle>
            <CardDescription>
              Interested in helping maintain and improve PUNotes? Fill out our volunteer form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">What We're Looking For:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">Content Moderators</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">Web Developers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">UI/UX Designers</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">Quality Assurance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">Community Managers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm">Content Contributors</span>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-6">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Volunteer Form
              </Button>
              <p className="text-sm text-blue-600 mt-4">
                * Form will open in a new tab. Please provide detailed information about your skills and availability.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Donation Section */}
        <Card id="donate" className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-green-600" />
              Financial Support
            </CardTitle>
            <CardDescription>
              Help us cover hosting costs, domain fees, and development expenses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Your donations help us maintain the website, improve features, and ensure 
                reliable access to study materials for all PU students.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Expenses:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <div className="flex justify-between">
                      <span>Web Hosting:</span>
                      <span>Rs. 2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domain & SSL:</span>
                      <span>Rs. 1,500</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex justify-between">
                      <span>Development:</span>
                      <span>Rs. 3,000</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Total:</span>
                      <span>Rs. 6,500</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  QR Code for donations will be added here. We accept donations through various digital payment methods.
                </p>
              </div>
              <Button size="lg" disabled>
                QR Code Coming Soon
              </Button>
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
              If you have questions about volunteering, donations, or other ways to support PUNotes, 
              feel free to reach out to our team.
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
