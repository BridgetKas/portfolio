import { NavLink } from 'react-router-dom'
import { FaBriefcase } from "react-icons/fa";


const navbar = [
    {
        label:'Home',
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

function DesktopNav() {
  return (
        <div className="hidden sm:flex sm:items-center sm:gap-4 sm:justify-between sm:w-[80%] text-[17px] md:w-[75%] lg:w-[60%]">
            <div className='sm:flex sm:flex-row items-center gap-5'>
                {
                    navbar.map((item)=> (
                        <div key={item.id}>
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </div>
                    ))
                }
            </div>
            
            <div className="flex items-center space-x-2 bg-yellow text-primary px-3 py-2 rounded-md shadow animate-pulse">
                < FaBriefcase  className="w-5 h-5 text-white" />
                <span>Available for Work</span>
            </div>

        </div>
  )
}

export default DesktopNav