
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportAndContactCards = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      {/* Support Us Card */}
      <Card className="w-56 shadow-lg border-2 hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-card text-card-foreground dark:text-card-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-sm text-foreground dark:text-foreground">
            <Heart className="h-4 w-4 mr-2 text-red-500" />
            Support Us
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs mb-2 text-muted-foreground dark:text-muted-foreground">
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
      
    </div>
  );
};

export default SupportAndContactCards;
