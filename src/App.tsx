import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Briefcase, Code, Award, MapPin, Calendar } from "lucide-react";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
const SCHEDULESYNC_DEMO_MP4 =
  "https://drive.google.com/file/d/1ZxT1ZVPLm1T49qWm9w9cjKozFXgOnbGb/view?usp=sharing";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const experiences = [
    {
      title: "Incoming Software Engineer",
      subtitle: "Atlassian",
      date: "Starting July 2026",
      location: "Seattle, WA",
      description: [
        "Returning full-time after interning on Confluence in Summer 2025",
      ],
      tags: ["Web Development", "Confluence", "Spring", "Java"],
    },
    {
      title: "Software Engineer",
      subtitle: "EDUrain",
      date: "January 2026 – May 2026",
      location: "Remote",
      description: [
        "Fixed frontend bugs in the company website using React and TypeScript",
        "Built a feature for users to create short-term listings on the platform using Next.js and TypeScript",
      ],
      tags: ["React", "TypeScript", "Next.js"],
    },
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
        "Organized a volunteer event for my team and competed in an intern hackathon",
      ],
      tags: ["Reactive Java", "Spring", "GraphQL", "React", "TypeScript"],
    },
    {
      title: "Computer Science Teaching Assistant",
      subtitle: "WashU McKelvey School of Engineering",
      date: "January 2024 – Present",
      location: "St. Louis, MO",
      description: [
        "Lead small groups through problem-solving studio classes and grade exams and lab assignments (courses taught in Java)",
        "Introduction to CS: recursion, object-oriented programming, and core CS concepts",
        "Data Structures and Algorithms: trees, graphs, maps, sorting, searching, and related topics",
        "Host TA office hours supporting 30+ students per session",
      ],
      tags: ["Java", "Data Structures", "Algorithms", "Mentorship"],
    },
    {
      title: "Software Engineer Intern",
      subtitle: "General Motors",
      date: "May 2024 – August 2024",
      location: "Atlanta, GA",
      description: [
        "Added a page with new functionality to an existing corporate mobile app using React Native and Java Spring Boot",
        "Presented the project to company executives at the end of the internship",
        "Participated in a design sprint and used Figma for wireframes and UI design",
        "Joined an intern hackathon and a cybersecurity capture-the-flag event",
      ],
      tags: ["React Native", "Java Spring Boot", "SQL", "Figma"],
    },
    {
      title: "Data Analyst Intern",
      subtitle: "TKC Holdings",
      date: "April 2023 – May 2024",
      location: "St. Louis, MO",
      description: [
        "Partnered with decision-makers on analytics to improve customer interactions, sales, satisfaction, and cost efficiency",
        "Built automated AI chatbots with an 80% customer satisfaction score (compared to 83% for human agents); wrote documentation and trained coworkers on maintenance",
        "Used React and Google Analytics 4 to update site tags and boost traffic in target regions",
        "Analyzed customer chargeback trends in Python and presented findings that informed fraud-prevention strategy",
      ],
      tags: ["Python", "AI Chatbots", "Google Analytics 4", "React"],
    },
    {
      title: "Student Technical Coordinator",
      subtitle: "WashU Student Technology Services (STS)",
      date: "March 2023 – May 2024",
      location: "St. Louis, MO",
      description: [
        "Provided network and hardware support to undergraduates in an assigned residence hall and at the STS Service Desk",
        "Managed ~20 ServiceNow tickets per day at the desk",
        "Ran an educational session for residential students on a tech topic of interest",
        "Researched how WashU IT compares to peer institutions and presented findings to leadership",
      ],
      tags: ["ServiceNow", "IT Support", "Networking"],
    },
  ];

  const projects = [
    {
      title: "OSPeople",
      subtitle: "Peer Matching Web App",
      date: "2026",
      description: [
        "Web app that matches students in my scholarship program to peers with shared academic and professional experiences (courses, internships, and skills)",
        "Built a clean, searchable interface using Vite and Supabase to make informal community knowledge more accessible and scalable",
      ],
      tags: ["Vite", "Supabase", "Search", "Community Platform"],
      link: "https://ospeople.vercel.app/",
    },
    {
      title: "ScheduleSync",
      subtitle: "Full Stack Web App",
      date: "2026",
      description: [
        "WashU uses Workday for academic data—ScheduleSync is a Google-verified app that parses Workday schedule spreadsheets and syncs recurring class events to Google Calendar",
        "Cuts manual calendar setup so students stay organized across the semester",
      ],
      tags: ["React", "Node.js", "Google Calendar API", "OAuth 2.0"],
      link: "https://schedulesync.live/",
      extraLinks: [{ href: SCHEDULESYNC_DEMO_MP4, label: "Watch demo video" }],
    },
    {
      title: "Goat Tracker",
      subtitle: "Data Dashboard",
      date: "2025",
      description: [
        "I have been a LeBron James fan since I was about 10, so I built a live stat dashboard that pulls from the NBA API",
        "React frontend, Python Flask backend, deployed on Railway",
      ],
      tags: ["React.js", "Python", "Flask", "NBA API", "Railway"],
      link: "https://goat-tracker-production.up.railway.app/",
    },
    {
      title: "Chelsea Fan App",
      subtitle: "Real-time Sports App",
      date: "2025",
      description: [
        "I have supported Chelsea since I was a kid; this app aggregates news, fixtures, and squad info in one place",
        "Next.js, Tailwind CSS, and Supabase with real-time football and news APIs (ongoing)",
      ],
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Sports APIs"],
      link: "https://chelsea-fan-app-production.up.railway.app/",
    },
    {
      title: "Wave Survival",
      subtitle: "Unity 2D Game",
      date: "2025",
      description: [
        "Wave-based survival game inspired by Call of Duty Zombies, built in Unity and C# for a video game programming course",
        "Clear each wave to open the shop—buy weapons, upgrades, or health; mouse to aim, click to shoot, optional auto-fire from the pause menu",
      ],
      tags: ["Unity", "C#", "Game Dev"],
      link: "https://danielunah.itch.io/wave-survival",
    },
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "C#", "R", "Swift", "PHP"],
    frameworks: ["React", "React Native", "Next.js", "Spring Boot", "Node.js", "Flask", "Tailwind CSS"],
    tools: ["AWS", "Git", "GraphQL", "MongoDB", "Unity", "Figma", "Android Studio", "Google Analytics 4", "ServiceNow"],
  };

  const education = {
    school: "Washington University in St. Louis",
    degree: "BS, Computer Science",
    minors: "General Economics and Biomedical Data Science",
    gpa: "3.5",
    date: "Graduation: May 2026",
    location: "St. Louis, MO",
    honors: [
      "John B. Ervin Scholar: Prestigious WashU merit scholarship program. 26 Scholars selected out of over 3,000 applicants.",
    ],
  };

  const leadership = [
    {
      title: "Chapter Development Chair",
      org: "WashU National Society of Black Engineers",
      date: "May 2024 - May 2026",
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
            
            <main id="top" className="scroll-mt-24 pt-16 pb-20 px-6">
              {/* Hero Section */}
              <section
                id="about"
                className="max-w-5xl mx-auto min-h-[calc(100vh-4rem)] pt-8 pb-12 sm:pt-12 sm:pb-16 flex items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center gap-12"
                >
                  <div className="flex-1 order-2 md:order-1">
                    <p className="font-mono text-accent mb-4">Hi, my name is</p>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4">
                      Daniel Unah<span className="text-accent">.</span>
                    </h1>
                    <h2 className="text-2xl sm:text-4xl font-bold text-foreground/90 mb-4 leading-tight">
                      Software engineer.
                    </h2>
                    <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-6">
                      I grew up in <span className="text-foreground font-medium">Chapel Hill, North Carolina</span> with my parents, older brother, and younger sister. I have been curious about technology for as long as I can remember, and I am pursuing a career in software engineering. I studied Computer Science at{" "}
                      <span className="text-foreground font-medium">Washington University in St. Louis</span>
                      , with coursework and side projects across web, mobile, data, and game development.
                    </p>
                    <p className="text-base text-muted max-w-2xl leading-relaxed mb-6">
                      Away from the keyboard I am usually watching or playing soccer and basketball, catching up on anime, reading, listening to music, or exercising.
                    </p>

                    
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#contact"
                        className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2"
                      >
                        Get in touch <Mail size={18} />
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
                          src="/headshot.jpeg"
                          alt="Daniel Unah"
                          className="w-full h-full object-cover object-top hover:grayscale-0 transition-all duration-500"
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
                      extraLinks={project.extraLinks}
                    />
                  ))}
                </div>
              </Section>

              {/* Skills Section */}
              <Section title="Skills" id="skills">
                <p className="text-muted max-w-3xl mb-10 leading-relaxed">
                  Comfortable with the stack below through WashU coursework and independent projects—including HTML, CSS, JavaScript, PHP, SQL, React, MongoDB, C++, Python, R, and Java.
                </p>
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
              <section id="contact" className="scroll-mt-24 max-w-3xl mx-auto py-24 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-lg text-muted mb-6">
                    I am joining Atlassian full-time in July 2026. I am still always happy to connect—questions, collaboration, or just saying hello.
                  </p>
                  <p className="text-sm text-muted mb-12 font-mono">
                    <a href="mailto:dunah09@gmail.com" className="text-accent hover:underline">dunah09@gmail.com</a>
                    <span className="mx-2 text-border">·</span>
                    <a href="mailto:d.unah@wustl.edu" className="text-accent hover:underline">d.unah@wustl.edu</a>
                  </p>
                  <a
                    href="mailto:d.unah@wustl.edu"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition-all"
                  >
                    Say Hello <Mail size={20} />
                  </a>
                  
                  <div className="flex justify-center gap-8 mt-16 flex-wrap">
                    <a href="https://www.linkedin.com/in/daniel-unah-878447252/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Linkedin size={28} />
                      <span className="text-xs font-mono">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Daniel-Unah" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Github size={28} />
                      <span className="text-xs font-mono">GitHub</span>
                    </a>
                    <a href="mailto:d.unah@wustl.edu" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Mail size={28} />
                      <span className="text-xs font-mono">School email</span>
                    </a>
                    <a href="mailto:dunah09@gmail.com" className="text-muted hover:text-accent transition-colors flex flex-col items-center gap-2">
                      <Mail size={28} />
                      <span className="text-xs font-mono">Personal email</span>
                    </a>
                  </div>
                </motion.div>
              </section>

              {/* Footer */}
              <footer className="max-w-5xl mx-auto pt-20 border-t border-border text-center text-muted text-sm font-mono space-y-2">
                <p>© {new Date().getFullYear()} Daniel Unah. Built with React & Tailwind CSS.</p>
                <p>
                  <a
                    href="https://daniel-unah.github.io/src/Home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    First version of this site
                  </a>
                  {" · "}
                  <a
                    href="https://danielunah.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    itch.io
                  </a>
                </p>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
