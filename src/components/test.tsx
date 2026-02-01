'use client'

import { useEffect, useRef } from 'react'

interface Particle3D {
    x: number
    y: number
    z: number
    baseX: number
    baseY: number
    baseZ: number
    color: string
}

export default function Test() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        canvas.width = 900
        canvas.height = 400

        const particles: Particle3D[] = []
        const text = 'NHATCAPDANG'
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const focalLength = 300
        const depth = 50 // 3D depth of text

        // Create offscreen canvas for text sampling
        const offCanvas = document.createElement('canvas')
        offCanvas.width = canvas.width
        offCanvas.height = canvas.height
        const offCtx = offCanvas.getContext('2d')
        if (!offCtx) return

        // Draw text to get pixel data
        offCtx.fillStyle = 'white'
        offCtx.font = 'bold 100px Arial'
        offCtx.textAlign = 'center'
        offCtx.textBaseline = 'middle'
        offCtx.fillText(text, canvas.width / 2, canvas.height / 2)

        // Get image data
        const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Create 3D particles from text pixels with multiple Z layers
        const zLayers = 15 // Number of depth layers
        for (let layer = 0; layer < zLayers; layer++) {
            const z = (layer - zLayers / 2) * (depth / zLayers)
            
            for (let y = 0; y < canvas.height; y += 4) {
                for (let x = 0; x < canvas.width; x += 4) {
                    const index = (y * canvas.width + x) * 4
                    if (data[index + 3] > 128) {
                        // Gradient color based on depth
                        const hue = 200 + (layer / zLayers) * 160
                        particles.push({
                            x: x - centerX,
                            y: y - centerY,
                            z: z,
                            baseX: x - centerX,
                            baseY: y - centerY,
                            baseZ: z,
                            color: `hsl(${hue}, 100%, ${50 + layer * 2}%)`
                        })
                    }
                }
            }
        }

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current.x = (e.clientX - rect.left - centerX) / centerX
            mouseRef.current.y = (e.clientY - rect.top - centerY) / centerY
        }

        canvas.addEventListener('mousemove', handleMouseMove)

        // Animation variables
        let angleX = 0
        let angleY = 0
        let autoRotateY = 0
        let animationId: number

        // 3D rotation functions
        const rotateX = (y: number, z: number, angle: number) => {
            const cos = Math.cos(angle)
            const sin = Math.sin(angle)
            return {
                y: y * cos - z * sin,
                z: z * cos + y * sin
            }
        }

        const rotateY = (x: number, z: number, angle: number) => {
            const cos = Math.cos(angle)
            const sin = Math.sin(angle)
            return {
                x: x * cos - z * sin,
                z: z * cos + x * sin
            }
        }

        // Project 3D to 2D with perspective
        const project = (x: number, y: number, z: number) => {
            const scale = focalLength / (focalLength + z)
            return {
                x: x * scale + centerX,
                y: y * scale + centerY,
                scale: scale
            }
        }

        // Animation loop
        const animate = () => {
            // Clear canvas with gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, '#0a0a1a')
            gradient.addColorStop(1, '#1a0a2a')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update rotation based on mouse (smooth follow)
            angleY += (mouseRef.current.x * 0.5 - angleY) * 0.05
            angleX += (mouseRef.current.y * 0.3 - angleX) * 0.05
            
            // Auto rotation
            autoRotateY += 0.005

            // Transform and sort particles by Z for proper depth rendering
            const transformedParticles = particles.map((p, index) => {
                // Apply rotations
                let { x, z } = rotateY(p.baseX, p.baseZ, angleY + autoRotateY)
                let { y, z: newZ } = rotateX(p.baseY, z, angleX)

                // Project to 2D
                const projected = project(x, y, newZ)

                return {
                    ...projected,
                    z: newZ,
                    originalIndex: index,
                    color: p.color
                }
            })

            // Sort by Z (back to front)
            transformedParticles.sort((a, b) => b.z - a.z)

            // Draw particles
            for (const p of transformedParticles) {
                const size = Math.max(0.5, 2.5 * p.scale)
                const alpha = Math.min(1, Math.max(0.2, (p.z + 100) / 200))
                
                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
                
                // Parse HSL and add alpha
                const colorMatch = p.color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
                if (colorMatch) {
                    const [, h, s, l] = colorMatch
                    ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${alpha})`
                    
                    // Glow effect for front particles
                    if (p.z < 20) {
                        ctx.shadowBlur = 8 * p.scale
                        ctx.shadowColor = `hsla(${h}, 100%, 70%, ${alpha * 0.8})`
                    }
                } else {
                    ctx.fillStyle = p.color
                }
                
                ctx.fill()
                ctx.shadowBlur = 0
            }

            // Draw subtle reflection
            ctx.save()
            ctx.globalAlpha = 0.15
            ctx.scale(1, -0.3)
            ctx.translate(0, -canvas.height * 4.5)
            
            for (const p of transformedParticles.slice(0, transformedParticles.length / 3)) {
                const size = Math.max(0.3, 1.5 * p.scale)
                ctx.beginPath()
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.fill()
            }
            ctx.restore()

            // Add ambient glow at center
            const glowGradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, 300
            )
            glowGradient.addColorStop(0, 'rgba(100, 50, 255, 0.1)')
            glowGradient.addColorStop(1, 'rgba(100, 50, 255, 0)')
            ctx.fillStyle = glowGradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            animationId = requestAnimationFrame(animate)
        }

        // Start animation
        animate()

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId)
            canvas.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className="flex flex-col items-center gap-4 p-8 bg-black min-h-screen">
            <h1 className="text-2xl font-bold text-white">3D Particle Text</h1>
            <p className="text-gray-400 text-sm">Move your mouse to rotate the 3D text!</p>
            <canvas
                ref={canvasRef}
                className="rounded-xl cursor-move"
                style={{ boxShadow: '0 0 60px rgba(100, 50, 255, 0.3)' }}
            />
        </div>
    )
}