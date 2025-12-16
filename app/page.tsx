"use client";

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Hero } from "@/components/ui/animated-hero";
import { User, Briefcase, FileText, Home, Github, Globe } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";
import { FaqsSection } from "@/components/ui/faqs-1";
import FooterSection from "@/components/ui/footer";
import { TextReveal } from "@/components/ui/text-reveal"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import { SparklesText } from "@/components/ui/sparkles-text"
import { Particles } from "@/components/ui/particles"
import { FadeIn } from "@/components/ui/fade-in";
import { SkillsSection } from "@/components/ui/skills-section";
import { Timeline } from "@/components/ui/timeline";


const testimonials = [
  {
    quote:
      "MoreTrendz: full‑stack e‑commerce built from scratch with modern tech, secure auth, and responsive UI.",
    name: "MoreTrendz Online",
    designation: "Full‑stack E‑commerce",
    src:
      "/Moretrendz.png",
  },
  {
    quote:
      "Personal Portfolio: interactive Next.js site featuring advanced animations and custom graphics.",
    name: "Portfolio Website",
    designation: "Next.js + Tailwind + Framer Motion",
    src:
      "/p-p.png",
  },
  {
    quote:
      "Code‑Catalyst: contributed as technical team member to a group project, focusing on frontend experiences.",
    name: "Code‑Catalyst Contributions",
    designation: "Team Project",
    src:
      "/Code-Catalyst.png",
  },
];

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: FileText },
    { name: "About", url: "#about", icon: User },
  ];

  return <NavBar items={navItems} />;
}

export function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}

export function TimelineDemo() {
  const data = [
    {
      title: "Smart ChatPDF (RAG Web App) | Next.js 14, LangChain, Pinecone, Llama-3.3 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> We all love chatting with LLMs, but &quot;hallucinations&quot; are a major trust blocker. Needed a tool that prioritizes verifiable truth over creative storytelling.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Built a RAG app with Next.js 14, Groq (Llama-3.3), and Pinecone. Implemented clickable citations, smart parsing, and zero-hallucination logic.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Achieved verifiable answers with instant source proving, ensuring answers are strictly from the document.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://smart-chatpdf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Project Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "AI Job Scraper & Cold Emailer | Next.js, TypeScript, Tailwind, OpenRouter API 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Manual job hunting and writing repetitive cold emails was inefficient and time-consuming.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Developed an automated pipeline that scrapes job postings via telegram channel and uses resume parser lib to parse uploaded resumes into JSON. Finally uses the Llama model API (via OpenRouter) to generate personalised resume.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Enabled one-click mail sending with auto-filled subject, body, and recipient details, improving outreach efficiency, reducing drafting time by 90%.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://gsr-job-scraper.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Project Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Personal Portfolio Website | Next.js, React, Tailwind CSS 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Lacked a centralized, high-performance platform to effectively showcase technical projects and full-stack skills.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Built a modern web application leveraging Next.js for server-side rendering and Tailwind for responsive design.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Successfully deployed a professional portfolio using to demonstrate Full Stack capabilities to recruiters.
          </p>
          <div className="flex flex-col md:flex-row gap-4">

            <Button asChild>
              <a
                href="https://gsr-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Project Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "MoreTrendz (E-Commerce Platform) | MERN Stack, JWT, Razorpay, Google Analytics 2024",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Required a scalable, full-featured dropshipping platform with advanced Admin Dashboard JWT secured to manage full e-commerce store.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Engineered a Full Stack application using Node.js/Express, JWT for the backend, Vue.js frontend, Mongodb for database and Integrated Razorpay for live payments and Google Analytics and Pixel Integration for Analytics.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Launched a production ready store with full admin CRUD dashboard and payment workflow
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://www.moretrendz.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Project Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Code Catalyst (College Tech Group) Technical Team Member 2023 – Present",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            Collaborated with peers to develop group software projects, fostering a culture of peer learning and code review. Contributed to technical workshops and project planning sessions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://code-catalyst.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Project Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


export default function Page() {
  return (
    <>
      <header>
        <NavBarDemo />
      </header>

      <main id="home">
        <Hero />
      </main>

      <FadeIn id="projects" className="flex flex-col items-center" style={{ paddingTop: "7vh" }}>
        <SparklesText className="text-center pb-[7vh]">
          <TextReveal>Here are My Projects</TextReveal>
        </SparklesText>
        <TimelineDemo />
      </FadeIn >

      <FadeIn id="skills" style={{ paddingTop: "20vh" }}>
        <SparklesText className="text-center">
          <TextReveal>Here are My SKILLS</TextReveal>
        </SparklesText>
        <SkillsSection />
      </FadeIn>

      <FadeIn id="about">
        <FaqsSection />
      </FadeIn>



      <FadeIn>
        <ScrollVelocityContainer className="relative w-full text-4xl font-bold md:text-7xl md:py-15" style={{ padding: "20vh 0 20vh 0" }}>
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            . Open to Interships .
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            . Open to Projects .
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </FadeIn>

      <FadeIn>
        <FooterSection />
      </FadeIn>
    </>
  );
}