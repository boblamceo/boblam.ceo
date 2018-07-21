import React from "react"
import styled from "styled-components"
import { Input, Menu as MainMenu } from "semantic-ui-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withRouter } from "react-router"

import Home from "../../pages/Home"
import Project from "../../pages/Project"
import Gallery from "../../pages/Gallery"
import Blog from "../../pages/Blog"
import Write from "../../pages/Write"
import Edit from "../../pages/Edit"

const Everything = styled.div``
const Text = styled.a`
  color: lightgreen;
`

const Navigation = withRouter(props => {
  const { pathname } = props.location
  return (
    <MainMenu secondary>
      <Link to="/">
        <MainMenu.Item name="Home" active={pathname === "/"} />
      </Link>
      <Link to="/projects">
        <MainMenu.Item name="Projects" active={pathname === "/projects"} />
      </Link>
      <Link to="/gallery">
        <MainMenu.Item name="Gallery" active={pathname === "/gallery"} />
      </Link>
      <Link to="/blog">
        <MainMenu.Item name="Blog" active={pathname === "/blog"} />
      </Link>
    </MainMenu>
  )
})

const Menu = () => {
  return (
    <Router>
      <Everything>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/write" component={Write} />
        <Route path="/edit" component={Edit} />
      </Everything>
    </Router>
  )
}

export default Menu
