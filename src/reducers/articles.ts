import { IArticle, initialState } from "."

const articles = (state: IArticle[] = initialState.articles, action: any) => {
  switch (action.type) {
    case "LOAD_ARTICLES_SECCESS":
      return action.payload
    default:
      return state
  }
}
​
export default articles
