import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import IconText from "../components/iconText";
import axios from "axios";
import moment from "moment";
import {
  Container,
  Header,
  Content,
  Icon,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Button,
  Footer
} from "native-base";

import events from "../server/database/seeds/04_events";

const mockEvents = [
  { text: ["500 points"] },
  { text: ["Animals"] },
  { text: ["Some address", "Address Line 2"] },
  { text: ["SOMETHING LONG AGAIN", "LINE 2"] }
];
const EventPage = ({ event }) => {
  const [singleEvent, setEvent] = useState({});
  const handleBackButtonPress = e => {
    console.log("Back Button pressed", e);
  };

  const handleSignUp = e => {
    console.log(e);
  };
  async function getMyStuff(link) {
    try {
      const response = await fetch(link);
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      const object = await response.json();
      console.log("RESPONSE", object);
      setEvent(eventParser(object[0]));

      /* process your JSON further */
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // axios.get("http://52.207.139.224:3000/events").then(response => {
    //   console.log("full response", response.body);
    // });
    const stuff = getMyStuff("http://52.207.139.224:3000/events");
    //console.log("MY SINGLE EVENT", stuff[0]);
  }, []);
  // console.log("events", events);
  //const currentEvent = {};
  const eventParser = event => {
    console.log("MY EVENT EVENT", event);
    // if (!event) {
    //   return {};
    // }
    //Points
    const endTime = event.end_time.split(":").pop();
    const startTime = event.start_time.split(":").pop();
    if (startTime[0] === "00") {
    }
    const rawPoints =
      endTime[0] === "00"
        ? [24 - startTime[0], endTime[1] - startTime[0]]
        : [endTime[0] - startTime[0], endTime[1] - startTime[0]];
    let points = rawPoints[0];
    points += rawPoints[1] / 60;
    points *= 10;

    const { name, date, description, address, start_time, end_time } = event;
    console.log("Address", address);
    const addressLines = address.split(",");
    const dateLine = moment(date).format("dddd, MMMM D");
    const timeLine = `${moment(start_time, "HH:mm:SS").format(
      "HH:mma"
    )}-${moment(end_time, "HH:mm:SS").format("HH:mma")}`;
    console.log("points", points);
    return {
      points,
      name,
      address,
      dateLine,
      timeLine,
      date: [dateLine, timeLine],
      description
    };
  };

  const currentEvent = event || singleEvent;
  return (
    <Container>
      <Content>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
            //justifyContent: "space-between"
          }}
        >
          <Image
            source={require("../assets/images/detail.png")}
            style={{ width: "100%" }}
          />
          <Container
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              zIndex: 1
            }}
          >
            <Container
              transform={[{ translateX: -50 }, { translateY: -50 }]}
              style={{
                position: "absolute",
                left: "45%",
                backgroundColor: "white",
                padding: 35,
                borderRadius: 3000,
                height: "auto"
                // transform: [{ translateX: "-50%" }, { translateY: "-50%" }]
              }}
            >
              <Image source={require("../assets/images/logo-apa.png")} />
            </Container>
          </Container>

          {currentEvent !== undefined ? (
            <Card transparent>
              <CardItem>
                <IconText iconName="star-outline">
                  <CardItem>
                    <Text>{`${currentEvent.points} points`}</Text>
                  </CardItem>
                </IconText>
              </CardItem>
              <CardItem>
                <IconText iconName="hand">
                  <CardItem>
                    <Text>{currentEvent.name}</Text>
                  </CardItem>
                </IconText>
              </CardItem>
              <CardItem>
                <IconText iconName="pin">
                  <CardItem>
                    <Text>{currentEvent.address}</Text>
                  </CardItem>
                </IconText>
              </CardItem>
              <CardItem>
                <IconText iconName="calendar">
                  <CardItem>
                    <Text>{`${currentEvent.dateLine}\n${currentEvent.timeLine}`}</Text>
                  </CardItem>
                </IconText>
              </CardItem>
              <CardItem>
                <Text>{currentEvent.description}</Text>
              </CardItem>

              {/* {currentEvent
              ? currentEvent.keys.map((ev, i) => {
                  return (
                    <CardItem>
                      <IconText key={i} iconName={ev.iconName || "menu"}>
                        {ev.text.map(text => (
                          <Text>{text}</Text>
                        ))}
                      </IconText>
                    </CardItem>
                  );
                })
              : null} */}
            </Card>
          ) : null}
        </View>
      </Content>
      <Footer>
        <Button onPress={handleSignUp} rounded style={{ paddingLeft: 10 }}>
          <Text>Sign Up Now</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Footer>
    </Container>
  );
};

export default EventPage;
