import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Zap, RefreshCw, ArrowRight, CheckCircle, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: t('home.comprehensiveContent'),
      description: t('home.comprehensiveDesc')
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />,
      title: t('home.userFriendly'),
      description: t('home.userFriendlyDesc')
    },
    {
      icon: <Users className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: t('home.communityDriven'),
      description: t('home.communityDrivenDesc')
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: t('home.regularUpdates'),
      description: t('home.regularUpdatesDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white/50 dark:bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {t('home.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.subtitle')}
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link to="/study-materials" className="flex items-center">
                  {t('home.getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/additional-resources">
                  {t('home.exploreResources')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              {t('home.whyChoose')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground dark:text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground dark:text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-6">
              {t('home.aboutTitle')}
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card dark:bg-card p-8 rounded-lg shadow-sm border border-border dark:border-border">
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed mb-6">
                {t('home.aboutDesc1')}
              </p>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed mb-6">
                {t('home.aboutDesc2')}
              </p>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed">
                {t('home.aboutDesc3')}
              </p>
            </div>

            {/* Founders & Contact Section */}
            <div className="bg-card dark:bg-card p-8 rounded-lg shadow-sm border border-border dark:border-border">
              <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-6 text-center">Our Team</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted/20 dark:bg-muted/10 rounded-lg">
                  <h4 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">Saroj Pokhrel</h4>
                  <p className="text-muted-foreground dark:text-muted-foreground mb-3">Co-Founder & Developer</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <a href="mailto:info@sarozpokhrel.com.np" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@sarozpokhrel.com.np
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/20 dark:bg-muted/10 rounded-lg">
                  <h4 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">Rahul Kanwar</h4>
                  <p className="text-muted-foreground dark:text-muted-foreground mb-3">Co-Founder & Developer</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <a href="mailto:rahulkanwaredu@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      rahulkanwaredu@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-card dark:bg-card rounded-lg border border-border dark:border-border">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Students Helped Monthly</div>
              </div>
              <div className="text-center p-6 bg-card dark:bg-card rounded-lg border border-border dark:border-border">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Study Materials Available</div>
              </div>
              <div className="text-center p-6 bg-card dark:bg-card rounded-lg border border-border dark:border-border">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Platform Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card dark:bg-card border-t border-border dark:border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Support Section */}
          <div className="text-center mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center mb-3">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold text-foreground dark:text-foreground">Support Us</h3>
            </div>
            <p className="text-muted-foreground dark:text-muted-foreground mb-4">
              Help us maintain and improve the platform for all PU students.
            </p>
            <Button asChild variant="default" size="sm">
              <Link to="/support-us">Support Now</Link>
            </Button>
          </div>

          {/* Copyright Notice */}
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              As this website is community driven, it may contain copyrighted content. We respect the rights of copyright owners. 
              If you are a copyright owner, or are authorized to act on behalf of one, let us know and we will remove it.
            </p>
          </div>

          {/* Footer Credits */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
              {t('common.poweredBy')} <span className="text-blue-600 dark:text-blue-400 font-semibold">{t('common.adspireLabs')}</span>
            </p>
            <p className="text-xs text-muted-foreground dark:text-muted-foreground">
              {t('common.tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
