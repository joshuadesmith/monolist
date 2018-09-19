/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Amplify, { Auth } from "aws-amplify";
import awsmobile from "./src/aws-exports";

Amplify.configure(awsmobile);

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.warn("In App.signUp");
    Auth.signUp({
      username: "testUsername",
      password: "password123!",
      attributes: {
        email: "joshuadespersmith@gmail.com"
      }
    })
      .then(result => {
        console.warn("Signup success: ", result);
      })
      .catch(error => {
        console.warn("Error occurred during signup: ", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to MonoList!</Text>
        <Text style={styles.instructions}>
          To get started, create an account!
        </Text>
        <Button title="Sign Up Test" onPress={this.signUp} />
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
