import * as React from "react"
import * as ReactDOM from "react-dom"

import About from "./components/About"
import Bookmark from "./components/Bookmark"
import Favorite from "./components/Favorite"
import Top from "./components/Top"

import AppNav from "./components/AppNav"

import registerServiceWorker from "./registerServiceWorker"

import { Provider } from "react-redux"
import { applyMiddleware, combineReducers, createStore } from "redux"

import createHistory from "history/createBrowserHistory"
import CssBaseline from "material-ui/CssBaseline"
import { Route } from "react-router"

import { ConnectedRouter, routerMiddleware, routerReducer } from "react-router-redux"

import reducers from "./reducers" // Or wherever you keep your reducers

import green from "material-ui/colors/green"
import purple from "material-ui/colors/purple"
import { createMuiTheme } from "material-ui/styles"

import "./index.css"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: purple[700],
      light: purple[300],
      main: purple[500],
    },
    secondary: {
      dark: green[700],
      light: green[300],
      main: green[500],
    },
  },
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <CssBaseline />
        <AppNav classes={{}} theme={theme}>
          <Route exact={true} path="/" component={Top}/>
          <Route path="/bookmark" component={Bookmark}/>
          <Route path="/favorite" component={Favorite}/>
          <Route path="/about" component={About}/>
        </AppNav>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
