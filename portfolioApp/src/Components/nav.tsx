import React from 'react'
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
    <div>
        {
            navbar.map((item)=> {
                return <NavLink to={item.path}>{item.component}</NavLink>
            })
        }
    </div>
  )
}

export default NavBar