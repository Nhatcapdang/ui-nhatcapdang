import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from './components/hero-section'
import Loading from './components/loading'
import { ErrorBoundary } from './components/error-boundary'

// Dynamically import sections for better performance
const FeaturesSection = dynamic(() => import('./components/features-section'), {
	loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

const ShowcaseSection = dynamic(() => import('./components/showcase-section'), {
	loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

const StatsSection = dynamic(() => import('./components/stats-section'), {
	loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
})

const TestimonialsSection = dynamic(() => import('./components/testimonials-section'), {
	loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

const FAQSection = dynamic(() => import('./components/faq-section'), {
	loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
})

const CTASection = dynamic(() => import('./components/cta-section'), {
	loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
})

const FooterSection = dynamic(() => import('./components/footer-section'), {
	loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
})

export default function HomePage() {
	return (
		<main className="min-h-screen">
			{/* Hero Section - Load immediately */}
			<ErrorBoundary>
				<HeroSection />
			</ErrorBoundary>

			{/* Lazy load other sections with error boundaries */}
			<ErrorBoundary>
				<Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<FeaturesSection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<ShowcaseSection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-64 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<StatsSection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<TestimonialsSection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-96 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<FAQSection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-64 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<CTASection />
				</Suspense>
			</ErrorBoundary>

			<ErrorBoundary>
				<Suspense fallback={<div className="h-64 animate-pulse bg-muted/20 rounded-lg mx-4" />}>
					<FooterSection />
				</Suspense>
			</ErrorBoundary>
		</main>
	)
}