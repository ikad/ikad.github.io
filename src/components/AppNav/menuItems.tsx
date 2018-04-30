// This file is shared across the demos.

import BookmarkIcon from "@material-ui/icons/Bookmark"
import FavoriteIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import * as React from "react"

import { Link } from "react-router-dom"

export const mailFolderListItems = (
  <div>
    <Link to="/">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItem>
    </Link>
    <Link to="/bookmark">
      <ListItem button={true}>
        <ListItemIcon>
          <BookmarkIcon />
        </ListItemIcon>
        <ListItemText primary="Read Later" />
      </ListItem>
    </Link>
    <Link to="/favorite">
      <ListItem button={true}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favorite" />
      </ListItem>
    </Link>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
)
