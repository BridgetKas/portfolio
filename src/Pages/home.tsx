import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center gap-[60px] w-[98%] mx-auto mt-[40px]  sm:flex-row sm:justify-between'>
      <div className=' w-full  sm:w-[40%]'>
        <p>Hello </p>
        <p>I'm Bridget Namugga a front end developed based in Uganda.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit.
        </p>
      </div>
      <div className=' w-full sm:w-[60%]'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage