import React, { PureComponent } from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5em;
    background: radial-gradient(circle, SkyBlue, Cyan 50%, LightCyan 50%, SkyBlue);
`

const Grid = styled.div`
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1em;
    }
    color: red;
`

const Text = styled.div`color: lightgreen;`

const Other = styled.div`color: rgba(172, 183, 72, 22.8);`

const Textt = styled.div`color: blue;`

const Otherr = styled.div`color: rgba(255, 0, 52, 1);`

const Weird = styled.div`color: orange;`

const Daily = styled.div`color: indigo;`

const TIMESTAMP_OFFSET = 1000
const DAYS_IN_YEAR = 365
const HOURS_IN_DAY = 24
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60

function checkYourAgeInYears(birthday) {
    const timestampDiff = new Date() - new Date(birthday)

    const diffInHours = Math.floor(timestampDiff / TIMESTAMP_OFFSET / SECONDS_IN_MINUTE / MINUTES_IN_HOUR)
    const diffInDays = diffInHours / HOURS_IN_DAY

    return diffInDays / DAYS_IN_YEAR
}

class Home extends PureComponent {
    state = {
        counter: 0,
        currentTime: '',
    }

    componentDidMount() {
        this.ageInterval = setInterval(() => {
            const age = checkYourAgeInYears('06/09/2010')

            this.setState({
                counter: age,
                currentTime: `${new Date()}`,
            })
        }, 1000)

        const BORED_API = 'https://www.boredapi.com/api/activity'

        axios
            .get(BORED_API)
            .then((res) => {
                const { data } = res

                console.log(data.type)
                console.log(data.activity)
                console.log(data.participants)
                console.log(data.price)
            })
            .catch(console.error)
    }

    componentWillUnmount() {
        clearInterval(this.ageInterval)
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Card>
                        <Card.Content>
                            <Card.Header>Daily things I do every day</Card.Header>
                            <Daily />
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>What is my fav subject?</Card.Header>
                            <Text>
                                My favourite subject is I.C.T because I love using the computer to draw and do stuff.
                            </Text>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>What is my dream?</Card.Header>
                            <Other>My dream is to make a app that is a combianation of gmail and google</Other>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>What I am intrested at?</Card.Header>
                            <Textt>I'm intrested at art, computer science, science, robots and electronics.</Textt>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>When you grow up, what are you going to be?</Card.Header>
                            <Otherr>
                                I want to be a programmer when I grow up because I want to make apps, play them and get
                                money at the same time.
                            </Otherr>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>How old am I?</Card.Header>
                            <Weird>
                                I am {this.state.counter} years old<br />
                                <div>Current Time: {this.state.currentTime}</div>
                            </Weird>
                        </Card.Content>
                    </Card>
                </Grid>
            </Container>
        )
    }
}

export default Home
