import RotatingWheel from "../Components/rotatingWheel";

function HomePage() {
  return (
    <div className='flex flex-col items-center gap-[60px] bg-red-600 w-[90%] mx-auto mt-[40px] mb-[20px] sm:flex-row sm:justify-between'>
      <div>
        <p>Hello </p>
        <p>I'm Bridget Namugga a front end developed based in Uganda.</p>
      </div>
      <div>
        <RotatingWheel />
      </div>
    </div>
  )
}

export default HomePage