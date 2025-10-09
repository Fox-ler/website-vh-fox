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
    <Card className="p-8 bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 mb-6">
      <div className="flex flex-wrap items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-foreground mb-3">{exp.title}</h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <Building className="w-5 h-5 mr-2.5" />
            <span className="font-medium text-base">{exp.company}</span>
            {exp.location && (
              <>
                <MapPin className="w-4 h-4 ml-4 mr-2" />
                <span className="text-base">{exp.location}</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{exp.period}</span>
          </div>
          <div className="flex gap-2">
            {exp.current && (
              <Badge variant="default" className="bg-agricultural-green/10 text-agricultural-green border-agricultural-green/30 text-xs font-medium px-3 py-1">
                {t('experience.current')}
              </Badge>
            )}
            <Badge variant="secondary" className="bg-data-blue/10 text-data-blue border-data-blue/30 text-xs font-medium px-3 py-1">
              {isInternship ? t('experience.internship') : exp.type}
            </Badge>
          </div>
        </div>
      </div>
      
      <ul className="space-y-3">
        {exp.highlights.map((highlight: string, index: number) => (
          <li key={index} className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
            <div className="w-2.5 h-2.5 bg-agricultural-green rounded-full mr-4 mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="font-bold text-foreground mb-6">{t('experience.title')}</h2>
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