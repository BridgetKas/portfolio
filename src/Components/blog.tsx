
type propsType = {
    title:string,
    description:string,
    image:string| undefined,
}
export default function MediaCard(props:propsType) {
    const {title,description,image} = props
  return (
    <div className='p-4 border border-red-700 shadow-xl'>
        <div>
            <img src={image}/>
        </div>
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
        <div>
            <a href='#' target='_blank'>Read more</a>
        </div>
    </div>
  );
}