import React, { Component } from "react"
import { Card, Icon } from "semantic-ui-react"
import styled, { injectGlobal } from "styled-components"
import gql from "graphql-tag"
import { Query, Mutation } from "react-apollo"
import { Flex, Box } from "reflexbox"

import BlogCard from "../components/BlogCard"

const PASSWORD = "boblam.ceo"

const LIST_ARTICLES_QUERY = gql`
  query {
    allArticles {
      id
      title
      content
      date
      image
    }
  }
`

// 3. delete an article - mutation

const Everything = styled.div`
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Cursor = styled.div`
  cursor: pointer;
`

// onPasswordChange = e => {
//   const password = e.target.value
//   this.setState({
//     password,
//   })
// }
//
// checkPassword = () => {
//   const isVisited = this.state.password === PASSWORD
//
//   if (!isVisited) {
//     alert('there is no escape!! =D')
//   }
//
//   this.setState({
//     isVisited,
//   })
// }
//
// render() {
//   const { editorState, isVisited } = this.state
//   if (!isVisited) {
//     return (
//       <div>
//         <Input
//           type="password"
//           onChange={this.onPasswordChange}
//           placeholder="password for edit.js"
//         />
//         <button onClick={this.checkPassword}>enter</button>
//       </div>
//     )
//   }

class Edit extends Component {
  render() {
    return (
      <Query query={LIST_ARTICLES_QUERY}>
        {({ loading, error, data }) => {
          if (loading || !data) {
            return <div>Loading...</div>
          }

          const { allArticles } = data

          console.log(allArticles)

          return (
            <Everything>
              <br />

              {allArticles.map(article => (
                <BlogCard article={article} allowEdit={true} />
              ))}
            </Everything>
          )
        }}
      </Query>
    )
  }
}
export default Edit
