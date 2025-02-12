import { BiBookReader } from "react-icons/bi";

type propsType = {
    title:string,
    description:string,
    image:string| undefined,
    readmore:string
    date:string,
    time:string
}
export default function MediaCard(props:propsType) {
    const {title,description,image,readmore,date,time} = props
  return (
    <div className=' mb-[10px] flex flex-col items-center gap-2 p-2 w-[90%] h-[440px] mx-auto mt-4 shadow-2xl sm:flex-row sm:h-[340px] md:h-[300px] lg:h-[250px] lg:w-[88%] hover:scale-105 transform  transition-all duration-500 ease-in-out dark:bg-darkFootNav'>
        <div className='flex flex-col gap-2 w-full'>
            <h1 className='text-[#0fa81c] font-bold text-[30px]  dark:text-yellow'>{title}</h1> 
            <div className='flex  items-center justify-between '>
                <p>{date}</p>
                <p className='flex items-center gap-2'><BiBookReader /> {time}</p>
            </div>
            <p className=''>{description}</p>
            <div className='mt-1.5'>
                <a href={readmore} target='_blank' className=' text-blue-950 underline hover:underline dark:text-blue-600 focusLink p-1.5'>Read more</a>
            </div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <img src={image} className=' rounded-t-lg h-[140px]'/>
        </div>
    </div>
  );
}