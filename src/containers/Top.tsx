import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleList from "../components/ArticleList"

interface ITopProps {
  articles: IArticle[]
}

class Top extends React.Component<ITopProps> {
  public render() {
    const articleElements = this.props.articles.map((c, i) => <ArticleList key={i} {...c} />)

    return (
      <React.Fragment>
        {articleElements}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any, props: any) => (
  state
)

export default connect(mapStateToProps)(Top)
