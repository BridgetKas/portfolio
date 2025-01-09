import { Outlet } from "react-router-dom"
import NavBar from "./Components/Nav/desktopNav"
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