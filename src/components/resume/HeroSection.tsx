import { Mail, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-agriculture-data.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
          >
            <Mail className="mr-2 h-5 w-5" />
            {t('hero.contact')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent text-white border-white/50 hover:bg-white/20 backdrop-blur-sm"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent text-white border-white/50 hover:bg-white/20 backdrop-blur-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('hero.downloadCV')}
          </Button>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-tech-accent mb-2">8+</div>
            <div className="text-sm uppercase tracking-wide">{t('hero.stats.experience')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-tech-accent mb-2">Data</div>
            <div className="text-sm uppercase tracking-wide">{t('hero.stats.expertise')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-tech-accent mb-2">Dutch</div>
            <div className="text-sm uppercase tracking-wide">{t('hero.stats.scope')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;