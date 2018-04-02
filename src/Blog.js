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
          description="Twyla Tharp, a NYC-based renowned choreographer has come up with the following memory workout: when she watches one of her performances, she tries to remember the first twelve to fourteen corrections she wants to discuss with her cast without writing them down. If you think this is anything less than a feat, then think again. In her book The Creative Habit she says that most people cannot remember more than three.
The practice of both remembering events or things and then discussing them with others has actually been supported by brain fitness studies. Memory activities that engage all levels of brain operation—receiving, remembering and thinking—help to improve the function of the brain.
Now, you may not have dancers to correct, but you may be required to give feedback on a presentation, or your friends may ask you what interesting things you saw at the museum. These are great opportunities to practically train your brain by flexing your memory muscles.
What is the simplest way to help yourself remember what you see? Repetition.
For example, say you just met someone new.
“Hi, my name is George”
Don’t just respond with, “Nice to meet you”. Instead, say, “Nice to meet you George.” Got it? Good.."
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
