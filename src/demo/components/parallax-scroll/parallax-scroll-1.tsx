import ParallaxScroll from '@/components/scroll/parallax-scroll'
import Image from 'next/image'

function ParallaxScrollDemo() {
	return (
		<div>
			<div className="h-screen flex items-center justify-center">
				<p className="text-muted-foreground">Scroll down to see the parallax effect</p>
			</div>

			<ParallaxScroll>
				<div className="relative w-full h-full rounded-xl overflow-hidden grid grid-cols-4  gap-4 liquid-glass p-4">
					{Array.from({ length: 8 }).map((_, index) => (
						<div key={index} className="relative w-full h-full rounded-xl overflow-hidden aspect-square">
							<Image
								src="https://cataas.com/cat"
								alt="Parallax demo image"
								fill
								className="object-cover"
								priority
							/>
						</div>
					))}
				</div>
			</ParallaxScroll>

			<div className="h-screen flex items-center justify-center">
				<p className="text-muted-foreground">End of demo</p>
			</div>
		</div>
	)
}

export default ParallaxScrollDemo
