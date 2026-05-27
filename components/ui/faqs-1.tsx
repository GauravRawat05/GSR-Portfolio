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
	{ id: "item-1", title: "Who am I?", content: "I'm Gaurav — a Full-Stack Developer & QA Executive with production experience building secure backend and frontend architectures." },
	{ id: "item-2", title: "What have I built?", content: "Built the Task Management System and Lead Management System backends (deployed to production), 'MoreTrendz' (e-commerce platform), and several GenAI tools like ChatPDF." },
	{ id: "item-3", title: "What's my stack?", content: "React.js, Next.js, Vue.js, Node.js, Express.js, MongoDB, TypeScript, and Agentic AI workflows." },
	{ id: "item-4", title: "Am I available?", content: "Yes! IBM AI Certified and available to join immediately for Full-Stack Developer roles or internships." },
	{ id: "item-5", title: "How can you contact me?", content: "Email: itsgauravrawat2005@gmail.com | Phone: +91 93198 10682 | GitHub: GauravRawat05" },
];
