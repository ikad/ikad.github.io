import * as React from "react"
import { connect } from "react-redux"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import * as actions from "../actions"
import { IArticle } from "../reducers"

import ArticleListItem from "../components/ArticleListItem"
import BookmarkButton from "../components/BookmarkButton/confirmable"

import i18n from "../utils/i18n"

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
    const { dispatch } = this.props
    const articles = this.props.articles.filter(c => !!c.bookmark)

    const articleListItemElement = (article: IArticle, index: number) => {
      const handleToggleBookmark = () => {
        dispatch(actions.toggleBookmark(article))
      }

      const bookmarkButtonElement = (
        <BookmarkButton bookmark={article.bookmark} onToggleBookmark={handleToggleBookmark} />
      )

      return (
        <ArticleListItem key={index} article={article} bookmarkButton={bookmarkButtonElement} dispatch={dispatch} />
      )
    }
    const articleListElement = articles.filter(c => !!c.bookmark).map((c, i) => articleListItemElement(c, i))

    const emptyListElement = (articles.length === 0 &&
      <ListItem>
        <ListItemText primary={i18n.t("bookmark.empty")} />
      </ListItem>
    )

    return (
      <List>
        {articleListElement}
        {emptyListElement}
      </List>
    )
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(withStyles(styles)<IBookmarkProps>(Bookmark))
