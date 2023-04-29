"use client"

import { useTheme } from 'next-themes'
import { Button } from './Button'
import { FaMoon, FaSun } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'




function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  // const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  return (<header className="font-montserrat bg-inherit flex justify-between sm:items-center py-2 px-2 z-50 w-full relative">
    <button className={clsx('text-xs',
      "py-2 px-2 font-medium font-montserrat transition duration-400 lowercase", "sm:hidden",)
    }
      onClick={() => {
        setOpen(!open)
      }}>
      <div className={clsx("flex items-center gap-1",)}>
        <GiHamburgerMenu />
      </div>
    </button>
    <div className="text-chambray-950 dark:text-chambray-50 font-extrabold text-lg">
      <Link href='/'>
        grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
      </Link>
    </div>
    <div className="flex gap-5 dark:text-cyan-50 items-center">
      <div className={clsx('flex flex-col -z-10 dark:bg-chambray-950 bg-white sm:flex-row justify-center items-center sm:gap-3 absolute sm:static left-0 w-full transition-all duration-500', { 'top-14': open }, { 'top-[-500px]': !open })}>
        <Link href='/blog' className='py-3 sm:py-0'>blog</Link>
        <Link href='/project' className='py-3 sm:py-0'>project</Link>
        <Link href='/contact' className='py-3 sm:py-0'>contact</Link>
      </div>
      <Button icon={theme === "light" ? <FaSun /> : <FaMoon />}
        variant="secondary"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      />
    </div>
  </header>)
}

export default Navbar