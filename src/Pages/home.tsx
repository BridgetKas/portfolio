import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center mt-[20px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between'>
      <div className='w-full sm:w-[40%]'>
        <p className='text-[20px]'>HELLO I'M  </p>
        <p className='text-[40px] font-bold text-yellow'>Bridget Namugga.</p>
        <p>a dedicated front-end developer with a passion for crafting  responsive, and user-friendly web applications ensuring a seamless user experience.</p>
        <p>Technologically, I possess expertise in mordern frameworks and technologies like Javascript,React, TypeScript, and Tailwind CSS.</p>
        <p>As a driven individual, I continously strive to explore new domains within technology.</p>
        <p>Explore my work, and let's work together!</p>
        <button className='text-center p-2 bg-secondary py-1 px-2.5 text-primary rounded-full'>Hire me</button>
      </div>
      <div className='w-full sm:w-[58%] bg-red-500 self-start'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage