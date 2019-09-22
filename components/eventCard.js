import React, { Component } from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  H3,
  List,
  ListItem,
  Left,
  Text
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class EventCard extends Component {
  render() {
    const { name, description, date, startTime, endTime } = this.props;
    return (
      <Grid>
        <Row>
          <Col size={1}></Col>
          <Col size={3}>
            <Row>
              <H3 style={{ fontWeight: "bold", fontSize: 14 }}>
                {description}
              </H3>
            </Row>
            <Row>
              <Text>{name}</Text>
            </Row>
            <Row>
              <Text>{date}</Text>
            </Row>
            <Row>
              <Text>
                {startTime} - {endTime}
              </Text>
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
