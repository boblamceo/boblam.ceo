import React from "react";
import styled from "styled-components";
import ImageZoom from 'react-medium-image-zoom'

import Iframe from "react-iframe";
import GalleryFromImport from 'react-photo-gallery';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Button, Modal } from 'semantic-ui-react'

import certificate from "../images/certificate-of-participation.png";
import me from "../images/me-doing-the-computer.jpg";
import back from "../images/back.jpg";
import champion from "../images/champion.jpg";
import seceret from "../images/code.JPG";
import r2d2 from "../images/r2d2.jpg";
import firstGuy from "../images/first-guy-on-here.jpg";
import smile from "../images/smile-on-mountain.jpg";
import weather from "../images/checking-the-weather.jpg";
import MediaScroll from '../components/common/MediaScroll'
import video from "../videos/99.mp4";
import avideo from "../videos/90.mp4";
import anothervideo from "../videos/teakwando.mp4";
import intro from "../videos/intro-to-this-place.mp4";
import yoga from "../videos/yoga.mp4";
import teaching from "../videos/teaching.mp4";
import terminal from "../videos/terminal.mp4"
import terminalAgain from "../videos/terminal-again.mp4"
import learningRobot from "../images/learning-robotics.jpg"
import arduino from "../videos/arduino.mp4"
import testing from "../images/testing.jpg"
import VideoModal from "../components/common/VideoModal"
import circle from "../videos/circle-around-building.MOV"
import tencentSign from "../images/me-near-tencent-sign.jpg"
import building from "../images/tencent-building.jpg"

const IMAGE_WIDTH = 375;

const Everything = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;


const Gallery = () => (
  <Everything>
    <br />
    <h1>Bloomberg Certificate</h1>
    <ImageZoom
       image={{
         src: certificate,
         className: 'img',
         width: `${IMAGE_WIDTH}px`
       }}
       zoomImage={{
         src: certificate,
       }}
     />

    <br />

    <h1>Robotics</h1>

    <MediaScroll images={[learningRobot, arduino, terminal, testing]} />

    <h1>Secret stuff</h1>

    <ImageZoom image={{src:seceret, className: 'img', width:`${IMAGE_WIDTH}px`}} />

    <br />

    <h1>Chinese</h1>

    <VideoModal width={`300px`}>
      <video width={`${IMAGE_WIDTH}px`} autoPlay loop src={video} type="video/mp4" />
    </VideoModal>

    <br />

    <h1>Teakwando</h1>

    <MediaScroll images={[anothervideo, champion]} />

    <br />

    <h1>Climbing Mountain</h1>

    <MediaScroll images={[smile, firstGuy, back, intro]} />

    <h1>Yoga</h1>
    <VideoModal>
      <video width={`${IMAGE_WIDTH}px`} autoPlay loop src={yoga} type="video/mp4" />
      </VideoModal>
    <br />

    <h1>Coding</h1>

    <MediaScroll images={[teaching, avideo, me, terminalAgain]} />

    <h1>Tencent</h1>

    <MediaScroll images={[circle, tencentSign, building]} />
    }


  </Everything>
);
export default Gallery;
