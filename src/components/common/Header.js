import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import profilePic from "../../images/profile-pic2.jpg";
import bg from "../../images/bg.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2.5em;
  margin-bottom: 2.5em;

  padding: 0 1.5em;
`

const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 3em;
  }
`;

const Header = styled.header`
  text-align: center;
  color: white;
`;

const SpecialHeader = styled.div`
  font-family: "Mina", sans-serif;
  font-size: 1.2em;

  @media(min-width: 768px){
    font-size: 1.4em;
  }

  padding: 0.5em 0;
`;

const Page = () => (
  <Wrapper>
    <Header>
      <SpecialHeader>Welcome to Bob Lam's Homework</SpecialHeader>
      <SpecialHeader>Bienvenido a la tarea de Bob Lam</SpecialHeader>
      <SpecialHeader>歡迎來到林鴻博的網站</SpecialHeader>
      <SpecialHeader>欢迎来到林鸿博的网站</SpecialHeader>
    </Header>
    <ImageWrapper>
      <Image src={profilePic} size="small" circular />
    </ImageWrapper>
  </Wrapper>
);

export default Page;
