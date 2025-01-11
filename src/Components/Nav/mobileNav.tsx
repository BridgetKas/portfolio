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
      // component:<Button title='Home'/>,
      label:"Home",
      id:1,
      path:'/'
  },
 
  {
      // component:<Button title='Blog'/>,
      label:"Blog",
      id:2,
      path:'/blog'
  },
  {
      // component:<Button title='Projects'/>,
      label:"Projects",
      id:3,
      path:'/projects'
  },
  {
      // component:<Button title='Contact'/>,
      label:"Contact",
      id:4,
      path:'/contact' 
  }
]
function MobileNav() {
    const [isOpen,setisOpen] = useState(false)

    const menuClicked = () => {
      console.log('clicked')
      setisOpen(!isOpen)
    }

    const linkClicked=() =>{
      setisOpen(!isOpen)
    }
  
    return (
      <div className='flex flex-col sm:hidden'>
          <GiHamburgerMenu size={30} color={colors.black} onClick={menuClicked} /> 
          <div >
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open: ""}`}>
              {navbar.map(item => 
                <NavLink to={item.path} key={item.path} className='my-0 mx-[0.6rem] text-[18px]' onClick={linkClicked}>{item.label}</NavLink>
              )}
             
            </div>
          </div>
      </div>
  
    )
}

export default MobileNav