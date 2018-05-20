import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleList from "../components/ArticleList"

import * as actions from "../actions"

interface IHomeProps {
  articles: IArticle[]
  dispatch: any
}

class Home extends React.Component<IHomeProps> {
  public componentWillMount() {
    this.props.dispatch(actions.loadArticles())
  }

  public render() {
    const articleElements = this.props.articles.map((c, i) => <ArticleList key={i} article={c} />)

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

export default connect(mapStateToProps)(Home)
