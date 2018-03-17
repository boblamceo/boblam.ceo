import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
