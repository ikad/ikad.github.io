import { IFavorite, initialState } from "."

const favorites = (state: IFavorite[] = initialState.favorites, action: any) => {
  switch (action.type) {
    case "LOAD_FAVORITES_SECCESS":
      return action.payload
    default:
      return state
  }
}
​
export default favorites
