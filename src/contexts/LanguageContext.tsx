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
      description: "A comprehensive educational journey combining agricultural expertise with modern data science",
      current: "Current",
      completed: "Completed",
      degree: "Degree",
      institution: "Institution",
      location: "Location",
      period: "Period"
    },
    experience: {
      title: "Professional Experience",
      description: "A unique blend of hands-on agricultural experience and advanced data science applications",
      current: "Current",
      positions: "Current Positions",
      internships: "Internships & Training",
      internship: "Internship",
      fullTime: "Full-time",
      multipleRoles: "Multiple Roles"
    },
    skills: {
      title: "Skills & Expertise",
      description: "A comprehensive skill set bridging traditional agriculture with modern data science",
      level: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate",
        native: "Native"
      },
      languages: "Languages",
      certifications: "Certifications",
      categories: {
        dataScience: "Data Science & Analytics",
        agriculture: "Agricultural Expertise",
        technical: "Technical & Communication"
      }
    },
    projects: {
      title: "Featured Projects",
      description: "Research and development projects showcasing the application of data science in agriculture",
      future: "Future Projects & Research Interests",
      futureProject: "Future Project",
      type: {
        academic: "Academic Research",
        dataScience: "Data Science Project",
        laboratory: "Laboratory Research",
        clinical: "Clinical Research",
        literature: "Literature Review"
      },
      status: {
        completed: "Completed",
        ongoing: "Ongoing"
      },
      technologies: "Technologies",
      keyHighlights: "Key Highlights",
      impact: "Impact",
      viewDetails: "View Details",
      sourceCode: "Source Code",
      contactText: "Interested in collaborating on agricultural data science projects?",
      getInTouch: "Get In Touch"
    },
    contact: {
      title: "Get In Touch",
      description: "Ready to discuss agricultural data science opportunities, collaboration, or just want to connect? I'd love to hear from you.",
      info: {
        email: "Email Address",
        linkedin: "LinkedIn Profile",
        location: "Location",
        phone: "Phone"
      },
      actions: "Quick Actions",
      quickActions: {
        download: {
          title: "Download CV",
          description: "Get a PDF copy of my complete resume"
        },
        message: {
          title: "Send Message",
          description: "Reach out for opportunities or collaboration"
        },
        linkedin: {
          title: "Connect on LinkedIn",
          description: "Let's build our professional network"
        }
      },
      opportunities: {
        title: "Open to New Opportunities",
        statement: "I'm actively seeking opportunities to apply my unique combination of agricultural expertise and data science skills. Whether you're looking for a data analyst, agricultural consultant, or someone who can bridge the gap between traditional farming and modern technology, I'd love to explore how we can work together.",
        fullTime: "Available for Full-time Positions",
        consulting: "Open to Consulting Projects",
        research: "Interested in Research Collaboration"
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
      description: "Een uitgebreide educatieve reis die agrarische expertise combineert met moderne data science",
      current: "Huidig",
      completed: "Afgerond",
      degree: "Graad",
      institution: "Instelling",
      location: "Locatie",
      period: "Periode"
    },
    experience: {
      title: "Werkervaring",
      description: "Een unieke mix van praktische agrarische ervaring en geavanceerde data science toepassingen",
      current: "Huidig",
      positions: "Huidige Posities",
      internships: "Stages & Training",
      internship: "Stage",
      fullTime: "Voltijd",
      multipleRoles: "Meerdere Rollen"
    },
    skills: {
      title: "Vaardigheden & Expertise",
      description: "Een uitgebreide vaardighedenset die traditionele landbouw verbindt met moderne data science",
      level: {
        expert: "Expert",
        advanced: "Gevorderd",
        intermediate: "Gemiddeld",
        native: "Moedertaal"
      },
      languages: "Talen",
      certifications: "Certificeringen",
      categories: {
        dataScience: "Data Science & Analytics",
        agriculture: "Agrarische Expertise",
        technical: "Technisch & Communicatie"
      }
    },
    projects: {
      title: "Uitgelichte Projecten",
      description: "Onderzoeks- en ontwikkelingsprojecten die de toepassing van data science in de landbouw tonen",
      future: "Toekomstige Projecten & Onderzoeksinteresses",
      futureProject: "Toekomstig Project",
      type: {
        academic: "Academisch Onderzoek",
        dataScience: "Data Science Project",
        laboratory: "Laboratoriumonderzoek",
        clinical: "Klinisch Onderzoek",
        literature: "Literatuurstudie"
      },
      status: {
        completed: "Afgerond",
        ongoing: "Lopend"
      },
      technologies: "Technologieën",
      keyHighlights: "Belangrijkste Hoogtepunten",
      impact: "Impact",
      viewDetails: "Bekijk Details",
      sourceCode: "Broncode",
      contactText: "Interesse in samenwerking op agrarische data science projecten?",
      getInTouch: "Neem Contact Op"
    },
    contact: {
      title: "Neem Contact Op",
      description: "Klaar om te praten over kansen in agrarische data science, samenwerking, of wil je gewoon verbinden? Ik hoor graag van je.",
      info: {
        email: "E-mailadres",
        linkedin: "LinkedIn Profiel",
        location: "Locatie",
        phone: "Telefoon"
      },
      actions: "Snelle Acties",
      quickActions: {
        download: {
          title: "Download CV",
          description: "Ontvang een PDF-kopie van mijn volledige CV"
        },
        message: {
          title: "Stuur Bericht",
          description: "Neem contact op voor kansen of samenwerking"
        },
        linkedin: {
          title: "Verbind op LinkedIn",
          description: "Laten we ons professionele netwerk uitbreiden"
        }
      },
      opportunities: {
        title: "Open voor Nieuwe Kansen",
        statement: "Ik ben actief op zoek naar mogelijkheden om mijn unieke combinatie van agrarische expertise en data science vaardigheden toe te passen. Of je nu op zoek bent naar een data-analist, agrarisch consultant, of iemand die de kloof kan overbruggen tussen traditionele landbouw en moderne technologie, ik zou graag verkennen hoe we kunnen samenwerken.",
        fullTime: "Beschikbaar voor Voltijdse Posities",
        consulting: "Open voor Adviesprojecten",
        research: "Geïnteresseerd in Onderzoekssamenwerking"
      }
    }
  }
};
