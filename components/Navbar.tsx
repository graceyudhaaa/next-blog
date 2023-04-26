"use client"

import { useTheme } from 'next-themes'



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

  return (<header className="font-sans flex sm:justify-between justify-center items-center py-2 px-2">
    <div className="text-chambray-950 dark:text-cyan-50 font-extrabold text-lg">
      grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
    </div>
    <div className="sm:flex sm:gap-5 dark:text-cyan-50 hidden">
      <div>blog</div>
      <div>project</div>
      <div>contact</div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" checked={theme === 'dark'} className="sr-only peer" onChange={() => { }} />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }} ></div>
      </label>
    </div>
  </header>)
}

export default Navbar