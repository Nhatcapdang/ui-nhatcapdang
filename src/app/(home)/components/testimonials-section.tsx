'use client'

import { motion } from 'motion/react'
import Marquee from '@/components/marquee'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utils/cn'
import { BadgeCheck, Github } from 'lucide-react'
import React from 'react'

interface TestimonialType {
	id: number
	name: string
	handle: string
	role: string
	testimonial: string
	verified: boolean
	date: string
	avatar: string
}

const testimonials: TestimonialType[] = [
	{
		id: 1,
		name: 'Alex Chen',
		handle: '@alexdev',
		role: 'Frontend Engineer',
		testimonial:
			'These components saved me weeks of development time. The animations are buttery smooth and the API is intuitive. Perfect for modern React apps! 🚀',
		verified: true,
		date: '2h ago',
		avatar: 'AC',
	},
	{
		id: 2,
		name: 'Sarah Rodriguez',
		handle: '@sarahbuilds',
		role: 'UI/UX Designer',
		testimonial:
			'As a designer who codes, I love how these components bridge the gap between design and development. The attention to detail is incredible.',
		verified: true,
		date: '5h ago',
		avatar: 'SR',
	},
	{
		id: 3,
		name: 'Mike Thompson',
		handle: '@mikecodes',
		role: 'Full Stack Developer',
		testimonial:
			'The scroll-based animations are exactly what I needed for my portfolio. Clean code, great docs, and zero dependencies. Highly recommend!',
		verified: false,
		date: '1d ago',
		avatar: 'MT',
	},
	{
		id: 4,
		name: 'Emma Wilson',
		handle: '@emmareact',
		role: 'React Specialist',
		testimonial:
			'Finally, animated components that don\'t feel bloated. The prop-first approach makes customization a breeze. This is how component libraries should be built.',
		verified: true,
		date: '2d ago',
		avatar: 'EW',
	},
	{
		id: 5,
		name: 'Jake Martinez',
		handle: '@jakejs',
		role: 'Startup CTO',
		testimonial:
			'Integrated these into our SaaS product and the user engagement went through the roof. The parallax effects add that premium feel we were looking for.',
		verified: false,
		date: '3d ago',
		avatar: 'JM',
	},
	{
		id: 6,
		name: 'Olivia Park',
		handle: '@oliviacodes',
		role: 'Senior Developer',
		testimonial:
			'The TypeScript support is phenomenal. IntelliSense works perfectly and the component props are well-documented. A joy to work with!',
		verified: true,
		date: '4d ago',
		avatar: 'OP',
	},
	{
		id: 7,
		name: 'Ryan Kumar',
		handle: '@ryankumar',
		role: 'Creative Developer',
		testimonial:
			'These components helped me win a design award for my latest project. The animations are so smooth and professional-looking. Thank you! 🏆',
		verified: true,
		date: '5d ago',
		avatar: 'RK',
	},
	{
		id: 8,
		name: 'Luna Zhang',
		handle: '@lunadev',
		role: 'Product Engineer',
		testimonial:
			'The modular approach is perfect for our micro-frontend architecture. We only import what we need and the bundle size stays minimal.',
		verified: false,
		date: '6d ago',
		avatar: 'LZ',
	},
	{
		id: 9,
		name: 'Max Anderson',
		handle: '@maxbuilds',
		role: 'Tech Lead',
		testimonial:
			'Recommended these to my entire team. The consistency across components and the excellent documentation made onboarding super smooth.',
		verified: true,
		date: '1w ago',
		avatar: 'MA',
	},
	{
		id: 10,
		name: 'Zoe Foster',
		handle: '@zoedesigns',
		role: 'Design Engineer',
		testimonial:
			'The perfect balance between beautiful animations and performance. Finally found components that match our design system perfectly! ✨',
		verified: false,
		date: '1w ago',
		avatar: 'ZF',
	},
	{
		id: 11,
		name: 'Carlos Silva',
		handle: '@carlosreact',
		role: 'Frontend Architect',
		testimonial:
			'Been using these in production for months. Zero issues, great performance, and the community is growing fast. Solid choice for any React project.',
		verified: true,
		date: '2w ago',
		avatar: 'CS',
	},
	{
		id: 12,
		name: 'Ava Johnson',
		handle: '@avadev',
		role: 'Indie Developer',
		testimonial:
			'As a solo developer, these components let me create professional-looking apps without hiring a designer. The free license is a game-changer! 💎',
		verified: true,
		date: '2w ago',
		avatar: 'AJ',
	},
]

const TestimonialCard = React.memo(({ testimonial }: { testimonial: TestimonialType }) => {
	return (
		<div
			className={cn(
				'group relative flex w-full min-w-[280px] max-w-[380px] flex-col rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm sm:p-6',
				'transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10'
			)}
			role="listitem"
		>
			{/* Card Header */}
			<div className="flex items-start justify-between gap-2">
				<div className="flex items-start gap-2 sm:gap-3 min-w-0 flex-1">
					<Avatar className="size-10 sm:size-12 border-2 border-primary/20 shrink-0">
						<AvatarFallback className="bg-primary/10 text-sm sm:text-base font-semibold text-primary">
							{testimonial.avatar}
						</AvatarFallback>
					</Avatar>
					<div className="min-w-0 flex-1">
						<div className="flex items-center gap-1 sm:gap-1.5">
							<h3 className="truncate text-sm sm:text-base font-semibold text-foreground">
								{testimonial.name}
							</h3>
							{testimonial.verified && (
								<BadgeCheck
									className="size-3 sm:size-4 shrink-0 text-primary"
									aria-label="Verified user"
								/>
							)}
						</div>
						<p className="truncate text-xs sm:text-sm text-muted-foreground">
							{testimonial.handle}
						</p>
					</div>
				</div>

				<button
					className="opacity-50 shrink-0"
					disabled
					aria-label={`Visit ${testimonial.name}'s profile`}
					title="Profile links temporarily disabled"
				>
					<Github className="size-4 sm:size-5" />
				</button>
			</div>

			<p className="mt-3 sm:mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground lg:text-base">
				{testimonial.testimonial}
			</p>

			<div className="mt-3 sm:mt-4 flex items-center justify-between gap-2 border-t border-border/50 pt-3 sm:pt-4">
				<Badge variant="secondary" className="text-[10px] sm:text-xs shrink-0">
					{testimonial.role}
				</Badge>
				<span className="text-[10px] sm:text-xs text-muted-foreground shrink-0">
					{testimonial.date}
				</span>
			</div>

			<div
				className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				style={{
					background:
						'radial-gradient(circle at 50% 0%, rgba(var(--primary) / 0.1), transparent 70%)',
				}}
				aria-hidden="true"
			/>
		</div>
	)
})

TestimonialCard.displayName = 'TestimonialCard'

export default function TestimonialsSection() {
	return (
		<section
			className="relative overflow-hidden py-20 px-4"
			aria-labelledby="testimonials-heading"
		>
			<div className="relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-max text-center px-4 sm:px-6"
				>
					<h2
						id="testimonials-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
					>
						Loved by Developers
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground">
						See what developers are saying about Nhatcapdang components
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative mt-8 sm:mt-12 lg:mt-16 rounded-lg overflow-hidden"
					role="list"
					aria-label="Developer testimonials"
				>
					<Marquee pauseOnHover className="[--duration:25s]">
						{testimonials.slice(0, 6).map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</Marquee>

					<Marquee pauseOnHover reverse className="[--duration:30s]">
						{testimonials.slice(6, 12).map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</Marquee>
				</motion.div>
			</div>

			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"
				aria-hidden="true"
			/>
		</section>
	)
}