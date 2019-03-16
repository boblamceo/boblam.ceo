import React, { Component } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import styled from 'styled-components'

const CenterTimeline = styled.div`
    display: flex;
    justify-content: center;
`

class TimeLine extends Component {
    render() {
        return (
            <div>
                <CenterTimeline>
                    <Timeline>
                        <TimelineEvent
                            title='I was born'
                            createdAt='2010-06-9 08:30 PM'
                            icon={<i className='material-icons'>sentiment_satisfied_alt</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            I cried a lot.
                        </TimelineEvent>
                        <TimelineEvent
                            title='First time ever make a scratch project'
                            createdAt='2016-3-16 01:26 PM'
                            icon={<i className='material-icons'>desktop_mac</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            It was a cat that said, what do you want me to say? And says the stuff you typed in the
                            input
                        </TimelineEvent>
                        <TimelineEvent
                            title='First time ever learn python'
                            createdAt='2015-02-18 4:23 PM'
                            icon={<i className='material-icons'>code</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            It worked a little bit like scratch so I was happy to learn
                        </TimelineEvent>
                        <TimelineEvent
                            title='first time learn javacript'
                            createdAt='2017-09-25 12:56 PM'
                            icon={<i className='material-icons'>code</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            Woo Hoo!!! I learnt 3 programming languages already that time!!!
                        </TimelineEvent>
                        <TimelineEvent
                            title='I Tried HTML for the first time'
                            createdAt='2018-01-09 02:34 PM'
                            icon={<i className='material-icons'>open_in_browser</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            It was a bit harder than the other stuff I learnt because I had to remember some stuff like
                            the layout of html.
                        </TimelineEvent>
                        <TimelineEvent
                            title='I Started Learning React for the first time'
                            createdAt='2018-06-23 03:12 PM'
                            icon={<i className='material-icons'>web</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            It was quite easy because I was already quite familiar with html and react was quite similar
                            with html
                        </TimelineEvent>
                        <TimelineEvent
                            title='I Started making boblam.ceo'
                            createdAt='2018-07-16 12:56 PM'
                            icon={<i className='material-icons'>settings_ethernet</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            this website was born, version 0.0.1!!!
                        </TimelineEvent>
                        <TimelineEvent
                            title='I started learning spanish'
                            createdAt='2018-06-27 04:00 PM'
                            icon={<i className='material-icons'>g_translate</i>}
                            iconStyle={{ color: 'green' }}
                        >
                            I learnt 6 languages (computer & verbal) now!!! English, Chinese, Spanish, Javascript,
                            Python and Scratch!!!
                        </TimelineEvent>
                    </Timeline>
                </CenterTimeline>
            </div>
        )
    }
}

export default TimeLine
