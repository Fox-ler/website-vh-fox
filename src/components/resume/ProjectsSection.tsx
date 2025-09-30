import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Leaf, Target, Sprout, Activity, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Mixed Method Thesis: Herbal Rich Grassland Analysis",
      description: "Comprehensive research project combining data mining techniques with agricultural field studies to analyze the impact of herbal rich grasslands on livestock nutrition and farm productivity. Developed predictive models based on feed intake patterns and nutritional outcomes.",
      type: "Academic Research",
      status: "Completed",
      technologies: ["Python", "Data Mining", "Statistical Analysis", "Agricultural Research", "Predictive Modeling"],
      highlights: [
        "Applied advanced data mining techniques to analyze grassland composition",
        "Developed predictive models for feed intake optimization",
        "Combined quantitative data analysis with qualitative field observations",
        "Identified key factors influencing livestock nutrition from herbal grasslands",
        "Presented findings to academic and industry stakeholders"
      ],
      impact: "Research findings contributed to understanding of sustainable livestock feeding practices",
      icon: Leaf,
      color: "agricultural-green"
    },
    {
      title: "Feed Intake Prediction Model",
      description: "Machine learning project focused on predicting optimal feed intake patterns for dairy cattle based on environmental factors, animal characteristics, and historical consumption data. Implemented using Python with scikit-learn and statistical modeling techniques.",
      type: "Data Science Project",
      status: "Ongoing",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Visualization", "Regression Analysis"],
      highlights: [
        "Collected and preprocessed large datasets of feed intake records",
        "Implemented multiple ML algorithms for prediction accuracy comparison",
        "Created data visualization dashboards for farmer-friendly insights",
        "Validated model performance against real-world feeding scenarios",
        "Integrated weather and seasonal data for improved predictions"
      ],
      impact: "Model helps farmers optimize feed efficiency and reduce costs",
      icon: BarChart3,
      color: "data-blue"
    },
    {
      title: "Duckweed Growth Optimization Research",
      description: "Experimental research investigating the growth potential of duckweed using thin fraction manure as a nutrient source, exploring sustainable protein feed alternatives for livestock farming.",
      type: "Laboratory Research",
      status: "Completed",
      technologies: ["Experimental Design", "Growth Analysis", "Nutrient Management", "Statistical Analysis"],
      highlights: [
        "Designed controlled experiments for optimal growth conditions",
        "Analyzed nutrient utilization efficiency from manure fractions",
        "Evaluated sustainability and scalability of duckweed cultivation",
        "Measured protein content and growth rates under various conditions",
        "Assessed environmental impact and feasibility for farm implementation"
      ],
      impact: "Contributed to sustainable feed alternative research for livestock nutrition",
      icon: Sprout,
      color: "agricultural-green"
    },
    {
      title: "Garlic Supplements Impact on Cow Health",
      description: "Clinical research study examining the effects of garlic supplementation on dairy cow health, specifically analyzing somatic cell count variations in milk production and overall animal wellbeing.",
      type: "Clinical Research",
      status: "Completed",
      technologies: ["Clinical Analysis", "Milk Quality Testing", "Statistical Modeling", "Health Monitoring"],
      highlights: [
        "Conducted controlled feeding trials with garlic supplements",
        "Performed comprehensive milk cell count analysis over extended periods",
        "Applied statistical methods to measure health improvements",
        "Monitored animal behavior and productivity indicators",
        "Analyzed cost-benefit implications for dairy operations"
      ],
      impact: "Provided evidence-based insights for natural health interventions in dairy farming",
      icon: Activity,
      color: "data-blue"
    },
    {
      title: "Mycotoxins and Cow Reproductive Health Literature Study",
      description: "Comprehensive literature review analyzing the relationship between mycotoxin exposure and reproductive health in dairy cattle, synthesizing current research findings to identify knowledge gaps and recommendations.",
      type: "Literature Review",
      status: "Completed",
      technologies: ["Systematic Review", "Meta-Analysis", "Research Synthesis", "Scientific Writing"],
      highlights: [
        "Reviewed 50+ peer-reviewed publications on mycotoxin effects",
        "Identified key relationships between toxin exposure and fertility rates",
        "Synthesized findings into actionable recommendations for farmers",
        "Analyzed methodological approaches across different studies",
        "Provided future research directions and practical implications"
      ],
      impact: "Enhanced understanding of environmental factors affecting cattle reproductive health",
      icon: BookOpen,
      color: "tech-accent"
    },
  ];

  const futureProjects = [
    {
      title: "Automated Livestock Health Monitoring System",
      description: "IoT-based system combining sensor data with machine learning for early disease detection",
      technologies: ["IoT", "Python", "Computer Vision", "Time Series Analysis"],
      icon: Target,
      color: "tech-accent"
    },
    {
      title: "Sustainable Farming Analytics Platform",
      description: "Comprehensive dashboard for tracking and optimizing environmental impact of farming operations",
      technologies: ["React", "Python", "Environmental Data", "Sustainability Metrics"],
      icon: Leaf,
      color: "agricultural-green"
    }
  ];

  const ProjectCard = ({ project, isFuture = false }: { project: any, isFuture?: boolean }) => {
    const IconComponent = project.icon;
    
    if (isFuture) {
      return (
        <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 opacity-75">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-${project.color}/10 rounded-lg flex items-center justify-center mr-4`}>
              <IconComponent className={`w-6 h-6 text-${project.color}`} />
            </div>
            <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-muted">
              {t('projects.futureProject')}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      );
    }

    return (
      <Card className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-${project.color}/10 rounded-lg flex items-center justify-center mr-4`}>
            <IconComponent className={`w-6 h-6 text-${project.color}`} />
          </div>
          <div className="flex gap-2">
            <Badge 
              variant={project.status === 'Completed' ? 'default' : 'secondary'}
              className={project.status === 'Completed' 
                ? 'bg-agricultural-green/10 text-agricultural-green border-agricultural-green/20'
                : 'bg-data-blue/10 text-data-blue border-data-blue/20'
              }
            >
              {project.status}
            </Badge>
            <Badge variant="outline" className="bg-muted/10 text-muted-foreground">
              {project.type}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-foreground mb-2">{t('projects.keyHighlights')}:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start">
                <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mr-2 mt-2 flex-shrink-0`}></div>
                <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <div className={`p-3 bg-${project.color}/5 rounded-lg border border-${project.color}/10`}>
            <p className="text-sm font-medium text-foreground">{t('projects.impact')}: {project.impact}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <Badge key={techIndex} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-transparent">
            <ExternalLink className="w-4 h-4 mr-2" />
            {t('projects.viewDetails')}
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Github className="w-4 h-4 mr-2" />
            {t('projects.sourceCode')}
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Current/Completed Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          {/* Future Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">{t('projects.future')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isFuture={true} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {t('projects.contactText')}
            </p>
            <Button className="bg-agricultural-green hover:bg-agricultural-green/90 text-white">
              {t('projects.getInTouch')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;