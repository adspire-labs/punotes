
import { useState } from 'react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I download study materials?",
      answer: "Click on any material card and then click the 'Access on Google Drive' button. You'll be redirected to Google Drive where you can view and download the materials."
    },
    {
      question: "Can I submit my own study materials?",
      answer: "Yes! Use the 'Submit Materials' button on the homepage to share your notes, assignments, or any study resources with fellow students."
    },
    {
      question: "Are all materials free to access?",
      answer: "Yes, all study materials on PU Study Hub are completely free to access for all Pokhara University students."
    },
    {
      question: "How often are new materials added?",
      answer: "We regularly add new materials based on student submissions and moderator uploads. Check back frequently for the latest resources."
    },
    {
      question: "What if I can't find materials for my subject?",
      answer: "You can submit a request through our 'Support Us' page or contribute by uploading materials for your subject to help other students."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, we offer a mobile-optimized website. You can access PU Study Hub from any device through your web browser."
    },
    {
      question: "How can I report inappropriate content?",
      answer: "If you find any inappropriate or copyrighted content, please contact us through the Support page, and we'll review and remove it promptly."
    },
    {
      question: "Can I become a volunteer?",
      answer: "Yes! Visit our 'Support Us' page to fill out the volunteer application form and help us maintain and improve the website."
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-foreground dark:text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about PU Study Hub and how to make the most of our platform.
          </p>
        </div>

        <Card className="bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Common Questions</CardTitle>
            <CardDescription className="text-muted-foreground dark:text-muted-foreground">
              Click on any question to see the answer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground dark:text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground dark:text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8 bg-card dark:bg-card border-border dark:border-border">
          <CardHeader>
            <CardTitle className="text-foreground dark:text-foreground">Still have questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground dark:text-muted-foreground mb-4">
              If you can't find the answer you're looking for, feel free to reach out to us through our Support page.
            </p>
            <a 
              href="/support-us" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-border dark:border-border">
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
            Powered by <span className="text-blue-600 dark:text-blue-400 font-semibold">AdspireLabs</span>
          </p>
          <p className="text-xs text-muted-foreground dark:text-muted-foreground">
            Building innovative solutions for educational excellence
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;
