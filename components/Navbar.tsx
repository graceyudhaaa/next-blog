export function Navbar(){
  return (<header className="font-sans flex sm:justify-between justify-center items-center my-2">
        <div className="text-chambray-950 dark:text-cyan-50 font-extrabold text-lg">
          grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
        </div>
        <div className="sm:flex sm:gap-5 dark:text-cyan-50 hidden">
          <div>blog</div>
          <div>project</div>
          <div>contact</div>
        </div>
    </header>)
}