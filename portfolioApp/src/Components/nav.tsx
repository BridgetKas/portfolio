import Button from './button'
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

function NavBar() {
  return (
    <div className="flex  items-center justify-between w-[90%] mx-auto mt-3">
        <div>
            <p>LOGO</p>
        </div>
        <div className="flex items-center gap-3">
            {
                navbar.map((item)=> (
                    <div key={item.id}>
                        <NavLink to={item.path}>{item.component}</NavLink>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default NavBar