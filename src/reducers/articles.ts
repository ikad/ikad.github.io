import { IArticle, initialState } from "."

const articles = (state: IArticle[] = initialState.articles, action: any) => {
  switch (action.type) {
    case "SUCCESS/articles":
      return action.payload
    default:
      return state
  }
}
​
export default articles
