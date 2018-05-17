import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleList from "../components/ArticleList"

interface IBookmarkProps {
  articles: IArticle[]
}

class Bookmark extends React.Component<IBookmarkProps> {
  public render() {
    const articleElements = this.props.articles.map((c, i) => <ArticleList key={i} {...c} />)

    return (
      <React.Fragment>
        {articleElements}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(Bookmark)
