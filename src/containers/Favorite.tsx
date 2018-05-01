import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleList from "../components/ArticleList"

interface IFavoriteProps {
  articles: IArticle[]
}

class Favorite extends React.Component<IFavoriteProps> {
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

export default connect(mapStateToProps)(Favorite)
