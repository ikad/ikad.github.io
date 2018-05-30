import * as React from "react"
import { connect } from "react-redux"

import Button from "@material-ui/core/Button"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Zoom from "@material-ui/core/Zoom"
import BookmarkIcon from "@material-ui/icons/Bookmark"

import * as actions from "../actions"
import { IArticle } from "../reducers"

import Article from "../components/Article"

interface IShowArticleProps {
  articles: IArticle[]
  dispatch: any
  match: any
}

const styles: Record<any, any> = (theme: Theme) => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    position: "fixed",
    right: theme.spacing.unit * 2,
  },
})

class ShowArticle extends React.Component<IShowArticleProps & WithStyles> {
  public state = {
    beforeScrollY: 0,
    displayAction: true,
  }

  public componentWillMount() {
    const id = this.props.match.params.id
    this.props.dispatch(actions.loadArticle(id))
    window.addEventListener("scroll", this.scrollListener)
  }

  public render() {
    const { articles, dispatch, classes } = this.props
    const { displayAction }= this.state
    const id = this.props.match.params.id

    const article = articles.find((c) => c.id === id)
    if (!article) { return null }

    const bookmarkColor = article.bookmark ? "primary" : "default"
    const handleToggleBookmark = () => {
      dispatch(actions.toggleBookmark(article))
    }

    return (
      <div id="ShowArticle">
        <Article article={article} dispatch={dispatch} />
        <div className={classes.fab}>
          <Zoom in={displayAction}>
            <Button variant="fab" color={bookmarkColor} onClick={handleToggleBookmark}>
              <BookmarkIcon />
            </Button>
          </Zoom>
        </div>
      </div>
    )
  }

  private scrollListener = () => {
    this.setState({
      beforeScrollY: window.scrollY,
      displayAction: window.scrollY <= 0 || window.scrollY <= this.state.beforeScrollY,
    })
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(withStyles(styles)<IShowArticleProps>(ShowArticle))
