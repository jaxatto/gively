import React, { Component } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
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
          <Header>
            <Left>
              <Title>Hi Sally!</Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <Content>
            <Text>You have lots of upcoming </Text>
          </Content>
        </Container>
        <ScrollView>
          <EventCard />
        </ScrollView>
      </Container>
    );
  }
}

export default Feed;
