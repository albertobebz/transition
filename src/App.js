import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import WrapperContainerWithSideNav from "./components/WrapperContainerWithSideNav"
import TermsAndCondition from "./components/TermsAndCondition"
import Biside from "./components/Biside"

import { texts } from "./copy"

import "./App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <WrapperContainerWithSideNav>
            <Route
              exact
              path={"/terms"}
              component={() => (
                <TermsAndCondition
                  title={texts.terms.title}
                  text={texts.terms.text}
                />
              )}
            />
            <Route
              exact
              path={"/rules"}
              component={() => (
                <TermsAndCondition
                  title={texts.rules.title}
                  text={texts.rules.text}
                />
              )}
            />
            <Route exact path="/biside" component={Biside} />
          </WrapperContainerWithSideNav>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
