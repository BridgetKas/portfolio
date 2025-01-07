import { Outlet } from "react-router-dom"
import NavBar from "./Components/nav"
import Footer from "./Components/footer"
function LayOut() {
  return (
    <div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Outlet/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default LayOut