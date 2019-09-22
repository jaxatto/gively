import React from "react";
import { Content, Icon, View } from "native-base";

const IconText = ({ iconName = "menu", children }) => {
  return (
    <Content>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Icon
          ios={`ios-${iconName}`}
          android={`ios-${iconName}`}
          style={{ fontSize: 20, padding: 10, color: "#15AC8C" }}
        ></Icon>
        {children}
      </View>
    </Content>
  );
};
export default IconText;
