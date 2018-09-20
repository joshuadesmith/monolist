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
import { withAuthenticator } from "aws-amplify-react-native";
import awsmobile from "./aws-exports";
import RootContainer from "./containers/RootContainer";

Amplify.configure(awsmobile);

class App extends React.Component {
  render() {
    return (
      <View>
        <RootContainer />
      </View>
    );
  }
}

export default withAuthenticator(App);
