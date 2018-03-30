import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";
import { init } from "pell";

import smart from "./images/smart.jpg";
import oldGuy from "./images/old-man.jpg";

injectGlobal`
  .pell-content {
    height: 250px;
  }
`;

const Everything = styled.div`
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextEditor = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 5px;
  max-width: 80%;
`;

class Blog extends Component {
  componentDidMount() {
    const editor = init({
      element: document.getElementById("pell"),
      onChange: html => {
        // document.getElementById("html-output").textContent = html;
      },
      actions: ["bold", "italic", "heading1", "heading2", "olist", "ulist"]
    });
  }

  render() {
    return (
      <Everything>
        <TextEditor id="pell" />
        <Card
          image={smart}
          header="How to learn things super fast?"
          meta="30 March 2018"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          image={oldGuy}
          header="Who is the oldest man in the world?"
          meta="20 April 2016"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </Everything>
    );
  }
}
export default Blog;
