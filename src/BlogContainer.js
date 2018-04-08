import React from "react";
import axios from "axios";

class BlogContainer extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:8080/article").then(data => {
      console.info("data", data);
    });
  }
  render() {
    return this.props.children();
  }
}
