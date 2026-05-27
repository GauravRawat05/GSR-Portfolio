"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Check } from 'lucide-react';

const links = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
    { title: 'Home', href: '#home' },
];

export default function FooterSection() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("itsgauravrawat2005@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyPhone = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("+919319810682");
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    return (
        <footer className="md:pt-0 md:pb-32" style={{ padding: "0vh 0 10vh 0" }}>
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center items-center gap-6 text-sm">
                    <Link href="https://github.com/GauravRawat05" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary block">
                        <Github className="size-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gauravsinghrawat1310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary block">
                        <Linkedin className="size-6" />
                    </Link>
                    
                    {/* Interactive Email Copy Button */}
                    <button 
                        onClick={handleCopyEmail}
                        aria-label="Copy Email" 
                        className="text-muted-foreground hover:text-primary block relative group cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
                    >
                        {copiedEmail ? (
                            <Check className="size-6 text-green-500 transition-all scale-110" />
                        ) : (
                            <Mail className="size-6 transition-all" />
                        )}
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/80 dark:bg-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
                            {copiedEmail ? "Copied!" : "Copy Email"}
                        </span>
                    </button>

                    {/* Interactive Phone Copy Button */}
                    <button 
                        onClick={handleCopyPhone}
                        aria-label="Copy Phone Number" 
                        className="text-muted-foreground hover:text-primary block relative group cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
                    >
                        {copiedPhone ? (
                            <Check className="size-6 text-green-500 transition-all scale-110" />
                        ) : (
                            <Phone className="size-6 transition-all" />
                        )}
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/80 dark:bg-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
                            {copiedPhone ? "Copied!" : "Copy Phone"}
                        </span>
                    </button>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Gaurav Singh Rawat. All rights reserved.</span>
            </div>
        </footer>
    );
}