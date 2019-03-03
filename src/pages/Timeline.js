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
                        />
                        <TimelineEvent title='First time ever sit' createdAt='2010-12-03 07:40 AM'>
                            It was so hard for me to learn this, it is true
                        </TimelineEvent>
                        <TimelineEvent title='First time ever crawl' createdAt='2011-08-15 01:27 PM' />
                        <TimelineEvent title='First day in kindergarten' createdAt='2013-09-23 07:41 AM' />
                        <TimelineEvent title='Graduate kindergarten' createdAt='2015-04-09 09:08 AM' />
                    </Timeline>
                </CenterTimeline>
            </div>
        )
    }
}

export default TimeLine
