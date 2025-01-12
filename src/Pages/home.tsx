import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center mt-[20px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between'>
      <div className='w-full sm:w-[40%] bg-purple-400'>
        <p className=''>Hello I'm  </p>
        <p className='text-[45px] font-bold'> <span className='text-yellow '>Bridget Namugga. </span></p>
        <p>a dedicated front-end developer with a passion for crafting  responsive, and user-friendly web applications ensuring a seamless user experience.
          Technologically, I possess expertise in mordern frameworks and technologies like Javascript,React, TypeScript, and Tailwind CSS </p>
      </div>
      <div className='w-full sm:w-[60%] bg-red-500'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage