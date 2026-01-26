import ScrollEveal from '@/components/scroll/scroll-reveal'

function ScrollRevealDemo() {
	return (
		<div className="h-[600px] overflow-y-auto space-y-8 p-8">
			<div className="h-[200px] flex items-center justify-center">
				<p className="text-muted-foreground">Scroll down to see the reveal effect</p>
			</div>

			<ScrollEveal>
				<div className="p-8 text-white">
					<h2 className="text-2xl font-bold mb-2">First Section</h2>
					<p className="text-white/80">
						This content reveals with a beautiful slide and fade animation when it enters the viewport.
					</p>
				</div>
			</ScrollEveal>

			<div className="h-[100px]" />

			<ScrollEveal>
				<div className="p-8 text-white">
					<h2 className="text-2xl font-bold mb-2">Second Section</h2>
					<p className="text-white/80">
						Each section animates independently as it comes into view.
					</p>
				</div>
			</ScrollEveal>

			<div className="h-[100px]" />

			<ScrollEveal>
				<div className=" p-8 text-white">
					<h2 className="text-2xl font-bold mb-2">Third Section</h2>
					<p className="text-white/80">
						The overlay slides across while the content fades in from below.
					</p>
				</div>
			</ScrollEveal>

			<div className="h-[200px]" />
		</div>
	)
}

export default ScrollRevealDemo
