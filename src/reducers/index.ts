import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import articles from "./articles"

export interface IArticle {
  id: number
  title: string
  body: string
}

export const initialState = {
  articles: [],
}

export default combineReducers({
  articles,
  routerReducer,
})
