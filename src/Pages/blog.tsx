import MediaCard from "../Components/blog"

function BlogPage() {
  return (
    <div >
      <div className='flex flex-col items-center justify-center '>
        <div>
         <img 
          src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Riley&accessories=sunglasses2,sunglasses,glasses5,glasses4,glasses3,glasses2,glasses,eyepatch&face=awe,concerned,concernedFear,contempt,cute,cyclops,driven,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,monster,old,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry,cheeky,angryWithFang,blank&facialHair=goatee2,moustache1,moustache2,moustache3,moustache4,moustache5,moustache6,moustache7,moustache8,moustache9&backgroundColor=transparent" 
          alt="Bridget's avatar"
          className="h-[150px] w-[150px] bg-yellow rounded-full"
          />
        </div>
        <p className="text-center">Self taught developer figuring out this coding thing one line at a time. </p>
      </div>
      <div className='flex  w-[95%] mx-auto sm:flex-row sm:gap-2.5 sm:flex-wrap mb-[60px] lg:w-[85%]'>
        <MediaCard 
        title="Javascript Closures" 
        description="A scope is a region in a function where you can access a variable. Look at the following piece of code. 
        Variables are accessible in the scope where they are defined and in any nested scopes." 
        image="./js2.jpg" readmore="#"date="Dec 9 2024" time="3 min"/>
        {/* <MediaCard title="Try me" description="me" image="./begineerJS1.jpg" readmore="#"/> */}
        {/* <MediaCard title="Promises" description="Coming Soon..." image="./promises.jpg" readmore="#"/> */}
        {/* <MediaCard title="Hoisting" description="Coming Soon..." image="./hoisting.png" readmore="#"/> */}
      </div>
    </div>

  )
}

export default BlogPage