import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MapPin, Phone, Download, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com?subject=Agricultural Data Science Opportunity",
      color: "data-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "tech-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Netherlands",
      href: null,
      color: "agricultural-green"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+31 (0) 123 456 789",
      href: "tel:+31123456789",
      color: "earth-brown"
    }
  ];

  const quickActions = [
    {
      icon: Download,
      label: "Download CV",
      description: "Get a PDF copy of my complete resume",
      variant: "default" as const,
      className: "bg-agricultural-green hover:bg-agricultural-green/90 text-white",
      onClick: () => {
        // Placeholder for PDF resume - replace 'your-resume.pdf' with actual file
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
      label: "Send Message",
      description: "Reach out for opportunities or collaboration",
      variant: "outline" as const,
      className: "border-data-blue text-data-blue hover:bg-data-blue/5",
      onClick: () => {
        window.location.href = "mailto:your.email@example.com?subject=Agricultural Data Science Opportunity&body=Hello, I'm interested in discussing potential opportunities in agricultural data science.";
      }
    },
    {
      icon: Linkedin,
      label: "Connect on LinkedIn",
      description: "Let's build our professional network",
      variant: "outline" as const,
      className: "border-tech-accent text-tech-accent hover:bg-tech-accent/5",
      onClick: () => {
        window.open("https://linkedin.com/in/yourprofile", "_blank");
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss agricultural data science opportunities, collaboration, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                  <div className={`w-12 h-12 bg-${contact.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${contact.color}/20 transition-colors`}>
                    <IconComponent className={`w-6 h-6 text-${contact.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-center mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground text-center break-all">{contact.value}</p>
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
          <Card className="p-8 bg-gradient-card border-0 shadow-medium mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={index}
                    variant={action.variant}
                    size="lg"
                    className={`h-auto p-6 flex-col gap-3 ${action.className}`}
                    onClick={action.onClick}
                  >
                    <IconComponent className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-semibold">{action.label}</div>
                      <div className="text-xs opacity-90 mt-1">{action.description}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </Card>
          
          {/* Professional Statement */}
          <Card className="p-8 bg-gradient-card border-0 shadow-soft text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Open to New Opportunities
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm actively seeking opportunities to apply my unique combination of agricultural expertise 
              and data science skills. Whether you're looking for a data analyst, agricultural consultant, 
              or someone who can bridge the gap between traditional farming and modern technology, 
              I'd love to explore how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2"></div>
                Available for Full-time Positions
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-data-blue rounded-full mr-2"></div>
                Open to Consulting Projects
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-tech-accent rounded-full mr-2"></div>
                Interested in Research Collaboration
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;