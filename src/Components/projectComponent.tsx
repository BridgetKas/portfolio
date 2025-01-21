
type propType = {
    summary:string,
    image: string | undefined,
    languagesArray:Array<languageObject>
}

type languageObject = {
    language:string,
    id:number
}

const style = {
    backgroundColor:'red'
}

function ProjectComponent(props:propType) {
    const {summary,image,languagesArray} = props
  return (
    <div className='flex flex-col gap-2 bg-red-500 w-[95%] mx-auto mt-3 rounded-t-lg shadow-lg'>
        <div>
            <img src={image}/>
        </div>
        <div className='py-2 px-2.5'>
            <div className='flex items-center gap-2.5 '>
                {
                    languagesArray.map(item => <button style={style} key={item.id}className='text-black border-2 border-transparent outline-none bg-transparent rounded-full text-lg font-bold px-3 py-1.5'>{item.language}</button>)
                }
            </div>
            <p>{summary}</p>
            <div className='flex items-center justify-between'>
                <a>Source code</a>
                <a>Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent