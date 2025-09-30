import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const experienceData = t('experienceData');
  const experiences = experienceData.positions;
  const internships = experienceData.internships;

  const ExperienceCard = ({ exp, isInternship = false }: { exp: any, isInternship?: boolean }) => (
    <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 mb-6">
      <div className="flex flex-wrap items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span className="font-medium">{exp.company}</span>
            {exp.location && (
              <>
                <MapPin className="w-4 h-4 ml-3 mr-1" />
                <span>{exp.location}</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {exp.period}
          </div>
          <div className="flex gap-2">
            {exp.current && (
              <Badge variant="default" className="bg-agricultural-green/10 text-agricultural-green border-agricultural-green/20">
                {t('experience.current')}
              </Badge>
            )}
            <Badge variant="secondary" className="bg-data-blue/10 text-data-blue border-data-blue/20">
              {isInternship ? t('experience.internship') : exp.type}
            </Badge>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2">
        {exp.highlights.map((highlight: string, index: number) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t('experience.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t('experience.positions')}</h3>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t('experience.internships')}</h3>
            {internships.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} isInternship={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;