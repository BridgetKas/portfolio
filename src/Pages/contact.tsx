import {useState,useReducer} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function ContactPage() {
  const [name,setName] =useState('')
  return (
    <div className='flex flex-col mt-10 w-[95%] mx-auto'>
      <div >
        <h1 className=' text-[40px] leading-snug '>Let's Connect and Build your <span className='text-yellow font-medium'>Next Project</span></h1>
        <div className="flex flex-row text-[20px] gap-2.5 items-center justify-center p-4">
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
        </div>
      </div>
      <form className='flex flex-col bg-red-500 w-[95%] p-4'>
        <div className='flex flex-col  bg-purple-950 sm:flex-row sm:gap-2'>
          <div>
            <label className='label'> First Name</label>
            <input type='text' placeholder="Enter your first name" value={name} className='input' required/>
          </div>
          <div className=''>
            <label className='label'>Last Name</label>
            <input type='text' placeholder="Enter your last name" value={name} className='input'required/>  
          </div>
        </div>
        <div>
          <label className='label'> Email </label>
          <input type='email' placeholder="Enter your email" value={name} className='input'required/>
        </div>
        <div>
          <label className='label'>Phone Number</label>
          <input type='tel' placeholder="Enter your phone number" value={name} className='input' required/>
        </div>
        <label className='label'> I'm intersted in <br/></label>
        <select className='input'>
            <option>Landing Page</option>
            <option>Blog Website</option>
            <option>Portfolio</option>
            <option>Website</option>
          </select>
          <textarea className='input h-[200px] rounded-xl' placeholder='Enter your message'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage