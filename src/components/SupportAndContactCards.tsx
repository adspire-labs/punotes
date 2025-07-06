
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportAndContactCards = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      {/* Contact Us Card */}
      <Card className="w-56 shadow-lg border-2 hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-card text-card-foreground dark:text-card-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm text-foreground dark:text-foreground">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs mb-2 text-muted-foreground dark:text-muted-foreground">
            Get in touch with our team for any questions or feedback.
          </CardDescription>
          <Button asChild size="sm" className="w-full">
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
