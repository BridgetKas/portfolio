import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center mt-[20px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between'>
      <div className='w-full sm:w-[40%] text-center p-3 lg:text-left bg-red-700'>
        <p className='text-[40px] font-bold  mb-5'>Hi I'm <span className='text-yellow font-bold'>Bridget.</span> </p>
        <p className='mb-3 '>Hello, welcome I'm a dedicated front-end developer with a passion for crafting  responsive, and user-friendly web applications ensuring a seamless user experience.</p>
        <p className='mb-3'>Technologically, I possess expertise in mordern frameworks and technologies like Javascript,React, TypeScript, and Tailwind CSS.As a driven individual, I continously strive to explore new domains within technology.</p>
        <p>Explore my work, and let's work together!</p>
        <button className='text-center p-2 bg-secondary py-1 px-2.5 text-primary mt-5 rounded-full'>Hire me</button>
      </div>
      <div className='w-full sm:w-[58%] self-start bg-cyan-800'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage