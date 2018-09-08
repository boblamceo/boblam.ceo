import React, { Fragment, PureComponent } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import styled from "styled-components"

const Center = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`

class VideoModal extends PureComponent {
  state = { open: false }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state
    const {children, width} = this.props

    return (
      <Fragment>
        <div onClick={this.show}>
        {
          React.cloneElement(
            children,
            {
              style: {
                width,
                cursor: 'zoom-in'
              },
              muted: true,
              controls: true
            }
          )
        }
        </div>

        <Modal basic closeIcon open={open} onClose={this.close}>
          <Modal.Content>
              <Center>
                {
                  React.cloneElement(
                    children,
                    {
                      style: {
                        width: 'auto',
                        height: '90vh'
                      },
                      controls: true
                    }
                  )
                }
              </Center>
          </Modal.Content>
        </Modal>
      </Fragment>
    )
  }
}

export default VideoModal
