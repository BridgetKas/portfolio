import MediaCard from "../Components/blog"

function BlogPage() {
  return (
    <div className="animate-fade-in" >
      <div className='flex flex-col items-center justify-center '>
        <div className='mt-3'>
         <img 
          src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Riley&accessories=sunglasses2,sunglasses,glasses5,glasses4,glasses3,glasses2,glasses,eyepatch&face=awe,concerned,concernedFear,contempt,cute,cyclops,driven,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,monster,old,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry,cheeky,angryWithFang,blank&facialHair=goatee2,moustache1,moustache2,moustache3,moustache4,moustache5,moustache6,moustache7,moustache8,moustache9&backgroundColor=transparent" 
          alt="Bridget's avatar"
          className="h-[150px] w-[150px] bg-yellow rounded-full"
          />
        </div>
        <p className='mt-2 text-[20px] font-bold'>Bridget</p>
        <p className=" text-center mt-1 p-3 w-[80%] mx-auto md:w-[60%] lg:w-[50%] ">Self taught developer figuring out this coding thing one line at a time. Getting better at Javascript, React and Typescript one day at a time </p>
      </div>
      <p className='underline text-left text-[18px] w-[80%] mx-auto font-medium'>Recent blogs</p>
      <div className='flex flex-col  w-[95%] mx-auto  sm:flex-row sm:gap-2.5 sm:flex-wrap mb-[60px] lg:w-[85%] '>
        <MediaCard 
          title="Javascript Scopes" 
          description="A scope is a region in a function where you can access a variable. 
          Variables are accessible in the scope where they are defined and in any nested scopes..." 
          image="./js2.jpg" 
          readmore="https://medium.com/@namugga.bridgetk/scopes-1d6efd0185bb"
          date="Dec 9 2024" 
          time="3 min"
        />
        <MediaCard 
          title="Demystifying JavaScript’s toFixed Method" 
          description="Javascript is known to be a versatile language used for web development. Just when you think you..." 
          image="./begineerJS1.jpg" 
          readmore="https://medium.com/@namugga.bridgetk/demystifying-javascripts-tofixed-method-for-precise-number-formatting-9f1d5ae13d53"
          date="Sep 1 2024"
          time="1 min"
        />
        <MediaCard 
          title="Promises" 
          description="Coming Soon..." 
          image="./promises.jpg" 
          readmore="#"
          date=""
          time=""
        />
        <MediaCard 
          title="Hoisting" 
          description="Coming Soon..." 
          image="./hoisting.png" 
          readmore="#"
          date=""
          time=""
        />
      </div>
    </div>

  )
}

export default BlogPage