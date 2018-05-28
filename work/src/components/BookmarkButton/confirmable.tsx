import * as React from "react"

import IconButton from "@material-ui/core/IconButton"
import Zoom from "@material-ui/core/Zoom"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import CancelIcon from "@material-ui/icons/Cancel"
import DeleteIcon from "@material-ui/icons/Delete"

interface IBookmarkButtonProps {
  bookmark: boolean
  onToggleBookmark: any
}

class BookmarkButton extends React.Component<IBookmarkButtonProps> {
  public state = {
    confirm: false,
  }

  public render() {
    const color = this.state.confirm ? "secondary" : this.props.bookmark ? "primary" : "default"

    const handleClick = () => {
      if (!!this.props.bookmark && !this.state.confirm) {
        this.setState({confirm: true})
      } else {
        this.setState({confirm: false})
        this.props.onToggleBookmark()
      }
    }

    const handleCancel = () => {
      this.setState({confirm: false})
    }

    const bookmarkIcon = (
      <IconButton aria-label="Bookmark" color={color} onClick={handleClick}>
        <BookmarkIcon />
      </IconButton>
    )

    const confirmIcon = (
      <Zoom in={true}>
        <div style={{display: "flex",flexDirection: "column" }}>
          <IconButton aria-label="Bookmark" color="secondary" onClick={handleClick} style={{height: 32}}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Bookmark" color="default" onClick={handleCancel} style={{height: 32}}>
            <CancelIcon />
          </IconButton>
        </div>
      </Zoom>
    )

    return (
      this.state.confirm ? confirmIcon : bookmarkIcon
    )
  }

}

export default BookmarkButton
