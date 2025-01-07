import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='flex items-center justify-between bg-gray-800 text-white gap-1.5'>
        <div>
            <p className="flex flex-row items-center">Copyright <FaRegCopyright />2025 Namugga Bridget. All rights reserved.</p>
        </div>
        <div>
            <FaLinkedin />
            <FaGithub />
            <FaXTwitter />
        </div>
    </footer>
  )
}

export default Footer