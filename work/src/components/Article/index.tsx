import * as React from "react"

import * as ReactMarkdown from "react-markdown"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { IArticle } from "../../reducers/index"

interface IArticleProps {
  article: IArticle,
  dispatch: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  card: {
    margin: "auto",
    maxWidth: 750,
    minHeight: "100vh",
    paddingBottom: "10vh",
  },
})

const Article: React.SFC<IArticleProps & WithStyles> = (props) => {
  const { article, classes } = props

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
    </Card>
  )
}

export default withStyles(styles)<IArticleProps>(Article)
