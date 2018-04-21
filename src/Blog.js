import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { Flex, Box } from "reflexbox";

import smart from "./images/smart.jpg";
import oldGuy from "./images/old-man.jpg";

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
`;

// 3. delete an article - mutation
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
`;

const Everything = styled.div`
  padding: 1em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 1em;
`;

class Blog extends Component {
  render() {
    return (
      <Query query={LIST_ARTICLES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          const { allArticles } = data;

          console.log(allArticles);

          return (
            <Everything>
              <br />

              {allArticles.map(article => (
                <Card meta={article.date}>
                  <Card.Header>
                    <Flex justify="space-between" align="center">
                      <Box>
                        <Title>{article.title}</Title>
                      </Box>
                      <Box>
                        <Mutation
                          mutation={DELETE_ARTICLE_MUTATION}
                          variables={{
                            id: article.id
                          }}
                        >
                          {deleteArticle => {
                            return (
                              <Icon
                                name="cancel"
                                size="medium"
                                onClick={deleteArticle}
                              />
                            );
                          }}
                        </Mutation>
                      </Box>
                    </Flex>
                  </Card.Header>
                  <Card.Content>
                    <div
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </Card.Content>
                </Card>
              ))}

              {/* <Card
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
              /> */}
            </Everything>
          );
        }}
      </Query>
    );
  }
}
export default Blog;
