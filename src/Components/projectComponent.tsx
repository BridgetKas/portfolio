
type propType = {
    summary:string,
    image: string | undefined,
    languagesArray:Array<languageObject>
}

interface languageObject{
    language:string,
    id:number,
    backgroundColor:string
}


function ProjectComponent(props:propType) {
    const {summary,image,languagesArray} = props
  return (
    <div className='flex flex-col gap-2 bg-red-500 w-[90%] mx-auto mt-3 rounded-t-xl shadow-2xl  sm:w-[45%]'>
        <div>
            <img src={image} className='rounded-t-lg'/>
        </div>
        <div className='py-2 px-2.5'>
            <div className='flex items-center gap-2.5 flex-wrap  '>
                {
                    languagesArray.map(item => <button style={{
                        backgroundColor:item.backgroundColor
                    }} key={item.id}className='text-black border-2 border-transparent outline-none bg-transparent rounded-full text-[16px] font-bold px-2 py-1'>{item.language}</button>)
                }
            </div>
            <p>{summary}</p>
            <div className='flex justify-between'>
                <a>Source code</a>
                <a>Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent