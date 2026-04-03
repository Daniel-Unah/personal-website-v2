import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id: string;
}

export default function Section({ title, children, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-24 max-w-5xl mx-auto px-6"
    >
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="h-px bg-border flex-1" />
      </div>
      {children}
    </motion.section>
  );
}
