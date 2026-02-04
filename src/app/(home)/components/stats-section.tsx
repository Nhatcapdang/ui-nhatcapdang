'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState, memo } from 'react'
import { AnimatedNumber } from '@/components/number/animated-number'
import { Badge } from '@/components/ui/badge'
import { StarIcon, DownloadIcon, UsersIcon, ComponentIcon } from 'lucide-react'

interface StatItemProps {
	icon: React.ReactNode
	value: number
	label: string
	suffix?: string
	prefix?: string
	delay?: number
}

const StatItem = memo(function StatItem({ icon, value, label, suffix = '', prefix = '', delay = 0 }: StatItemProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [animatedValue, setAnimatedValue] = useState(0)

	useEffect(() => {
		if (isInView) {
			const timer = setTimeout(() => {
				setAnimatedValue(value)
			}, delay)
			return () => clearTimeout(timer)
		}
	}, [isInView, value, delay])

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.6, delay: delay / 1000 }}
			className="text-center p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="flex justify-center mb-4">
				<div className="p-3 rounded-full bg-primary/10 text-primary">
					{icon}
				</div>
			</div>
			
			<div className="text-3xl md:text-4xl font-bold mb-2 tabular-nums">
				{prefix}
				<AnimatedNumber 
					value={animatedValue}
					springOptions={{
						stiffness: 100,
						damping: 30,
					}}
				/>
				{suffix}
			</div>
			
			<p className="text-muted-foreground font-medium">{label}</p>
		</motion.div>
	)
})

const stats = [
	{
		icon: <ComponentIcon className="w-6 h-6" />,
		value: 12,
		label: 'Components',
		delay: 0,
	},
	{
		icon: <StarIcon className="w-6 h-6" />,
		value: 1200,
		label: 'GitHub Stars',
		delay: 200,
	},
	{
		icon: <DownloadIcon className="w-6 h-6" />,
		value: 5000,
		label: 'Downloads',
		suffix: '+',
		delay: 400,
	},
	{
		icon: <UsersIcon className="w-6 h-6" />,
		value: 100,
		label: 'Developers',
		suffix: '%',
		delay: 600,
	},
]

export default function StatsSection() {
	return (
		<section className="py-20 px-4 bg-muted/20">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<Badge className="mb-4">Trusted by Developers</Badge>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						Growing Community
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Join thousands of developers who are already building amazing projects with Nhatcapdang
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<StatItem
							key={index}
							icon={stat.icon}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
							prefix={stat.prefix}
							delay={stat.delay}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-12"
				>
					<p className="text-sm text-muted-foreground">
						* Numbers are illustrative and represent the growing adoption of modern React component libraries
					</p>
				</motion.div>
			</div>
		</section>
	)
}