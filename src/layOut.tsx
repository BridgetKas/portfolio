import { Outlet } from "react-router-dom"
import Footer from "./Components/footer"
import Nav from "./Components/Nav/nav"
function LayOut() {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default LayOut