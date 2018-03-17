import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
`

const Content = () => (
  <Container>
    <Grid>
      <Card>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
    </Grid>
  </Container>
)

export default Content
