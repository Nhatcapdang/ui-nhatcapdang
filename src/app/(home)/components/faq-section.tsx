'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface FAQItem {
	id: string
	question: string
	answer: string
}

const faqs: FAQItem[] = [
	{
		id: 'installation',
		question: 'How do I install Nhatcapdang components?',
		answer: 'You can install individual components using our CLI tool: `npx shadcn@latest add @nhatcapdang/component-name`. Alternatively, you can copy the component code directly from our documentation and paste it into your project.',
	},
	{
		id: 'dependencies',
		question: 'What are the dependencies?',
		answer: 'Most components only require Framer Motion (`motion/react`) and Tailwind CSS. Each component page lists its specific dependencies. We follow a modular approach - you only install what you need.',
	},
	{
		id: 'customization',
		question: 'Can I customize the components?',
		answer: 'Absolutely! All components follow a prop-first approach with extensive customization options. You can modify colors, animations, sizes, and behavior through props. Since you own the code, you can also modify the source directly.',
	},
	{
		id: 'typescript',
		question: 'Do you support TypeScript?',
		answer: 'Yes! All components are built with TypeScript and include full type definitions. You\'ll get excellent IntelliSense support and type safety out of the box.',
	},
	{
		id: 'license',
		question: 'What\'s the license?',
		answer: 'All components are released under the MIT license. This means you can use them freely in personal and commercial projects, modify them, and redistribute them without any restrictions.',
	},
	{
		id: 'performance',
		question: 'How do these components affect performance?',
		answer: 'Components are optimized for 60fps animations and use modern React patterns like `React.memo()` where appropriate. Framer Motion handles animation performance automatically, and our components are tree-shakable to minimize bundle size.',
	},
	{
		id: 'browser-support',
		question: 'Which browsers are supported?',
		answer: 'Components work in all modern browsers that support ES6+ and CSS Grid/Flexbox. This includes Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.',
	},
	{
		id: 'updates',
		question: 'How do I get updates?',
		answer: 'Since you copy the component code into your project, updates are manual. Check our documentation regularly for improvements, or follow our GitHub repository for notifications about new components and updates.',
	},
]

interface AccordionItemProps {
	faq: FAQItem
	isOpen: boolean
	onToggle: () => void
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
	return (
		<div className="border border-border rounded-lg overflow-hidden">
			<Button
				variant="ghost"
				onClick={onToggle}
				className="w-full p-4 sm:p-6 h-auto justify-between text-left hover:bg-muted/50 rounded-none"
			>
				<span className="text-sm sm:text-base font-medium pr-4">{faq.question}</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2 }}
					className="shrink-0"
				>
					<ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
				</motion.div>
			</Button>
			
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="overflow-hidden"
					>
						<div className="p-4 sm:p-6 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed">
							{faq.answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default function FAQSection() {
	const [openItems, setOpenItems] = useState<Set<string>>(new Set())

	const toggleItem = (id: string) => {
		const newOpenItems = new Set(openItems)
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id)
		} else {
			newOpenItems.add(id)
		}
		setOpenItems(newOpenItems)
	}

	return (
		<section className="py-20 px-4 bg-muted/20">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<HelpCircleIcon className="w-6 h-6 text-primary" />
						<Badge>FAQ</Badge>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Everything you need to know about using Nhatcapdang components in your projects
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="space-y-4"
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={faq.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							<AccordionItem
								faq={faq}
								isOpen={openItems.has(faq.id)}
								onToggle={() => toggleItem(faq.id)}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mt-12 p-6 border rounded-lg bg-card"
				>
					<h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
					<p className="text-muted-foreground mb-4">
						Check out our documentation or reach out to the community for help.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button asChild>
							<a href="/docs" target="_blank" rel="noopener noreferrer">
								View Documentation
							</a>
						</Button>
						<Button asChild variant="outline">
							<a href="https://github.com/nhatcapdang/nhatcapdang" target="_blank" rel="noopener noreferrer">
								GitHub Discussions
							</a>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	)
}