import React, { Component } from "react"
import { Card, Icon } from "semantic-ui-react"
import styled, { injectGlobal } from "styled-components"
import gql from "graphql-tag"
import { Query, Mutation } from "react-apollo"
import { Flex, Box } from "reflexbox"

import BlogCard from "../components/BlogCard"

// 1. list all articles - query
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

class Blog extends Component {
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
                <BlogCard article={article} allowEdit={false} />
              ))}
            </Everything>
          )
        }}
      </Query>
    )
  }
}
export default Blog
