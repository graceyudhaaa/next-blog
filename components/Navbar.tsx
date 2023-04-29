"use client"

import { useTheme } from 'next-themes'
import { Button } from './Button'
import { FaMoon, FaSun } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'




function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => { // prevent scrolling when navbar mobile open
    const body = document.querySelector('body');
    body!.style.overflow = open ? 'hidden' : 'auto';
  }, [open])

  // const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  return (<header className="font-montserrat bg-white dark:bg-chambray-950 py-2 px-2 z-50 w-full sticky top-0 ">
    <div className="max-w-5xl mx-auto flex justify-between sm:items-center">

      <button className={clsx("py-2 px-2 font-medium font-montserrat duration-400 lowercase transition-all duration-500", "sm:hidden",)
      }
        onClick={() => {
          setOpen(!open)
        }}>
        <div className={clsx("flex items-center gap-1",)}>
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </button>
      <div className="text-chambray-950 dark:text-chambray-50 font-extrabold text-lg">
        <Link href='/'>
          grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
        </Link>
      </div>
      <div className="flex gap-5 dark:text-cyan-50 items-center">
        <div className={clsx('flex flex-col divide-y divide-gray-200 dark:divide-chambray-800 sm:divide-y-0 sm:z-auto -z-10 dark:bg-chambray-950 bg-white sm:flex-row justify-center items-center sm:gap-5 absolute sm:static left-0 w-full transition-all duration-500', { 'top-12': open }, { 'top-[-500px]': !open })}>
          <Link href='/blog' className='group inline-flex justify-center items-center w-full py-3 sm:py-0'><span className="relative inline-block sm:z-10">blog <div className="bg-chambray-400 group-hover:w-full w-0 absolute bottom-0.5 h-[10%] z-[-1] transition-all duration-500" /></span></Link>
          <Link href='/project' className='group inline-flex justify-center items-center w-full py-3 sm:py-0'><span className="relative inline-block sm:z-10">project <div className="bg-chambray-400 group-hover:w-full w-0 absolute bottom-0.5 h-[10%] z-[-1] transition-all duration-500" /></span></Link>
          <Link href='/contact' className='group inline-flex justify-center items-center w-full py-3 sm:py-0'><span className="relative inline-block sm:z-10">contact <div className="bg-chambray-400 group-hover:w-full w-0 absolute bottom-0.5 h-[10%] z-[-1] transition-all duration-500" /></span></Link>
        </div>
        <Button icon={theme === "light" ? <FaSun /> : <FaMoon />}
          variant="secondary"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        />
      </div>
    </div>
    <div className={clsx('overscroll-none bg-black sm:hidden flex-1 w-screen absolute top-12 left-0 -z-20 transition-all origin-top duration-500', { 'opacity-50 h-screen': open }, { 'opacity-0 h-0': !open })} onClick={() => { setOpen(!open) }} />
  </header>)
}

export default Navbar