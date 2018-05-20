import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleList from "../components/ArticleList"

interface IBookmarkProps {
  articles: IArticle[]
  dispatch: any
}

class Bookmark extends React.Component<IBookmarkProps> {
  public render() {
    const articleElements = this.props.articles.filter(c => !!c.bookmark).map((c, i) => <ArticleList key={i} article={c} />)

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
