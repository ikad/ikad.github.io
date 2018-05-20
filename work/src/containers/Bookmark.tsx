import * as React from "react"
import { connect } from "react-redux"
import { IArticle } from "../reducers"

import ArticleListItem from "../components/ArticleListItem"

import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import List from "@material-ui/core/List"

import * as actions from "../actions"

interface IBookmarkProps {
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

class Bookmark extends React.Component<IBookmarkProps & WithStyles> {
  public render() {
    const articleListItemElement = (article: IArticle, index: number) => {
      const handleToggleBookmark = () => {
        this.props.dispatch(actions.toggleBookmark(article))
      }

      return (
        <ArticleListItem key={index} article={article} onToggleBookmark={handleToggleBookmark} dispatch={this.props.dispatch} />
      )
    }
    const articleListElement = this.props.articles.filter(c => !!c.bookmark).map((c, i) => articleListItemElement(c, i))

    return (
      <div>
        <List>
          {articleListElement}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(withStyles(styles)<IBookmarkProps>(Bookmark))
