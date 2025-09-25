import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Leaf, Target } from 'lucide-react';

const ProjectsSection = () => {
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
      title: "Agricultural Data Outlier Analysis",
      description: "Comprehensive analysis project focused on identifying and analyzing outliers in agricultural production data to improve quality control and operational efficiency. Developed automated detection systems and visualization dashboards for enhanced data quality monitoring.",
      type: "Data Analytics Project",
      status: "Completed",
      technologies: ["Python", "Statistical Analysis", "Data Visualization", "Anomaly Detection", "Quality Control", "Azure"],
      highlights: [
        "Developed automated outlier detection algorithms for production data",
        "Created comprehensive visualization dashboards for quality monitoring",
        "Implemented statistical methods for anomaly identification",
        "Utilized Azure Storage Explorer for large dataset management",
        "Provided actionable recommendations for data collection improvements",
        "Built automated reporting systems for pig production data"
      ],
      impact: "Improved data quality control and operational efficiency across agricultural operations",
      icon: Target,
      color: "tech-accent"
    }
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
              Future Project
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
          <h4 className="font-medium text-foreground mb-2">Key Highlights:</h4>
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
            <p className="text-sm font-medium text-foreground">Impact: {project.impact}</p>
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
            View Details
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research and development projects showcasing the application of data science in agriculture
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
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Future Projects & Research Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isFuture={true} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Interested in collaborating on agricultural data science projects?
            </p>
            <Button className="bg-agricultural-green hover:bg-agricultural-green/90 text-white">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;