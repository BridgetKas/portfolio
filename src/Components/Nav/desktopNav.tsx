import { NavLink } from 'react-router-dom'
import { FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState,useEffect } from 'react';


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
    const [dark,setDark] = useState(localStorage.getItem('Darktheme') === 'isTrue' ? true : false)
    const navigate = useNavigate()
    
     useEffect(() => {
        const userTheme = localStorage.getItem('Darktheme')
        if(userTheme === 'isTrue'){
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }
     },[dark])

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

    function handleClick() {
      navigate('./contact')
      
    }

  return (
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:text-[18px] sm:w-[95%] sm:mx-auto sm:mt-3 bg-secondary sm:py-4 sm:px-2.5 text-primary sm:rounded-full  dark:text-whiteGradient dark:bg-slate-900">
            <button className='p-2' onClick={handleToggle}>
                {dark? <FaRegMoon size={28}/> : <MdOutlineWbSunny size={30}/>}
            </button>

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