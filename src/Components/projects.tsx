
type propType = {
    summary:string,
    image: string | undefined,
    languagesArray:string[]

}

const style = {
    backgroundColor:'red'
}

function ProjectComponent(props:propType) {
    const {summary,image,languagesArray} = props
  return (
    <div>
        <div>
            <img src={image}/>
        </div>
        <div>
            <button>HTML</button>
            {
                languagesArray.map(item => <button style={style}>{item}</button>)
            }
        </div>
        <p>{summary}</p>
        <div>
            <a>Source code</a>
            <a>Learn more</a>
        </div>

    </div>
  )
}

export default ProjectComponent