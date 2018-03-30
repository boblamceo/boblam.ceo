import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";
import { init } from "pell";
import { Input } from "semantic-ui-react";
import smart from "./images/smart.jpg";
import oldGuy from "./images/old-man.jpg";
import { Button } from "semantic-ui-react";

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
  flex-direction: column;
`;

const TextEditor = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 5px;
  width: 400px;
`;

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  componentDidMount() {
    const editor = init({
      element: document.getElementById("pell"),
      onChange: html => {
        // document.getElementById("html-output").textContent = html;
      },
      actions: ["bold", "italic", "heading1", "heading2", "olist", "ulist"]
    });
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({
      title
    });
  };

  onDescriptionChange(e) {
    const description = e.target.value;
  }

  render() {
    return (
      <Everything>
        <TextEditor>
          <Input
            focus
            placeholder="Title..."
            onChange={this.onTitleChange}
            value={this.state.title}
            fluid
          />
          <div id="pell" />
        </TextEditor>
        <div>
          <Card
            image={smart}
            header={this.state.title}
            meta={new Date()}
            description={this.state.description}
          />
          <Button content="Submit" primary />
        </div>

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
