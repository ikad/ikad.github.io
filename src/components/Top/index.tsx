import * as React from "react"

import logo from "./logo.svg"

class Top extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">こんにちは React</h1>
        </header>
        <p className="App-intro">
          トップページだよ。
        </p>
      </React.Fragment>
    )
  }
}

export default Top
