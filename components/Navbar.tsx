"use client"

import { useTheme } from 'next-themes'
import { Button } from './Button'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'



function Navbar() {
  const { theme, setTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  return (<header className="font-montserrat flex sm:justify-between justify-center items-center py-2 px-2">
    <div className="text-chambray-950 dark:text-chambray-50 font-extrabold text-lg">
      <Link href='/'>
        grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
      </Link>
    </div>
    <div className="sm:flex sm:gap-5 dark:text-cyan-50 hidden items-center">
      <Link href='/blog'>blog</Link>
      <Link href='/project'>project</Link>
      <Link href='/contact'>contact</Link>
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