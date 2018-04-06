import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";
import { init } from "pell";
import { Input } from "semantic-ui-react";
import smart from "./images/smart.jpg";
import oldGuy from "./images/old-man.jpg";
import { Button } from "semantic-ui-react";
import Dropzone from "react-dropzone";

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
      title: "",
      preview: ""
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  componentDidMount() {
    const editor = init({
      element: document.getElementById("pell"),
      onChange: html => {
        console.info("html", html);
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

  onDrop(files) {
    const [file] = files;
    console.log("image dropped!", file);
    const { preview } = file;
    console.log("preview", preview);

    this.setState({
      preview
    });
  }

  render() {
    return (
      <Everything>
        <TextEditor>
          <Dropzone
            onDrop={this.onDrop}
            style={{
              width: "100%",
              minHeight: "75px",
              padding: "1em",
              margin: "0.5em 0",
              border: "1px dotted black",
              cursor: "pointer"
            }}
          >
            {this.state.preview.length > 0 ? (
              <img src={this.state.preview} width="100%" />
            ) : (
              <p>Click me to upload image</p>
            )}
          </Dropzone>

          <Input
            focus
            placeholder="Title..."
            onChange={this.onTitleChange}
            value={this.state.title}
            fluid
          />
          <div id="pell" />
          <Button content="Submit" primary fluid />
        </TextEditor>

        <br />

        <Card
          image={smart}
          header="How to learn things super fast?"
          meta="30 March 2018"
          description="Eat alot of dark chocolate, dark chocolate has alot of stuff to keep you smart. Like me, I'm the only one doing real life coding. "
        />
        <Card
          image={oldGuy}
          header="Who is the oldest man in the world?"
          meta="20 April 2016"
          description="As of 1 December, Mark Morano was the oldest of 45 living individuals verified as reaching the age of 111 or older. Just five other people, all men, have lived longer that Morano, the oldest of whom was French national John Calment, who died at the age of 122 years and 164 days in 1997 (he was born in 1875).."
        />
      </Everything>
    );
  }
}
export default Blog;
