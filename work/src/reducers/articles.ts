import { IArticle, initialState } from "."

const articles = (state: IArticle[] = initialState.articles, action: { type: string, payload: IArticle[]}) => {
  switch (action.type) {
    case "SUCCESS/articles":
      return action.payload.map(c => {
                      const storedArticle = state.find(s => s.id === c.id)
                      const isBookmark = storedArticle ? storedArticle.bookmark : false
                      return {...c, bookmark: isBookmark}
                    })
                    .sort((a, b) => b.updated_at - a.updated_at)
    case "TOGGLE_BOOKMARK":
      return state.map(c => {
                    const targetArticle = action.payload.find(s => s.id === c.id)
                    const isBookmark = targetArticle ? targetArticle.bookmark : c.bookmark
                    return {...c, bookmark: isBookmark}
                  })
                  .sort((a, b) => b.updated_at - a.updated_at)
    default:
      return state
  }
}
​
export default articles
