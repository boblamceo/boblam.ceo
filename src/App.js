import React, { Component } from 'react';
import styled from 'styled-components';

import profilePic from './images/profile-pic2.jpg'
import bg from './images/bg.jpg'
import { Image } from 'semantic-ui-react'

const Layout = styled.div`
  padding: 1em;
  height: calc(100vh - 2em);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: url('${bg}') no-repeat center center fixed;
  background-size: cover;

  @media (min-width: 700px) {
    align-items: center;
  }
`

const ImageWrapper = styled.div`
  @media (min-width: 700px) {
    margin-left: 3em;
  }
`

const Header = styled.header`
  text-align: center;
  color: white;
`

const SpecialHeader = styled.h1`
  font-family: 'Mina', sans-serif;
`

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <SpecialHeader>Welcome to Bob Lam's Homework</SpecialHeader>
          <SpecialHeader>Bienvenido a la tarea de Bob Lam</SpecialHeader>
          <SpecialHeader>欢迎来到林鸿博的网站</SpecialHeader>
        </Header>
        <ImageWrapper>
          <Image src={profilePic} size='medium' circular />
        </ImageWrapper>
      </Layout>
    );
  }
}

export default App;
