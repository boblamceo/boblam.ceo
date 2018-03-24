import React from "react";
import styled from "styled-components";
import { Input, Menu as MainMenu } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Gallery from "./Gallery";

const Everything = styled.div`
  background: radial-gradient(circle, orange, orange 50%, yellow 50%, orange);
`;
const Text = styled.a`
  color: lightgreen;
`;

const Menu = () => {
  return (
    <Router>
      <Everything>
        <MainMenu secondary>
          <Link to="/">
            <MainMenu.Item name="Home" active={false} />
          </Link>
          <Link to="/projects">
            <MainMenu.Item name="Projects" active={false} />
          </Link>
          <Link to="/gallery">
            <MainMenu.Item name="Gallery" active={false} />
          </Link>
        </MainMenu>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/gallery" component={Gallery} />
      </Everything>
    </Router>
  );
};

export default Menu;
