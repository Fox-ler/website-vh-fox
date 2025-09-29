import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    hero: {
      title: "Agricultural Data Scientist",
      description: "Combining agricultural expertise with advanced data science to optimize livestock farming through predictive modeling and data-driven insights.",
      contact: "Contact Me",
      downloadCV: "Download CV",
      stats: {
        experience: "Years Experience",
        expertise: "Areas of Expertise",
        scope: "International Scope"
      }
    },
    about: {
      title: "About Me",
      intro: "I am a passionate Agricultural Data Scientist with a unique blend of hands-on farming experience and advanced analytical skills. My journey from practical agriculture to data science allows me to bridge the gap between traditional farming knowledge and modern technological solutions.",
      profile: "With a strong foundation in animal sciences and ongoing studies in Applied Data Science and AI, I specialize in developing predictive models and data-driven solutions for the livestock sector. My work focuses on optimizing feed intake predictions, analyzing cow health metrics, and improving farm management through innovative technological applications. I am deeply curious about research and continuously explore new ways to apply scientific methods to real-world agricultural challenges.",
      competencies: "Core Competencies",
      cards: {
        expert: {
          title: "Agricultural Expert",
          description: "Deep understanding of livestock farming, animal health, and sustainable agriculture practices from years of hands-on experience."
        },
        scientist: {
          title: "Data Scientist",
          description: "Proficient in machine learning, statistical analysis, and predictive modeling with a focus on agricultural applications."
        },
        team: {
          title: "Team Player",
          description: "Experienced in collaborating with diverse teams, from farm workers to data scientists, bridging technical and agricultural domains."
        },
        innovation: {
          title: "Innovation Focus",
          description: "Constantly exploring new technologies and research methodologies to solve complex agricultural challenges and drive industry progress."
        }
      }
    },
    education: {
      title: "Education",
      description: "My academic journey combines agricultural science with cutting-edge data analytics and AI",
      current: "Current"
    },
    experience: {
      title: "Professional Experience",
      description: "My career spans hands-on farming, data science, and research",
      current: "Current",
      positions: "Current Positions",
      internships: "Internships & Training"
    },
    skills: {
      title: "Skills & Expertise",
      description: "A comprehensive blend of agricultural knowledge, data science capabilities, and research experience",
      level: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate"
      },
      languages: "Languages",
      certifications: "Certifications & Training"
    },
    projects: {
      title: "Projects & Research",
      description: "Practical applications of data science in agriculture and scientific research",
      completed: "Completed Projects",
      future: "Future Projects",
      type: {
        internship: "Internship Project",
        research: "Research",
        academic: "Academic Project",
        planned: "Planned"
      },
      status: {
        completed: "Completed",
        planned: "Planned"
      },
      technologies: "Technologies",
      keyHighlights: "Key Highlights",
      impact: "Impact",
      contact: "Interested in collaboration? Let's connect!"
    },
    contact: {
      title: "Get In Touch",
      description: "I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow professionals in agriculture and data science.",
      info: "Contact Information",
      actions: "Quick Actions",
      statement: "Currently open to opportunities in agricultural data science, research positions, and innovative farming technology projects.",
      quickActions: {
        download: {
          title: "Download CV",
          description: "Get my full resume"
        },
        message: {
          title: "Send Message",
          description: "Email me directly"
        },
        linkedin: {
          title: "Connect on LinkedIn",
          description: "Let's connect professionally"
        }
      }
    }
  },
  nl: {
    hero: {
      title: "Agrarische Data Scientist",
      description: "Het combineren van agrarische expertise met geavanceerde data science om de veehouderij te optimaliseren door middel van voorspellende modellen en datagedreven inzichten.",
      contact: "Neem Contact Op",
      downloadCV: "Download CV",
      stats: {
        experience: "Jaar Ervaring",
        expertise: "Expertisegebieden",
        scope: "Internationale Scope"
      }
    },
    about: {
      title: "Over Mij",
      intro: "Ik ben een gepassioneerde Agrarische Data Scientist met een unieke combinatie van praktijkervaring in de landbouw en geavanceerde analytische vaardigheden. Mijn reis van praktische landbouw naar data science stelt me in staat om de kloof te overbruggen tussen traditionele agrarische kennis en moderne technologische oplossingen.",
      profile: "Met een sterke basis in dierwetenschappen en lopende studies in Toegepaste Data Science en AI, specialiseer ik me in het ontwikkelen van voorspellende modellen en datagedreven oplossingen voor de veehouderijsector. Mijn werk richt zich op het optimaliseren van voeropnamevoorspellingen, het analyseren van koegezondheidsindicatoren en het verbeteren van bedrijfsvoering door innovatieve technologische toepassingen. Ik ben zeer nieuwsgierig naar onderzoek en verken voortdurend nieuwe manieren om wetenschappelijke methoden toe te passen op praktische agrarische uitdagingen.",
      competencies: "Kerncompetenties",
      cards: {
        expert: {
          title: "Agrarisch Expert",
          description: "Diepgaand begrip van veehouderij, diergezondheid en duurzame landbouwpraktijken uit jarenlange praktijkervaring."
        },
        scientist: {
          title: "Data Scientist",
          description: "Bedreven in machine learning, statistische analyse en voorspellende modellering met focus op agrarische toepassingen."
        },
        team: {
          title: "Teamspeler",
          description: "Ervaren in samenwerking met diverse teams, van boeren tot data scientists, waarbij technische en agrarische domeinen worden verbonden."
        },
        innovation: {
          title: "Innovatiegerichte",
          description: "Voortdurend op zoek naar nieuwe technologieën en onderzoeksmethodologieën om complexe agrarische uitdagingen op te lossen en de industrie vooruit te helpen."
        }
      }
    },
    education: {
      title: "Opleiding",
      description: "Mijn academische reis combineert landbouwwetenschap met geavanceerde data-analyse en AI",
      current: "Huidig"
    },
    experience: {
      title: "Werkervaring",
      description: "Mijn carrière omvat praktische landbouw, data science en onderzoek",
      current: "Huidig",
      positions: "Huidige Posities",
      internships: "Stages & Training"
    },
    skills: {
      title: "Vaardigheden & Expertise",
      description: "Een uitgebreide mix van agrarische kennis, data science capaciteiten en onderzoekservaring",
      level: {
        expert: "Expert",
        advanced: "Gevorderd",
        intermediate: "Gemiddeld"
      },
      languages: "Talen",
      certifications: "Certificeringen & Training"
    },
    projects: {
      title: "Projecten & Onderzoek",
      description: "Praktische toepassingen van data science in de landbouw en wetenschappelijk onderzoek",
      completed: "Afgeronde Projecten",
      future: "Toekomstige Projecten",
      type: {
        internship: "Stage Project",
        research: "Onderzoek",
        academic: "Academisch Project",
        planned: "Gepland"
      },
      status: {
        completed: "Afgerond",
        planned: "Gepland"
      },
      technologies: "Technologieën",
      keyHighlights: "Belangrijkste Hoogtepunten",
      impact: "Impact",
      contact: "Interesse in samenwerking? Laten we contact opnemen!"
    },
    contact: {
      title: "Neem Contact Op",
      description: "Ik sta altijd open voor het bespreken van nieuwe kansen, samenwerkingen of gewoon contact leggen met collega-professionals in landbouw en data science.",
      info: "Contactinformatie",
      actions: "Snelle Acties",
      statement: "Momenteel open voor kansen in agrarische data science, onderzoeksposities en innovatieve landbouwtechnologieprojecten.",
      quickActions: {
        download: {
          title: "Download CV",
          description: "Ontvang mijn volledige CV"
        },
        message: {
          title: "Stuur Bericht",
          description: "Email mij direct"
        },
        linkedin: {
          title: "Verbind op LinkedIn",
          description: "Laten we professioneel verbinden"
        }
      }
    }
  }
};
