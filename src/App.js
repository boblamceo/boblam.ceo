import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import ReactMusicPlayer from 'react-music-player';

var songs = [
  {
    url: 'Believer.mp3',
    cover: 'path/to/jpeg',
    artist: {
      name: 'Metallica',
      song: 'Believer'
    }
  },

class App extends Component {
  render() {
    return (
      <Container>
        <ReactMusicPlayer songs={songs} autoplay />
        <Header />
        <Menu />
      </Container>
    );
  }
},

export default App;
