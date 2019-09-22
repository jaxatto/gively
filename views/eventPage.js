import React, { Component } from "react";
import { SwitchActions } from "react-navigation";
import { H1 } from "native-base";

class EventPageScreen extends React.Component {
  render() {
    const { key } = this.props.navigation.state;
    return <H1>`${key}Test`</H1>;
  }
}

export default EventPageScreen;
