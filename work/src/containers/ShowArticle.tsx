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
    beforeScrollTop: 0,
    displayActions: true,
  }

  private scrollDiv: any

  public shouldComponentUpdate(nextProps: any, nextStateIgnore: any) {
    return nextProps.displayActions !== this.state.displayActions
  }

  public render() {
    const { articles, dispatch, classes } = this.props
    const id = this.props.match.params.id

    const article = articles.find((c) => c.id === id)
    if (!article) { return null }

    const bookmarkColor = article.bookmark ? "primary" : "default"
    const handleToggleBookmark = () => {
      dispatch(actions.toggleBookmark(article))
    }

    return (
      <div ref={(inst) => { this.scrollDiv = inst }} id="ShowArticle" onScroll={this.listenScroll}>
        <Article article={article} dispatch={dispatch} />
        <div className={classes.fab}>
          <Zoom in={this.state.displayActions}>
            <Button variant="fab" color={bookmarkColor} onClick={handleToggleBookmark}>
              <BookmarkIcon />
            </Button>
          </Zoom>
        </div>
      </div>
    )
  }

  private listenScroll = () => {
    return this.scrollDiv
    // if (this.state.displayActions !== (this.state.beforeScrollTop >= this.scrollDiv.scrollTop)) {
    //   this.setState({
    //     beforeScrollTop: this.scrollDiv.scrollTop,
    //     displayActions: !this.state.displayActions,
    //   })
    // }
  }
}

const mapStateToProps = (state: any) => (
  state
)

export default connect(mapStateToProps)(withStyles(styles)<IShowArticleProps>(ShowArticle))
