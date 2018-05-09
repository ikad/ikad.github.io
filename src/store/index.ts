import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "react-router-redux"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const persistConfig = {
  key: "ikad.github.io",
  storage,
  whitelist: ["articles", "bookmarks", "favorites"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createHistory()

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)

export const persistor = persistStore(store)

export default store
