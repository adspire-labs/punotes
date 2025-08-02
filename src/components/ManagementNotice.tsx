import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, X } from "lucide-react";

export function ManagementNotice() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show notice if not dismissed today
    const lastDismissed = localStorage.getItem("punotes-notice-dismissed");
    const today = new Date().toDateString();
    
    if (lastDismissed !== today) {
      // Delay showing the modal slightly to let page load
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("punotes-notice-dismissed", new Date().toDateString());
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in helping manage PUNotes. I want to keep education accessible for everyone and help this platform grow. Please let me know how I can contribute!"
    );
    const whatsappUrl = `https://wa.me/9779845323733?text=${message}`;
    window.open(whatsappUrl, '_blank');
    handleDismiss();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md animate-scale-in duration-300 border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-muted/50 transition-all duration-200 hover:scale-110 z-10"
        >
          <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </button>

        <DialogHeader className="text-center space-y-4">
          {/* Animated Hearts */}
          <div className="flex justify-center items-center gap-2 animate-fade-in">
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
              We Need Your Help!
            </DialogTitle>
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
          </div>

          {/* Animated Icon */}
          <div className="flex justify-center animate-fade-in delay-200">
            <div className="relative">
              <Users className="h-16 w-16 text-primary animate-bounce" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>

          <DialogDescription className="text-center space-y-4 animate-fade-in delay-300">
            <p className="text-lg font-semibold text-foreground">
              PUNotes needs new managers!
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                We're graduating soon and don't want to see this platform die. 
                Education should be accessible to everyone, and we need passionate 
                students to keep this community alive.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm bg-muted/30 p-3 rounded-lg">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>Join us and make a difference!</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* Animated Buttons */}
        <div className="flex flex-col gap-3 pt-4 animate-fade-in delay-500">
          <Button 
            onClick={handleWhatsAppContact} 
            className="w-full group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4 group-hover:animate-bounce" />
              <span>I'm Interested! Contact via WhatsApp</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleDismiss} 
            className="w-full transition-all duration-200 hover:scale-105 hover:bg-muted/50"
          >
            Maybe Later
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping delay-1500"></div>
      </DialogContent>
    </Dialog>
  );
}