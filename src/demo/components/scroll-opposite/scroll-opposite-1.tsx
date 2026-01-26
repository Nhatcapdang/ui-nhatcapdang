import ScrollOpposite from '@/components/scroll/scroll-opposite';
import { randomJoke } from '@/utils/random-joke';
import Image from 'next/image';

function ScrollOppositeDemo() {

	const joke = randomJoke();
	const joke2 = randomJoke();

	return (
		<div className='px-10'>
			<div className="h-[50vh] flex items-center justify-center">
				<p className="text-muted-foreground">Scroll down to see the effect</p>
			</div>

			<ScrollOpposite height="30vh" >
				<div key="1" className="h-(--height)">
					<div className="rounded-lg overflow-hidden relative w-full h-full">
						<Image
							src="https://cataas.com/cat"
							alt="nhatcapdang random cat"
							fill
							aria-label="nhatcapdang random cat"
							role="img"
							title="nhatcapdang random cat"
							priority
							className='object-cover'
						/>
					</div>
				</div>
				<div key="2" className="h-(--height) content-center">
					<h1 className="text-2xl font-bold ">{joke.setup}</h1>
					<p className='text-xl text-muted-foreground '>{joke.punchline} 🤣🤣🤣</p>
				</div>
				<div key="3" className="h-(--height) ">
					<div className="rounded-lg overflow-hidden relative w-full h-full">
						<Image
							src="https://cataas.com/cat/says/hello"
							alt="nhatcapdang random cat"
							fill
							aria-label="nhatcapdang random cat"
							role="img"
							title="nhatcapdang random cat"
							priority
							className='object-cover'
						/>
					</div>
				</div>
				<div key="4" className="h-(--height) content-center">
					<h1 className="text-2xl font-bold ">{joke2.setup}</h1>
					<p className='text-xl text-muted-foreground '>{joke2.punchline} 🤣🤣🤣</p>
				</div>
			</ScrollOpposite>

			<div className="h-[50vh] flex items-center justify-center">
				<p className="text-muted-foreground">Keep scrolling</p>
			</div>
		</div>
	)
}

export default ScrollOppositeDemo
