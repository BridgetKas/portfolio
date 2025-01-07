import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
        <div>
            Copyright <FaRegCopyright />2025 Namugga Bridget. All rights reserved.
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