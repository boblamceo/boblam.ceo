import React from "react"
import styled from "styled-components"
import { Input, Menu as MainMenu } from "semantic-ui-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withRouter } from "react-router"

const Everything = styled.div`
  width: 100%;
`

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
        <MainMenu.Item name="Scrollable Gallery" active={pathname === "/gallery"} />
      </Link>
      <Link to="/blog">
        <MainMenu.Item name="Blog" active={pathname === "/blog"} />
      </Link>
    </MainMenu>
  )
})

const Menu = () => {
  return (
      <Everything>
        <Navigation />
      </Everything>
  )
}

export default Menu
