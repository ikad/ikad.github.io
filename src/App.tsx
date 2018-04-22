// import { withStyles, Theme } from "material-ui/styles"
import * as React from "react"
import "./App.css"

// import withRoot from "./withRoot"

import logo from "./logo.svg"

// const styles: Record<any, any> = (theme: Theme) => ({
//   root: {
//     textAlign: "center",
//     paddingTop: theme.spacing.unit * 20,
//   },
// })

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">こんにちは React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </React.Fragment>
    )
  }
}

// export default withRoot(withStyles(styles)(App))
export default App
