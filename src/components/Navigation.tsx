
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, X, Sun, Moon, BookOpen, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.studyMaterials'), path: '/study-materials' },
    { name: t('nav.additionalResources'), path: '/additional-resources' },
    { name: t('nav.submitMaterials'), path: '/submit-materials' },
  ];

  return (
    <nav className="bg-background dark:bg-background border-b border-border dark:border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <BookOpen className="h-8 w-8 text-primary dark:text-primary mr-2" />
              <span className="text-xl font-bold text-foreground dark:text-foreground">
                {t('home.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Select value={language} onValueChange={(value: 'en' | 'np') => setLanguage(value)}>
              <SelectTrigger className="w-20 h-8 bg-background dark:bg-background border-input dark:border-input">
                <Languages className="h-3 w-3 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                <SelectItem value="en" className="text-popover-foreground dark:text-popover-foreground text-xs">EN</SelectItem>
                <SelectItem value="np" className="text-popover-foreground dark:text-popover-foreground text-xs">नेपाली</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary h-8 w-8 p-0"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Select value={language} onValueChange={(value: 'en' | 'np') => setLanguage(value)}>
              <SelectTrigger className="w-16 h-8 bg-background dark:bg-background border-input dark:border-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover dark:bg-popover border-border dark:border-border">
                <SelectItem value="en" className="text-popover-foreground dark:text-popover-foreground text-xs">EN</SelectItem>
                <SelectItem value="np" className="text-popover-foreground dark:text-popover-foreground text-xs">नेपाली</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary h-8 w-8 p-0"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary focus:outline-none focus:text-primary dark:focus:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background dark:bg-background border-t border-border dark:border-border">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
