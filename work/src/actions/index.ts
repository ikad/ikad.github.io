import { RSAA } from "redux-api-middleware"
import { IArticle } from "../reducers/index"

const rootURL = "https://s3-ap-northeast-1.amazonaws.com/api.ikad.github.io"

export const loadArticles = () => {
  return {
    [RSAA]: {
      endpoint: `${rootURL}/index.json`,
      method: "GET",
      types: ["REQUEST/articles", "SUCCESS/articles", "FAILURE/articles"]
    }
  }
}

export const loadArticle = (id: string) => {
  return {
    [RSAA]: {
      endpoint: `${rootURL}/¥${id}.json`,
      method: "GET",
      types: ["REQUEST/article", "SUCCESS/article", "FAILURE/article"]
    }
  }
}

export const toggleBookmark = (article: IArticle) => {
  return {
    payload: [{ ...article, bookmark: !article.bookmark }],
    type: "TOGGLE_BOOKMARK"
  }
}
