import * as React from "react"
import { render } from "react-dom"
import SiteNavbar from "./components/SiteNavbar"
import SiteContent from "./components/SiteContent"
import SiteFooter from "./components/SiteFooter"

const App = () => {
  render(
    <React.Fragment>
      <SiteNavbar />
      <SiteContent />
      <SiteFooter />
    </React.Fragment>,
    document.getElementById("app")
  )
}

export default App
