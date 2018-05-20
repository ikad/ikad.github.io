import { IArticle, initialState } from "."

const articles = (state: IArticle[] = initialState.articles, action: any) => {
  switch (action.type) {
    case "SUCCESS/articles":
      return action.payload
    case "TOGGLE_BOOKMARK":
      return state.filter(c => c.id !== action.payload.id).concat(action.payload)
    default:
      return state
  }
}
​
export default articles
