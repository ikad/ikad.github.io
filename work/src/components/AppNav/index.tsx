import AppBar from "@material-ui/core/AppBar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import * as React from "react"
import { mailFolderListItems, otherMailFolderListItems } from "./menuItems"

const drawerWidth = 240

const styles: Record<any, any> = (theme: Theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    position: "fixed",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
})

interface IResponsiveDrawer {
  any?: any
}

class ResponsiveDrawer extends React.Component<IResponsiveDrawer & WithStyles> {
  public state = {
    mobileOpen: false,
  }

  public handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  public render() {
    const { classes } = this.props

    const drawer = (
      <div
        onClick={this.handleDrawerToggle}
        onKeyDown={this.handleDrawerToggle}
      >
        <List>
          <ListItem>
            <ListItemText primary="ikad.github.io" />
          </ListItem>
        </List>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    )

    return (
      <React.Fragment>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>
              ikad.github.io
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Hidden mdUp={true}>
            <Drawer
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown={true} implementation="css">
            <Drawer
              variant="permanent"
              open={true}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <div className="App">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)<IResponsiveDrawer>(ResponsiveDrawer)
