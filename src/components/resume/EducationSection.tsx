import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();
  const education = t('educationData');

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t('education.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
            
            {education.map((edu, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-agricultural-green rounded-full border-4 border-background top-6 ${
                  index % 2 === 0 
                    ? 'left-2 md:left-auto md:right-[-2px]' 
                    : 'left-2 md:left-[-2px]'
                }`}></div>
                
                <Card className={`ml-12 md:ml-0 p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'} className="bg-agricultural-green/10 text-agricultural-green border-agricultural-green/20">
                      {edu.status === 'Current' ? t('education.current') : t('education.completed')}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.institution}</span>
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    <span>{edu.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
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