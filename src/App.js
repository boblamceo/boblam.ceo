import React, { Component } from "react";
import styled from "styled-components";
import { Sound } from "react-sound";

import Header from "./Header";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Sound
          url="/believer.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          Loop={true}
        />
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
