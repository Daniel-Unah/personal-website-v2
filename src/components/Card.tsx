import { motion } from "motion/react";
import { ReactNode } from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

interface CardProps {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string[];
  tags?: string[];
  link?: string;
  extraLinks?: { href: string; label: string }[];
  key?: string | number;
}

export default function Card({ title, subtitle, date, location, description, tags, link, extraLinks }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.07] mb-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            {title}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                <ExternalLink size={16} />
              </a>
            )}
          </h3>
          <p className="text-accent font-medium">{subtitle}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end text-sm text-muted gap-1">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {description.map((item, i) => (
          <li key={i} className="text-muted text-sm sm:text-base leading-relaxed flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {extraLinks && extraLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {extraLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1"
            >
              {l.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
