import React from "react";
import certificate from "./images/certificate-of-participation.png";
import me from "./images/me-doing-the-computer.jpg";
import styled from "styled-components";
import back from "./images/back.jpg";
import champion from "./images/champion.jpg";
import seceret from "./images/code.JPG";
import r2d2 from "./images/r2d2.jpg";
import Iframe from "react-iframe";
import video from "./99.mp4";
import avideo from "./90.mp4";
import anothervideo from "./teakwando.mp4";
import firstGuy from "./images/first-guy-on-here.jpg";
import smile from "./images/smile-on-mountain.jpg";
import weather from "./images/checking-the-weather.jpg";
import intro from "./images/intro-to-this-place.mp4";

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
    <img src={champion} width={`${IMAGE_WIDTH}px`} />
    <img src={me} width={`${IMAGE_WIDTH}px`} />
    <img src={back} width={`${IMAGE_WIDTH}px`} />
    <img src={r2d2} width={`${IMAGE_WIDTH}px`} />
    <img src={seceret} width={`${IMAGE_WIDTH}px`} />
    <img src={smile} width={`${IMAGE_WIDTH}px`} />
    <img src={weather} width={`${IMAGE_WIDTH}px`} />

    <br />

    <video width="30%" controls>
      <source src={video} type="video/mp4" />
    </video>

    <br />

    <video width="30%" controls>
      <source src={avideo} type="video/mp4" />
    </video>
    <br />

    <video width="30%" controls>
      <source src={anothervideo} type="video/mp4" />
    </video>

    <br />

    <video width="30%" controls>
      <source src={intro} type="video/mp4" />
    </video>
  </Everything>
);
export default Gallery;
