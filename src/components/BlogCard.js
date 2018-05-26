import React from "react"
import { Card, Icon } from "semantic-ui-react"
import { Flex, Box } from "reflexbox"
import styled from "styled-components"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const DELETE_ARTICLE_MUTATION = gql`
  mutation($id: ID!) {
    deleteArticle(id: $id) {
      id
      title
      content
      date
      image
    }
  }
`

const Title = styled.h3`
  padding: 1em;
`
const Cursor = styled.div`
  cursor: pointer;
`

const confirmDelete = (mutation, articleId) => {
  /* eslint-disable no-restricted-globals */
  const answer = confirm("Do u really want to do delete this article?")
  console.log(answer)

  if (answer) {
    mutation(articleId)
      .then(response => {
        console.log("response", response)
        window.location.reload()
      })
      .catch(error => {
        console.log("error", error)
      })
  }
}

const BlogCard = ({ article, allowEdit }) => (
  <Card meta={article.date}>
    <Card.Header>
      <Flex justify="space-between" align="center">
        <Box>
          <Title>{article.title}</Title>
        </Box>
        <Box>
          {allowEdit && (
            <Mutation
              mutation={DELETE_ARTICLE_MUTATION}
              variables={{
                id: article.id,
              }}
            >
              {deleteArticle => {
                return (
                  <Cursor>
                    <Icon
                      name="cancel"
                      size="large"
                      onClick={() => confirmDelete(deleteArticle, article.id)}
                      id="confirmClickActionElementId"
                    />
                  </Cursor>
                )
              }}
            </Mutation>
          )}
        </Box>
      </Flex>
    </Card.Header>
    <Card.Content>
      <img src={article.image} width="100%" />
      <br />
      <br />
      <p dangerouslySetInnerHTML={{ __html: article.content }} />
    </Card.Content>
  </Card>
)

export default BlogCard
