import ProjectComponent from "../Components/projectComponent"

const shoeApp = [
  {
    language:'Html',
    id:1
  },
  {
    language:'Css',
    id:2
  },
  {
    language:'Javascript',
    id:3
  },
  {
    language:'react',
    id:4
  }
]

function ProjectsPage() {
  return (
    <div>
      <ProjectComponent summary='Hello' image='./vite.svg' languagesArray={shoeApp}/>

    </div>
  )
}

export default ProjectsPage