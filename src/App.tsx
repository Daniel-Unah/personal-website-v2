import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Code, Award, MapPin, Calendar, FileText, ChevronRight } from "lucide-react";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
import { cn } from "./lib/utils";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const experiences = [
    {
      title: "Software Engineer Intern",
      subtitle: "Atlassian",
      date: "May 2025 – August 2025",
      location: "San Francisco, CA",
      description: [
        "Improved Confluence’s permissions and notification flow using Reactive Java & Spring, enhancing collaboration for thousands of users",
        "Enhanced Confluence’s GraphQL API by building a new endpoint that detects when a user has already requested access to content",
        "Shipped 10+ front-end features/fixes for Confluence using React & TypeScript, directly impacting customer usability",
        "Led QA blitz testing for new features and facilitated team sprint ceremonies for my team of ~15 engineers",
      ],
      tags: ["Reactive Java", "Spring", "GraphQL", "React", "TypeScript"],
    },
    {
      title: "Computer Science Teaching Assistant",
      subtitle: "WashU McKelvey School of Engineering",
      date: "January 2024 – Present",
      location: "St. Louis, MO",
      description: [
        "As a TA, I lead small groups of students through problem-solving studio classes and grade exams and lab assignments",
        "Introduction to CS: Core computer science concepts like recursion and object-oriented programming in Java",
        "Data Structures and Algorithms: Concepts in data structures (trees, graphs, maps, …) and algorithms (sorting, searching)",
      ],
      tags: ["Java", "Data Structures", "Algorithms", "Mentorship"],
    },
    {
      title: "Software Engineer Intern",
      subtitle: "General Motors",
      date: "May 2024 – August 2024",
      location: "Atlanta, GA",
      description: [
        "Designed and deployed a full-stack interactive EV charger map in React Native, Java Spring Boot, SQL, and Android Studio",
        "Presented to executives and concept will be integrated on the platform improving user access to EV chargers",
      ],
      tags: ["React Native", "Java Spring Boot", "SQL", "Android Studio"],
    },
    {
      title: "Data Analyst Intern",
      subtitle: "TKC Holdings",
      date: "April 2023 – May 2024",
      location: "St. Louis, MO",
      description: [
        "Developed two customer service AI chatbots, achieving an 80% customer satisfaction score",
        "Analyzed 10,000+ customer chargebacks in Python; findings presented to executives influenced fraud prevention strategies",
        "Used Google Analytics 4 and React to boost user traffic on the company’s website",
      ],
      tags: ["Python", "AI Chatbots", "Google Analytics 4", "React"],
    },
  ];

  const projects = [
    {
      title: "ScheduleSync",
      subtitle: "Full Stack Web App",
      date: "2024",
      description: [
        "Google-verified web app that parses Workday schedule spreadsheets and syncs recurring class events directly to users' Google Calendars",
        "Streamlines academic scheduling for WashU students by automating calendar management",
      ],
      tags: ["React", "Node.js", "Google Calendar API", "OAuth 2.0"],
      link: "https://schedulesync.live/",
    },
    {
      title: "Goat Tracker",
      subtitle: "Data Dashboard",
      date: "2024",
      description: [
        "LeBron James stat tracking dashboard pulling real-time data from the NBA API",
        "Built with a React.js frontend and a Python Flask backend, deployed on Railway",
      ],
      tags: ["React.js", "Python", "Flask", "NBA API", "Railway"],
      link: "https://goat-tracker-production.up.railway.app/",
    },
    {
      title: "Chelsea Fan App",
      subtitle: "Real-time Sports App",
      date: "2024",
      description: [
        "A central hub for Chelsea supporters to catch up on latest news, fixtures, and squad info",
        "Integrates real-time football and news APIs with a Next.js and Supabase architecture",
      ],
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Sports APIs"],
      link: "https://chelsea-fan-app-production.up.railway.app/",
    },
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C#", "R", "Swift"],
    frameworks: ["React", "React Native", "Spring Boot", "Node.js", "Flask", "Tailwind CSS"],
    tools: ["Git", "GraphQL", "Android Studio", "Google Analytics 4", "Vite"],
  };

  const education = {
    school: "Washington University in St. Louis",
    degree: "BS, Computer Science",
    minors: "General Economics and Biomedical Data Science",
    gpa: "3.5",
    date: "Expected Graduation: May 2026",
    location: "St. Louis, MO",
    honors: [
      "John B. Ervin Scholar: Prestigious WashU merit scholarship program. 26 Scholars selected out of over 3,000 applicants.",
    ],
  };

  const leadership = [
    {
      title: "Chapter Development Chair",
      org: "WashU National Society of Black Engineers",
      date: "May 2024 - Present",
      description: [
        "Responsible for fostering growth, engagement, and collaboration within the chapter, as well as with other clubs with similar missions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-accent">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal onComplete={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            <main className="pt-24 pb-20 px-6">
              {/* Hero Section */}
              <section id="about" className="max-w-5xl mx-auto py-20 sm:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center gap-12"
                >
                  <div className="flex-1 order-2 md:order-1">
                    <p className="font-mono text-accent mb-4">Hi, my name is</p>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-6">
                      Daniel Unah<span className="text-accent">.</span>
                    </h1>
                    <h2 className="text-3xl sm:text-5xl font-bold text-muted mb-8 leading-tight">
                      I build scalable software and data-driven solutions.
                    </h2>
                    <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
                      I'm a Computer Science student at <span className="text-foreground font-medium">Washington University in St. Louis</span>, 
                      passionate about full-stack development, mobile applications, and artificial intelligence. 
                      Currently focused on building impactful features at <span className="text-foreground font-medium">Atlassian</span>.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="mailto:d.unah@wustl.edu"
                        className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2"
                      >
                        Get in touch <Mail size={18} />
                      </a>
                      <a
                        href="#"
                        className="px-8 py-4 bg-white/5 border border-border text-foreground font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                      >
                        View Resume <FileText size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="relative order-1 md:order-2 shrink-0">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 relative group">
                      {/* Decorative background element */}
                      <div className="absolute inset-0 border-2 border-accent rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                      
                      {/* Image container */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white/5 border border-border">
                        <img
                          src="https://picsum.photos/seed/daniel/800/800"
                          alt="Daniel Unah"
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Experience Section */}
              <Section title="Experience" id="experience">
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <Card
                      key={i}
                      title={exp.subtitle}
                      subtitle={exp.title}
                      date={exp.date}
                      location={exp.location}
                      description={exp.description}
                      tags={exp.tags}
                    />
                  ))}
                </div>
              </Section>

              {/* Projects Section */}
              <Section title="Projects" id="projects">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projects.map((project, i) => (
                    <Card
                      key={i}
                      title={project.title}
                      subtitle={project.subtitle}
                      date={project.date}
                      description={project.description}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
                </div>
              </Section>

              {/* Skills Section */}
              <Section title="Skills" id="skills">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-6 text-accent">
                      <Code size={24} />
                      <h3 className="text-xl font-bold text-foreground">Languages</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-border rounded-md text-sm text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-6 text-accent">
                      <Briefcase size={24} />
                      <h3 className="text-xl font-bold text-foreground">Frameworks</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-border rounded-md text-sm text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-6 text-accent">
                      <Award size={24} />
                      <h3 className="text-xl font-bold text-foreground">Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((s) => (
                        <span key={s} className="px-3 py-1.5 bg-white/5 border border-border rounded-md text-sm text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* Education Section */}
              <Section title="Education" id="education">
                <div className="glass-card p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{education.school}</h3>
                      <p className="text-accent text-lg font-medium">{education.degree}</p>
                      <p className="text-muted mt-1">Minors in {education.minors}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end text-sm text-muted gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{education.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{education.location}</span>
                      </div>
                      <div className="mt-2 px-3 py-1 bg-accent/10 text-accent rounded-full font-bold">
                        GPA: {education.gpa}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-foreground font-bold mb-3 flex items-center gap-2">
                        <Award size={18} className="text-accent" />
                        Honors & Scholarships
                      </h4>
                      <ul className="space-y-2">
                        {education.honors.map((honor, i) => (
                          <li key={i} className="text-muted leading-relaxed flex gap-3">
                            <span className="text-accent mt-1.5 shrink-0">•</span>
                            <span>{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Leadership Section */}
              <Section title="Leadership" id="leadership">
                <div className="space-y-4">
                  {leadership.map((lead, i) => (
                    <Card
                      key={i}
                      title={lead.org}
                      subtitle={lead.title}
                      date={lead.date}
                      description={lead.description}
                    />
                  ))}
                </div>
              </Section>

              {/* Contact Section */}
              <section id="contact" className="max-w-3xl mx-auto py-24 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-lg text-muted mb-12">
                    I'm currently looking for full-time opportunities starting Summer 2026. 
                    Whether you have a question or just want to say hi, my inbox is always open!
                  </p>
                  <a
                    href="mailto:d.unah@wustl.edu"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition-all"
                  >
                    Say Hello <Mail size={20} />
                  </a>
                  
                  <div className="flex justify-center gap-8 mt-16">
                    <a href="https://linkedin.com/in/danielunah" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Linkedin size={28} />
                      <span className="text-xs font-mono">LinkedIn</span>
                    </a>
                    <a href="https://github.com/danielunah" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Github size={28} />
                      <span className="text-xs font-mono">GitHub</span>
                    </a>
                    <a href="mailto:d.unah@wustl.edu" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Mail size={28} />
                      <span className="text-xs font-mono">Email</span>
                    </a>
                  </div>
                </motion.div>
              </section>

              {/* Footer */}
              <footer className="max-w-5xl mx-auto pt-20 border-t border-border text-center text-muted text-sm font-mono">
                <p>© {new Date().getFullYear()} Daniel Unah. Built with React & Tailwind CSS.</p>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
