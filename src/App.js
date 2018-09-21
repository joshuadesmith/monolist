/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View } from "react-native";
import Amplify from "aws-amplify";
import config from "./aws-amplify-config";
import RootContainer from "./containers/RootContainer";

Amplify.configure(config);

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "F5FCFF"
        }}
      >
        <RootContainer />
      </View>
    );
  }
}

// export default withAuthenticator(App, { includeGreetings: true });
