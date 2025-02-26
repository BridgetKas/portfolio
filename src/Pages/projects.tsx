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
    <div className='flex flex-col w-[95%] mx-auto sm:flex-row sm:gap-2.5 sm:flex-wrap mb-[70px] lg:w-[85%]'>
      <ProjectComponent 
        description="A productivity application to track and visualize daily tasks helping users to manage their time effectively. Responsive design for mobile and website"
        image='./productivityApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/ProductivityApp" liveapp="https://productivity-app-drab.vercel.app/"
      />
      <ProjectComponent 
        description="A responsive e-commerce application built with React.js.This design emphasizes a user-friendly design and delivers a seamless shopping experience."
        image='./InteriorApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/InteriorApp" liveapp="https://interior-app-fawn.vercel.app/"
      />
      <ProjectComponent 
        description="An user-friendly responsive e-commerce application that uses react router to navigate between pages.The application uses a mobile-first design approach"
        image='./shoeApp.png' 
        languagesArray={shoeApp} 
        sourcecode="https://github.com/BridgetKas/ShoeStore" liveapp="https://shoe-store-ivory.vercel.app/"
      />
      <ProjectComponent 
        description="A web application that authenticates users upon sigining in "
        image='./authenticationApp.png' 
        languagesArray={authentication} 
        sourcecode="https://github.com/BridgetKas/authenticationApp" liveapp="https://authentication-app-ten-teal.vercel.app/"
      />
      
    </div>
  )
}

export default ProjectsPage