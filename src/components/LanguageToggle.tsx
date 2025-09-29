import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm"
    >
      {language === 'en' ? '🇳🇱 NL' : '🇬🇧 EN'}
    </Button>
  );
};

export default LanguageToggle;
