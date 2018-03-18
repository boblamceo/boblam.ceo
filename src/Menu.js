import React from "react";
import styled from "styled-components";

const style = styled.div`
  background: radial-gradient(
    circle,
    SkyBlue,
    SkyBlue 50%,
    LightCyan 50%,
    SkyBlue
  );
`;

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="Menu.js">Home</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/Users/boblam/Projects">Projects</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/Users/boblam/Projects/boblam.ceo/src/images">Gallery</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
