import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

export function ManagementNotice() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show notice if not dismissed today
    const lastDismissed = localStorage.getItem("punotes-notice-dismissed");
    const today = new Date().toDateString();
    
    if (lastDismissed !== today) {
      // Delay showing the modal slightly to let page load
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("punotes-notice-dismissed", new Date().toDateString());
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center">
            <Heart className="h-5 w-5 text-red-500" />
            We Need Your Help!
            <Heart className="h-5 w-5 text-red-500" />
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-2">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <p className="text-base">
              <strong>PUNotes needs new managers!</strong>
            </p>
            <p>
              We're graduating soon and don't want to see this platform die. 
              Education should be accessible to everyone, and we need passionate 
              students to keep this community alive.
            </p>
            <p className="text-sm text-muted-foreground">
              If you're interested in helping manage PUNotes, please reach out to us!
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 pt-4">
          <Button onClick={handleDismiss} className="w-full">
            I'm Interested in Helping! 📧
          </Button>
          <Button variant="outline" onClick={handleDismiss} className="w-full">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}