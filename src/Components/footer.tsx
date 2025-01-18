import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 flex items-center justify-between  bg-secondary text-primary py-3 px-6'>
        <div className="hidden sm:block">
            <p className="flex flex-wrap sm:flex-row items-center gap-1.5">Copyright <FaRegCopyright /> 2025 Namugga Bridget All rights reserved.</p>
            {/* <p > Namugga Bridget.</p> */}

        </div>
        <div className="flex flex-row text-[16px] items-center text-center gap-2.5 sm:text-xl">
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
        </div>
    </footer>
  )
}

export default Footer