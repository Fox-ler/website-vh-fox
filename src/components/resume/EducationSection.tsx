import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();
  const education = t('educationData');

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="font-bold text-foreground mb-6">{t('education.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-agricultural-green via-data-blue to-earth-brown rounded-full"></div>
            
            {education.map((edu, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 bg-agricultural-green rounded-full border-4 border-background shadow-lg top-8 ${
                  index % 2 === 0 
                    ? 'left-1.5 md:left-auto md:right-[-14px]' 
                    : 'left-1.5 md:left-[-14px]'
                }`}>
                  <div className="absolute inset-0 bg-agricultural-green rounded-full animate-ping opacity-20"></div>
                </div>
                
                <Card className={`ml-14 md:ml-0 p-8 bg-card border border-border/60 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'} className="bg-agricultural-green/10 text-agricultural-green border-agricultural-green/30 text-xs font-medium px-3 py-1">
                      {edu.status === 'Current' ? t('education.current') : t('education.completed')}
                    </Badge>
                    <div className="flex items-center text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{edu.degree}</h3>
                  
                  <div className="flex items-center text-muted-foreground mb-4 flex-wrap gap-x-4">
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2.5" />
                      <span className="font-medium text-base">{edu.institution}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-base">{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-base p-4 rounded-lg bg-muted/20">{edu.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;