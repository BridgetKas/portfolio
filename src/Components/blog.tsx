
type propsType = {
    title:string,
    description:string,
    image:string,
}
export default function MediaCard(props:propsType) {
  return (
    <div className='p-4 border border-red-700'>
        <div>
            {props.image}
        </div>
        <div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
        <div>
            <a href='#'>Read more</a>
        </div>
    </div>
  );
}