import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FeedScreen from "./views/feed";
import EventPageScreen from "./views/eventPage";
import ProfilePageScreen from "./views/profile";

class App extends React.Component {
  render() {
    const AppNavigator = createStackNavigator(
      {
        Feed: { screen: FeedScreen },
        EventPage: { screen: EventPageScreen },
        ProfilePage: { screen: ProfilePageScreen }
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
