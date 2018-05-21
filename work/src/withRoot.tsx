import purple from "@material-ui/core/colors/purple"
import red from "@material-ui/core/colors/red"
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
      dark: red[700],
      light: red[300],
      main: red[500],
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
