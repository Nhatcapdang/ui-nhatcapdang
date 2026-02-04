import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center space-y-4">
				<Spinner />
				<p className="text-muted-foreground">Loading amazing components...</p>
			</div>
		</div>
	)
}