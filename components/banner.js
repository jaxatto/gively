import React from "react";
import { H2, Row, Text, Icon, View, Button } from "native-base";
import { stylesBanner } from "./banner.styles";

export const Banner = ({ title, body, icon, button }) => {
  return (
    <View style={stylesBanner.card}>
      <Row>
        <H2 style={stylesBanner.colorWhite}>
          <Icon name={icon} style={stylesBanner.colorWhite} />
          &nbsp;{title}
        </H2>
      </Row>
      <Row>
        <Text style={stylesBanner.colorWhite}>{body}</Text>
      </Row>
      <Row>
        <Button rounded transparent style={stylesBanner.button}>
          <Text>
            {button}&nbsp;
            <Icon name="arrow-forward" style={stylesBanner.icon} />
          </Text>
        </Button>
      </Row>
    </View>
  );
};
export default Banner;
