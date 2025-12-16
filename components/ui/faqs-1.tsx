import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { TextReveal } from "@/components/ui/text-reveal"
import { SparklesText } from "@/components/ui/sparkles-text"

export function FaqsSection() {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
			<div className="space-y-2" id="about">
				<SparklesText className="text-center">
					<TextReveal>About Me</TextReveal>
				</SparklesText>
			</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg "
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
					>
						<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

const questions = [
	{ id: "item-1", title: "Who am I?", content: "I'm Gaurav — a Full-Stack Dev & GenAI enthusiast building intelligent web apps with Next.js & Node." },
	{ id: "item-2", title: "What have I built?", content: "Built 'MoreTrendz' (e-commerce), this 3D portfolio, and Chat with PDF web app with LLMs and core tools at Code-Catalyst." },
	{ id: "item-3", title: "What's my stack?", content: "React, Next.js, Node.js & Tailwind. Plus Framer Motion & Three.js for that extra spark." },
	{ id: "item-4", title: "Am I available?", content: "Yes! Ready for internships, freelance, and exciting collabs." },
	{ id: "item-5", title: "How can you contact me?", content: "Email: itsgauravrawat2005@gmail.com | Phone: +91 93198 10682 | GitHub: GauravRawat05" },
];
