import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import IconText from "../components/iconText";
import { Container, Header, Content, Icon } from "native-base";

const mockEvents = [
  { text: ["500 points"] },
  { text: ["Animals"] },
  { text: ["Some address", "Address Line 2"] },
  { text: ["SOMETHING LONG AGAIN", "LINE 2"] }
];
const EventPage = ({ events }) => {
  events = events || mockEvents;
  return (
    <Container>
      <Header />
      {console.log(events.length)}
      <View
        style={{
          flex: 1,
          flexDirection: "column"
          //justifyContent: "space-between"
        }}
      >
        {events.map((ev, i) => {
          return (
            <View>
              <IconText key={i} iconName={ev.iconName || "menu"}>
                {/* {ev.text.map(text => (
                  <Text>{text}</Text>
                ))} */}
              </IconText>
            </View>
          );
        })}
      </View>
    </Container>
  );
};

export default EventPage;
