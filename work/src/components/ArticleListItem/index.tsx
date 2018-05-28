import * as React from "react"
import { routerActions } from "react-router-redux"

import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"

import { IArticle } from "../../reducers"

import i18n from "../../utils/i18n"

interface IArticleListItemProps {
  article: IArticle
  bookmarkButton?: any
  dispatch: any
}

const ArticleListItem: React.SFC<IArticleListItemProps> = (props) => {
  const { article, bookmarkButton } = props
  const handleListItemClick = () => {
    props.dispatch(routerActions.push(`/${article.id}`))
  }

  const bookmarkButtonElement = (bookmarkButton &&
    <ListItemSecondaryAction>{bookmarkButton}</ListItemSecondaryAction>
  )

  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={article.title} secondary={`Updated at : ${i18n.dateTime(article.updated_at)}`} onClick={handleListItemClick} />
        {bookmarkButtonElement}
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}

export default ArticleListItem
