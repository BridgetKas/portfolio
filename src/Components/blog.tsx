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
    <div className='flex flex-col items-center gap-2 p-2 w-[90%] h-[390px] bg-red-500 mx-auto mt-4 shadow-2xl sm:flex-row sm:h-[320px] md:h-[250px]  hover:scale-105 transform  transition-all duration-500 ease-in-out'>
        <div className='flex flex-col gap-2 w-full bg-yellow'>
            <h1 className='text-secondary font-bold text-[30px]'>{title}</h1> 
            <div className='flex  items-center justify-between bg-purple-500 '>
                <p>{date}</p>
                <p className='flex items-center gap-2'><BiBookReader /> {time}</p>
            </div>
            <p className=''>{description}</p>
            <div>
                <a href={readmore} target='_blank' className=' text-blue-950 hover:underline focus:text-purple-800'>Read more</a>
            </div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <img src={image} className=' rounded-t-lg h-[180px] '/>
        </div>
    </div>
  );
}