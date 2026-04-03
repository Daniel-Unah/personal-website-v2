import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Terminal({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    "whoami",
    "Daniel Unah",
    "ls -F experience/",
    "Atlassian/  General-Motors/  TKC-Holdings/  WashU-TA/",
    "ls -F projects/",
    "ScheduleSync/  Goat-Tracker/  Chelsea-Fan-App/",
    "cat skills.txt",
    "Python, Java, React, TypeScript, SQL, Spring Boot...",
    "npm run start-portfolio",
    "Starting portfolio...",
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, terminalLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="font-mono text-sm sm:text-base text-muted p-6 max-w-2xl mx-auto mt-20 relative">
      <button
        onClick={onComplete}
        className="absolute top-0 right-0 text-xs text-muted hover:text-accent transition-colors flex items-center gap-1"
      >
        Skip <ChevronRight size={14} />
      </button>
      <div className="flex flex-col gap-2">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-accent font-bold">
              {i % 2 === 0 ? "➜" : " "}
            </span>
            <span className={i % 2 === 0 ? "text-foreground" : "text-muted"}>
              {line}
            </span>
          </div>
        ))}
        {currentLine < terminalLines.length && (
          <div className="flex gap-2">
            <span className="text-accent font-bold">➜</span>
            <span className="w-2 h-5 bg-accent inline-block animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
