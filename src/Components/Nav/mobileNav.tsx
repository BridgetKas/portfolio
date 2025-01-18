import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'


const navbar = [
  {
      label:"Home",
      id:1,
      path:'/'
  },
 
  {
      label:"Blog",
      id:2,
      path:'/blog'
  },
  {
      label:"Projects",
      id:3,
      path:'/projects'
  },
  {
      label:"Contact",
      id:4,
      path:'/contact' 
  }
]
type bodyType = HTMLBodyElement| null
const body:bodyType= document.querySelector('body')

function MobileNav() {
    const [isOpen,setisOpen] = useState(false)

    const menuClicked = () => {
      setisOpen(!isOpen)
      if(isOpen && body){
        body.style.overflow='hidden'
      }
    }

    const linkClicked=() =>{
      setisOpen(!isOpen)
    }
  
    return (
      <div className="flex items-center justify-between w-[95%] mx-auto mt-3 bg-secondary py-4 px-2.5 text-primary rounded-full sm:hidden">
        <p>LOGO</p>
        <div className='flex flex-col  '>
          <GiHamburgerMenu size={30} color='#2f2f2f' onClick={menuClicked} /> 
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open: ""}`}>
              {navbar.map(item => 
                <NavLink to={item.path} key={item.path} className='my-0 mx-[0.6rem] p-1.5 text-[18px] text-right text-primary w-full bg-secondary' onClick={linkClicked}>{item.label}</NavLink>
              )}
              {/* <div className='bg-primary/0 w-full h-[40vh] '></div> */}
            </div>
        </div>
      </div>
    )
}

export default MobileNav