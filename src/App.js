import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Menu />
      </Container>
    );
  }
}

export default App;
