import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";


function Nav() {
  return (
    <div className="flex  items-center justify-between w-[90%] mx-auto mt-3 bg-primary py-4 px-2.5 text-secondary rounded-full">
        <p>LOGO</p>
        <DesktopNav/>
        <MobileNav/>
    </div>
  )
}

export default Nav