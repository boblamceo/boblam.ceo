import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Header from "./components/common/Header";
import Menu from "./components/common/Menu";

import Home from "./pages/Home"
import Project from "./pages/Project"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import Write from "./pages/Write"
import Edit from "./pages/Edit"

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjfwgf3444jik0120rjd1hp62"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Menu />
            <Header />

            <br />

            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Project} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/blog" component={Blog} />
            <Route path="/write" component={Write} />
            <Route path="/edit" component={Edit} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
