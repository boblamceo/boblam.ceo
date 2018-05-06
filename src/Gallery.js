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
import yoga from "./images/yoga.mp4";
import teaching from "./teaching.mp4";

const IMAGE_WIDTH = 350;

const Everything = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gallery = () => (
  <Everything>
    <h1>Bloomberg Certificate</h1>
    <img src={certificate} width={`${IMAGE_WIDTH}px`} />

    <br />

    <h1>Robotics</h1>
    <img src={r2d2} width={`${IMAGE_WIDTH}px`} />

    <br />

    <h1>Secret stuff</h1>

    <img src={seceret} width={`${IMAGE_WIDTH}px`} />

    <br />

    <h1>Chinese</h1>

    <video width="30%" controls>
      <source src={video} type="video/mp4" />
    </video>

    <br />

    <h1>Teakwando</h1>

    <img src={champion} width={`${IMAGE_WIDTH}px`} />

    <br />

    <video width="30%" controls>
      <source src={anothervideo} type="video/mp4" />
    </video>

    <br />

    <h1>Climbing Mountain</h1>

    <img src={smile} width={`${IMAGE_WIDTH}px`} />

    <br />

    <img src={weather} width={`${IMAGE_WIDTH}px`} />

    <br />

    <video width="30%" controls>
      <source src={intro} type="video/mp4" />
    </video>

    <br />

    <img src={back} width={`${IMAGE_WIDTH}px`} />

    <h1>Yoga</h1>

    <video width="70%" controls>
      <source src={yoga} type="video/mp4" />
    </video>

    <br />

    <h1>Coding</h1>

    <img src={me} width={`${IMAGE_WIDTH}px`} />

    <br />

    <video width="30%" controls>
      <source src={teaching} type="video/mp4" />
    </video>

    <br />

    <video width="30%" controls>
      <source src={avideo} type="video/mp4" />
    </video>
  </Everything>
);
export default Gallery;
