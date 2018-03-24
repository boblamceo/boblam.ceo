import React from "react";
import certificate from "./images/certificate-of-participation.png";
import winningImage from "./images/profile-pic.jpg";
import me from "./images/me-in-year-2.png";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";

const IMAGE_WIDTH = 350;

const Everything = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gallery = () => (
  <Everything>
    <img src={certificate} width={`${IMAGE_WIDTH}px`} />
    <img src={winningImage} width={`${IMAGE_WIDTH}px`} />
    <img src={me} width={`${IMAGE_WIDTH}px`} />
  </Everything>
);
export default Gallery;
