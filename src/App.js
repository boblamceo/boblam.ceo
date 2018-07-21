import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Header from "./components/common/Header";
import Menu from "./components/common/Menu";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjfwgf3444jik0120rjd1hp62"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Menu />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
