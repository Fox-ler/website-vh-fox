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
    educationData: [
      {
        degree: "Bachelor in Animal and Livestock Husbandry",
        institution: "Aeres University of Applied Sciences",
        location: "Dronten",
        period: "September 2021 - August 2025",
        status: "Completed",
        description: "Comprehensive program combining theoretical knowledge with practical applications in livestock management and agricultural sciences."
      },
      {
        degree: "Data Science Minor",
        institution: "Utrecht University",
        location: "Utrecht",
        period: "September 2024 - January 2025",
        status: "Completed",
        description: "Specialized minor focusing on machine learning, statistical analysis, and data visualization techniques applied to real-world problems."
      },
      {
        degree: "MBO Professional Expert in Livestock Farming, Level 4",
        institution: "Zone College",
        location: "Zwolle",
        period: "September 2018 - August 2021",
        status: "Completed",
        description: "Professional certification in livestock farming with hands-on training in modern agricultural practices and animal husbandry."
      },
      {
        degree: "TL Level (Graduated with Honors)",
        institution: "Reggesteyn",
        location: "Nijverdal",
        period: "September 2014 - August 2018",
        status: "Completed",
        description: "Secondary education completed with honors, demonstrating strong academic performance and dedication."
      }
    ],
    experienceData: {
      positions: [
        {
          title: "Data Intelligence Specialist",
          company: "Agrifirm Data Intelligence",
          location: "Netherlands",
          period: "July 2024 - January 2025",
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
          title: "Data Intelligence Trainee",
          company: "Agrifirm Data Intelligence",
          location: "Netherlands",
          period: "February 2024 - June 2024",
          type: "Traineeship",
          current: false,
          highlights: [
            "Introduced to Python and data analysis methodologies in agricultural context",
            "Learned machine learning fundamentals and their applications in farming",
            "Developed skills in data visualization and presentation techniques",
            "Assisted in analyzing agricultural datasets and identifying patterns",
            "Gained foundation in agricultural data intelligence workflows"
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
      ],
      internships: [
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
      ]
    },
    skillsData: {
      categories: [
        {
          title: "Data Science & Analytics",
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
          skills: [
            { name: "Livestock Farming", level: "Expert", description: "8+ years hands-on experience" },
            { name: "Dairy Operations", level: "Expert", description: "Milking systems, herd management" },
            { name: "Agricultural Technology", level: "Advanced", description: "Lely robots, automated systems" },
            { name: "Animal Husbandry", level: "Expert", description: "Animal health, breeding, nutrition" },
            { name: "Farm Management", level: "Advanced", description: "Operations, efficiency optimization" },
            { name: "Process Improvement", level: "Advanced", description: "Workflow optimization, innovation" },
            { name: "Agricultural Research", level: "Advanced", description: "Experimental design, data collection, analysis" }
          ]
        },
        {
          title: "Technical & Communication",
          skills: [
            { name: "Data Visualization", level: "Advanced", description: "Charts, dashboards, storytelling" },
            { name: "UX Design", level: "Intermediate", description: "User experience, presentation design" },
            { name: "Project Management", level: "Advanced", description: "Planning, execution, delivery" },
            { name: "Technical Writing", level: "Advanced", description: "Documentation, reporting" },
            { name: "Teamwork", level: "Expert", description: "Collaboration, leadership" },
            { name: "Problem Solving", level: "Expert", description: "Analytical thinking, innovation" },
            { name: "Dashboard Development", level: "Advanced", description: "Streamlit, Power BI, data visualization" },
            { name: "Project Adaptability", level: "Expert", description: "Quick project takeover, flexible teamwork" },
            { name: "Research Methodology", level: "Advanced", description: "Experimental design, literature review" },
            { name: "Scientific Writing", level: "Advanced", description: "Research papers, technical documentation" }
          ]
        }
      ],
      languages: [
        { name: "Dutch", level: "Native", flag: "🇳🇱", description: "Native speaker" },
        { name: "English", level: "C1", flag: "🇬🇧", description: "Passed C1 level certification" }
      ],
      certifications: [
        { name: "Driver's License B", type: "certification", year: "Current" },
        { name: "MBO Level 4 Livestock Farming", type: "professional", year: "2021" },
        { name: "Data Science Minor", type: "academic", year: "2025" }
      ]
    },
    projectsData: {
      projects: [
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
          color: "data-blue"
        },
        {
          title: "University Research Projects",
          description: "Conducted multiple research initiatives during university studies, including experimental research on sustainable feed alternatives (duckweed cultivation), clinical studies on natural health interventions (garlic supplementation effects), and comprehensive literature reviews on environmental factors affecting livestock health (mycotoxins and reproductive health).",
          type: "Academic Research",
          status: "Completed",
          technologies: ["Experimental Design", "Clinical Analysis", "Literature Review", "Statistical Analysis", "Research Methodology"],
          highlights: [
            "Designed and executed controlled experiments for sustainable feed alternatives",
            "Conducted clinical trials analyzing natural health interventions in dairy cattle",
            "Performed comprehensive literature reviews on environmental health factors",
            "Applied statistical methods to measure and validate research outcomes",
            "Synthesized diverse research findings into practical recommendations"
          ],
          impact: "Contributed to multiple areas of sustainable livestock farming and animal health research",
          color: "agricultural-green"
        }
      ],
      futureProjects: [
        {
          title: "Automated Livestock Health Monitoring System",
          description: "IoT-based system combining sensor data with machine learning for early disease detection",
          technologies: ["IoT", "Python", "Computer Vision", "Time Series Analysis"],
          color: "tech-accent"
        },
        {
          title: "Sustainable Farming Analytics Platform",
          description: "Comprehensive dashboard for tracking and optimizing environmental impact of farming operations",
          technologies: ["React", "Python", "Environmental Data", "Sustainability Metrics"],
          color: "agricultural-green"
        }
      ]
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
    educationData: [
      {
        degree: "Bachelor Dier- en Veehouderij",
        institution: "Aeres Hogeschool",
        location: "Dronten",
        period: "September 2021 - Augustus 2025",
        status: "Completed",
        description: "Uitgebreid programma dat theoretische kennis combineert met praktische toepassingen in veehouderijmanagement en agrarische wetenschappen."
      },
      {
        degree: "Minor Data Science",
        institution: "Universiteit Utrecht",
        location: "Utrecht",
        period: "September 2024 - Januari 2025",
        status: "Completed",
        description: "Gespecialiseerde minor gericht op machine learning, statistische analyse en datavisualisatietechnieken toegepast op praktijkproblemen."
      },
      {
        degree: "MBO Vakbekwaam Medewerker Veehouderij, Niveau 4",
        institution: "Zone College",
        location: "Zwolle",
        period: "September 2018 - Augustus 2021",
        status: "Completed",
        description: "Professionele certificering in veehouderij met praktijktraining in moderne agrarische praktijken en dierhouderij."
      },
      {
        degree: "TL Niveau (Cum Laude)",
        institution: "Reggesteyn",
        location: "Nijverdal",
        period: "September 2014 - Augustus 2018",
        status: "Completed",
        description: "Voortgezet onderwijs afgerond met lof, wat sterke academische prestaties en toewijding aantoont."
      }
    ],
    experienceData: {
      positions: [
        {
          title: "Data Intelligence Specialist",
          company: "Agrifirm Data Intelligence",
          location: "Nederland",
          period: "Juli 2024 - Januari 2025",
          type: "Voltijd",
          current: true,
          highlights: [
            "Python en geavanceerde data-analysetechnieken toegepast op agrarische datasets",
            "Machine learning modellen geïmplementeerd en inzichten vertaald naar praktische toepassingen",
            "Complexe analytische resultaten gepresenteerd met UX-ontwerpprincipes",
            "Operationele data geanalyseerd om verbetermogelijkheden te identificeren",
            "Samengewerkt met multifunctionele teams om agrarische workflows te optimaliseren"
          ]
        },
        {
          title: "Data Intelligence Trainee",
          company: "Agrifirm Data Intelligence",
          location: "Nederland",
          period: "Februari 2024 - Juni 2024",
          type: "Stage",
          current: false,
          highlights: [
            "Kennisgemaakt met Python en data-analyse methodologieën in agrarische context",
            "Machine learning fundamenten geleerd en hun toepassingen in de landbouw",
            "Vaardigheden ontwikkeld in datavisualisatie en presentatietechnieken",
            "Assisteerde bij het analyseren van agrarische datasets en het identificeren van patronen",
            "Basis verworven in agricultural data intelligence workflows"
          ]
        },
        {
          title: "Agrarische Professional",
          company: "Diverse Agrarische Bedrijven",
          location: "Nederland",
          period: "2017 - Heden",
          type: "Meerdere Rollen",
          current: true,
          highlights: [
            "8+ jaar uitgebreide ervaring in melkvee- en varkenshouderij",
            "Gespecialiseerde rol als professionele melker met expertise in moderne melksystemen",
            "Praktijkervaring opgedaan op thuisbedrijf melkveehouderij",
            "Diepgaand begrip ontwikkeld van veehouderijmanagement en bedrijfsvoering",
            "Sterke basis gebouwd in traditionele landbouwpraktijken en dierhouderij"
          ]
        }
      ],
      internships: [
        {
          title: "Melkveehouderij Stagiair",
          company: "Deens Melkveebedrijf",
          location: "Denemarken",
          period: "Mei 2023 - Juli 2023",
          highlights: [
            "Grote diergroepen onderhouden en gemonitord (600+ melkkoeien)",
            "Effectief gecommuniceerd met internationale collega's in multiculturele omgeving",
            "Ervaring opgedaan met geavanceerde technische systemen en datamanagementprogramma's",
            "Praktische kennis toegepast in grootschalige melkveehouderij",
            "Internationaal perspectief ontwikkeld op moderne agrarische praktijken"
          ]
        },
        {
          title: "Zuiveltechnologie Stagiair",
          company: "Lely Geautomatiseerd Melkveebedrijf",
          location: "Nederland",
          period: "2022",
          highlights: [
            "Gewerkt met geavanceerde zuiveltechnologie inclusief Lely voer- en mestrobots",
            "Uitgebreide praktijkervaring verzameld in geautomatiseerde melkveehouderijprocessen",
            "Geleerd om geavanceerde landbouwtechnologiesystemen te bedienen en onderhouden",
            "Inzichten verworven in precisielandbouw en geautomatiseerd veehouderijmanagement"
          ]
        },
        {
          title: "Veehouderij Stagiair",
          company: "Bosch International Paardenfokkerij",
          location: "Luttenberg, Nederland",
          period: "2021",
          highlights: [
            "Gewerkt bij gediversifieerde operatie met twee verschillende bedrijfstakken",
            "Aanpassingsvaardigheden ontwikkeld in gevarieerde agrarische omgevingen",
            "Geleerd professionele vertegenwoordiging te behouden in klantgerichte situaties",
            "Interpretatie en analyse van melkrobotgegevens en informatiesystemen onder de knie gekregen",
            "Ervaring opgedaan in internationale paardenfokkerij"
          ]
        }
      ]
    },
    skillsData: {
      categories: [
        {
          title: "Data Science & Analytics",
          skills: [
            { name: "Python", level: "Gevorderd", description: "Data-analyse, machine learning, automatisering" },
            { name: "R", level: "Gemiddeld", description: "Statistische analyse, datavisualisatie" },
            { name: "SQL", level: "Gevorderd", description: "Database queries, datamanipulatie" },
            { name: "Excel", level: "Expert", description: "Geavanceerde formules, draaitabellen, modellering" },
            { name: "Power BI", level: "Gevorderd", description: "Dashboard creatie, business intelligence" },
            { name: "Machine Learning", level: "Gemiddeld", description: "Voorspellende modellering, data mining" },
            { name: "Azure Cloud", level: "Gemiddeld", description: "Storage Explorer, DevOps, Databricks" },
            { name: "Data Engineering", level: "Gemiddeld", description: "ETL pipelines, rapportage-automatisering" }
          ]
        },
        {
          title: "Agrarische Expertise",
          skills: [
            { name: "Veehouderij", level: "Expert", description: "8+ jaar praktijkervaring" },
            { name: "Melkveehouderij", level: "Expert", description: "Melksystemen, kuddemanagement" },
            { name: "Agrarische Technologie", level: "Gevorderd", description: "Lely robots, geautomatiseerde systemen" },
            { name: "Dierhouderij", level: "Expert", description: "Diergezondheid, fokkerij, voeding" },
            { name: "Bedrijfsmanagement", level: "Gevorderd", description: "Operaties, efficiëntie optimalisatie" },
            { name: "Procesverbetering", level: "Gevorderd", description: "Workflow optimalisatie, innovatie" },
            { name: "Agrarisch Onderzoek", level: "Gevorderd", description: "Experimenteel ontwerp, dataverzameling, analyse" }
          ]
        },
        {
          title: "Technisch & Communicatie",
          skills: [
            { name: "Datavisualisatie", level: "Gevorderd", description: "Grafieken, dashboards, storytelling" },
            { name: "UX Design", level: "Gemiddeld", description: "Gebruikerservaring, presentatieontwerp" },
            { name: "Projectmanagement", level: "Gevorderd", description: "Planning, uitvoering, levering" },
            { name: "Technisch Schrijven", level: "Gevorderd", description: "Documentatie, rapportage" },
            { name: "Teamwork", level: "Expert", description: "Samenwerking, leiderschap" },
            { name: "Probleemoplossing", level: "Expert", description: "Analytisch denken, innovatie" },
            { name: "Dashboard Ontwikkeling", level: "Gevorderd", description: "Streamlit, Power BI, datavisualisatie" },
            { name: "Project Aanpassingsvermogen", level: "Expert", description: "Snelle projectovername, flexibel teamwork" },
            { name: "Onderzoeksmethodologie", level: "Gevorderd", description: "Experimenteel ontwerp, literatuurstudie" },
            { name: "Wetenschappelijk Schrijven", level: "Gevorderd", description: "Onderzoekspapers, technische documentatie" }
          ]
        }
      ],
      languages: [
        { name: "Nederlands", level: "Moedertaal", flag: "🇳🇱", description: "Moedertaalspreker" },
        { name: "Engels", level: "C1", flag: "🇬🇧", description: "C1 niveau certificering behaald" }
      ],
      certifications: [
        { name: "Rijbewijs B", type: "certificering", year: "Huidig" },
        { name: "MBO Niveau 4 Veehouderij", type: "professioneel", year: "2021" },
        { name: "Minor Data Science", type: "academisch", year: "2025" }
      ]
    },
    projectsData: {
      projects: [
        {
          title: "Mixed Method Scriptie: Kruidenrijk Grasland Analyse",
          description: "Uitgebreid onderzoeksproject dat data mining technieken combineert met agrarische veldstudies om de impact van kruidenrijk grasland op veevoeding en bedrijfsproductiviteit te analyseren. Voorspellende modellen ontwikkeld op basis van voeropnamepatronen en voedingsresultaten.",
          type: "Academisch Onderzoek",
          status: "Afgerond",
          technologies: ["Python", "Data Mining", "Statistische Analyse", "Agrarisch Onderzoek", "Voorspellende Modellering"],
          highlights: [
            "Geavanceerde data mining technieken toegepast om graslandsamenstelling te analyseren",
            "Voorspellende modellen ontwikkeld voor voeropname-optimalisatie",
            "Kwantitatieve data-analyse gecombineerd met kwalitatieve veldobservaties",
            "Belangrijke factoren geïdentificeerd die veevoeding vanuit kruidenrijk grasland beïnvloeden",
            "Bevindingen gepresenteerd aan academische en industriële stakeholders"
          ],
          impact: "Onderzoeksbevindingen droegen bij aan begrip van duurzame veevoedingspraktijken",
          color: "agricultural-green"
        },
        {
          title: "Voeropname Voorspellingsmodel",
          description: "Machine learning project gericht op het voorspellen van optimale voeropnamepatronen voor melkvee op basis van omgevingsfactoren, dierkenmerken en historische consumptiegegevens. Geïmplementeerd met Python met scikit-learn en statistische modelleringstechnieken.",
          type: "Data Science Project",
          status: "Lopend",
          technologies: ["Python", "Machine Learning", "Scikit-learn", "Datavisualisatie", "Regressie-analyse"],
          highlights: [
            "Grote datasets van voeropnamegegevens verzameld en voorverwerkt",
            "Meerdere ML-algoritmen geïmplementeerd voor vergelijking van voorspellingsnauwkeurigheid",
            "Datavisualisatie dashboards gemaakt voor boervriendelijke inzichten",
            "Modelprestaties gevalideerd tegen praktijkscenario's",
            "Weer- en seizoensgegevens geïntegreerd voor verbeterde voorspellingen"
          ],
          impact: "Model helpt boeren voerefficiëntie te optimaliseren en kosten te verlagen",
          color: "data-blue"
        },
        {
          title: "Universitaire Onderzoeksprojecten",
          description: "Meerdere onderzoeksinitiatieven uitgevoerd tijdens universitaire studie, waaronder experimenteel onderzoek naar duurzame voederalternatieven (krooscultivatie), klinische studies naar natuurlijke gezondheidsinterventies (knoflooksupplementatie-effecten), en uitgebreide literatuurstudies over omgevingsfactoren die de gezondheid van vee beïnvloeden (mycotoxinen en reproductieve gezondheid).",
          type: "Academisch Onderzoek",
          status: "Afgerond",
          technologies: ["Experimenteel Ontwerp", "Klinische Analyse", "Literatuurstudie", "Statistische Analyse", "Onderzoeksmethodologie"],
          highlights: [
            "Gecontroleerde experimenten ontworpen en uitgevoerd voor duurzame voederalternatieven",
            "Klinische proeven uitgevoerd ter analyse van natuurlijke gezondheidsinterventies bij melkvee",
            "Uitgebreide literatuurstudies uitgevoerd over omgevingsgezondheidsfactoren",
            "Statistische methoden toegepast om onderzoeksresultaten te meten en valideren",
            "Diverse onderzoeksbevindingen gesynthetiseerd tot praktische aanbevelingen"
          ],
          impact: "Bijgedragen aan meerdere gebieden van duurzame veehouderij en diergezondheidonderzoek",
          color: "agricultural-green"
        }
      ],
      futureProjects: [
        {
          title: "Geautomatiseerd Vee Gezondheidsmonitoring Systeem",
          description: "IoT-gebaseerd systeem dat sensorgegevens combineert met machine learning voor vroege ziektedetectie",
          technologies: ["IoT", "Python", "Computer Vision", "Tijdreeksanalyse"],
          color: "tech-accent"
        },
        {
          title: "Duurzaam Landbouw Analyseplatform",
          description: "Uitgebreid dashboard voor het volgen en optimaliseren van de milieueffecten van landbouwactiviteiten",
          technologies: ["React", "Python", "Milieudata", "Duurzaamheidsmetingen"],
          color: "agricultural-green"
        }
      ]
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
