import * as React from "react"

import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import ArrowBack from "@material-ui/icons/ArrowBack"
import BookmarkIcon from "@material-ui/icons/Bookmark"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { IArticle } from "../../reducers/index"

import { routerActions } from "react-router-redux"

import * as ReactMarkdown from "react-markdown"

interface IArticleProps {
  article: IArticle,
  onToggleBookmark: any
  dispatch: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  card: {
    margin: "auto",
    maxWidth: 750,
  }
})

const Article: React.SFC<IArticleProps & WithStyles> = (props) => {
  const { article, onToggleBookmark, classes } = props
  const handleBackClick = () => {
    props.dispatch(routerActions.goBack())
  }
  const bookmarkColor = article.bookmark ? "primary" : "default"

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom={true} variant="headline" component="h1">
          {article.title}
        </Typography>
        <ReactMarkdown
          className=""
          source={article.body}
        />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleBackClick}>
          <ArrowBack />&nbsp;Back
        </Button>
        <Button size="small" color={bookmarkColor} onClick={onToggleBookmark}>
          <BookmarkIcon />&nbsp;Bookmark
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)<IArticleProps>(Article)
