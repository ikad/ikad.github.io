import * as React from "react"

import BookmarkButton from "../BookmarkButton/"

import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"

import Divider from "@material-ui/core/Divider"

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

  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={article.title} secondary={article.body.substring(0, 40)} onClick={handleListItemClick} />
        <ListItemSecondaryAction>
          <BookmarkButton bookmark={article.bookmark} onToggleBookmark={onToggleBookmark} />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}

export default ArticleListItem
