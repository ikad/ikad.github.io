import * as React from "react"
import { connect } from "react-redux"

import List from "@material-ui/core/List"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import * as actions from "../actions"
import { IArticle } from "../reducers"

import ArticleListItem from "../components/ArticleListItem"
import BookmarkButton from "../components/BookmarkButton/index"

interface IHomeProps {
  articles: IArticle[]
  dispatch: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    width: "100%",
  },
})

class Home extends React.Component<IHomeProps & WithStyles> {
  public componentWillMount() {
    this.loadArticles()
  }

  public render() {
    const articleListItemElement = (article: IArticle, index: number) => {
      const handleToggleBookmark = () => {
        this.props.dispatch(actions.toggleBookmark(article))
      }

      const bookmarkButtonElement = (
        <BookmarkButton bookmark={article.bookmark} onToggleBookmark={handleToggleBookmark} />
      )

      return (
        <ArticleListItem key={index} article={article} bookmarkButton={bookmarkButtonElement} dispatch={this.props.dispatch} />
      )
    }
    const articleListElement = this.props.articles.map((c, i) => articleListItemElement(c, i))

    return (
      <List>
        {articleListElement}
      </List>
    )
  }

  private loadArticles = () => {
    this.props.dispatch(actions.loadArticles())
  }
}

const mapStateToProps = (state: any, props: any) => (
  state
)

export default connect(mapStateToProps)(withStyles(styles)<IHomeProps>(Home))
