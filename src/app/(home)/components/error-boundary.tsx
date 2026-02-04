'use client'

import { Component, ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
	children: ReactNode
	fallback?: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(_: Error): State {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error('Error caught by boundary:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className="min-h-[400px] flex items-center justify-center">
						<div className="text-center space-y-4 p-8">
							<h2 className="text-2xl font-bold">Something went wrong</h2>
							<p className="text-muted-foreground">
								We encountered an error loading this section.
							</p>
							<Button
								onClick={() => this.setState({ hasError: false })}
								variant="outline"
							>
								Try again
							</Button>
						</div>
					</div>
				)
			)
		}

		return this.props.children
	}
}