import Button from '../button'
import { NavLink } from 'react-router-dom'


const navbar = [
    {
        component:<Button title='Home'/>,
        id:1,
        path:'/'
    },
    {
        component:<Button title='About'/>,
        id:2,
        path:'/about'
    },
    {
        component:<Button title='Blog'/>,
        id:3,
        path:'/blog'
    },
    {
        component:<Button title='Projects'/>,
        id:4,
        path:'/projects'
    },
    {
        component:<Button title='Contact'/>,
        id:5,
        path:'/contact' 
    }
]

function DesktopNav() {
  return (
        <div className="hidden sm:flex sm:items-center sm:gap-2.5">
            {
                navbar.map((item)=> (
                    <div key={item.id}>
                        <NavLink to={item.path}>{item.component}</NavLink>
                    </div>
                ))
            }
        </div>
  )
}

export default DesktopNav