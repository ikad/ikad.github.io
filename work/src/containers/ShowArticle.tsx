import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import Article from "../components/Article"

import * as actions from "../actions"

interface IShowArticleProps {
  articles: IArticle[]
  dispatch: any
  routerReducer: any
}

class ShowArticle extends React.Component<IShowArticleProps> {
  public render() {
    const id = this.props.routerReducer.location.pathname
    const article = this.props.articles.find((c) => `/${c.id}` === id)
    if (!article) { return null }

    const handleToggleBookmark = () => {
      this.props.dispatch(actions.toggleBookmark(article))
    }

    return (
      <React.Fragment>
        <Article article={article} onToggleBookmark={handleToggleBookmark} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(ShowArticle)
