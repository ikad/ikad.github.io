const loadArticlesSuccess = (response: JSON) => ({
  payload: response,
  type: "LOAD_ARTICLES_SECCESS",
})

export const loadArticles = () => (dispatch: any) => {
  fetch("/api/articles.json")
  .then((response) => response.json())
  .then((json) => dispatch(loadArticlesSuccess(json)))
  .catch((reason) => console.log(reason))
}
