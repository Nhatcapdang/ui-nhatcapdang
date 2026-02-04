import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GithubIcon, TwitterIcon, LinkedinIcon, BookOpenIcon, ComponentIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
	{
		group: 'Components',
		items: [
			{
				title: 'Marquee',
				href: '/docs/components/marquee',
			},
			{
				title: 'Animated Number',
				href: '/docs/components/number/animated-number',
			},
			{
				title: 'Scroll Reveal',
				href: '/docs/components/scroll/scroll-reveal',
			},
			{
				title: 'Parallax Scroll',
				href: '/docs/components/scroll/parallax-scroll-1',
			},
			{
				title: 'Transition Panel',
				href: '/docs/components/tabs/transition-panel',
			},
			{
				title: 'View All',
				href: '/docs/components',
			},
		],
	},
	{
		group: 'Documentation',
		items: [
			{
				title: 'Getting Started',
				href: '/docs',
			},
			{
				title: 'Installation',
				href: '/docs/components/installation',
			},
			{
				title: 'Components',
				href: '/docs/components',
			},
			{
				title: 'Blocks',
				href: '/docs/blocks',
			},
		],
	},
	{
		group: 'Resources',
		items: [
			{
				title: 'GitHub',
				href: 'https://github.com/nhatcapdang/nhatcapdang',
			},
			{
				title: 'Examples',
				href: '/docs/examples',
			},
			{
				title: 'Changelog',
				href: 'https://github.com/nhatcapdang/nhatcapdang/releases',
			},
			{
				title: 'Contributing',
				href: 'https://github.com/nhatcapdang/nhatcapdang/blob/main/CONTRIBUTING.md',
			},
		],
	},
	{
		group: 'Legal',
		items: [
			{
				title: 'MIT License',
				href: 'https://github.com/nhatcapdang/nhatcapdang/blob/main/LICENSE',
			},
			{
				title: 'Privacy Policy',
				href: '/privacy',
			},
			{
				title: 'Terms of Service',
				href: '/terms',
			},
		],
	},
]

export default function FooterSection() {
	return (
		<footer className="relative bg-muted/30 border-t">
			<div className="mx-auto max-w-6xl px-6 py-12">
				{/* Main footer content */}
				<div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
					{/* Brand section */}
					<div className="lg:col-span-2 space-y-6">
						<Link href="/" aria-label="go home" className="block w-fit">
							<div className="flex items-center gap-3">
								<ComponentIcon className="w-8 h-8 text-primary" />
								<span className="text-2xl font-bold">Nhatcapdang</span>
							</div>
						</Link>
						
						<p className="text-muted-foreground max-w-md leading-relaxed">
							React components for creative developers. Build stunning, animated interfaces with our collection of highly customizable components.
						</p>

						{/* Social links */}
						<div className="flex gap-4">
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="hover:bg-primary/10 hover:text-primary"
							>
								<a
									href="https://github.com/nhatcapdang/nhatcapdang"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<GithubIcon className="w-5 h-5" />
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="hover:bg-primary/10 hover:text-primary"
							>
								<a
									href="https://twitter.com/nhatcapdang"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
								>
									<TwitterIcon className="w-5 h-5" />
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="hover:bg-primary/10 hover:text-primary"
							>
								<a
									href="https://linkedin.com/in/nhatcapdang"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<LinkedinIcon className="w-5 h-5" />
								</a>
							</Button>
						</div>
					</div>

					{/* Links grid */}
					<div className="lg:col-span-3">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{links.map((linkGroup, index) => (
								<div key={index} className="space-y-4">
									<h3 className="font-semibold text-sm">{linkGroup.group}</h3>
									<ul className="space-y-3">
										{linkGroup.items.map((item, itemIndex) => (
											<li key={itemIndex}>
												<Link
													href={item.href}
													className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Newsletter section */}
				<div className="mt-12 pt-8 border-t">
					<div className="max-w-md">
						<h3 className="font-semibold mb-2">Stay Updated</h3>
						<p className="text-sm text-muted-foreground mb-4">
							Get notified about new components and updates.
						</p>
						<form className="flex gap-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="flex-1"
								required
							/>
							<Button type="submit" size="sm">
								Subscribe
							</Button>
						</form>
						<p className="text-xs text-muted-foreground mt-2">
							No spam, unsubscribe at any time.
						</p>
					</div>
				</div>

				{/* Bottom section */}
				<div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Nhatcapdang. All rights reserved.
					</p>
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<span>Built with</span>
						<div className="flex items-center gap-2">
							<span>Next.js</span>
							<span>•</span>
							<span>React</span>
							<span>•</span>
							<span>Tailwind CSS</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}