import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { colors } from '../../utilis/colors';



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
      setisOpen(!isOpen)
     }
  
    return (
      <div className='flex flex-col sm:hidden'>
          <GiHamburgerMenu size={30} color={colors.whiteGradient} onClick={menuClicked}/> 
          <div className= {`'flex flex-col absolute left-0 right-0 pr-[50%] top-[90px] w-full gap-[15px] items-end translate-x-[70%] transition-transform bg-red-400'${isOpen ? 'translate-x-0':''}`}>
            <div className='flex flex-col gap-[10px] items-end mr-[4%]'>
              {navbar.map(item => 
                <NavLink to={item.path} key={item.path} className='my-0 mx-[0.6rem] xl:marker:selection:mx-[1.5rem]'>{item.label}</NavLink>
              )}
            </div>
          </div>
      </div>
  
    )
}

export default MobileNav