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
      <Grid>
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <Text>Walk some cute dogs</Text>
            </Row>
            <Row>
              <Text>Austin Pets Alive</Text>
            </Row>
            <Row>
              <Text>Sunday, September 22</Text>
            </Row>
            <Row>
              <Text>9:00am - 2:00pm</Text>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Icon
              name="star-outline"
              style={{
                fontSize: 20,
                color: "#15AC8C",
                padding: 15
              }}
            />

            <Text style={{ color: "#15AC8C" }}>500 points</Text>
          </Col>
          <Col>
            <Button iconRight transparent>
              <Text>Sign Up</Text>
              <Icon name="arrow-forward" />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EventCard;
