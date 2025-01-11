import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";


function Nav() {
  return (
    <div className="flex  items-center justify-between w-[90%] mx-auto mt-3">
        <p>LOGO</p>
        <DesktopNav/>
        <div className="block text-4xl items-center sm:hidden">
            <MobileNav/>
        </div>
    </div>
  )
}

export default Nav