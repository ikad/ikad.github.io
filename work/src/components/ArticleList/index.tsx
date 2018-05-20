import * as React from "react"

import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import BookmarkIcon from "@material-ui/icons/Bookmark"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { Link } from "react-router-dom"

import { IArticle } from "../../reducers"

interface IArticleListProps {
  article: IArticle
}

const styles: Record<any, any> = (theme: Theme) => ({
})

const ArticleList: React.SFC<IArticleListProps & WithStyles> = (props) => {
  const { article, classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom={true} variant="headline" component="h2">
          <Link to={`/${article.id}`}>
            {article.title}
          </Link>
        </Typography>
        <Typography component="p">
          {article.body.substring(0, 140)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <BookmarkIcon />&nbsp;Bookmark
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)<IArticleListProps>(ArticleList)
