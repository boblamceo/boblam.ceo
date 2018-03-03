import React, { Component } from 'react';
import styled from 'styled-components';

import profilePic from './images/profile-pic.jpg'
import bg from './images/bg.jpg'

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

const Img = styled.img`
  width: 240px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.19);
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
          <Img src={profilePic} />
        </ImageWrapper>
      </Layout>
    );
  }
}

export default App;
