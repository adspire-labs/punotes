import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, BookOpen, Award, Lightbulb, UserCheck, FileText } from 'lucide-react';

const About = () => {
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

  const contentSources = [
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: 'Directly by Moderators of this Site',
      description: 'Curated and verified content from our dedicated team'
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: 'By Students Submitting Their Work',
      description: 'Community contributions from fellow students'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-600" />,
      title: 'By Using Other Sources and Articles',
      description: 'Carefully selected resources from various educational sources'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PUNotes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Pokhara University students through accessible, quality educational resources 
            and collaborative learning.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                PUNotes was created with a simple yet powerful mission: to make quality educational 
                resources accessible to every Pokhara University student. We believe that education 
                should be collaborative, and by sharing knowledge, we can all succeed together.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">What We Provide</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
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
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Our Site Works Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">How Our Site Works?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">📚 Directly by Moderators of this Site:</h3>
              <p className="text-gray-600">
                Our dedicated moderators carefully curate and upload high-quality study materials, ensuring accuracy and relevance for Pokhara University students.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">👥 By Students Submitting Their Work:</h3>
              <p className="text-gray-600">
                Students can contribute their own study materials, notes, and resources through our submission system, creating a collaborative learning environment.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">🔍 By Using Other Sources and Articles:</h3>
              <p className="text-gray-600">
                We also source materials from reliable educational sources and articles, ensuring comprehensive coverage of academic topics.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Credits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Credits</h2>
          
          {/* General Credit */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-center text-blue-600">Community Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center leading-relaxed">
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
                <p className="text-gray-600">
                  We would like to give special recognition to Saroj for his exceptional work in creating and developing PU e-Library. 
                  Saroj's expertise and dedication to website development have resulted in a user-friendly platform that benefits 
                  students in their academic pursuits. His contributions have been instrumental in making PU e-Library a valuable 
                  resource for the student community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Rahul</CardTitle>
                <CardDescription>Content Contributor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We would also like to recognize Rahul for his significant contributions as the main source of study materials 
                  for the website. Rahul's provision of valuable resources, including notes, old exam questions, and book images, 
                  has greatly enriched the content available on e-Library. His dedication to supporting Pokhara University students 
                  through the sharing of educational materials is commendable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of the PUNotes community. Whether you're looking for study materials or 
            want to contribute your own resources, there's a place for you here.
          </p>
          <div className="text-sm text-blue-200">
            Together, we're building a better educational experience for all PU students.
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

export default About;
