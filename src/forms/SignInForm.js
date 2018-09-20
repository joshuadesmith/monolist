import * as React from "react";
import { reduxForm, Field } from "redux-form";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import CustomTextInput from "../components/CustomTextInput";

const SignInForm = props => {
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <Field
          name={"username"}
          component={CustomTextInput}
          placeholder={"Username"}
          style={styles.textField}
        />
        <Field
          name={"password"}
          component={CustomTextInput}
          placeholder={"Password"}
          style={styles.textField}
        />
        <TouchableOpacity onPress={props.handleSubmit}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default reduxForm({ form: "signInForm" })(SignInForm);

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d1d1"
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
  },
  textField: {
    color: "#000000",
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    fontSize: 20
  }
});
