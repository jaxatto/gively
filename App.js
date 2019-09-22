import React, { Component } from "react";
import Feed from "./views/eventPage";
import { Text, View } from "react-native";
import { Container } from "native-base";
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Feed></Feed>
      </Container>
    );
  }
}
