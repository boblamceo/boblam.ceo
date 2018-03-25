import React from "react";
import champion from "./images/champion.jpg";
import winningImage from "./images/profile-pic.jpg";
import me from "./images/me-doing-the-computer.jpg";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import back from "./images/back.jpg";
import video from "./images/99.mp4";

const IMAGE_WIDTH = 350;

const Everything = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gallery = () => (
  <Everything>
    <img src={champion} width={`${IMAGE_WIDTH}px`} />
    <img src={winningImage} width={`${IMAGE_WIDTH}px`} />
    <img src={me} width={`${IMAGE_WIDTH}px`} />
    <img src={back} width={`${IMAGE_WIDTH}px`} />
  </Everything>
);
export default Gallery;
