import React, { PureComponent } from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
  background: radial-gradient(
    circle,
    SkyBlue,
    SkyBlue 50%,
    LightCyan 50%,
    SkyBlue
  );
`;

const Grid = styled.div`
  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
  }
`;

const TIMESTAMP_OFFSET = 1000;
const DAYS_IN_YEAR = 365;
const HOURS_IN_DAY = 24;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS = 1000;

function checkYourAgeInYears(birthday) {
  const timestampDiff = new Date() - new Date(birthday);

  const diffInHours = Math.floor(
    timestampDiff / TIMESTAMP_OFFSET / SECONDS_IN_MINUTE / MINUTES_IN_HOUR
  );
  const diffInDays = diffInHours / HOURS_IN_DAY;

  return diffInDays / DAYS_IN_YEAR;
}

function checkHowManyDaysTowardsYourNextBirth(birthday) {
  const timestampDiff = new Date() - new Date(birthday);

  const diffInHours = Math.floor(
    timestampDiff / TIMESTAMP_OFFSET / SECONDS_IN_MINUTE / MINUTES_IN_HOUR
  );
  const diffInDays = diffInHours / HOURS_IN_DAY;

  return Math.abs(diffInDays);
}

class Page extends PureComponent {
  state = {
    counter: 0,
    currentTime: ""
  };

  componentDidMount() {
    // this.countdown = setInterval(this.timer, 1000);
    this.ageInterval = setInterval(() => {
      const age = checkYourAgeInYears("06/09/2010");

      this.setState({
        counter: age,
        currentTime: `${new Date()}`
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ageInterval);
  }

  render() {
    console.info("this.state.counter", this.state.counter);
    return (
      <Container>
        <Grid>
          <Card>
            <Card.Content>
              <Card.Header>What is my fav subject?</Card.Header>
              <Card.Description>
                My favourite subject is I.C.T because I love using the computer
                to draw and do stuff.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>What is my dream?</Card.Header>
              <Card.Description>
                My dream is to make a app that is a combianation of gmail and
                google
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>What I am intrested at?</Card.Header>
              <Card.Description>
                I'm intrested at art, computer sience, sience, robots and
                electronics.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                When you grow up, what are you going to be?
              </Card.Header>
              <Card.Description>
                I want to be a programmer when I grow up because I want to make
                apps, play them and get money at the same time.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>How old am I?</Card.Header>
              <Card.Description>
                I am {this.state.counter} years old<br />
                <div>Current Time: {this.state.currentTime}</div>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid>
      </Container>
    );
  }
}

export default Page;
