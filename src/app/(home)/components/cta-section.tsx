'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRightIcon, CopyIcon, CheckIcon, BookOpenIcon, GithubIcon } from 'lucide-react'

function InstallCommand() {
	const [copied, setCopied] = useState(false)
	const command = 'npx shadcn@latest add @nhatcapdang/marquee'

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(command)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy:', err)
		}
	}

	return (
		<div className="relative max-w-lg mx-auto">
			<div className="flex items-center gap-2 p-4 bg-muted rounded-lg border font-mono text-sm">
				<span className="text-muted-foreground">$</span>
				<span className="flex-1">{command}</span>
				<Button
					size="sm"
					variant="ghost"
					onClick={copyToClipboard}
					className="h-8 w-8 p-0 hover:bg-background"
				>
					{copied ? (
						<CheckIcon className="w-4 h-4 text-green-500" />
					) : (
						<CopyIcon className="w-4 h-4" />
					)}
				</Button>
			</div>
		</div>
	)
}

export default function CTASection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.3, margin: '0px 0px -10% 0px' })

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
			
			<div ref={ref} className="relative max-w-4xl mx-auto text-center">
				{/* Reveal animation container */}
				<div className="relative overflow-hidden">
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 75 },
							visible: { opacity: 1, y: 0 },
						}}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Badge className="mb-6">Get Started Today</Badge>
						
						<h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
							Ready to Build Something Amazing?
						</h2>
						
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
							Join thousands of developers who are already creating stunning React applications with Nhatcapdang components.
						</p>

						<div className="space-y-8">
							{/* Install command */}
							<div>
								<p className="text-sm text-muted-foreground mb-4">Install your first component:</p>
								<InstallCommand />
							</div>

							{/* Action buttons */}
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Button asChild size="lg" className="text-base px-8 py-3">
									<Link href="/docs">
										<BookOpenIcon className="w-5 h-5" />
										Browse Documentation
										<ArrowRightIcon className="w-4 h-4" />
									</Link>
								</Button>
								
								<Button asChild variant="outline" size="lg" className="text-base px-8 py-3">
									<Link href="/docs/components">
										View All Components
									</Link>
								</Button>
								
								<Button asChild variant="ghost" size="lg" className="text-base px-8 py-3">
									<a href="https://github.com/nhatcapdang/nhatcapdang" target="_blank" rel="noopener noreferrer">
										<GithubIcon className="w-5 h-5" />
										Star on GitHub
									</a>
								</Button>
							</div>
						</div>

						{/* Features grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
							<motion.div
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="p-6 rounded-lg bg-card border"
							>
								<h3 className="font-semibold mb-2">🚀 Quick Setup</h3>
								<p className="text-sm text-muted-foreground">
									Get started in minutes with our CLI tool or copy-paste approach
								</p>
							</motion.div>

							<motion.div
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="p-6 rounded-lg bg-card border"
							>
								<h3 className="font-semibold mb-2">💎 Premium Quality</h3>
								<p className="text-sm text-muted-foreground">
									Professional animations and interactions that make your app stand out
								</p>
							</motion.div>

							<motion.div
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="p-6 rounded-lg bg-card border"
							>
								<h3 className="font-semibold mb-2">🔧 Full Control</h3>
								<p className="text-sm text-muted-foreground">
									Own the code, customize everything, and adapt to your needs
								</p>
							</motion.div>
						</div>
					</motion.div>

					{/* Reveal overlay */}
					<motion.div
						variants={{
							hidden: { left: 0 },
							visible: { left: '100%' },
						}}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.6, ease: 'easeIn' }}
						className="absolute top-0 left-0 w-full h-full bg-primary"
					/>
				</div>
			</div>
		</section>
	)
}