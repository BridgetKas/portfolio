import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center gap-[60px] w-[98%] mx-auto mt-[40px] mb-[20px] sm:flex-row sm:justify-between'>
      <div className=' w-full sm:w-[40%]'>
        <p>Hello </p>
        <p>I'm Bridget Namugga a front end developed based in Uganda.</p>
      </div>
      <div className=' w-full sm:w-[60%]'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage