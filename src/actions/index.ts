import { push } from "react-router-redux"
import { store } from "../index"

export const goHome = () => store.dispatch(push("/"))
export const goBookmark = () => store.dispatch(push("/bookmark"))
export const goFavorite = () => store.dispatch(push("/favorite"))
export const goAbout = () => store.dispatch(push("/about"))
