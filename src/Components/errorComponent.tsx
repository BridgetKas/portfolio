import React from 'react'
import { BiConfused } from "react-icons/bi";

function ErrorComponent() {
  return (
    <div className='flex flex-col items-center justify-center mt-[170px] gap-2.5 w-[90%] mx-auto  sm:w-[80%] lg:w-[70%]'>
        <div>
            <BiConfused size={150} />
        </div>
        <p className='text-[30px] text-center'>Oops something went wrong. Try again</p>

    </div>
  )
}

export default ErrorComponent