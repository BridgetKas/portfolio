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
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:text-[18px] sm:w-[95%] sm:mx-auto sm:mt-3 bg-secondary sm:py-4 sm:px-2.5 text-primary sm:rounded-full">
            <p>LOGO</p>
            <div className='sm:flex sm:flex-row sm:items-center gap-3 sm:w-[85%] md:w-[70%] lg:w-[60%]'>
                <div className='sm:flex sm:flex-row items-center gap-5' >
                    {
                        navbar.map((item)=> (
                            <div key={item.id}>
                                <NavLink to={item.path}>{item.label}</NavLink>
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex items-center space-x-2 bg-yellow text-primary px-3 py-2.5 rounded-full shadow animate-pulse">
                    < FaBriefcase  className="w-4 h-4 text-white" />
                    <span>Available for Work</span>
                </div>

            </div>
        </div>
  )
}

export default DesktopNav