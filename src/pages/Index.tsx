
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { BookOpen, Users, Upload, Search, GraduationCap, FileText } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Organized Materials',
      description: 'Access notes, syllabus, and resources organized by stream, semester, and subject.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Student Community',
      description: 'Built by students, for students. Share knowledge and help each other succeed.'
    },
    {
      icon: <Upload className="h-8 w-8 text-blue-600" />,
      title: 'Easy Submission',
      description: 'Contribute your notes and materials to help fellow students.'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Quick Search',
      description: 'Find exactly what you need with our intuitive filtering system.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Study Materials' },
    { number: '1000+', label: 'Happy Students' },
    { number: '15+', label: 'Subjects Covered' },
    { number: '8', label: 'Semesters' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">PUNotes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your one-stop destination for Pokhara University study materials. 
              Access notes, syllabus, old questions, and academic resources shared by students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                <Link to="/study-materials">
                  <FileText className="mr-2 h-5 w-5" />
                  Browse Materials
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-700 text-white border-2 border-white hover:bg-blue-600 hover:border-blue-100 w-full sm:w-auto"
              >
                <Link to="/submit-materials">
                  <Upload className="mr-2 h-5 w-5" />
                  Submit Materials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PUNotes?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy for Pokhara University students to access and share academic resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Quality Study Materials?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of PU students who are already benefiting from our platform.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/study-materials">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">PUNotes</span>
              </div>
              <p className="text-gray-400">
                Empowering Pokhara University students with accessible academic resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/study-materials" className="text-gray-400 hover:text-white transition-colors">Study Materials</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/submit-materials" className="text-gray-400 hover:text-white transition-colors">Submit Materials</Link></li>
                <li><Link to="/support-us" className="text-gray-400 hover:text-white transition-colors">Support Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400">
                For questions or support, reach out to our student team.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 PUNotes. Made with ❤️ by PU students for PU students.
            </p>
            <p className="text-gray-500 text-xs">
              As this website is community driven, it may contain copyrighted content. We respect the rights of copyright owners. If you are a copyright owner, or are authorized to act on behalf of one, let us know, we will remove it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
