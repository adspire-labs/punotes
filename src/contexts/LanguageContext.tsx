
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'np';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.studyMaterials': 'Study Materials',
    'nav.additionalResources': 'Additional Resources',
    'nav.submitMaterials': 'Submit Materials',
    'nav.faq': 'FAQ',
    
    // Home page
    'home.title': 'PUNotes',
    'home.subtitle': 'Your Ultimate Study Companion for Pokhara University',
    'home.description': 'Access comprehensive study materials, notes, question papers, and resources specifically curated for Pokhara University students. Join thousands of students who are already benefiting from our platform.',
    'home.getStarted': 'Get Started',
    'home.exploreResources': 'Explore Resources',
    'home.whyChoose': 'Why Choose PUNotes?',
    'home.comprehensiveContent': 'Comprehensive Content',
    'home.comprehensiveDesc': 'Extensive collection of study materials covering all subjects and semesters.',
    'home.userFriendly': 'User-Friendly Interface',
    'home.userFriendlyDesc': 'Easy navigation and search functionality to find what you need quickly.',
    'home.communityDriven': 'Community Driven',
    'home.communityDrivenDesc': 'Built by students, for students. Contribute and help your peers succeed.',
    'home.regularUpdates': 'Regular Updates',
    'home.regularUpdatesDesc': 'Fresh content added regularly to keep pace with curriculum changes.',
    'home.aboutTitle': 'About PUNotes',
    'home.aboutDesc1': 'PUNotes was established in 2022 with a mission to democratize access to quality educational resources for Pokhara University students. We believe that every student deserves access to comprehensive study materials regardless of their background or circumstances.',
    'home.aboutDesc2': 'Our platform serves as a bridge between students, fostering a collaborative learning environment where knowledge is shared freely. From detailed notes to previous question papers, we curate content that directly aligns with the PU curriculum.',
    'home.aboutDesc3': 'Founded and maintained by Saroj Pokhrel and Rahul Kanwar, PUNotes continues to grow with the support of our amazing student community. Together, we are building the most comprehensive educational resource hub for Pokhara University.',
    
    // Common
    'common.poweredBy': 'Powered by',
    'common.adspireLabs': 'AdspireLabs',
    'common.tagline': 'Building innovative solutions for educational excellence',
    'common.search': 'Search...',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.loading': 'Loading...',
    'common.noResults': 'No results found',
    'common.tryAdjusting': 'Try adjusting your search or filter criteria',
  },
  np: {
    // Navigation
    'nav.home': 'होम',
    'nav.studyMaterials': 'अध्ययन सामग्री',
    'nav.additionalResources': 'अतिरिक्त स्रोतहरू',
    'nav.submitMaterials': 'सामग्री पेश गर्नुहोस्',
    'nav.faq': 'बारम्बार सोधिने प्रश्नहरू',
    
    // Home page
    'home.title': 'PUNotes',
    'home.subtitle': 'पोखरा विश्वविद्यालयका लागि तपाईंको परम अध्ययन साथी',
    'home.description': 'पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि विशेष रूपमा तयार गरिएका व्यापक अध्ययन सामग्री, नोटहरू, प्रश्न पत्रहरू, र स्रोतहरूमा पहुँच गर्नुहोस्। हाम्रो प्लेटफर्मबाट फाइदा उठाइरहेका हजारौं विद्यार्थीहरूमा सामेल हुनुहोस्।',
    'home.getStarted': 'सुरु गर्नुहोस्',
    'home.exploreResources': 'स्रोतहरू खोज्नुहोस्',
    'home.whyChoose': 'PUNotes किन छान्ने?',
    'home.comprehensiveContent': 'व्यापक सामग्री',
    'home.comprehensiveDesc': 'सबै विषयहरू र सेमेस्टरहरू कभर गर्ने अध्ययन सामग्रीहरूको विस्तृत संग्रह।',
    'home.userFriendly': 'प्रयोगकर्ता-मैत्री इन्टरफेस',
    'home.userFriendlyDesc': 'तपाईंलाई चाहिने कुरा छिटो फेला पार्न सजिलो नेभिगेसन र खोज कार्यक्षमता।',
    'home.communityDriven': 'समुदायिक संचालित',
    'home.communityDrivenDesc': 'विद्यार्थीहरूद्वारा निर्मित, विद्यार्थीहरूका लागि। योगदान दिनुहोस् र आफ्ना साथीहरूलाई सफल हुन मद्दत गर्नुहोस्।',
    'home.regularUpdates': 'नियमित अपडेटहरू',
    'home.regularUpdatesDesc': 'पाठ्यक्रम परिवर्तनहरूसँग तालमेल राख्न नियमित रूपमा नयाँ सामग्री थपिन्छ।',
    'home.aboutTitle': 'PUNotes बारे',
    'home.aboutDesc1': 'PUNotes को स्थापना २०२२ मा पोखरा विश्वविद्यालयका विद्यार्थीहरूका लागि गुणस्तरीय शैक्षिक स्रोतहरूमा पहुँचलाई लोकतान्त्रिक बनाउने उद्देश्यले गरिएको थियो। हामी विश्वास गर्छौं कि प्रत्येक विद्यार्थीले आफ्नो पृष्ठभूमि वा परिस्थितिको परवाह नगरी व्यापक अध्ययन सामग्रीहरूमा पहुँच पाउने हक छ।',
    'home.aboutDesc2': 'हाम्रो प्लेटफर्मले विद्यार्थीहरू बीचको पुल काम गर्छ, सहयोगी शिक्षा वातावरणलाई बढावा दिँदै जहाँ ज्ञान स्वतन्त्र रूपमा साझा गरिन्छ। विस्तृत नोटहरूदेखि अघिल्लो प्रश्न पत्रहरूसम्म, हामी PU पाठ्यक्रमसँग प्रत्यक्ष रूपमा मेल खाने सामग्री संकलन गर्छौं।',
    'home.aboutDesc3': 'सरोज पोखरेल र राहुल कँवरद्वारा स्थापना र संचालन गरिएको, PUNotes हाम्रो अद्भुत विद्यार्थी समुदायको सहयोगमा निरन्तर बढिरहेको छ। सँगै, हामी पोखरा विश्वविद्यालयको लागि सबैभन्दा व्यापक शैक्षिक स्रोत केन्द्र निर्माण गरिरहेका छौं।',
    
    // Common
    'common.poweredBy': 'द्वारा संचालित',
    'common.adspireLabs': 'AdspireLabs',
    'common.tagline': 'शैक्षिक उत्कृष्टताका लागि नवीन समाधानहरू निर्माण गर्दै',
    'common.search': 'खोज्नुहोस्...',
    'common.filter': 'फिल्टर',
    'common.all': 'सबै',
    'common.loading': 'लोड हुँदै...',
    'common.noResults': 'कुनै नतिजा फेला परेन',
    'common.tryAdjusting': 'तपाईंको खोज वा फिल्टर मापदण्ड समायोजन गर्ने प्रयास गर्नुहोस्',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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
