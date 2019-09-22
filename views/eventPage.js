import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
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

const mockEvents = [
  { text: ["500 points"] },
  { text: ["Animals"] },
  { text: ["Some address", "Address Line 2"] },
  { text: ["SOMETHING LONG AGAIN", "LINE 2"] }
];
const EventPage = ({ event }) => {
  const [apiEvents, setEvents] = useState([]);

  const handleBackButtonPress = e => {
    console.log("Back Button pressed", e);
  };

  useEffect(() => {
    axios
      .get("http://52.207.139.224:3000/events")
      .then(response => {
        // console.log("RESPONSE", response.data);
        const parsed = eventParser(JSON.parse(response.data[0]));
        console.log("PARSED", parsed);
        setEvents(parsed);
      })
      .catch(e => {
        throw new Error(e);
      });
  }, []);

  const eventParser = event => {
    console.log(event);
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

    const addressLines = address.split(",");
    const dateLine = moment(date).format("dddd, MMMM D");
    const timeLine = `${moment(start_time, "HH:mm:SS").format(
      "HH:mma"
    )}-${moment(end_time, "HH:mm:SS").format("HH:mma")}`;
    console.log("points", points);
    return {
      points,
      name,
      address: [addressLines[0], addressLines[1]],
      date: [dateLine, timeLine],
      description
    };
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            style={{ alignItems: "flex-end", flex: 1, flexDirection: "row" }}
            onPress={handleBackButtonPress}
          >
            <Icon name="arrow-back" />
            <Text style={{ color: "white" }}>Back to List</Text>
          </Button>
        </Left>

        <Right />
      </Header>

      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
            //justifyContent: "space-between"
          }}
        >
          {apiEvents !== undefined ? (
            <Card transparent>
              <CardItem>
                <IconText>
                  <Text>{`${apiEvents.points} points`}</Text>
                </IconText>
              </CardItem>
              <CardItem>
                <IconText>
                  <Text>{apiEvents.name}</Text>
                </IconText>
              </CardItem>
              <CardItem>
                <IconText>
                  {/* {apiEvents.address.keys().map(key => {
                    return (
                      <CardItem>
                        <Text>apiEvents[${key}]</Text>
                      </CardItem>
                    );
                  })} */}
                </IconText>
              </CardItem>
              <CardItem>
                <IconText>
                  {console.log("DATE EVent", typeof apiEvents.date)}
                  {apiEvents.date.map(dateLine => {
                    <CardItem>
                      <Text>{dateLine}</Text>
                    </CardItem>;
                  })}
                </IconText>
              </CardItem>
              {/* {apiEvents
              ? apiEvents.keys.map((ev, i) => {
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
        <Footer>
          <Button>
            <Text>Sign Up Now</Text>
          </Button>
        </Footer>
      </ScrollView>
    </Container>
  );
};

export default EventPage;
