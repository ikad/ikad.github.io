import * as React from "react"
import * as ReactDOM from "react-dom"

import AppNav from "./components/AppNav"
import About from "./containers/About"
import Bookmark from "./containers/Bookmark"
import Home from "./containers/Home"
import ShowArticle from "./containers/ShowArticle"

import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "react-router-redux"

import { PersistGate } from "redux-persist/integration/react"

import store, { history, persistor } from "./store"

import withRoot from "./withRoot"

import "typeface-roboto"

import "./index.css"

import registerServiceWorker from "./registerServiceWorker"

const ThemeAppNav = withRoot(AppNav)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ThemeAppNav classes={{}}>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/:id" component={ShowArticle}/>
          <Route path="/bookmark" component={Bookmark}/>
          <Route path="/about" component={About}/>
        </ThemeAppNav>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
