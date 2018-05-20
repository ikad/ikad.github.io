import green from "@material-ui/core/colors/green"
import purple from "@material-ui/core/colors/purple"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import * as React from "react"

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: purple[900],
      light: purple[500],
      main: purple[700],
    },
    secondary: {
      dark: green[900],
      light: green[500],
      main: green[700],
    },
  },
})

const withRoot = (Component: any) => (props: any) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </MuiThemeProvider>
)

export default withRoot
