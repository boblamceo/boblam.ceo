import React from 'react'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import { DefaultPlayer as Video } from 'react-html5video';

const Card = styled.section`
  display: flex;
  

  flex-wrap: nowrap;

  overflow-x: auto;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
`

const CardContent = styled.div`
  padding: 0.25em;
`

const Image = styled.img`
  max-height: 400px;
`

const MediaScroll = ({images = []}) => {
  return (
    <Card>
      {
        images.map((src, index) => {
          const isImage =  src.includes(".jpg") || src.includes(".png")

          return (
            <CardContent key={index}>
              {
                isImage ? (<Image src={src} />) : (
                  <video autoPlay loop height="400px">
                    <source src={src} type="video/mp4" />
                  </video>
                )
              }
            </CardContent>
          )

        })
      }
    </Card>
  )
}

export default MediaScroll
