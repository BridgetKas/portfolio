
type propsType = {
    title:string,
    description:string,
    image:string| undefined,
    readmore:string
}
export default function MediaCard(props:propsType) {
    const {title,description,image,readmore} = props
  return (
    <div className='flex flex-col gap-2 w-[90%] h-[390px] mx-auto mt-3 rounded-t-xl shadow-2xl  sm:w-[45%]  hover:scale-105 transform  transition-all duration-500 ease-in-out'>
        <div className='h-[60%] w-full'>
            <img src={image} className='h-full w-full rounded-t-lg'/>
        </div>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        <div>
            <a href={readmore} target='_blank'>Read more</a>
        </div>
    </div>
  );
}