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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t('skills.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${category.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge className={getLevelColor(skill.level)}>{skill.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
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
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="w-8 h-8 text-earth-brown" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('skills.languages')}</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <div>
                        <div className="font-medium text-foreground">{lang.name}</div>
                        <div className="text-sm text-muted-foreground">{lang.description}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-earth-brown/10 text-earth-brown border-earth-brown/20">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Certifications */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('skills.certifications')}</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{cert.name}</div>
                      <div className="text-sm text-muted-foreground capitalize">{cert.type}</div>
                    </div>
                    <Badge variant="outline" className="bg-tech-accent/10 text-tech-accent border-tech-accent/20">
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