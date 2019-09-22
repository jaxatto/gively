import React, { Component } from "react";
import { Header, Content, Button, H1, Left, Right, Icon } from "native-base";
import { Banner } from "../components/banner";

export class Profile extends Component {
  render() {
    return (
      <>
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
        <Content>
          <Banner
            icon="gift"
            title="2 rewards"
            body="You have rewards ready to donate!"
            icon="gift"
            button="Redeem"
          />
        </Content>
      </>
    );
  }
}

export default Profile;
