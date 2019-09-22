import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FeedScreen from "./views/feed";
import EventPageScreen from "./views/eventPage";

class App extends React.Component {
  render() {
    const AppNavigator = createStackNavigator(
      {
        Feed: { screen: FeedScreen },
        EventPage: { screen: EventPageScreen }
      },
      {
        initialRouteName: "Feed"
      }
    );

    const AppContainer = createAppContainer(AppNavigator);
    return <AppContainer />;
  }
}

export default App;
