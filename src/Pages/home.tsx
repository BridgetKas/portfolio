import RotatingWheel from "../Components/rotatingWheel";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function HomePage() {
 
  return (
    <div className='flex flex-col items-center mt-[20px] mb-[60px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between' >
      <div className='w-full sm:w-[50%] text-center p-3 lg:text-left shadow-2xl rounded-3xl dark:text-whiteGradient'>
        <p className='text-[50px] font-bold  mb-5  animate-fade-in transition-all duration-400 ease-in-out'>
          Hi I'm <span className='name'>Bridget</span>
        </p>
        <div className='animate-slide-in-left transition-all duration-300 ease-in-out'>
          <p className='mb-3 '>Hello, welcome I'm a dedicated <span className='text-red-700 font-bold text-[18px]'>front-end developer</span> with a passion for crafting  responsive, and user-friendly web applications ensuring a seamless user experience.</p>
          <p className='mb-3'>Technologically, I possess expertise in modern frameworks and technologies like Javascript,React, TypeScript, and Tailwind CSS.As a driven individual, I continously strive to explore new domains within technology.</p>
          <p>Explore my work, and let's work together!</p>
          <div className="flex flex-row text-[25px] items-center justify-center gap-2.5 py-4 px-1">
            <a href='#' target='_blank' className='hover:scale-110 transform '><FaLinkedin /></a>
            <a href='#' target='_blank' className='hover:scale-110 transform '><FaGithub /></a>
            <a href='#' target='_blank' className='hover:scale-110 transform '><FaXTwitter /></a> 
          </div>
        </div>
      </div>
      <div className='w-full sm:w-[58%] self-start animate-slide-in-right p-3'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage