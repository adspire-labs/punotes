import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, ArrowUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatOption {
  text: string;
  keywords: string[];
  response: string;
  link?: string;
}

const chatOptions: ChatOption[] = [
  {
    text: "📚 BBA Notes",
    keywords: ["bba", "bba notes", "bachelor of business administration", "business"],
    response: "Here are BBA study materials for all semesters. Visit our study materials section to find comprehensive notes, assignments, and resources for BBA courses.",
    link: "/study-materials"
  },
  {
    text: "📖 BBA-BI Notes", 
    keywords: ["bba-bi", "bba bi", "business information", "bi notes"],
    response: "BBA-BI (Business Information) notes and resources are available in our study materials section. Find semester-wise notes and practical guides.",
    link: "/study-materials"
  },
  {
    text: "📝 Law Notes",
    keywords: ["law", "law notes", "legal", "jurisprudence"],
    response: "Legal studies and law notes for various courses are available. Check our study materials for comprehensive law resources.",
    link: "/study-materials"
  },
  {
    text: "📞 Contact",
    keywords: ["contact", "help", "support", "talk to someone", "human"],
    response: "Need more help? Contact us directly:",
    link: "contact"
  },
  {
    text: "📖 Nepali Literature",
    keywords: ["nepali literature", "साहित्य", "nepali books", "literature"],
    response: "Explore our collection of Nepali literature including classic and contemporary works.",
    link: "/nepali-literature"
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Welcome message
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        text: '👋 Hi! I\'m your PU Notes Assistant. How can I help you today?',
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Find matching response
    const lowerInput = inputValue.toLowerCase();
    const matchedOption = chatOptions.find(option => 
      option.keywords.some(keyword => lowerInput.includes(keyword))
    );

    setTimeout(() => {
      let botResponse = matchedOption?.response || 
        "I understand you're looking for study materials. Please use the options below or try keywords like 'BBA', 'Law', or 'Nepali Literature' to find what you need.";

      if (matchedOption?.link === "contact") {
        botResponse += "\n\n📱 WhatsApp: https://wa.me/9779845323733\n📧 Email: info@sarozpokhrel.com.np";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleOptionClick = (option: ChatOption) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option.text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse = option.response;
      
      if (option.link === "contact") {
        botResponse += "\n\n📱 WhatsApp: https://wa.me/9779845323733\n📧 Email: info@sarozpokhrel.com.np";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (link?: string) => {
    if (link && link !== "contact") {
      window.location.href = link;
    }
  };

  return (
    <>
      {/* Go to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 z-40 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-pulse"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-80 h-96 flex flex-col bg-background border shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-sm font-medium">PU Notes Assistant</CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.isBot ? "justify-start" : "justify-end"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-line",
                          message.isBot
                            ? "bg-muted text-muted-foreground"
                            : "bg-primary text-primary-foreground"
                        )}
                      >
                        {message.text}
                        {message.isBot && message.text.includes("study materials") && (
                          <div className="mt-2 space-y-1">
                            {chatOptions.filter(opt => opt.link !== "contact").map((option, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                className="block w-full text-left justify-start h-8 text-xs"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option.text}
                                {option.link && option.link !== "contact" && (
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                )}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="text-sm"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="h-9 w-9">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {chatOptions.slice(0, 4).map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7 justify-start"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.text.substring(0, 12)}...
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ChatBot;