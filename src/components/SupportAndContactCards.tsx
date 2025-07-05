
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportAndContactCards = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Support Us Card */}
      <Card className="w-64 shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-sm">
            <Heart className="h-4 w-4 mr-2 text-red-500" />
            Support Us
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs mb-3">
            Help us maintain and improve the platform for all PU students.
          </CardDescription>
          <Button asChild size="sm" className="w-full">
            <Link to="/support-us">
              Support Now
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Contact Us Card */}
      <Card className="w-64 shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs mb-3">
            Get in touch with questions, feedback, or suggestions.
          </CardDescription>
          <Button asChild size="sm" variant="outline" className="w-full">
            <Link to="/contact-us">
              Contact Now
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportAndContactCards;
