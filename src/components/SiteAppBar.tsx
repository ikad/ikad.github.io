import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import * as React from "react"

interface IAppBarProps {

}

const SiteAppBar: React.SFC<IAppBarProps> = (props: any) => {
  return (
    <AppBar>
      <Toolbar>
        Title
      </Toolbar>
    </AppBar>
  )
}

export default SiteAppBar
