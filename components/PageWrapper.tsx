"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

function PageWrapper({
    children,
}: {
    children: React.ReactNode
    className?: string
}) {
    const pathname = usePathname()
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: 0.25 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageWrapper