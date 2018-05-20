import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import articles from "./articles"

export interface IArticle {
  id: string
  title: string
  body: string
  updated_at: Date
  bookmark: boolean
  favorite: boolean
}

export const initialState = {
  articles: [],
}

export default combineReducers({
  articles,
  routerReducer,
})
