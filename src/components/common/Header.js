import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import profilePic from "../../images/profile-pic2.jpg";
import bg from "../../images/bg.jpg";

const Layout = styled.div`
  padding: 1em;
  height: 420px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: url('${bg}') no-repeat center center fixed;
  background-size: cover;

  @media (min-width: 700px) {
    align-items: center;
      height: 240px;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: 700px) {
    margin-left: 3em;
  }
`;

const Header = styled.header`
  text-align: center;
  color: red;
`;

const SpecialHeader = styled.h2`
  font-family: "Mina", sans-serif;
`;

const Page = () => (
  <Layout>
    <Header>
      <SpecialHeader>Welcome to Bob Lam's Homework</SpecialHeader>
      <SpecialHeader>Bienvenido a la tarea de Bob Lam</SpecialHeader>
      <SpecialHeader>欢迎来到林鸿博的网站</SpecialHeader>
    </Header>
    <ImageWrapper>
      <Image src={profilePic} size="small" circular />
    </ImageWrapper>
  </Layout>
);

export default Page;
