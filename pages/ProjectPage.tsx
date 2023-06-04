"use client"

import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import clsx from 'clsx'

function ProjectPage() {
    const constraintsRef = useRef(null)
    const [activeWindow, setActiveWindow] = useState<string>('1')

    return (
        <motion.div className='h-screen w-auto' ref={constraintsRef}>
            <motion.div className={clsx('bg-chambray-800 h-60 w-60 absolute', {'z-[100]': activeWindow == '1'})} 
                drag
                dragConstraints={constraintsRef}
                onClick={() => setActiveWindow('1')}
            />
            <motion.div className={clsx('bg-red-800 h-60 w-60 absolute', {'z-[100]': activeWindow == '2'})}
                drag
                dragConstraints={constraintsRef}
                onClick={() => setActiveWindow('2')}
            />
        </motion.div >
        
    )
}

export default ProjectPage