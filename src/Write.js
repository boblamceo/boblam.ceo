import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import gql from 'graphql-tag'

import { Editor, createEditorState } from 'medium-draft'
import mediumDraftExporter from 'medium-draft/lib/exporter'
import { Mutation } from 'react-apollo'

const PASSWORD = 'boblam.ceo'

const Wrapper = styled.div`
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextEditor = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 5px;
  width: 400px;
`
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
`

function toDataURL(src, callback) {
  var xhttp = new XMLHttpRequest()

  xhttp.onload = function() {
    var fileReader = new FileReader()
    fileReader.onloadend = function() {
      callback(fileReader.result)
    }
    fileReader.readAsDataURL(xhttp.response)
  }

  xhttp.responseType = 'blob'
  xhttp.open('GET', src, true)
  xhttp.send()
}

class Write extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      image: '',
      preview: '',
      content: '',
      password: '',
      isAuthenticated: false,
      editorState: createEditorState(),
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  onChange = editorState => {
    this.setState({ editorState })
  }

  onTitleChange = e => {
    const title = e.target.value
    this.setState({
      title,
    })
  }

  onDrop(files) {
    const [file] = files
    console.log('image dropped!', file)
    const { preview } = file

    // encode
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }

    getBase64(file).then(base64Image => {
      this.setState({
        preview,
        image: base64Image,
      })
    })
  }

  onSubmitBlog = createArticle => {
    // do something here
    const renderedHTML = mediumDraftExporter(
      this.state.editorState.getCurrentContent()
    )

    createArticle({
      variables: {
        image: this.state.image,
        content: renderedHTML,
        title: this.state.title,
      },
    }).then(() => {
      this.props.history.push('/blog')
    })
  }

  onPasswordChange = e => {
    const password = e.target.value
    this.setState({
      password,
    })
  }

  checkPassword = () => {
    const isAuthenticated = this.state.password === PASSWORD

    if (!isAuthenticated) {
      alert('there is no escape!! =D')
    }

    this.setState({
      isAuthenticated,
    })
  }

  render() {
    const { editorState, isAuthenticated } = this.state

    if (!isAuthenticated) {
      return (
        <div>
          <Input
            type="password"
            onChange={this.onPasswordChange}
            placeholder="password"
          />
          <button onClick={this.checkPassword}>enter</button>
        </div>
      )
    }

    return (
      <Mutation mutation={CREATE_ARTICLE_MUTATION}>
        {createArticle => {
          return (
            <Wrapper>
              <TextEditor>
                <Dropzone
                  onDrop={this.onDrop}
                  style={{
                    width: '100%',
                    minHeight: '75px',
                    padding: '1em',
                    margin: '0.5em 0',
                    border: '1px dotted black',
                    cursor: 'pointer',
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
                <input
                  focus
                  placeholder="Title..."
                  onChange={this.onTitleChange}
                  value={this.state.title}
                  fluid
                  style="margin: 7px;"
                />
                <Button
                  content="Submit"
                  primary
                  fluid
                  onClick={() => this.onSubmitBlog(createArticle)}
                />
              </TextEditor>
            </Wrapper>
          )
        }}
      </Mutation>
    )
  }
}

export default Write
