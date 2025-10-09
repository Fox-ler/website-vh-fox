import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Database, 
  Code, 
  Tractor, 
  Languages, 
  Users,
  Target,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();
  const skillsData = t('skillsData');
  const skillCategories = [
    { ...skillsData.categories[0], icon: BarChart3, color: "data-blue" },
    { ...skillsData.categories[1], icon: Tractor, color: "agricultural-green" },
    { ...skillsData.categories[2], icon: Code, color: "tech-accent" }
  ];
  const languages = skillsData.languages;
  const certifications = skillsData.certifications;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-agricultural-green text-white';
      case 'Advanced': return 'bg-data-blue text-white';
      case 'Intermediate': return 'bg-earth-brown text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="font-bold text-foreground mb-6">{t('skills.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-8 bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 group">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-${category.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-10 h-10 text-${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <Badge className={`${getLevelColor(skill.level)} text-xs font-medium px-3 py-1`}>{skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Languages & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <Card className="p-8 bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-earth-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Languages className="w-10 h-10 text-earth-brown" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{t('skills.languages')}</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02]">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{lang.flag}</span>
                      <div>
                        <div className="font-semibold text-foreground text-base">{lang.name}</div>
                        <div className="text-sm text-muted-foreground mt-0.5">{lang.description}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-earth-brown/10 text-earth-brown border-earth-brown/30 text-xs font-medium px-3 py-1">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Certifications */}
            <Card className="p-8 bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Target className="w-10 h-10 text-tech-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{t('skills.certifications')}</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02]">
                    <div>
                      <div className="font-semibold text-foreground text-base">{cert.name}</div>
                      <div className="text-sm text-muted-foreground capitalize mt-0.5">{cert.type}</div>
                    </div>
                    <Badge variant="outline" className="bg-tech-accent/10 text-tech-accent border-tech-accent/30 text-xs font-medium px-3 py-1">
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;