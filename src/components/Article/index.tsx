import * as React from "react"

import { Theme, withStyles } from "material-ui/styles"

import BookmarkIcon from "@material-ui/icons/Bookmark"
import FavoriteIcon from "@material-ui/icons/Favorite"

import Button from "material-ui/Button"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"

interface IArticleProps {
  id: string
  title: string
  body: string
  classes?: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  card: {
    maxWidth: 750,
  }
})

const Article: React.SFC<IArticleProps> = (props) => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom={true} variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">
          {props.body}
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

export default withStyles(styles)(Article)
