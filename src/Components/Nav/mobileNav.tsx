import {  useState, useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


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
      label:"Contact Me",
      id:4,
      path:'/contact' 
  }
]
type bodyType = HTMLBodyElement| null
const body:bodyType= document.querySelector('body')

function MobileNav() {
    const [isOpen,setisOpen] = useState(false)
    const [dark,setDark] = useState(localStorage.getItem('Darktheme') === 'isTrue' ? true : false)
    
    useEffect(() => {
    const userTheme = localStorage.getItem('Darktheme')
    if(userTheme === 'isTrue'){
        document.documentElement.classList.add('dark')
    }else {
        document.documentElement.classList.remove('dark')
    }
    },[dark])                   

    const menuClicked = () => {
      setisOpen(!isOpen)
      if(isOpen && body){
        body.style.overflow='hidden'
      }
    }

    const handleToggle = () => {
      setDark(!dark)
      if(dark) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('Darktheme', 'isFalse')
      }else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('Darktheme', 'isTrue')
      }
    }

    const linkClicked=() =>{
      setisOpen(!isOpen)
    }
  
    return (
      <div className="flex items-center justify-between w-[95%] mx-auto mt-3  bg-secondary py-4 px-2.5 text-primary rounded-full sm:hidden">
        <button className='p-2' onClick={handleToggle}>
          {dark? <FaRegMoon size={28}/> : <MdOutlineWbSunny size={30}/>}
        </button>
        <div className='flex flex-col  '>
          <GiHamburgerMenu size={30} color='#2f2f2f' onClick={menuClicked} /> 
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open: ""}`}>
              {navbar.map(item => 
                <NavLink to={item.path} key={item.path} className='my-0 mx-[0.6rem] p-1.5 text-[18px] text-right text-primary w-full bg-secondary' onClick={linkClicked}>{item.label}</NavLink>
              )}
            </div>
        </div>
      </div>
    )
}

export default MobileNav