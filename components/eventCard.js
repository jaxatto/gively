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
import { Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { stylesCard } from "./eventCard.styles";

class EventCard extends Component {
  render() {
    const { name, description, date, startTime, endTime, id } = this.props;
    const dateDate = new Date(date);
    const startTimeDate = new Date(`January 1, 2019 ${startTime}`);
    const endTimeDate = endTime ? new Date(`January 1, 2019 ${endTime}`) : null;
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const dateString = `${dayNames[dateDate.getDay()]}, ${
      monthNames[dateDate.getMonth()]
    } ${dateDate.getFullYear()}`;
    return (
      <Grid style={stylesCard.card}>
        <Row>
          <Col size={1}>
            <Text>{id}</Text>
            <Image source={{ uri: id }} />
          </Col>
          <Col size={3}>
            <Row>
              <H3 style={stylesCard.h3}>{name}</H3>
            </Row>
            <Row>
              <Text style={stylesCard.description}>{description}</Text>
            </Row>
            <Row>
              <Text style={stylesCard.dateRow}>{dateString}</Text>
            </Row>
            <Row>
              <Text style={stylesCard.timeRow}>
                {`${startTimeDate.getHours() %
                  24}:${startTimeDate.getMinutes()}${
                  startTimeDate.getHours() > 11 ? "pm" : "am"
                }`}
                {endTimeDate
                  ? ` - ${endTimeDate.getHours() %
                      24}:${endTimeDate.getMinutes()}${
                      endTimeDate.getHours() > 11 ? "pm" : "am"
                    }`
                  : ""}
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
