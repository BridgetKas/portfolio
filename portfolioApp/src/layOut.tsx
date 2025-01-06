import { Outlet } from "react-router-dom"
import NavBar from "./Components/nav"
function LayOut() {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default LayOut