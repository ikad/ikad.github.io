import * as React from "react"

import BookmarkIcon from "@material-ui/icons/Bookmark"

import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"

import Divider from "@material-ui/core/Divider"

import IconButton from "@material-ui/core/IconButton"

import { routerActions } from "react-router-redux"

import { IArticle } from "../../reducers"

interface IArticleListItemProps {
  article: IArticle
  onToggleBookmark: any
  dispatch: any
}

const ArticleListItem: React.SFC<IArticleListItemProps> = (props) => {
  const { article, onToggleBookmark } = props
  const handleListItemClick = () => {
    props.dispatch(routerActions.push(`/${article.id}`))
  }
  const bookmarkColor = article.bookmark ? "primary" : "default"

  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={article.title} secondary={article.body.substring(0, 40)} onClick={handleListItemClick} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Bookmark" color={bookmarkColor} onClick={onToggleBookmark}>
            <BookmarkIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}

export default ArticleListItem
