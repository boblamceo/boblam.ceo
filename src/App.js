import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/common/Header'
import Menu from './components/common/Menu'

import Home from './pages/Home'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Write from './pages/Write'
import Edit from './pages/Edit'
import Timeline from './pages/Timeline'

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjfwgf3444jik0120rjd1hp62',
})

const Layout = styled.div`
    min-height: 45vh;

    @media (min-width: 768px) {
        min-height: 35vh;
    }

    background: url('/hero.jpg') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
`

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div>
                        <Layout>
                            <Menu />
                            <Header />
                        </Layout>

                        <Route exact path='/' component={Home} />
                        <Route path='/timeline' component={Timeline} />
                        <Route path='/projects' component={Project} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/write' component={Write} />
                        <Route path='/edit' component={Edit} />
                    </div>
                </Router>
            </ApolloProvider>
        )
    }
}

export default App
