import React from "react"
import styled from "styled-components"
import { Input, Menu as MainMenu, Icon } from "semantic-ui-react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withRouter } from "react-router"

const Everything = styled.div`
  width: 100%;
`

const Text = styled.a`
  color: lightgreen;
`
const Flex = styled.div`
  padding: 0.75em;
  display: flex;
  justify-content: space-between;
`

const TwitterIcon = styled.div`
  color: #5cb2ce;
  font-size: 20px;
  cursor: pointer;
`

const GithubIcon = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 0.5em;
  cursor: pointer;
`

const LinkedinIcon = styled.div`
  color: #2c80b5;
  font-size: 20px;
  margin-right: 0.5em;
  cursor: pointer;
`

const Navigation = withRouter(props => {
  const { pathname } = props.location
  return (
      <MainMenu secondary style={{margin: 0}}>
        <Link to="/">
          <MainMenu.Item name="Home" style={{color:'white'}} active={pathname === "/"} />
        </Link>
        <Link to="/projects">
          <MainMenu.Item name="Projects" style={{color:'white'}} active={pathname === "/projects"} />
        </Link>
        <Link to="/gallery">
          <MainMenu.Item name="Scrollable Gallery" style={{color: 'white'}} active={pathname === "/gallery"} />
        </Link>
        <Link to="/blog">
          <MainMenu.Item name="Blog" style={{color:'white'}} active={pathname === "/blog"} />
        </Link>
      </MainMenu>
  )
})

const Menu = () => {
  return (
      <Everything>
        <Flex>
          <Navigation />
          <Flex>
            <a href='https://www.linkedin.com/in/bob-lam-755913162/' target='_blank'>
              <LinkedinIcon>
                <Icon link name='linkedin' />
              </LinkedinIcon>
            </a>
            <a href='https://github.com/boblamceo' target='_blank'>
              <GithubIcon>
                <Icon link name='github' />
              </GithubIcon>
            </a>
            <a href="https://twitter.com/bobLamCEO" target="_blank">
              <TwitterIcon>
                <Icon link name='twitter' />
              </TwitterIcon>
            </a>
          </Flex>
        </Flex>
      </Everything>
  )
}

export default Menu
