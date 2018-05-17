import { RSAA } from "redux-api-middleware"

const rootURL = "https://s3-ap-northeast-1.amazonaws.com/api.ikad.github.io"

export const loadArticles = () => {
  return {
    [RSAA]: {
      endpoint: `${rootURL}/articles.json`,
      method: "GET",
      types: ["REQUEST/articles", "SUCCESS/articles", "FAILURE/articles"]
    }
  }
}
