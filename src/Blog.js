import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import styled, { injectGlobal } from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

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

class Blog extends Component {
  render() {
    return (
      <Query query={LIST_ARTICLES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          const { allArticles } = data;

          return (
            <Everything>
              <br />

              {allArticles.map(article => (
                <Card
                  image={article.image}
                  header={article.title}
                  meta={article.date}
                  description={article.content}
                />
              ))}

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
        }}
      </Query>
    );
  }
}
export default Blog;
