import { Card } from '@/components/ui/card';
import { Leaf, BarChart3, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I balance practical experience in livestock farming with data science and analytics. 
            Socially and community-oriented, with an open mind for innovation and process improvement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-agricultural-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-agricultural-green" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Agricultural Expert</h3>
            <p className="text-muted-foreground text-sm">8+ years of hands-on farming experience</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-data-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-data-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Data Scientist</h3>
            <p className="text-muted-foreground text-sm">Python, R, SQL, Machine Learning</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-earth-brown" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Team Player</h3>
            <p className="text-muted-foreground text-sm">Strong communication & collaboration</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="w-16 h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-tech-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
            <p className="text-muted-foreground text-sm">Process improvement & optimization</p>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-card border-0 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Professional Profile</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a dedicated agricultural data scientist, I bring a unique perspective that combines 
                deep practical farming knowledge with advanced analytical capabilities. My experience 
                spans from hands-on livestock management to sophisticated machine learning applications 
                in agricultural contexts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's degree while gaining real-world experience in data 
                intelligence at Agrifirm, I'm passionate about using technology to solve agricultural 
                challenges and improve farming efficiency. I have a strong curiosity for research and 
                enjoy exploring innovative solutions through scientific inquiry and evidence-based approaches.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Core Competencies</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Practical Agricultural Experience (Livestock farming, Agriculture)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-data-blue rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Data Analysis & Visualization (Python, R, SQL, Excel, Power BI)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-earth-brown rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Data Science & Machine Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-tech-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Communication & Teamwork</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Project-based Work & Process Improvement</span>
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