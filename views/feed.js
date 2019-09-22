import React, { Component } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import buttonTheme from "./Themes/buttonTheme";
import {
  Container,
  Header,
  Content,
  Button,
  H1,
  H2,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Text,
  Title,
  StyleProvider
} from "native-base";
import EventCard from "../components/eventCard";

const DATA = [
  {
    name: "Halloween at the Garden Event Day Volunteering",
    description:
      "At Halloween in the Garden, guests can make a seasonal botanical craft, see a magic show",
    address: "Urban Roots Farm 7651 Delwau Lane Austin, TX 78725",
    date: "2019-10-25",
    start_time: "09:30:00",
    end_time: "11:30:00"
  },
  {
    name: "September Volunteer Meeting",
    description:
      "Please join us for our monthly meeting. We are having a speaker from Wonders and Worries, as well as a coffee bar to celebrate coffee day!",
    address: "508 S Rock St 508 South Rock Street Georgetown, TX 78626",
    date: "2019-09-30",
    start_time: "15:00:00",
    end_time: "21:30:00"
  }
];

class Feed extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <H1
              style={{
                color: "#0C0778",
                padding: 10,
                fontWeight: "bold"
              }}
            >
              Hi Sally!
            </H1>
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

        <Grid>
          <Content padder>
            <Row>
              <Text
                style={{
                  fontSize: 20
                }}
              >
                You have no upcoming events.
              </Text>
            </Row>

            <Row>
              <Col>
                <View
                  style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 10
                  }}
                >
                  <Button
                    rounded
                    style={{
                      //  backgroundColor: "red !important",
                      borderColor: "#15AC8C !important",
                      color: "red !important"
                    }}
                  >
                    <Text>MY REWARDS</Text>
                    <Icon name="arrow-round-forward" />
                  </Button>
                </View>
              </Col>
              <Col></Col>
            </Row>
            <Image source={require("../assets/images/pngs/list-empty.png")} />

            <Content padder>
              <Row>
                <H2
                  style={{
                    color: "#0C0778",
                    fontSize: 22
                  }}
                >
                  Explore Austin Events
                </H2>
              </Row>
              <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => (
                    <EventCard
                      name={item.name}
                      description={item.description}
                      date={item.date}
                      startTime={item.start_time}
                      endTime={item.end_Time}
                    />
                  )}
                ></FlatList>
              </SafeAreaView>
            </Content>
          </Content>
        </Grid>
      </Container>
    );
  }
}

const customTheme = {
  "NativeBase.Button": {
    backgroundColor: "transparent",
    borderColor: "#15AC8C",
    color: "#15AC8C"
  }
};

export default Feed;
