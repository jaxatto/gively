import React from "react";
import { H2, Row, Text, Icon, View } from "native-base";

export const Banner = ({ title, body }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#15AC8C",
        padding: 20
      }}
    >
      <Row>
        <H2 style={{ color: "white" }}>
          <Icon name="gift" style={{ color: "white" }} />
          &nbsp;{title}
        </H2>
      </Row>
      <Row>
        <Text style={{ color: "white" }}>{body}</Text>
      </Row>
    </View>
  );
};
export default Banner;
