import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import gql from "graphql-tag";

import { Editor, createEditorState } from "medium-draft";
import mediumDraftExporter from "medium-draft/lib/exporter";
import { Mutation } from "react-apollo";

const Wrapper = styled.div`
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

// 2. create an article - mutation
const CREATE_ARTICLE_MUTATION = gql`
  mutation($title: String!, $image: String, $content: String) {
    createArticle(title: $title, image: $image, content: $content) {
      id
      title
      content
      date
      image
    }
  }
`;

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      preview: "",
      content: "",
      editorState: createEditorState()
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

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

  onSubmitBlog = createArticle => {
    // do something here
    const renderedHTML = mediumDraftExporter(
      this.state.editorState.getCurrentContent()
    );

    createArticle({
      variables: {
        image: "small.jpg",
        content: renderedHTML,
        title: this.state.title
      }
    }).then(() => {
      this.props.history.push("/blog");
    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <Mutation mutation={CREATE_ARTICLE_MUTATION}>
        {createArticle => {
          return (
            <Wrapper>
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
                <Editor
                  ref="editor"
                  editorState={editorState}
                  onChange={this.onChange}
                />
                <Input
                  focus
                  placeholder="Title..."
                  onChange={this.onTitleChange}
                  value={this.state.title}
                  fluid
                />
                <Button
                  content="Submit"
                  primary
                  fluid
                  onClick={() => this.onSubmitBlog(createArticle)}
                />
              </TextEditor>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}

export default Write;
