import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import smart from "./images/smart.jpg";
import oldGuy from "./images/old-man.jpg";

const Everything = styled.div`
  padding: 1em;
`;

const Blog = () => {
  return (
    <Everything>
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
};
export default Blog;
