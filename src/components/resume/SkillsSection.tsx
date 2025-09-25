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

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: BarChart3,
      color: "data-blue",
      skills: [
        { name: "Python", level: "Advanced", description: "Data analysis, machine learning, automation" },
        { name: "R", level: "Intermediate", description: "Statistical analysis, data visualization" },
        { name: "SQL", level: "Advanced", description: "Database queries, data manipulation" },
        { name: "Excel", level: "Expert", description: "Advanced formulas, pivot tables, modeling" },
        { name: "Power BI", level: "Advanced", description: "Dashboard creation, business intelligence" },
        { name: "Machine Learning", level: "Intermediate", description: "Predictive modeling, data mining" },
        { name: "Azure Cloud", level: "Intermediate", description: "Storage Explorer, DevOps, Databricks" },
        { name: "Data Engineering", level: "Intermediate", description: "ETL pipelines, report automation" }
      ]
    },
    {
      title: "Agricultural Expertise",
      icon: Tractor,
      color: "agricultural-green",
      skills: [
        { name: "Livestock Farming", level: "Expert", description: "8+ years hands-on experience" },
        { name: "Dairy Operations", level: "Expert", description: "Milking systems, herd management" },
        { name: "Agricultural Technology", level: "Advanced", description: "Lely robots, automated systems" },
        { name: "Animal Husbandry", level: "Expert", description: "Animal health, breeding, nutrition" },
        { name: "Farm Management", level: "Advanced", description: "Operations, efficiency optimization" },
        { name: "Process Improvement", level: "Advanced", description: "Workflow optimization, innovation" }
      ]
    },
    {
      title: "Technical & Communication",
      icon: Code,
      color: "tech-accent",
      skills: [
        { name: "Data Visualization", level: "Advanced", description: "Charts, dashboards, storytelling" },
        { name: "UX Design", level: "Intermediate", description: "User experience, presentation design" },
        { name: "Project Management", level: "Advanced", description: "Planning, execution, delivery" },
        { name: "Technical Writing", level: "Advanced", description: "Documentation, reporting" },
        { name: "Teamwork", level: "Expert", description: "Collaboration, leadership" },
        { name: "Problem Solving", level: "Expert", description: "Analytical thinking, innovation" },
        { name: "Dashboard Development", level: "Advanced", description: "Streamlit, Power BI, data visualization" },
        { name: "Project Adaptability", level: "Expert", description: "Quick project takeover, flexible teamwork" }
      ]
    }
  ];

  const languages = [
    { name: "Dutch", level: "Native", flag: "🇳🇱", description: "Native speaker" },
    { name: "English", level: "C1", flag: "🇬🇧", description: "Passed C1 level certification" }
  ];

  const certifications = [
    { name: "Driver's License B", type: "certification", year: "Current" },
    { name: "MBO Level 4 Livestock Farming", type: "professional", year: "2021" },
    { name: "Data Science Minor", type: "academic", year: "2025" }
  ];

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
          <h2 className="text-4xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set bridging traditional agriculture with modern data science
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
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
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
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
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