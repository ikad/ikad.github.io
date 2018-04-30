import * as React from "react"
import * as ReactDOM from "react-dom"

import AppNav from "./components/AppNav"
import About from "./containers/About"
import Bookmark from "./containers/Bookmark"
import Favorite from "./containers/Favorite"
import ShowArticle from "./containers/ShowArticle"
import Top from "./containers/Top"

import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"

import { history, store } from "./store"

import withRoot from "./withRoot"

import "./index.css"

import registerServiceWorker from "./registerServiceWorker"

const ThemeAppNav = withRoot(AppNav)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeAppNav classes={{}}>
        <Route exact={true} path="/" component={Top}/>
        <Route exact={true} path="/:id" component={ShowArticle}/>
        <Route path="/bookmark" component={Bookmark}/>
        <Route path="/favorite" component={Favorite}/>
        <Route path="/about" component={About}/>
      </ThemeAppNav>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
