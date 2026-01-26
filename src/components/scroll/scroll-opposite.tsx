'use client'
import { cn } from '@/utils/cn'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { CSSProperties, useRef } from 'react'

interface ScrollOppositeProps {
    className?: string
    children: React.ReactNode[]
    height: string
}

/**
 * @example
 * <ScrollOpposite height="30vh" >
 *  <div key="1" className="h-(--height)">
 *    <h1>lorem ipsum dolor sit amet</h1>
 *  </div>
 *  <div key="2" className="h-(--height)">
 *    <h1 >lorem ipsum dolor sit amet</h1>
 *  </div>
 * </ScrollOpposite>
 */
export default function ScrollOpposite({
    className,
    children,
    height,
}: ScrollOppositeProps) {
    const unit = height.match(/[a-zA-Z]+/)?.[0] || 'px'
    const heightNumber = parseFloat(height.replace(unit, ''))
    const halfLength = children.length / 2
    const offset = `-${(heightNumber * halfLength - heightNumber) + unit}`

    const target = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target,
        offset: ['30% center', '70% center'],
    })

    const topY = useTransform(scrollYProgress, [0, 1], [offset, `0${unit}`])
    const bottomY = useTransform(scrollYProgress, [0, 1], [`0${unit}`, offset])
    const bottomYSpring = useSpring(bottomY, { mass: 3, stiffness: 400, damping: 50 })
    const topYSpring = useSpring(topY, { mass: 3, stiffness: 400, damping: 50 })

    return (
        <div
            style={{ '--height': height } as CSSProperties}
            ref={target} className={cn(`grid grid-cols-2 gap-4 overflow-hidden rounded-lg h-(--height)`, className)}
        >
            <motion.div data-slot='scroll-left' className='relative top-0 left-0 w-full h-full' style={{ y: bottomYSpring }}>
                {children.slice(0, halfLength)}
            </motion.div>
            <motion.div data-slot='scroll-right' className='relative top-0 left-0 w-full h-full' style={{ top: topYSpring }}>
                {children.slice(halfLength)}
            </motion.div>
        </div>
    )
}
