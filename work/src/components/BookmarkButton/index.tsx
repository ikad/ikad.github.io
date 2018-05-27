import * as React from "react"

import IconButton from "@material-ui/core/IconButton"
import BookmarkIcon from "@material-ui/icons/Bookmark"

interface IBookmarkButtonProps {
  bookmark: boolean
  onToggleBookmark: any
}

const BookmarkButton: React.SFC<IBookmarkButtonProps> = (props) => {
  const { bookmark, onToggleBookmark } = props
  const color = bookmark ? "primary" : "default"

  return (
    <IconButton aria-label="Bookmark" color={color} onClick={onToggleBookmark}>
      <BookmarkIcon />
    </IconButton>
  )
}

export default BookmarkButton
