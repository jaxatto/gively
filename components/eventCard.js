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
import { stylesCard } from "./eventCard.styles";

class EventCard extends Component {
  render() {
    const { name, description, date, startTime, endTime } = this.props;
    return (
      <Grid>
        <Row>
          <Col size={1}></Col>
          <Col size={3}>
            <Row>
              <H3 style={stylesCard.h3}>{name}</H3>
            </Row>
            <Row>
              <Text>{description}</Text>
            </Row>
            <Row>
              <Text>{date}</Text>
            </Row>
            <Row>
              <Text>
                {startTime} - {endTime}
              </Text>
            </Row>
            <Row>
              <Col style={stylesCard.col}>
                <Text style={stylesCard.text}>
                  <Icon name="star-outline" style={stylesCard.star} />
                  &nbsp;500 points
                </Text>
              </Col>
              <Col>
                <Text style={stylesCard.signup}>
                  Sign Up&nbsp;
                  <Icon name="arrow-forward" style={stylesCard.arrow} />
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EventCard;
