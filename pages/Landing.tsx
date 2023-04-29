import { Button } from "@/components/Button";
import Link from "next/link";


function Landing() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="shrink-0 flex-col gap-5">
          <p className="text-chambray-950 dark:text-chambray-50 text-4xl sm:text-5xl font-extrabold font-montserrat">
            Hi! I’m grace<span className="text-chambray-700 dark:text-chambray-300">yudha</span>
          </p>
          <p className="mt-5 text-sm md:text-lg dark:text-chambray-50">
            i love to learn about technology,
            <br />
            especially python and data science stuff
          </p>
          <p className="mt-5 text-sm md:text-lg dark:text-chambray-50">
            checkout my <span className="hover:before:block hover:before:bg-chambray-400 hover:before:inset-x-1 hover:before:bottom-0.5 before:w-0 hover:before:w-full hover:before:h-[25%] hover:before:left-0 hover:before:absolute relative inline-block transition-all duration-1000">
              <span className="relative inline-block"><Link href='/blog'>blog</Link></span>
            </span> and the <span>project</span> that i
            did
          </p>
          <Button className="mt-5" label="get in touch" ></Button>
        </div>
      </div>
      <p className="text-xs flex items-center justify-center dark:text-chambray-50">
        2023 Grace Yudha Satriawan
      </p>
    </main>
  );
}

export default Landing;
