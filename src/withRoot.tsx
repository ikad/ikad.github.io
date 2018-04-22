import green from "material-ui/colors/green"
import purple from "material-ui/colors/purple"
import CssBaseline from "material-ui/CssBaseline"
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"
import * as React from "react"

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: purple[700],
      light: purple[300],
      main: purple[500],
    },
    secondary: {
      dark: green[700],
      light: green[300],
      main: green[500],
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
