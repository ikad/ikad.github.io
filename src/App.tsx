import * as React from "react"
import { render } from "react-dom"
import SiteAppBar from "./components/SiteAppBar"
import SiteContent from "./components/SiteContent"
import SiteFooter from "./components/SiteFooter"

const App = () => {
  render(
    <React.Fragment>
      <SiteAppBar />
      <SiteContent />
      <SiteFooter />
    </React.Fragment>,
    document.getElementById("app"),
  )
}

export default App
