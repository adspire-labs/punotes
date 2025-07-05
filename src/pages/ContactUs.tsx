
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, MessageCircle, Youtube } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Mail className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with the PUNotes team. We're here to help you with any questions or concerns.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Direct Contact</CardTitle>
            <CardDescription>
              Reach out to us directly via email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Saroj</p>
                  <a href="mailto:info@sarozpokhrel.com.np" className="text-blue-600 hover:underline">
                    info@sarozpokhrel.com.np
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Rahul</p>
                  <a href="mailto:rahulkanwaredu@gmail.com" className="text-green-600 hover:underline">
                    rahulkanwaredu@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Links */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
            <CardDescription>
              Connect with us and other students on various platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
            
              <Button asChild variant="outline" className="h-auto p-6">
                <a 
                  href="https://discord.com/invite/VZsjPgSGSW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-3"
                >
                  <MessageCircle className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold">Discord</div>
                    <div className="text-sm text-gray-600">Join our community chat</div>
                  </div>
                </a>
              </Button>
              
              <Button asChild variant="outline" className="h-auto p-6">
                <a 
                  href="https://www.youtube.com/@puelibrary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-3"
                >
                  <Youtube className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold">YouTube</div>
                    <div className="text-sm text-gray-600">Educational content</div>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Common questions and answers about PUNotes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How can I submit study materials?</h4>
                <p className="text-gray-600 text-sm">
                  Visit our Submit Materials page and use the Google Form to submit your notes, question papers, and other study resources.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Are the materials free to access?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, all study materials on PUNotes are completely free to access for all Pokhara University students.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How can I contribute technically?</h4>
                <p className="text-gray-600 text-sm">
                  You can contribute code, design improvements, or technical expertise through our GitHub repository or by filling out our technical contribution form.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I report issues or suggest improvements?</h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! You can report issues on our GitHub repository, join our Discord community, or contact us directly via email.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card>
          <CardHeader>
            <CardTitle>Response Time</CardTitle>
            <CardDescription>
              When you can expect to hear back from us
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-medium mb-2">Email Response Time</p>
              <p className="text-blue-700 text-sm">
                We typically respond to emails within 1 week-month. 
                For urgent technical issues, please also post in our Discord community for faster assistance.
              </p>
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

export default ContactUs;
