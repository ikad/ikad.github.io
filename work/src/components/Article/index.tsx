import * as React from "react"

import * as ReactMarkdown from "react-markdown"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Fade from "@material-ui/core/Fade"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { IArticle } from "../../reducers/index"

import i18n from "../../utils/i18n"

import "./style.css"

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
    <Fade in={true}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom={true} variant="headline" component="h1">
            {article.title}
          </Typography>
          <Typography gutterBottom={true} variant="subheading" align="right" color="textSecondary" component="time">
            updated at : {i18n.dateTime(article.updated_at)}
          </Typography>
          <Divider />
          <ReactMarkdown
            className=""
            source={article.body}
            renderers={
              {
                root: (val) => <Typography component="div">{val.children}</Typography>,
              }
            }
          />
        </CardContent>
      </Card>
    </Fade>
  )
}

export default withStyles(styles)<IArticleProps>(Article)
