import React, { Component } from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Content,
  Button,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Text,
  Title
} from "native-base";
import EventCard from "../components/eventCard";

class Feed extends Component {
  render() {
    return (
      <Container>
        <Container>
          <Header transparent>
            <Left>
              <Title
                style={{
                  color: "#0C0778",
                  padding: 10,
                  fontSize: 16
                }}
              >
                Hi Sally!
              </Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon
                  name="menu"
                  style={{
                    color: "#0C0778"
                  }}
                />
              </Button>
            </Right>
          </Header>
          <Text
            style={{
              fontSize: 18
            }}
          >
            You have no upcoming events
          </Text>
          <Grid>
            <Row>
              <Col>
                <Button
                  rounded
                  style={{
                    color: "#15AC8C",
                    borderColor: "#15AC8C"
                  }}
                >
                  <Text>MY REWARDS</Text>
                  <Icon name="arrow-forward" />
                </Button>
              </Col>
              <Col></Col>
            </Row>
            <Image source={require("../assets/images/pngs/list-empty.png")} />
            <Grid>
              <Row>
                <Text
                  style={{
                    color: "#0C0778",
                    fontSize: 22
                  }}
                >
                  Explore Austin Events
                </Text>
              </Row>
              <Row>
                <Content padder>
                  <Row>
                    <EventCard />
                  </Row>
                  <Row>
                    <EventCard />
                  </Row>
                </Content>
              </Row>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default Feed;
