import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialItems = [
    { icon: <Github size={20} />, href: "https://github.com/danielunah", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/danielunah", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:d.unah@wustl.edu", label: "Email" },
    { icon: <FileText size={20} />, href: "#", label: "Resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-xl tracking-tighter text-foreground hover:text-accent transition-colors">
          DU<span className="text-accent">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
