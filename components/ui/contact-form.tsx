"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await submitContactForm(formData);
        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            setErrorMessage(result.message);
        }
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                    <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
                        Send Another Message
                    </Button>
                </motion.div>
            ) : (
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="How can I help you?"
                        />
                    </div>

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <Button type="submit" className="w-full" disabled={status === "loading"}>
                        {status === "loading" ? (
                            "Sending..."
                        ) : (
                            <>
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </>
                        )}
                    </Button>
                </form>
            )}
        </div>
    );
}
