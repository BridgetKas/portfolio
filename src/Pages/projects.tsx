import ProjectComponent from "../Components/projectComponent"

const shoeApp = [
  {
    language:'html',
    id:1,
    backgroundColor:'#FF7F7F ',
    textColor:'#8B0000'
  },
  {
    language:'javascript',
    id:2,
    backgroundColor:'#ADD8E6',
    textColor:'#0000FF'

  },
  {
    language:'react',
    id:3,
    backgroundColor:'#90EE90',
    textColor:'#013220'

  },
  {
    language:'css',
    id:4,
    backgroundColor:'yellow',
    textColor:''

  },
]

const authentication = [
  ...shoeApp,
  {
    language:'typescript',
    id:5,
    backgroundColor:'pink',
    textColor:'#AA336A'
  }
]

function ProjectsPage() {
  return (
    <div className='flex flex-col w-[95%] mx-auto sm:flex-row sm:gap-2.5 sm:flex-wrap mb-[60px] lg:w-[85%]'>
      <ProjectComponent 
        // title='Productivity App' 
        description="A web application to track and visualize daily tasks helping users to manage their time effectively.Responsive design for mobile and website"
        image='./productivityApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/ProductivityApp" liveapp="#"
      />
      <ProjectComponent 
        // title='Hello' 
        description="A web application to track and visualize daily tasks helping users to manage their time effectively.Responsive design for mobile and website"
        image='./InteriorApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/InteriorApp" liveapp="#"
      />
      <ProjectComponent 
        // title='Hello' 
        description="A web application to track and visualize daily tasks helping users to manage their time effectively.Responsive design for mobile and website"
        image='./shoeApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/ShoeStore" liveapp="#"
      />
      <ProjectComponent 
        // title='Hello' 
        description="A web application to track and visualize daily tasks helping users to manage their time effectively.Responsive design for mobile and website"
        image='./authenticationApp.png' 
        languagesArray={authentication} 
        sourcecode="https://github.com/BridgetKas/authenticationApp" liveapp="#"
      />
      
    </div>
  )
}

export default ProjectsPage