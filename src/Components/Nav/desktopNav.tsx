import Button from '../button'
import { NavLink } from 'react-router-dom'


const navbar = [
    {
        component:<Button title='Home'/>,
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
        <div className="hidden sm:flex sm:items-center sm:gap-2.5">
            {
                navbar.map((item)=> (
                    <div key={item.id}>
                        <NavLink to={item.path}>{item.label}</NavLink>
                    </div>
                ))
            }
        </div>
  )
}

export default DesktopNav