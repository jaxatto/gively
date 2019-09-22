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
    end_time: "11:30:00",
    id: "1"
  },
  {
    name: "September Volunteer Meeting",
    description:
      "Please join us for our monthly meeting. We are having a speaker from Wonders and Worries, as well as a coffee bar to celebrate coffee day!",
    address: "508 S Rock St 508 South Rock Street Georgetown, TX 78626",
    date: "2019-09-30",
    start_time: "15:00:00",
    end_time: "21:30:00",
    id: "2"
  },
  {
    name: "Casa Volunteer Party",
    description: "Help us help them.",
    address: "12433 Grand Ranch Street Round Rock, TX 78656",
    date: "2019-10-15",
    start_time: "13:00:00",
    end_time: "17:30:00",
    id: "3"
  },
  {
    name: "Taste of Pan Africa Food Festival Austin",
    description:
      "'A Taste of Pan-Africa Event Series' - A stellar evening of food, music, philanthropy and networking",
    address: "Jabito Event Center 900 East Braker Lane #125 Austin, TX 78753",
    date: "2019-10-18",
    start_time: "17:00:00",
    end_time: "19:00:00",
    id: "4"
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
                paddingLeft: 10,
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
          <View style={{ paddingLeft: 5 }}>
            <Content padder>
              <Row>
                <Text
                  style={{
                    fontSize: 16
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
              <Content padder>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 50
                  }}
                >
                  <Image source={require("../assets/images/list-empty.png")} />
                </View>
                <View>
                  <Row>
                    <H2
                      style={{
                        color: "#0C0778",
                        fontSize: 22,
                        fontWeight: "bold",
                        marginBottom: 30
                      }}
                    >
                      Explore Austin Events
                    </H2>
                  </Row>
                  <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                      data={DATA}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (
                        <EventCard
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          date={item.date}
                          startTime={item.start_time}
                          endTime={item.end_Time}
                        />
                      )}
                    ></FlatList>
                  </SafeAreaView>
                </View>
              </Content>
            </Content>
          </View>
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
