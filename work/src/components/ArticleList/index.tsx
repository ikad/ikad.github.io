import * as React from "react"

import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"

import BookmarkIcon from "@material-ui/icons/Bookmark"
import FavoriteIcon from "@material-ui/icons/Favorite"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { Link } from "react-router-dom"

interface IArticleListProps {
  id: string
  title: string
  body: string
}

const styles: Record<any, any> = (theme: Theme) => ({
})

const ArticleList: React.SFC<IArticleListProps & WithStyles> = (props) => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom={true} variant="headline" component="h2">
          <Link to={`/${props.id}`}>
            {props.title}
          </Link>
        </Typography>
        <Typography component="p">
          {props.body.substring(0, 140)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <BookmarkIcon />
          &nbsp;Read Later
        </Button>
        <Button size="small" color="primary">
          <FavoriteIcon />
          &nbsp;Favorite
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)<IArticleListProps>(ArticleList)
