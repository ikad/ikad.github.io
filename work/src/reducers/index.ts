import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import articles from "./articles"
import bookmarks from "./bookmarks"
import favorites from "./favorites"

export interface IArticle {
  id: string
  title: string
  body: string
}

export interface IBookmark {
  id: string
  article_id: string
}

export interface IFavorite {
  id: string
  article_id: string
}

export const initialState = {
  articles: [],
  bookmarks: [],
  favorites: [],
}

export default combineReducers({
  articles,
  bookmarks,
  favorites,
  routerReducer,
})
