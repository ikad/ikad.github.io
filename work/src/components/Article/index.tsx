import * as React from "react"

import * as ReactMarkdown from "react-markdown"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Zoom from "@material-ui/core/Zoom"
import BookmarkIcon from "@material-ui/icons/Bookmark"

import { IArticle } from "../../reducers/index"

interface IArticleProps {
  article: IArticle,
  onToggleBookmark: any
  dispatch: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  card: {
    margin: "auto",
    maxWidth: 750,
    minHeight: "100vh",
  },
  fab: {
    bottom: theme.spacing.unit * 2,
    position: "fixed",
    right: theme.spacing.unit * 2,
  },
})

const Article: React.SFC<IArticleProps & WithStyles> = (props) => {
  const { article, onToggleBookmark, classes } = props
  const bookmarkColor = article.bookmark ? "primary" : "default"

  return (
    <React.Fragment>
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
      </Card>
      <div className={classes.fab}>
        <Zoom in={true}>
          <Button variant="fab" color={bookmarkColor} onClick={onToggleBookmark}>
            <BookmarkIcon />
          </Button>
        </Zoom>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)<IArticleProps>(Article)
