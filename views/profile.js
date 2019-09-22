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
  H3,
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

export class Profile extends Component {
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
              Sally's Profile
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
      </Container>
    );
  }
}

export default Profile;
