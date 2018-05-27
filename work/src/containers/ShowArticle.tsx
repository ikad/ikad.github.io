import * as React from "react"
import { connect } from "react-redux"

import * as actions from "../actions"
import { IArticle } from "../reducers"

import Article from "../components/Article"

interface IShowArticleProps {
  articles: IArticle[]
  dispatch: any
  match: any
}

class ShowArticle extends React.Component<IShowArticleProps> {
  public render() {
    const id = this.props.match.params.id
    const article = this.props.articles.find((c) => c.id === id)
    if (!article) { return null }

    const handleToggleBookmark = () => {
      this.props.dispatch(actions.toggleBookmark(article))
    }

    return (
      <React.Fragment>
        <Article article={article} onToggleBookmark={handleToggleBookmark} dispatch={this.props.dispatch} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(ShowArticle)
