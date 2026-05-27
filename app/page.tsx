"use client";

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Hero } from "@/components/ui/animated-hero";
import { User, Briefcase, FileText, Home, Globe, Github } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";
import { StorySection } from "@/components/ui/story-section";
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
      title: "Full Stack Developer & QA Executive | Athenura India | Feb 2026 – Present",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Stepped into a production environment requiring rapid, high-quality development of full-stack modules and rigorous quality assurance across multiple active projects.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Engineered robust backends for the Lead Management and Task Management Systems. Implemented a 4-tier RBAC, established systematic QA pipelines, and optimized complex MongoDB queries.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Promoted from intern to QA Executive within 2 months. Reduced production bugs by 40% across 3+ active projects and minimized database query response times by 35%.
          </p>
        </div>
      ),
    },
    {
      title: "Task Management System | React.js, Node.js, Express.js, MongoDB, RBAC | Mar – Apr 2026",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Managing task distribution for large teams with different privilege levels without manual onboarding bottlenecks.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Built a 4-tier RBAC system (Admin, Manager, Lead, Member) with bulk CSV user import capabilities. Handled 50+ concurrent tasks across teams of 20+ members (60 commits in 18 days).
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Slashed team onboarding time by 80% through automated role and task assignments.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild variant="outline">
              <a
                href="https://github.com/GauravRawat05/TaskManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Lead Management System | React.js, Node.js, MongoDB, JWT, REST API, Vercel | Feb – Mar 2026",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Developing a secure, performant lead capturing system with distinct schemas and JWT-based access controls to restrict unauthorized access.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Designed 15+ RESTful API endpoints with MongoDB schemas (6+ collections) and JWT tokenization. Deployed the backend securely to Vercel (112 commits in 25 days).
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Successfully reduced unauthorized access attempts to lead databases by 100%.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild variant="outline">
              <a
                href="https://github.com/GauravRawat05/LeadManagementforLMS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Team Member | Code Catalyst, Faridabad | Aug 2025 – Present",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Boosting developer skills and engagement among engineering students while maintaining high standards in code quality.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Led 3 technical workshops on MERN stack development and conducted thorough code reviews across 10+ student-led peer projects.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Increased student tech engagement in MERN stack by 30% and improved overall project code quality by 25%.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://code-catalyst.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Group Live
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "MoreTrendz (E-Commerce Platform) | MERN Stack, JWT, Razorpay, Google Analytics | 2024 – 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Developing a highly scalable e-commerce dropshipping platform with complete payment processing, user analytics, and a comprehensive admin CRUD dashboard.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Engineered a Vue.js frontend, Express/Node.js backend, and integrated Razorpay payment gateway, Google Analytics, and Facebook Pixel.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Boosted component reusability by 60% and reduced page load speeds by 45%.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://www.moretrendz.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Live Site
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/GauravRawat05/moretrendz-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View Repository
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Smart ChatPDF (RAG Web App) | Next.js 14, LangChain, Pinecone, Llama-3.3 | 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> standard LLMs hallucinate factual data. Needed a tool that parses documents and strictly answers from user-uploaded PDFs with verifiable proof.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Built a Retrieval-Augmented Generation (RAG) app with Next.js 14, LangChain, Pinecone vector store, and Groq API. Added clickable source citations.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Achieved zero-hallucination factual question answering with source citations displaying matching snippet context.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://smart-chatpdf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Live Site
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "AI Job Scraper & Cold Emailer | Next.js, TypeScript, Tailwind, OpenRouter API | 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Manual outreach and custom resume generation was tedious and took hours per job application.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Created an automated crawler tracking job channels and parses resume PDFs. Leveraged the OpenRouter Llama API to generate custom cold emails.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Slashed cold email generation and formatting time by 90%, enabling single-click email drafts.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://gsr-job-scraper.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Live Site
              </a>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "Personal Portfolio Website | Next.js, React, Tailwind CSS | 2025",
      content: (
        <div>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Challenge:</strong> Needed an engaging, high-performance digital portfolio to display my projects, skills, and background with smooth 3D and dynamic elements.
          </p>
          <p className="mb-4 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Action:</strong> Implemented Next.js, Framer Motion, and Tailwind CSS to craft beautiful scroll animations, a dark theme provider, particle systems, and responsive navbar elements.
          </p>
          <p className="mb-8 text-base font-normal text-neutral-500 md:text-2xl dark:text-neutral-400">
            <strong>Result:</strong> Deployed a premium interactive portfolio showcasing professional experience and project repositories.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <a
                href="https://gsr-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" /> View Live Site
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
        <StorySection />
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