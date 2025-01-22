import ProjectComponent from "../Components/projectComponent"

const shoeApp = [
  {
    language:'html',
    id:1,
    backgroundColor:'red'
  },
  {
    language:'javascript',
    id:2,
    backgroundColor:'blue'

  },
  {
    language:'react',
    id:3,
    backgroundColor:'green'

  },
  {
    language:'css',
    id:4,
    backgroundColor:'yellow'

  },
]

const authentication = [
  ...shoeApp,
  {
    language:'typescript',
    id:5,
    backgroundColor:'pink'
  }
]

function ProjectsPage() {
  return (
    <div className='flex flex-col w-[95%] mx-auto sm:flex-row   sm:gap-2.5 sm:flex-wrap mb-[60px] lg:w-[85%]'>
      <ProjectComponent summary='Hello' image='./InteriorApp.png' languagesArray={shoeApp}/>
      <ProjectComponent summary='Hello' image='./shoeApp.png' languagesArray={shoeApp}/>
      <ProjectComponent summary='Hello' image='./productivityApp.png' languagesArray={shoeApp}/>
      <ProjectComponent summary='Hello' image='./authenticationApp.png' languagesArray={authentication}/>
    </div>
  )
}

export default ProjectsPage