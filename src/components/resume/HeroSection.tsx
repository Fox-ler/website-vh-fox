import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-agriculture-data.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center text-white py-20">
        <h1 className="font-bold mb-8 leading-tight animate-fadeIn">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-95 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          {t('hero.description')}
        </p>
        
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-3 text-white">8+</div>
            <div className="text-sm uppercase tracking-wider text-white/90 font-medium">{t('hero.stats.experience')}</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-3 text-white">Data</div>
            <div className="text-sm uppercase tracking-wider text-white/90 font-medium">{t('hero.stats.expertise')}</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold mb-3 text-white">Dutch</div>
            <div className="text-sm uppercase tracking-wider text-white/90 font-medium">{t('hero.stats.scope')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
