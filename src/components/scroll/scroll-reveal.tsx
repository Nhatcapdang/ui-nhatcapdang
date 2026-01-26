'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5, margin: '0px 0px -10% 0px' });

    return <div ref={ref} className="relative overflow-hidden">
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: '100%' },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="absolute top-0 left-0 w-full h-full bg-primary"
        />
    </div>
}