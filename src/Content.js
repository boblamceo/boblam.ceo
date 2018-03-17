import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
`

const Grid = styled.div`
  @media all and (min-width: 768px){
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
  }
`

const Content = () => (
  <Container>
    <Grid>
      <Card>
        <Card.Content>
          <Card.Header>What is my fav subject?</Card.Header>
        <Card.Description>My favourite subject is I.C.T because I love using the computer to draw and do stuff.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>What is my dream?</Card.Header>
          <Card.Description>My dream is to make a app that is a combianation of gmail and google</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>What I am intrested at?</Card.Header>
          <Card.Description>I'm intrested at art, computer sience, sience, robots and electronics.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>When you grow up, what are you going to be?</Card.Header>
          <Card.Description>I want to be a programmer when I grow up because I want to make apps, play them and get money at the same time.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>How old am I?</Card.Header>
        <Card.Description>I am <span id='myAge'></span> years old</Card.Description>
        </Card.Content>
      </Card>
    </Grid>
  </Container>
)

export default Content
