import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center mt-[20px] gap-[20px] w-[90%] mx-auto sm:flex-row sm:mt-[40px] sm:justify-between'>
      <div className='w-full sm:w-[40%]'>
        <p>Hello there </p>
        <p>I'm Bridget Namugga a front end developer.
        </p>
      </div>
      <div className='w-full sm:w-[60%]'>
        <RotatingWheel />
      </div>
    
    </div>
  )
}

export default HomePage