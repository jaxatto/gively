import React, { useState } from "react";
import { ScrollView } from "react-native";
import IconText from "../components/iconText";
import { Container, Header, Content, Icon } from "native-base";

const EventPage = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <IconText />
      </ScrollView>
    </Container>
  );
};

export default EventPage;
