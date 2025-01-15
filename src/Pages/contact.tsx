import {useState,useReducer} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function ContactPage() {
  const [name,setName] =useState('')
  return (
    <div className='flex flex-col items-start justify-between mt-10 w-[95%] mx-auto'>
      <div className='bg-pink-600'>
        <h1 className=' text-[40px] leading-snug font-medium'>Let's Connect and Build your Next Project </h1>
        <div className="flex flex-row text-[16px]  gap-2.5 sm:text-xl bg-yellow items-center justify-center p-4">
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
        </div>
      </div>
      <form className='flex flex-col bg-red-500 w-full p-4'>
        <div className='flex flex-col items-center'>
          <div className='w-full'>
            <label className='label'> First Name</label>
            <input type='text' placeholder="Enter your first name" value={name} className='input' required/>
          </div>
          <div className='bg-purple-950'>
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