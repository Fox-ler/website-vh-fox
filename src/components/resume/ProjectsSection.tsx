import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BarChart3, Leaf, Target, Sprout, Activity, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projectsData = t('projectsData');
  
  const iconMap: { [key: string]: any } = {
    'agricultural-green': Leaf,
    'data-blue': BarChart3,
    'tech-accent': BookOpen
  };
  
  const projects = projectsData.projects.map((project: any) => ({
    ...project,
    icon: iconMap[project.color] || Leaf
  }));

  const futureProjectIconMap: { [key: string]: any } = {
    'tech-accent': Target,
    'agricultural-green': Leaf
  };
  
  const futureProjects = projectsData.futureProjects.map((project: any) => ({
    ...project,
    icon: futureProjectIconMap[project.color] || Target
  }));

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;