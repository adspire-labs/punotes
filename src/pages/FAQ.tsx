
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about PU Study Hub and how to make the most of our platform.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>
              Click on any question to see the answer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you can't find the answer you're looking for, feel free to reach out to us through our Support page.
            </p>
            <a 
              href="/support-us" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </CardContent>
        </Card>

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
    </div>
  );
};

export default FAQ;
