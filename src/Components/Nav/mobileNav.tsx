import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { colors } from '../../utilis/colors';
import styles from './nav.module.css'



// interface menuType{
//   icons:React.ReactNode[],
//   id:number,
//   label:string,
// }

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
type bodyType = HTMLHtmlElement| null
const body:bodyType= document.querySelector('html')

function MobileNav() {
    const [isOpen,setisOpen] = useState(false)

    const menuClicked = () => {
      setisOpen(!isOpen)
      if(isOpen && body){
        console.log('hello')
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
          <GiHamburgerMenu size={30} color={colors.black} onClick={menuClicked} /> 
          <div>
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open: ""}`}>
              {navbar.map(item => 
                <NavLink to={item.path} key={item.path} className='my-0 mx-[0.6rem] text-[18px]' onClick={linkClicked}>{item.label}</NavLink>
              )}
              <div className='bg-primary  w-full h-[40vh] '></div>
            </div>
          </div>

        </div>
      </div>
    )
}

export default MobileNav