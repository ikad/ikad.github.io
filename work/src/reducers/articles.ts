import { IArticle, initialState } from "."

const articles = (state: IArticle[] = initialState.articles, action: any) => {
  switch (action.type) {
    case "SUCCESS/articles":
      return state.concat(action.payload.filter((c: IArticle) => !state.find(s => s.id === c.id)))
                  .sort((a, b) => a.updated_at - b.updated_at)
    case "TOGGLE_BOOKMARK":
      return state.filter(c => c.id !== action.payload.id)
                  .concat(action.payload)
                  .sort((a, b) => a.updated_at - b.updated_at)
    default:
      return state
  }
}
​
export default articles
