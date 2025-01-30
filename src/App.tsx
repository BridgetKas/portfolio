import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayOut from "./layOut";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import BlogPage from "./Pages/blog";
import ProjectsPage from "./Pages/projects";
import ContactPage from "./Pages/contact";
import ErrorComponent from "./Components/errorComponent";



const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    errorElement:<ErrorComponent/>,
    children: [
      {
        index: true,
        element:<HomePage/>,
      },
      {
        path:'about',
        element:<AboutPage/>
      },
      {
        path:'blog',
        element:<BlogPage/>
      },
      {
        path:'projects',
        element:<ProjectsPage/>
      },
      {
        path:'contact',
        element:<ContactPage/>
      },
    ]
  }
  
])
function App() {
  
  return (
      <div id='light'>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
