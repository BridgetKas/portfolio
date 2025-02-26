import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 flex items-center justify-between bg-secondary text-primary py-3 px-6 dark:bg-darkFootNav  dark:text-whiteGradient'>
        <div className="hidden sm:block">
            <p className="flex flex-wrap sm:flex-row items-center gap-1.5">Copyright <FaRegCopyright /> 2025 Namugga Bridget All rights reserved.</p>
            {/* <p > Namugga Bridget.</p> */}

        </div>
        <div className="flex flex-row text-[16px] items-center text-center gap-2.5 sm:text-xl">
          <a href='https://linkedin.com/in/bridget-namugga-3a1b02166' target='_blank' className='hover:scale-110 transform p-1 focus'><FaLinkedin /></a>
          <a href='https://github.com/BridgetKas' target='_blank' className='hover:scale-110 transform p-1 focus'><FaGithub /></a>
          <a href='https://x.com/bridget_kasujja' target='_blank' className='hover:scale-110 transform p-1 focus'><FaXTwitter /></a> 
        </div>
    </footer>
  )
}

export default Footer