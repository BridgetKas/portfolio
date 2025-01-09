import { Outlet } from "react-router-dom"
import NavBar from "./Components/nav"
import Footer from "./Components/footer"
function LayOut() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default LayOut