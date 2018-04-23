// This file is shared across the demos.

import BookmarkIcon from "@material-ui/icons/Bookmark"
import FavoriteIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import * as React from "react"

import { push } from "react-router-redux"
import { store } from "../../index"

const goHome = () => store.dispatch(push("/"))
const goBookmark = () => store.dispatch(push("/bookmark"))
const goFavorite = () => store.dispatch(push("/favorite"))
const goAbout = () => store.dispatch(push("/about"))

export const mailFolderListItems = (
  <div>
    <ListItem button={true} onClick={goHome}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Top" />
    </ListItem>
    <ListItem button={true} onClick={goBookmark}>
      <ListItemIcon>
        <BookmarkIcon />
      </ListItemIcon>
      <ListItemText primary="Read Later" />
    </ListItem>
    <ListItem button={true} onClick={goFavorite}>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favorite" />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem button={true} onClick={goAbout}>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
)
