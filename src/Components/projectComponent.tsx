
type propType = {
    // title:string,
    image: string | undefined,
    languagesArray:Array<languageObject>,
    sourcecode:string,
    liveapp:string,
    description:string
}

interface languageObject{
    language:string,
    id:number,
    backgroundColor:string,
    textColor:string
}


function ProjectComponent(props:propType) {
    const {image,languagesArray,sourcecode,liveapp,description} = props

  return (
    <div className='flex flex-col gap-2 w-[90%] h-[390px] mx-auto mt-3 rounded-t-xl shadow-2xl  sm:w-[45%]  hover:scale-105 transform  transition-all duration-500 ease-in-out dark:bg-darkFootNav '>
        <div className='bg-gray-300 h-[60%] w-full rounded-t-lg dark:bg-darkFootNav'>
            <img src={image} className='rounded-t-lg h-full w-full object-cover'/>
        </div>
        <div className='py-2.5 px-2.5'>
            <div className='flex items-center gap-2.5 flex-wrap '>
                {
                    languagesArray.map(item => <button style={{
                        backgroundColor:item.backgroundColor,
                        color:item.textColor
                    }} key={item.id}className='text-black border-2 border-transparent outline-none bg-transparent rounded-full text-[16px] font-bold px-2 py-1'>{item.language}</button>)
                }
            </div>
            <p className='leading-[1.4] pt-2 dark:text-whiteGradient'>{description}</p>
            <div className='flex justify-between pb-1'>
                <a href={sourcecode} target='_blank' className='text-blue-800 text-[16px] hover:underline active:text-violet-700 dark:text-blue-600'>Source code</a>
                <a href={liveapp}  className='text-blue-800 text-[16px]  active:text-violet-700 dark:text-blue-600'>Live App</a>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectComponent