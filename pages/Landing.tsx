import { Button } from "@/components/Button";
import Link from "next/link";


function Landing() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="shrink-0 flex flex-col gap-y-3">
          <p className="text-chambray-950 dark:text-chambray-50 text-4xl sm:text-5xl font-extrabold font-montserrat">
            Hi! I’m grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
          </p>
          <p className="mt-5 text-sm md:text-lg dark:text-chambray-50">
            i love to learn about technology,
            <br />
            especially python and data science stuff
          </p>
          <p className="mt-5 text-sm md:text-lg dark:text-chambray-50">
            checkout my <Link href='/blog' className="group "><span className="relative font-bold inline-block z-10">blog <div className="bg-chambray-400 group-hover:w-full w-0 absolute bottom-0.5 h-[10%] z-[-1] transition-all duration-500" /></span></Link> and the <Link href='/project' className="group "><span className="relative font-bold inline-block z-10">project<div className="bg-chambray-400 group-hover:w-full w-0 absolute bottom-0.5 h-[10%] z-[-1] transition-all duration-500" /></span></Link> that i
            did
          </p>
          <Link href='/about'><Button className="mt-5" label="get in touch" /></Link>
        </div>
      </div>
      <p className="text-xs flex items-center justify-center dark:text-chambray-50">
        2023 Grace Yudha Satriawan
      </p>
    </main>
  );
}

export default Landing;
