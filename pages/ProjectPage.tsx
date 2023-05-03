"use client"

import React, { useRef } from 'react'
import { motion } from "framer-motion"

function ProjectPage() {
    const constraintsRef = useRef(null)

    return (
        <motion.div className='h-screen w-auto' ref={constraintsRef}>
            <motion.div className='bg-chambray-800 h-60 w-60'
                drag
                dragConstraints={constraintsRef}
            />
        </motion.div >
    )
}

export default ProjectPage