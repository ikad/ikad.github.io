import { IBookmark, initialState } from "."

const bookmarks = (state: IBookmark[] = initialState.bookmarks, action: any) => {
  switch (action.type) {
    case "LOAD_BOOKMARKS_SECCESS":
      return action.payload
    default:
      return state
  }
}
​
export default bookmarks
