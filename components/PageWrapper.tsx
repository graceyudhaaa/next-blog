"use client"

import { AnimatePresence, motion } from "framer-motion"

function PageWrapper({
    children,
    className,
}: {
    children: React.ReactNode
    className: string
}) {
    return (
        <AnimatePresence>
            <motion.div
                className={className}
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