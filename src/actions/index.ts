const rootURL = "https://s3-ap-northeast-1.amazonaws.com/api.ikad.github.io"

const loadArticlesSuccess = (response: JSON) => ({
  payload: response,
  type: "LOAD_ARTICLES_SECCESS",
})

export const loadArticles = () => (dispatch: any) => {
  fetch(`${rootURL}/articles.json`, { mode: "cors" })
  .then((response) => response.json())
  .then((json) => dispatch(loadArticlesSuccess(json)))
  .catch((reason) => console.log(reason))
}
