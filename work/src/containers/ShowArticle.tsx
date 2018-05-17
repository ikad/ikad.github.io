import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import Article from "../components/Article"

interface IShowArticleProps {
  articles: IArticle[]
  routerReducer: any
}

class ShowArticle extends React.Component<IShowArticleProps> {
  public render() {
    const id = this.props.routerReducer.location.pathname
    const article = this.props.articles.find((c) => `/${c.id}` === id)
    if (!article) { return null }

    return (
      <React.Fragment>
        <Article {...article} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(ShowArticle)
