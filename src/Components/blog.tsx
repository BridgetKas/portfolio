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
    <div className='flex flex-col gap-2 p-2 w-[98%] h-[390px] bg-red-500 mx-auto mt-3 shadow-2xl  hover:scale-105 transform  transition-all duration-500 ease-in-out'>
        <div className='flex flex-col gap-2 w-full bg-yellow'>
            <h1 className='text-secondary font-bold '>{title}</h1> 
            <div className='flex  items-center justify-between bg-purple-500 '>
                <p>{date}</p>
                <p className='flex items-center gap-2'><BiBookReader /> {time}</p>
            </div>
            <p>{description}</p>
            <div>
            <a href={readmore} target='_blank'>Read more</a>
            </div>
        </div>
        <div className='w-full'>
            <img src={image} className=' rounded-t-lg h-[390px]'/>
        </div>
    </div>
  );
}