"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SparklesText } from "@/components/ui/sparkles-text"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { ContactForm } from "@/components/ui/contact-form"


function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Full-Stack Web Developer", "MERN Stack", "React & Next.js", "Node.js", "TypeScript"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-52 lg:pb-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <SparklesText> Gaurav Singh Rawat </SparklesText>
              <span className="relative flex w-full justify-center overflow-hidden text-center pt-2 md:pb-0 md:pt-6">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-regular text-primary text-2xl sm:text-3xl md:text-5xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Full‑stack web developer building modern apps with Next.js, TypeScript, and AI integrations.
              Projects include an AI Job Scraper & Cold Emailer, a full‑stack e‑commerce platform, and this animated portfolio.
              Open to internships and project collaborations.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-4" variant="outline">
                  Contact Me <PhoneCall className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-0 border-0 bg-transparent shadow-none">
                <DialogTitle className="hidden">Contact Me</DialogTitle>
                <ContactForm />
              </DialogContent>
            </Dialog>

            <Button size="lg" className="gap-4" asChild style={{ zIndex: 1 }}>
              <a
                href="https://drive.google.com/uc?export=download&id=1_oOJ4L16Leq-HWCoZNsJqc5k9MagWt5C"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
