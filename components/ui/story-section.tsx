"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StoryItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const storyData: StoryItem[] = [
  {
    year: "The Beginning",
    title: "Who Am I?",
    description:
      "I'm Gaurav — a Full-Stack Developer, QA Executive, & GenAI enthusiast. My journey started with a curiosity for how things work on the web, which quickly turned into a passion for building robust full-stack systems and automated agentic workflows.",
    highlight: true,
  },
  {
    year: "The Stack",
    title: "My Arsenal",
    description:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js / TypeScript. I don't just write API endpoints; I build complete, secure applications with RBAC and optimized queries.",
  },
  {
    year: "Recent Work",
    title: "What I Build",
    description:
      "From production-ready Lead & Task Management Systems at Athenura India (featuring 4-tier RBAC and high security) to 'MoreTrendz' (a complete dropshipping store), I deliver high-quality, tested software.",
  },
  {
    year: "Future",
    title: "What's Next?",
    description:
      "I'm currently seeking Full-Stack Developer roles or internships where I can push the boundaries of web development and AI integration. Ready to bring immediate value to a team!",
    highlight: true,
  },
];

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden w-full max-w-5xl mx-auto">
      <motion.div style={{ opacity, scale }} className="space-y-16">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A brief timeline of my evolution as a developer.
          </p>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 md:ml-0 space-y-12">
          {storyData.map((item, index) => (
            <StoryCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function StoryCard({ item, index }: { item: StoryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 group"
    >
      {/* Timeline Dot */}
      <span
        className={cn(
          "absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-background transition-all duration-300 group-hover:scale-150",
          item.highlight ? "bg-primary" : "bg-neutral-400 dark:bg-neutral-600"
        )}
      />

      <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
        <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded w-fit">
          {item.year}
        </span>
        <h3 className={cn("text-xl font-bold", item.highlight && "text-primary")}>
          {item.title}
        </h3>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {item.description}
      </p>
    </motion.div>
  );
}
