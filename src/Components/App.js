import React, { Component } from "react";
import Header from "Components/Header";
import Router from "Components/Router";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
