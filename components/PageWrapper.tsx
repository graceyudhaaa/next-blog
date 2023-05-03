"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

function PageWrapper({
    children,
    className,
}: {
    children: React.ReactNode
    className: string
}) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode="wait" onExitComplete={() => console.log('Bruh')}>
            <motion.div
                className={className}
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 2 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageWrapper