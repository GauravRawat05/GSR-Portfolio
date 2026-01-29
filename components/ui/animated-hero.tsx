"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Download } from "lucide-react";
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
    <div className="w-full relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-52 lg:pb-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <SparklesText className="text-foreground"> Gaurav Singh Rawat </SparklesText>
              <span className="relative flex w-full justify-center overflow-hidden text-center pt-2 md:pb-0 md:pt-6 h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-regular text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-2xl sm:text-3xl md:text-5xl"
                    initial={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? "-100%" : "100%",
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground/80 max-w-2xl text-center backdrop-blur-sm p-4 rounded-xl border border-white/5 bg-white/5">
              Full‑stack web developer building modern apps with Next.js, TypeScript, and AI integrations.
              Projects include an AI Job Scraper & Cold Emailer, a full‑stack e‑commerce platform, and this animated portfolio.
              Open to internships and project collaborations.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-4 relative overflow-hidden group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  Contact Me <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-0 border-0 bg-transparent shadow-none">
                <DialogTitle className="hidden">Contact Me</DialogTitle>
                <ContactForm />
              </DialogContent>
            </Dialog>

            <Button size="lg" variant="outline" className="gap-4 backdrop-blur-md bg-white/5 hover:bg-white/10 border-white/10" asChild style={{ zIndex: 1 }}>
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
