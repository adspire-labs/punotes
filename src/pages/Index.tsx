import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import SupportAndContactCards from '@/components/SupportAndContactCards';
import { BookOpen, Users, Upload, Search, GraduationCap, FileText, Target, Heart, Award, Lightbulb, UserCheck } from 'lucide-react';

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

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community Driven',
      description: 'Built by students, for students. We believe in the power of collaborative learning and knowledge sharing.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Quality Education',
      description: 'We strive to provide high-quality academic resources that help students excel in their studies.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Student Welfare',
      description: 'Our primary goal is to support student success and make education more accessible to everyone.'
    }
  ];

  const contentSources = [
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: 'Uploaded by Moderators',
      description: 'Verified and curated by our team to ensure quality'
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: 'Submitted by Students',
      description: 'Contributions from students for students'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-600" />,
      title: 'Collected from Trusted Sources',
      description: 'Academic references and online resources'
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-yellow-600" />,
      title: '500+ Materials',
      description: 'Extensive collection of study resources'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: '1000+ Students',
      description: 'Active community members'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: '15+ Subjects',
      description: 'Comprehensive subject coverage'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <SupportAndContactCards />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white">
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose PUNotes?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
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

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About PUNotes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering Pokhara University students through accessible, quality educational resources 
              and collaborative learning.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-lg shadow-sm p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  PUNotes was created with a simple yet powerful mission: to make quality educational 
                  resources accessible to every Pokhara University student. We believe that education 
                  should be collaborative, and by sharing knowledge, we can all succeed together.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
                <h4 className="text-xl font-semibold mb-4">What We Provide</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    Course notes and study materials
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    Previous year question papers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    Official syllabus documents
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    Academic resources and references
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How Materials Are Collected Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">How Materials Are Collected</CardTitle>
              <CardDescription className="text-muted-foreground">
                We gather study materials through multiple reliable sources to ensure comprehensive coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {contentSources.map((source, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                    <div className="flex-shrink-0">
                      {source.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{source.title}</h4>
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Story Section */}
          <div className="bg-card rounded-lg shadow-sm p-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  PUNotes began as a simple idea among a group of Pokhara University students who 
                  noticed a common challenge: accessing quality study materials was often difficult 
                  and time-consuming. Students were spending countless hours searching for notes, 
                  previous year questions, and reliable study resources.
                </p>
                <p className="mb-4">
                  Recognizing that many students had excellent notes and materials but no easy way 
                  to share them, we decided to create a platform that would benefit the entire PU 
                  community. What started as a small initiative has now grown into a comprehensive 
                  resource hub used by hundreds of students across different programs.
                </p>
                <p>
                  Today, PUNotes continues to evolve, driven by student feedback and the shared 
                  vision of making quality education accessible to all. We're proud to be a 
                  student-led initiative that puts the community first.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">Our Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credits Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">Credits</h3>
            
            {/* General Credit */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-center text-blue-600">Community Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  A heartfelt thank you to all Pokhara University students who contributed their study materials to PU e-Library. 
                  Your efforts have made this site a valuable resource for students.
                </p>
              </CardContent>
            </Card>

            {/* Individual Credits */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Saroj</CardTitle>
                  <CardDescription>Website Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We would like to give special recognition to Saroj for his exceptional work in creating and developing PU e-Library. 
                    Saroj's expertise and dedication to website development have resulted in a user-friendly platform that benefits 
                    students in their academic pursuits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Rahul</CardTitle>
                  <CardDescription>Content Contributor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We would also like to recognize Rahul for his significant contributions as the main source of study materials 
                    for the website. Rahul's provision of valuable resources, including notes, old exam questions, and book images, 
                    has greatly enriched the content available on e-Library.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of the PUNotes community. Whether you're looking for study materials or 
              want to contribute your own resources, there's a place for you here.
            </p>
            <div className="text-sm text-blue-200">
              Together, we're building a better educational experience for all PU students.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">PU Study Hub</h3>
              <p className="text-gray-400">Your gateway to academic excellence</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">
                Powered by <span className="text-blue-400 font-semibold">AdspireLabs</span>
              </p>
              <p className="text-xs text-gray-500">
                As the above website is community driven, it may contain copyright contents. We respect the rights of copyright owners. If you are a copyright owner, or are authorized to act on behalf of one, let us know, we will remove it.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
