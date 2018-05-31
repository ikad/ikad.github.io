import { IArticle, initialState } from "."

const mergedArticle = (stateArticles: IArticle[], payloadArticle: IArticle) => {
  const stateArticle = stateArticles.find(c => c.id === payloadArticle.id) || { bookmark: false }
  return {
    ...stateArticle,
    ...payloadArticle,
  }
}

const articles = (state: IArticle[] = initialState.articles, action: any) => {
  switch (action.type) {
    case "SUCCESS/articles":
      return (action.payload as IArticle[]).map(c => mergedArticle(state, c))
                    .sort((a, b) => b.updated_at - a.updated_at)
    case "SUCCESS/article":
      return state.filter(c => c.id !== action.payload.id)
                  .concat(mergedArticle(state, action.payload))
                  .sort((a, b) => b.updated_at - a.updated_at)
    case "TOGGLE_BOOKMARK":
      return state.filter(c => c.id !== action.payload.id)
                  .concat(action.payload)
                  .sort((a, b) => b.updated_at - a.updated_at)
    default:
      return state
  }
}
​
export default articles
