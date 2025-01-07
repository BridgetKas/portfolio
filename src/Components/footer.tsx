import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='flex items-center justify-between bg-gray-800 text-white p-3'>
        <div>
            <p className="flex  flex-wrap sm:flex-row items-center gap-1.5">Copyright <FaRegCopyright />2025 Namugga Bridget. All rights reserved.</p>
        </div>
        <div className="flex flex-row text-[16px] items-center gap-1.5 sm:text-xl">
            <FaLinkedin />
            <FaGithub />
            <FaXTwitter />
        </div>
    </footer>
  )
}

export default Footer