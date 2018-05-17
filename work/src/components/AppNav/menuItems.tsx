// This file is shared across the demos.

import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import FavoriteIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import * as React from "react"

import { Link } from "react-router-dom"

export const mailFolderListItems = (
  <div>
    <Link to="/">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="All" />
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
    <Link to="/about">
      <ListItem button={true}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
  </div>
)
