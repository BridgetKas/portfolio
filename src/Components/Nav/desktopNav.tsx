import { NavLink } from 'react-router-dom'
import { FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";


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
    const navigate = useNavigate()

    function handleClick() {
      navigate('./contact')
      
    }
  return (
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:text-[18px] sm:w-[95%] sm:mx-auto sm:mt-3 bg-secondary sm:py-4 sm:px-2.5 text-primary sm:rounded-full">
            {/* <p>LOGO</p> */}
            <div className='p-2'>
                <FaRegMoon size={28}/>
            </div>

            <div className='sm:flex sm:flex-row sm:items-center sm:justify-between sm:w-[85%] md:w-[70%] lg:w-[60%]'>
                <div className='sm:flex sm:flex-row items-center gap-5' >
                    {
                        navbar.map((item)=> (
                            <div key={item.id}>
                                <NavLink to={item.path} className='hover:text-[#f5a005]'>{item.label}</NavLink>
                            </div>
                        ))
                    }
                </div>
                
                <button className="flex items-center space-x-2 bg-[#f5a005] text-primary px-3 py-2.5 rounded-full shadow animate-pulse" onClick={handleClick}>
                    < FaBriefcase  className="w-4 h-4 text-white" />
                    <span>Available for Work</span>
                </button>

            </div>
        </div>
  )
}

export default DesktopNav