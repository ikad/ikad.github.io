import createHistory from "history/createBrowserHistory"
import { applyMiddleware, createStore } from "redux"

import { routerMiddleware } from "react-router-redux"
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"

import reducers from "../reducers"

export const history = createHistory()

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)
