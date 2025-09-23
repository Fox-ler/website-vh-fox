import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Intelligence Specialist",
      company: "Agrifirm Data Intelligence",
      location: "Netherlands",
      period: "February 2025 - January 2026",
      type: "Full-time",
      current: true,
      highlights: [
        "Applied Python and advanced data analysis techniques to agricultural datasets",
        "Implemented machine learning models and translated insights into practical applications",
        "Presented complex analytical results with UX design principles",
        "Analyzed operational data to identify opportunities for process improvement",
        "Collaborated with cross-functional teams to optimize agricultural workflows"
      ]
    },
    {
      title: "Agricultural Sector Professional",
      company: "Various Agricultural Operations",
      location: "Netherlands",
      period: "2017 - Present",
      type: "Multiple Roles",
      current: true,
      highlights: [
        "8+ years of comprehensive experience across dairy and pig farming operations",
        "Specialized role as professional milker with expertise in modern milking systems",
        "Gained practical experience on home-based dairy farm operations",
        "Developed deep understanding of livestock management and farm operations",
        "Built strong foundation in traditional farming practices and animal husbandry"
      ]
    }
  ];

  const internships = [
    {
      title: "Dairy Farming Intern",
      company: "Danish Dairy Farm",
      location: "Denmark",
      period: "May 2023 - July 2023",
      highlights: [
        "Maintained and monitored large animal groups (600+ dairy cattle)",
        "Communicated effectively with international colleagues in multicultural environment",
        "Gained experience with advanced technical systems and data management programs",
        "Applied practical knowledge in large-scale dairy farming operations",
        "Developed international perspective on modern agricultural practices"
      ]
    },
    {
      title: "Dairy Technology Intern",
      company: "Lely Automated Dairy Farm",
      location: "Netherlands",
      period: "2022",
      highlights: [
        "Worked with cutting-edge dairy technology including Lely feeding and manure robots",
        "Collected extensive practical experience in automated dairy farming processes",
        "Learned to operate and maintain sophisticated agricultural technology systems",
        "Gained insights into precision agriculture and automated livestock management"
      ]
    },
    {
      title: "Livestock Farm Intern",
      company: "Bosch International Horse Breeding Farm",
      location: "Luttenberg, Netherlands",
      period: "2021",
      highlights: [
        "Worked at diversified operation with two distinct business branches",
        "Developed adaptability skills in varied agricultural environments",
        "Learned to maintain professional representation in client-facing situations",
        "Mastered interpretation and analysis of milking robot data and information systems",
        "Gained experience in international horse breeding operations"
      ]
    }
  ];

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
                Current
              </Badge>
            )}
            <Badge variant="secondary" className="bg-data-blue/10 text-data-blue border-data-blue/20">
              {isInternship ? 'Internship' : exp.type}
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
          <h2 className="text-4xl font-bold text-foreground mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A unique blend of hands-on agricultural experience and advanced data science applications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Current Positions</h3>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Internships & Training</h3>
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