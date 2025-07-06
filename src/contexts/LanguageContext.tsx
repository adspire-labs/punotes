
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'np';
  setLanguage: (lang: 'en' | 'np') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.studyMaterials': 'Study Materials',
    'nav.additionalResources': 'Additional Resources',
    'nav.submitMaterials': 'Submit Materials',
    'nav.faq': 'FAQ',
    
    // Home page
    'home.title': 'PUNotes',
    'home.subtitle': 'Your Ultimate Study Companion for Pokhara University',
    'home.description': 'Access quality study materials, resources, and tools designed specifically for Pokhara University students. Join thousands of students who trust PUNotes for their academic success.',
    'home.getStarted': 'Get Started',
    'home.exploreResources': 'Explore Resources',
    'home.whyChoose': 'Why Choose PUNotes?',
    'home.comprehensiveContent': 'Comprehensive Content',
    'home.comprehensiveDesc': 'Extensive collection of notes, question papers, and study materials for all PU programs.',
    'home.userFriendly': 'User-Friendly Interface',
    'home.userFriendlyDesc': 'Clean, intuitive design that makes finding and accessing study materials effortless.',
    'home.communityDriven': 'Community Driven',
    'home.communityDrivenDesc': 'Built by students, for students. Contribute and benefit from collective knowledge.',
    'home.regularUpdates': 'Regular Updates',
    'home.regularUpdatesDesc': 'Fresh content added regularly to keep you updated with the latest curriculum.',
    'home.aboutTitle': 'About PUNotes',
    'home.aboutDesc1': 'PUNotes is a comprehensive educational platform designed specifically for Pokhara University students. We provide easy access to quality study materials, notes, and resources across various academic programs.',
    'home.aboutDesc2': 'Our mission is to make quality education accessible to every student by providing a centralized platform where students can find, share, and contribute academic resources.',
    'home.aboutDesc3': 'Join thousands of students who have already benefited from our extensive collection of study materials and become part of a thriving academic community.',
    
    // Study Materials
    'study.title': 'Study Materials',
    'study.subtitle': 'Access quality study materials for Pokhara University students',
    'study.beTitle': 'BE Study Materials',
    'study.beDesc': 'External resources for Bachelor of Engineering students',
    'study.beNote': 'You can search BE notes using t tool below.',
    'study.searchBE': 'Search BE Notes',
    'study.filterMaterials': 'Filter Materials',
    'study.search': 'Search',
    'study.searchPlaceholder': 'Search subjects...',
    'study.stream': 'Stream',
    'study.allStreams': 'All Streams',
    'study.semester': 'Semester',
    'study.allSemesters': 'All Semesters',
    'study.type': 'Type',
    'study.allTypes': 'All Types',
    'study.found': 'found',
    'study.noMaterials': 'No materials found',
    'study.noMaterialsDesc': 'Try adjusting your search criteria or filters.',
    'study.availableIn': 'Available in:',
    'study.description': 'Description:',
    'study.accessMaterial': 'Access Material',
    
    // Additional Resources
    'resources.title': 'Additional Resources',
    'resources.subtitle': 'Video editing, digital marketing, and other skill-based resources for students',
    'resources.filterResources': 'Filter Resources',
    'resources.searchPlaceholder': 'Search resources...',
    'resources.category': 'Category',
    'resources.allCategories': 'All Categories',
    'resources.institution': 'Institution',
    'resources.allInstitutions': 'All Institutions',
    'resources.batch': 'Batch',
    'resources.allBatches': 'All Batches',
    'resources.resources': 'Resources',
    'resources.noResources': 'No resources found',
    'resources.noResourcesDesc': 'Try adjusting your search criteria or filters.',
    'resources.college': 'College & Batch:',
    'resources.accessResource': 'Access Resource',
    
    // Submit Materials
    'submit.title': 'Contribute to PUNotes',
    'submit.subtitle': 'Help build the best study resource platform for Pokhara University students. Your contributions make a difference in the academic journey of hundreds of students.',
    'submit.studyMaterials': 'Submit Study Materials',
    'submit.studyMaterialsDesc': 'Share your notes, question papers, and study resources with fellow students.',
    'submit.submitMaterials': 'Submit Materials',
    'submit.technicalContributions': 'Technical Contributions',
    'submit.technicalDesc': 'Help improve the website with code, design, or technical expertise.',
    'submit.contributeTechnically': 'Contribute Technically',
    'submit.feedback': 'Feedback & Suggestions',
    'submit.feedbackDesc': 'Share your ideas to help us improve the platform for all students.',
    'submit.giveFeedback': 'Give Feedback',
    
    // Support Us
    'support.title': 'Support PUNotes',
    'support.subtitle': 'Help us continue providing quality educational resources to Pokhara University students. Your support makes a real difference in the academic journey of hundreds of students.',
    'support.financialSupport': 'Financial Support',
    'support.financialDesc': 'Help us maintain and improve the platform',
    'support.monthlyExpense': 'Monthly Expense:',
    
    // Contact Us
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with the PUNotes team. We\'re here to help you with any questions or concerns.',
    'contact.directContact': 'Direct Contact',
    'contact.directDesc': 'Reach out to us directly via email',
    'contact.joinCommunity': 'Join Our Community',
    'contact.joinDesc': 'Connect with us and other students on various platforms',
    
    // Common
    'common.poweredBy': 'Powered by',
    'common.adspireLabs': 'AdspireLabs',
    'common.tagline': 'Building innovative solutions for educational excellence',
  },
  np: {
    // Navigation
    'nav.studyMaterials': 'अध्ययन सामग्री',
    'nav.additionalResources': 'अतिरिक्त स्रोतहरू',
    'nav.submitMaterials': 'सामग्री पेश गर्नुहोस्',
    'nav.faq': 'बारम्बार सोधिने प्रश्नहरू',
    
    // Home page
    'home.title': 'पीयू नोट्स',
    'home.subtitle': 'पोखरा विश्वविद्यालयका लागि तपाईंको अन्तिम अध्ययन साथी',
    'home.description': 'पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि विशेष रूपमा डिजाइन गरिएका गुणस्तरीय अध्ययन सामग्री, स्रोतहरू, र उपकरणहरू पहुँच गर्नुहोस्। हजारौं विद्यार्थीहरू जो आफ्नो शैक्षिक सफलताका लागि पीयू नोट्समा भर पर्छन्, तिनीहरूसँग जोडिनुहोस्।',
    'home.getStarted': 'सुरु गर्नुहोस्',
    'home.exploreResources': 'स्रोतहरू अन्वेषण गर्नुहोस्',
    'home.whyChoose': 'किन पीयू नोट्स छान्ने?',
    'home.comprehensiveContent': 'व्यापक सामग्री',
    'home.comprehensiveDesc': 'सबै पीयू कार्यक्रमहरूका लागि नोटहरू, प्रश्न पत्रहरू, र अध्ययन सामग्रीहरूको व्यापक संग्रह।',
    'home.userFriendly': 'प्रयोगकर्ता-मैत्री इन्टरफेस',
    'home.userFriendlyDesc': 'सफा, सहज डिजाइन जसले अध्ययन सामग्रीहरू फेला पार्न र पहुँच गर्न सजिलो बनाउँछ।',
    'home.communityDriven': 'समुदायिक संचालित',
    'home.communityDrivenDesc': 'विद्यार्थीहरूद्वारा, विद्यार्थीहरूका लागि निर्मित। सामूहिक ज्ञानबाट योगदान र लाभ लिनुहोस्।',
    'home.regularUpdates': 'नियमित अपडेटहरू',
    'home.regularUpdatesDesc': 'तपाईंलाई नवीनतम पाठ्यक्रमसँग अपडेट राख्न नियमित रूपमा ताजा सामग्री थपिन्छ।',
    'home.aboutTitle': 'पीयू नोट्सको बारेमा',
    'home.aboutDesc1': 'पीयू नोट्स पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि विशेष रूपमा डिजाइन गरिएको एक व्यापक शैक्षिक प्लेटफर्म हो। हामी विभिन्न शैक्षिक कार्यक्रमहरूमा गुणस्तरीय अध्ययन सामग्री, नोटहरू, र स्रोतहरूमा सजिलो पहुँच प्रदान गर्छौं।',
    'home.aboutDesc2': 'हाम्रो मिशन केन्द्रीकृत प्लेटफर्म प्रदान गरेर हरेक विद्यार्थीलाई गुणस्तरीय शिक्षा पहुँचयोग्य बनाउनु हो जहाँ विद्यार्थीहरूले शैक्षिक स्रोतहरू फेला पार्न, साझा गर्न, र योगदान गर्न सक्छन्।',
    'home.aboutDesc3': 'हाम्रो व्यापक अध्ययन सामग्री संग्रहबाट पहिले नै लाभान्वित भएका हजारौं विद्यार्थीहरूसँग जोडिनुहोस् र फलिरहेको शैक्षिक समुदायको हिस्सा बन्नुहोस्।',
    
    // Study Materials
    'study.title': 'अध्ययन सामग्री',
    'study.subtitle': 'पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि गुणस्तरीय अध्ययन सामग्रीहरू पहुँच गर्नुहोस्',
    'study.beTitle': 'बीई अध्ययन सामग्री',
    'study.beDesc': 'इन्जिनियरिङ स्नातक विद्यार्थीहरूका लागि बाह्य स्रोतहरू',
    'study.beNote': 'तपाईं तलको उपकरण प्रयोग गरेर बीई नोटहरू खोज्न सक्नुहुन्छ।',
    'study.searchBE': 'बीई नोटहरू खोज्नुहोस्',
    'study.filterMaterials': 'सामग्री फिल्टर गर्नुहोस्',
    'study.search': 'खोज्नुहोस्',
    'study.searchPlaceholder': 'विषयहरू खोज्नुहोस्...',
    'study.stream': 'धारा',
    'study.allStreams': 'सबै धाराहरू',
    'study.semester': 'सेमेस्टर',
    'study.allSemesters': 'सबै सेमेस्टरहरू',
    'study.type': 'प्रकार',
    'study.allTypes': 'सबै प्रकारहरू',
    'study.found': 'फेला पर्यो',
    'study.noMaterials': 'कुनै सामग्री फेला परेन',
    'study.noMaterialsDesc': 'तपाईंको खोज मापदण्डहरू वा फिल्टरहरू समायोजन गर्ने प्रयास गर्नुहोस्।',
    'study.availableIn': 'उपलब्ध छ:',
    'study.description': 'विवरण:',
    'study.accessMaterial': 'सामग्री पहुँच गर्नुहोस्',
    
    // Additional Resources
    'resources.title': 'अतिरिक्त स्रोतहरू',
    'resources.subtitle': 'भिडियो सम्पादन, डिजिटल मार्केटिङ, र विद्यार्थीहरूका लागि अन्य सीप-आधारित स्रोतहरू',
    'resources.filterResources': 'स्रोतहरू फिल्टर गर्नुहोस्',
    'resources.searchPlaceholder': 'स्रोतहरू खोज्नुहोस्...',
    'resources.category': 'श्रेणी',
    'resources.allCategories': 'सबै श्रेणीहरू',
    'resources.institution': 'संस्था',
    'resources.allInstitutions': 'सबै संस्थाहरू',
    'resources.batch': 'ब्याच',
    'resources.allBatches': 'सबै ब्याचहरू',
    'resources.resources': 'स्रोतहरू',
    'resources.noResources': 'कुनै स्रोत फेला परेन',
    'resources.noResourcesDesc': 'तपाईंको खोज मापदण्डहरू वा फिल्टरहरू समायोजन गर्ने प्रयास गर्नुहोस्।',
    'resources.college': 'कलेज र ब्याच:',
    'resources.accessResource': 'स्रोत पहुँच गर्नुहोस्',
    
    // Submit Materials
    'submit.title': 'पीयू नोट्समा योगदान गर्नुहोस्',
    'submit.subtitle': 'पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि उत्कृष्ट अध्ययन स्रोत प्लेटफर्म निर्माण गर्न मद्दत गर्नुहोस्। तपाईंको योगदानले सयौं विद्यार्थीहरूको शैक्षिक यात्रामा फरक पार्छ।',
    'submit.studyMaterials': 'अध्ययन सामग्री पेश गर्नुहोस्',
    'submit.studyMaterialsDesc': 'आफ्ना नोटहरू, प्रश्न पत्रहरू, र अध्ययन स्रोतहरू सँगी विद्यार्थीहरूसँग साझा गर्नुहोस्।',
    'submit.submitMaterials': 'सामग्री पेश गर्नुहोस्',
    'submit.technicalContributions': 'प्राविधिक योगदानहरू',
    'submit.technicalDesc': 'कोड, डिजाइन, वा प्राविधिक विशेषज्ञताको साथ वेबसाइट सुधार गर्न मद्दत गर्नुहोस्।',
    'submit.contributeTechnically': 'प्राविधिक रूपमा योगदान गर्नुहोस्',
    'submit.feedback': 'प्रतिक्रिया र सुझावहरू',
    'submit.feedbackDesc': 'सबै विद्यार्थीहरूका लागि प्लेटफर्म सुधार गर्न हामीलाई मद्दत गर्न आफ्ना विचारहरू साझा गर्नुहोस्।',
    'submit.giveFeedback': 'प्रतिक्रिया दिनुहोस्',
    
    // Support Us
    'support.title': 'पीयू नोट्सलाई समर्थन गर्नुहोस्',
    'support.subtitle': 'पोखरा विश्वविद्यालयका विद्यार्थीहरूलाई गुणस्तरीय शैक्षिक स्रोतहरू प्रदान गर्न जारी राख्न हामीलाई मद्दत गर्नुहोस्। तपाईंको समर्थनले सयौं विद्यार्थीहरूको शैक्षिक यात्रामा वास्तविक फरक पार्छ।',
    'support.financialSupport': 'आर्थिक सहयोग',
    'support.financialDesc': 'प्लेटफर्म मर्मत र सुधार गर्न हामीलाई मद्दत गर्नुहोस्',
    'support.monthlyExpense': 'मासिक खर्च:',
    
    // Contact Us
    'contact.title': 'हामीलाई सम्पर्क गर्नुहोस्',
    'contact.subtitle': 'पीयू नोट्स टोलीसँग सम्पर्कमा रहनुहोस्। हामी तपाईंका कुनै पनि प्रश्न वा चिन्ताहरूमा मद्दत गर्न यहाँ छौं।',
    'contact.directContact': 'प्रत्यक्ष सम्पर्क',
    'contact.directDesc': 'इमेलमार्फत प्रत्यक्ष हामीसँग सम्पर्क गर्नुहोस्',
    'contact.joinCommunity': 'हाम्रो समुदायमा सामेल हुनुहोस्',
    'contact.joinDesc': 'विभिन्न प्लेटफर्महरूमा हामी र अन्य विद्यार्थीहरूसँग जडान गर्नुहोस्',
    
    // Common
    'common.poweredBy': 'द्वारा संचालित',
    'common.adspireLabs': 'एडस्पायर ल्याब्स',
    'common.tagline': 'शैक्षिक उत्कृष्टताका लागि नवीन समाधानहरू निर्माण गर्दै',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'np'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
