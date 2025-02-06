import {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { validateEmail } from '../utilis/validate';
import emailjs from '@emailjs/browser';



function ContactPage() {
  
  const [input,setInput] = useState({
    name:'',
    email:'',
    phone:'',
    textarea:''
  })

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }

  function clearInput(){
    setInput({
      name:'',
      email:'',
      phone:'',
      textarea:''
    })
  }

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    validateEmail(input.email)
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const serviceID = import.meta.env.VITE_SERVICE_ID
    const publicKEY = import.meta.env.VITE_PUBLIC_KEY
    const templateData = {
      "from_name":input.name,
      "from_email":input.email,
      message:input.textarea
    }

    try {
      await emailjs.send(serviceID, templateID, templateData,{ publicKey:publicKEY})
      alert('Thank you for contacting us. We will get back to you shortly')
      clearInput()
    }catch(error) {
      alert("Failed please try again later")
    }
 
  }

  return (
    <div className='flex flex-col mt-2 w-[95%] mx-auto md:flex-row lg:w-[75%] mb-[60px]'>
      <div className='md:w-[50%]' >
        <h1 className=' text-[40px] leading-snug p-4 text-center md:text-left dark:text-whiteGradient'>Let's Connect and Build your <span className='text-yellow font-medium'>Next Project</span></h1>
        <div className="flex flex-row text-[30px] gap-2.5 items-center justify-center p-4 my-10">
          <a href='#' target='_blank' className='hover:scale-110 transform  dark:text-whiteGradient focusIcon p-1'><FaLinkedin /></a>
          <a href='#' target='_blank' className='hover:scale-110 transform  dark:text-whiteGradient focusIcon p-1'><FaGithub /></a>
          <a href='#' target='_blank' className='hover:scale-110 transform  dark:text-whiteGradient focusIcon p-1'><FaXTwitter /></a> 
        </div>
      </div>
      <form className='flex flex-col p-4 md:w-[50%]  shadow-2xl dark:bg-darkFootNav dark:rounded-xl' onSubmit={handleSubmit}>
        <div >
          <label className='dark:text-gray-300'> Your name<span className='text-red-600'>*</span></label>
          <input  name='name'type='text' placeholder="Enter your first and last name" value={input.name} className='input' onChange={(e) =>handleChange(e)} required/>
        </div>
        <div>
          <label  className='dark:text-gray-300'> Email <span className='text-red-600'>*</span></label>
          <input name='email' type='email' placeholder="Enter your email" value={input.email} className='input'required onChange={(e) =>handleChange(e)}/>
        </div>
        <div>
          <label  className='dark:text-gray-300'>Phone Number</label>
          <input name='phone'type='tel' placeholder="Enter your phone number" value={input.phone} className='input' onChange={(e) =>handleChange(e)}/>
        </div>
        <label className='label dark:text-gray-300'> I'm interested in <span className='text-red-600'>*</span></label>
          <textarea className='input h-[150px]' placeholder='Enter your message' name='textarea' value={input.textarea} onChange={(e) =>handleChange(e)} required></textarea>
        <button type='submit' className='bg-[#f5b136] text-black mt-2 px-2.5 py-2 rounded-full hover:bg-[#f5a005] focus:outline-none focus:outline-yellow'>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage