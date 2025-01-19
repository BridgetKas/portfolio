import Button from "../Components/button";
import RotatingWheel from "../Components/rotatingWheel";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('./contact')
    
  }
  return (
    <div className='flex flex-col items-center mt-[20px] mb-[50px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between'>
      <div className='w-full sm:w-[40%] text-center p-3 lg:text-left'>
        <p className='text-[40px] font-bold  mb-5'>Hi I'm <span className='text-yellow font-bold'>Bridget.</span> </p>
        <p className='mb-3 '>Hello, welcome I'm a dedicated front-end developer with a passion for crafting  responsive, and user-friendly web applications ensuring a seamless user experience.</p>
        <p className='mb-3'>Technologically, I possess expertise in mordern frameworks and technologies like Javascript,React, TypeScript, and Tailwind CSS.As a driven individual, I continously strive to explore new domains within technology.</p>
        <p>Explore my work, and let's work together!</p>
        <Button title="Hire me" textColor="black" bgColor="#faac1d" borderColor="none" click={handleClick}/>
      </div>
      <div className='w-full sm:w-[58%] self-start'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage