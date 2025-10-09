import { Card } from '@/components/ui/card';
import { Leaf, BarChart3, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="font-bold text-foreground mb-6">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="p-8 text-center bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-20 h-20 bg-agricultural-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-10 h-10 text-agricultural-green" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{t('about.cards.expert.title')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('about.cards.expert.description')}</p>
          </Card>
          
          <Card className="p-8 text-center bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-20 h-20 bg-data-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-10 h-10 text-data-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{t('about.cards.scientist.title')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('about.cards.scientist.description')}</p>
          </Card>
          
          <Card className="p-8 text-center bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-20 h-20 bg-earth-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-earth-brown" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{t('about.cards.team.title')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('about.cards.team.description')}</p>
          </Card>
          
          <Card className="p-8 text-center bg-card border border-border/60 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-20 h-20 bg-tech-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-10 h-10 text-tech-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{t('about.cards.innovation.title')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t('about.cards.innovation.description')}</p>
          </Card>
        </div>
        
        <Card className="p-10 bg-card border border-border/60 shadow-medium hover:shadow-large transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-foreground">Professional Profile</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t('about.profile')}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-foreground">{t('about.competencies')}</h3>
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 bg-agricultural-green rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">Practical Agricultural Experience (Livestock farming, Agriculture)</span>
                </div>
                <div className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 bg-data-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">Data Analysis & Visualization (Python, R, SQL, Excel, Power BI)</span>
                </div>
                <div className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 bg-earth-brown rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">Data Science & Machine Learning</span>
                </div>
                <div className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 bg-tech-accent rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">Communication & Teamwork</span>
                </div>
                <div className="flex items-start p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 bg-agricultural-green rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground leading-relaxed">Project-based Work & Process Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;