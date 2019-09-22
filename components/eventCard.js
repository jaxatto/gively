import React, { Component } from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Left,
  Text
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class EventCard extends Component {
  render() {
    return (
      <Container>
        <Text>Walk some cute dogs</Text>
        <Text>Austin Pets Alive</Text>
        <Text>Sunday, September 22</Text>
        <Text>9:00am - 2:00pm</Text>

        <Icon
          name="star-outline"
          style={{
            fontSize: 20,
            color: "#15AC8C",
            padding: 15
          }}
        />
        <Text style={{ color: "#15AC8C" }}>500 points</Text>

        <Button iconRight transparent>
          <Text>Sign Up</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Container>
    );
  }
}

export default EventCard;
