import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  const socialItems = [
    { icon: <Github size={20} />, href: "https://github.com/Daniel-Unah", label: "GitHub", external: true },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/daniel-unah-878447252/", label: "LinkedIn", external: true },
    { icon: <Mail size={20} />, href: "mailto:d.unah@wustl.edu", label: "Email", external: false },
    {
      icon: <FileText size={20} />,
      href: "/Daniel%20Unah%20-%20Resume.pdf",
      label: "Resume",
      external: true,
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          onClick={closeMenu}
          className="font-mono font-bold text-xl tracking-tighter text-foreground hover:text-accent transition-colors"
        >
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
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-muted hover:text-accent transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}

          <button
            type="button"
            className="md:hidden text-muted hover:text-accent transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
