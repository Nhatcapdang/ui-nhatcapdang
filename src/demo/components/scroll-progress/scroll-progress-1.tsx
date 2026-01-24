import ScrollProgress from '@/components/scroll/scroll-progress'

function ScrollProgressDemo() {
	return (
		<div className="p-8">
			<ScrollProgress className="h-[400px] overflow-y-auto pr-8">
				<div className="space-y-8">
					<section className="space-y-4">
						<h2 className="text-2xl font-bold">Introduction</h2>
						<p className="text-muted-foreground">
							Welcome to this scrollable content area. As you scroll through this container,
							the progress indicator on the right will update to show your current position.
						</p>
						<p className="text-muted-foreground">
							The progress is displayed both as a visual line indicator and a numeric percentage.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold">Features</h2>
						<ul className="list-disc list-inside text-muted-foreground space-y-2">
							<li>Real-time scroll position tracking</li>
							<li>Smooth animated progress updates</li>
							<li>Visual tick marks for reference</li>
							<li>Percentage badge display</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold">How It Works</h2>
						<p className="text-muted-foreground">
							The component uses Motion&apos;s useScroll hook to track the scroll position
							of its container. The progress is then transformed into both a percentage
							string for positioning and a rounded number for display.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold">Use Cases</h2>
						<p className="text-muted-foreground">
							This component is perfect for long-form content like articles, documentation,
							terms of service pages, or any scrollable container where users benefit
							from knowing their reading progress.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold">Customization</h2>
						<p className="text-muted-foreground">
							You can customize the appearance by passing additional classes via the
							className prop. The component uses CSS variables for progress positioning,
							making it easy to adapt to different themes.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold">Conclusion</h2>
						<p className="text-muted-foreground">
							The Scroll Progress component provides an elegant way to show users their
							position within scrollable content. It&apos;s lightweight, performant, and
							enhances the user experience for long-form reading.
						</p>
					</section>
				</div>
			</ScrollProgress>
		</div>
	)
}

export default ScrollProgressDemo
