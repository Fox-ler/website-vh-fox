import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MapPin, Phone, Download, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: "your.email@example.com",
      href: "mailto:your.email@example.com?subject=Agricultural Data Science Opportunity",
      color: "data-blue"
    },
    {
      icon: Linkedin,
      label: t('contact.info.linkedin'),
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "tech-accent"
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: "Netherlands",
      href: null,
      color: "agricultural-green"
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: "+31 (0) 123 456 789",
      href: "tel:+31123456789",
      color: "earth-brown"
    }
  ];

  const quickActions = [
    {
      icon: Download,
      label: t('contact.quickActions.download.title'),
      description: t('contact.quickActions.download.description'),
      variant: "default" as const,
      className: "bg-agricultural-green hover:bg-agricultural-green/90 text-white",
      onClick: () => {
        const link = document.createElement('a');
        link.href = '/your-resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    {
      icon: Send,
      label: t('contact.quickActions.message.title'),
      description: t('contact.quickActions.message.description'),
      variant: "outline" as const,
      className: "border-data-blue text-data-blue hover:bg-data-blue/5",
      onClick: () => {
        window.location.href = "mailto:your.email@example.com?subject=Agricultural Data Science Opportunity&body=Hello, I'm interested in discussing potential opportunities in agricultural data science.";
      }
    },
    {
      icon: Linkedin,
      label: t('contact.quickActions.linkedin.title'),
      description: t('contact.quickActions.linkedin.description'),
      variant: "outline" as const,
      className: "border-tech-accent text-tech-accent hover:bg-tech-accent/5",
      onClick: () => {
        window.open("https://linkedin.com/in/yourprofile", "_blank");
      }
    }
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="font-bold text-foreground mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <Card className="p-8 bg-card border border-border/60 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                  <div className={`w-16 h-16 bg-${contact.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-${contact.color}/20 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${contact.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-center mb-3 text-base">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground text-center break-all leading-relaxed">{contact.value}</p>
                </Card>
              );
              
              return contact.href ? (
                <a key={index} href={contact.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
          
          {/* Quick Actions */}
          <Card className="p-10 bg-card border border-border/60 shadow-medium hover:shadow-large transition-all duration-500 mb-16">
            <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">{t('contact.actions')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={index}
                    variant={action.variant}
                    size="lg"
                    className={`h-auto p-8 flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg ${action.className}`}
                    onClick={action.onClick}
                  >
                    <IconComponent className="w-8 h-8" />
                    <div className="text-center">
                      <div className="font-semibold text-base mb-1">{action.label}</div>
                      <div className="text-xs opacity-80 mt-1 leading-relaxed">{action.description}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </Card>
          
          {/* Professional Statement */}
          <Card className="p-10 bg-card border border-border/60 shadow-soft hover:shadow-medium transition-all duration-500 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-5">
              {t('contact.opportunities.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base max-w-2xl mx-auto">
              {t('contact.opportunities.statement')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                <div className="w-2.5 h-2.5 bg-agricultural-green rounded-full mr-3"></div>
                <span className="text-muted-foreground font-medium">{t('contact.opportunities.fullTime')}</span>
              </span>
              <span className="flex items-center p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                <div className="w-2.5 h-2.5 bg-data-blue rounded-full mr-3"></div>
                <span className="text-muted-foreground font-medium">{t('contact.opportunities.consulting')}</span>
              </span>
              <span className="flex items-center p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                <div className="w-2.5 h-2.5 bg-tech-accent rounded-full mr-3"></div>
                <span className="text-muted-foreground font-medium">{t('contact.opportunities.research')}</span>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;