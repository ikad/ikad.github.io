import MenuIcon from "@material-ui/icons/Menu"
import AppBar from "material-ui/AppBar"
import Divider from "material-ui/Divider"
import Drawer from "material-ui/Drawer"
import Hidden from "material-ui/Hidden"
import IconButton from "material-ui/IconButton"
import List from "material-ui/List"
import { ListItem, ListItemText } from "material-ui/List"
import { Theme, withStyles, WithStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import * as React from "react"
import { mailFolderListItems, otherMailFolderListItems } from "./menuItems"

const drawerWidth = 240

const styles: Record<any, any> = (theme: Theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    position: "absolute",
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
      <div className={classes.root}>
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
            <Typography variant="title" color="inherit" noWrap={true} />
          </Toolbar>
        </AppBar>
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
    )
  }
}

export default withStyles(styles)<IResponsiveDrawer>(ResponsiveDrawer)
