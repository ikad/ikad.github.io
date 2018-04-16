import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import SiteAppBar from "./components/SiteAppBar"
import SiteContent from "./components/SiteContent"
import SiteFooter from "./components/SiteFooter"

export const store = createStore(
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
)

const Site: React.SFC = (props: any) => (
  <React.Fragment>
    <SiteAppBar />
    <SiteContent />
    <SiteFooter />
  </React.Fragment>
)

const App = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Site} />
      </BrowserRouter>
    </Provider>,
    document.getElementById("app"),
  )
}

export default App
