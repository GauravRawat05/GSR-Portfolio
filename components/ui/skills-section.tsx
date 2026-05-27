"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";

const skillsData = [
    {
        category: "Frontend Development",
        icon: <Code className="w-6 h-6 text-blue-500" />,
        skills: [
            "React.js",
            "Next.js",
            "Vue.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
        ],
    },
    {
        category: "Backend & Database",
        icon: <Database className="w-6 h-6 text-green-500" />,
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "RBAC",
            "MongoDB",
            "Mongoose",
        ],
    },
    {
        category: "AI, Agentic & Tools",
        icon: <Wrench className="w-6 h-6 text-purple-500" />,
        skills: [
            "Agentic Workflows",
            "RAG Pipelines",
            "LLM Integration",
            "Git & GitHub",
            "Vercel",
            "CI/CD",
            "Postman",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
        },
    },
};

export function SkillsSection() {
    return (
        <section className="w-full py-12 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-white/10 dark:bg-white/5">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            scale: 1.08, 
                                            y: -2,
                                            boxShadow: index === 0 
                                                ? "0 4px 12px rgba(59, 130, 246, 0.2)" 
                                                : index === 1 
                                                ? "0 4px 12px rgba(34, 197, 94, 0.2)" 
                                                : "0 4px 12px rgba(168, 85, 247, 0.2)"
                                        }}
                                        className={`px-3 py-1.5 text-sm font-medium rounded-full bg-white/50 dark:bg-white/10 border text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-white/20 transition-all duration-200 cursor-default border-gray-200 dark:border-white/10 ${
                                            index === 0 
                                                ? "hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400" 
                                                : index === 1 
                                                ? "hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400" 
                                                : "hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400"
                                        }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
