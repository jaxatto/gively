import React, { Component } from "react";
import Feed from "./views/feed";
import { Container } from "native-base";
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Feed />
      </Container>
    );
  }
}
