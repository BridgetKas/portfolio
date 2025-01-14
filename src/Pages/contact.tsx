import {useState,useReducer} from 'react'
function ContactPage() {
  const [name,setName] =useState('')
  return (
    <div className='flex items-start justify-between mt-10 w-[95%] mx-auto'>
      <div>
        <p>Let's discuss your next project</p>
      </div>
      <form className='flex flex-col bg-red-500 w-[60%] p-4'>
        <div className='flex '>
          <div>
            <label> First Name</label>
            <input type='text' placeholder="Enter your first name" value={name} className='input' required/>
          </div>
          <div>
            <label>Last Name</label>
            <input type='text' placeholder="Enter your last name" value={name} className='input'required/>  
          </div>
          
        </div>
        <div>
          <label> Email </label>
          <input type='email' placeholder="Enter your email" value={name} className='input'required/>
        </div>
        <div>
          <label>Phone Number</label>
          <input type='tel' placeholder="Enter your phone number" value={name} className='input' required/>
        </div>
        <label> I'm intersted in <br/></label>
        <select className='input'>
            <option>Landing Page</option>
            <option>Blog Website</option>
            <option>Portfolio</option>
            <option>Website</option>
          </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage