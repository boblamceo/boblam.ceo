import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import profilePic from "../../images/profile-pic2.jpg";
import bg from "../../images/bg.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5em;
`

const ImageWrapper = styled.div`
  @media (min-width: 700px) {
    margin-left: 3em;
  }
`;

const Header = styled.header`
  text-align: center;
  color: white;
`;

const SpecialHeader = styled.h3`
  font-family: "Mina", sans-serif;
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
