
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Upload, FileText, MessageSquare, Users, Github, MessageCircle, Youtube } from 'lucide-react';

const SubmitMaterials = () => {
  const contributionTypes = [
    {
      icon: <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: 'Submit Study Materials',
      description: 'Share your notes, question papers, and study resources with fellow students.',
      buttonText: 'Submit Materials',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: 'Technical Contributions',
      description: 'Help improve the website with code, design, or technical expertise.',
      buttonText: 'Contribute Technically',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: 'Feedback & Suggestions',
      description: 'Share your ideas to help us improve the platform for all students.',
      buttonText: 'Give Feedback',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScFDKL4T-qEPRa7Hz16fKYpROCMB3Rsgy4cnI4oz-uXAeP7ng/viewform'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4">Contribute to PUNotes</h1>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Help build the best study resource platform for Pokhara University students. 
            Your contributions make a difference in the academic journey of hundreds of students.
          </p>
        </div>

        {/* Contribution Types */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {contributionTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2 text-foreground dark:text-foreground">{type.title}</CardTitle>
                    <CardDescription className="text-muted-foreground dark:text-muted-foreground">
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

        {/* Recent Submissions Section */}
        <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Recent Submissions</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              View materials submitted by the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background dark:bg-background rounded-lg border border-border dark:border-border">
              <iframe 
                src="https://docs.google.com/spreadsheets/d/1hnhoVOZB6t_wMt1_xTNOXtT2RO5ibfYeNl0EvCTpGRs/edit?gid=593044528#gid=593044528"
                width="100%" 
                height="500" 
                className="rounded border w-full"
                title="Study Material Submissions"
              />
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Submission Guidelines</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              Please follow these guidelines when submitting materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground dark:text-foreground mb-2">For Study Materials:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground dark:text-muted-foreground list-disc list-inside ml-4">
                  <li>Ensure materials are relevant to Pokhara University curriculum</li>
                  <li>Provide clear subject name, stream, and semester information</li>
                  <li>Upload files to Google Drive and make them publicly accessible</li>
                  <li>Include a brief description of the content</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground dark:text-foreground mb-2">For Technical Contributions:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground dark:text-muted-foreground list-disc list-inside ml-4">
                  <li>Describe the improvement or feature you want to add</li>
                  <li>Include your technical background and availability</li>
                  <li>Mention specific skills (coding, design, testing, etc.)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground dark:text-foreground mb-2">Quality Standards:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground dark:text-muted-foreground list-disc list-inside ml-4">
                  <li>All submissions are reviewed before publication</li>
                  <li>Materials should be original or properly attributed</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Maintain academic integrity in all contributions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info Section */}
        <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Contact Us</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              Get in touch with the PUNotes team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-foreground dark:text-foreground">Saroj:</span>
                <a href="mailto:info@sarozpokhrel.com.np" className="text-blue-600 dark:text-blue-400 hover:underline">
                  info@sarozpokhrel.com.np
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-foreground dark:text-foreground">Rahul:</span>
                <a href="mailto:rahulkanwaredu@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  rahulkanwaredu@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Links */}
        <Card className="mb-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Join Our Community</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              Connect with us on various platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 border-border dark:border-border">
                <a 
                  href="https://github.com/adspire-labs/pu-study-hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 border-border dark:border-border">
                <a 
                  href="https://discord.com/invite/VZsjPgSGSW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Discord</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 border-border dark:border-border">
                <a 
                  href="https://www.youtube.com/@puelibrary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <Youtube className="h-6 w-6" />
                  <span>YouTube</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Impact */}
        <Card className="bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Your Impact</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              See how your contributions help the PU student community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground dark:text-foreground mb-3">What Your Contributions Provide:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground">Free access to quality study materials</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground">Better exam preparation resources</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground">Collaborative learning environment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-muted-foreground dark:text-muted-foreground">Improved website functionality</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground dark:text-foreground mb-3">Community Stats:</h4>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                    <div className="text-sm text-blue-800 dark:text-blue-300">Students Helped Monthly</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">500+</div>
                    <div className="text-sm text-green-800 dark:text-green-300">Study Materials Available</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-card dark:bg-card border-t border-border dark:border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
            Powered by <span className="text-blue-600 dark:text-blue-400 font-semibold">AdspireLabs</span>
          </p>
          <p className="text-xs text-muted-foreground dark:text-muted-foreground">
            Building innovative solutions for educational excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SubmitMaterials;
