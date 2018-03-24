import React from "react";
import styled from "styled-components";

const Everything = styled.div`
  background: radial-gradient(circle, orange, orange 50%, yellow 50%, orange);
`;
const Text = styled.a`
  color: lightgreen;
`;

const Menu = () => {
  return (
    <Everything>
      <ul>
        <li>
          <Text href="Menu.js">Home</Text>
        </li>
      </ul>
      <ul>
        <li>
          <Text href="/Users/boblam/Projects">Projects</Text>
        </li>
      </ul>
      <ul>
        <li>
          <Text href="/Users/boblam/Projects/boblam.ceo/src/images">
            Gallery
          </Text>
        </li>
      </ul>
    </Everything>
  );
};

export default Menu;
