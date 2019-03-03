import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Bars = styled.div`
    color: white;
    font-size: 20px;
    padding: 0.5em;
`
const PaddingAdder = styled.div`padding: 1em;`

class MobileMenu extends Component {
    state = { visible: false }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { classes, location } = this.props
        const { visible } = this.state
        const { pathname } = location

        return (
            <div>
                <Bars onClick={this.handleButtonClick}>
                    <Icon name='bars' />
                </Bars>

                <Drawer className={classes.list} open={visible} onClose={this.handleSidebarHide}>
                    <PaddingAdder>
                        <Menu secondary vertical>
                            <Menu.Item>
                                <Link to='/'>
                                    <Menu.Item name='Home' active={pathname === '/'} onClick={this.handleSidebarHide} />
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/timeline'>
                                    <Menu.Item
                                        name='Timeline'
                                        active={pathname === '/timeline'}
                                        onClick={this.handleSidebarHide}
                                    />
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/projects'>
                                    <Menu.Item
                                        name='Projects'
                                        active={pathname === '/projects'}
                                        onClick={this.handleSidebarHide}
                                    />
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/gallery'>
                                    <Menu.Item
                                        name='Scrollable Gallery'
                                        active={pathname === '/gallery'}
                                        onClick={this.handleSidebarHide}
                                    />
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/blog'>
                                    <Menu.Item
                                        name='Blog'
                                        active={pathname === '/blog'}
                                        onClick={this.handleSidebarHide}
                                    />
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </PaddingAdder>
                </Drawer>
            </div>
        )
    }
}

export default withStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})(withRouter(MobileMenu))
