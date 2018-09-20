import * as React from "react";
import { View, TextInput } from "react-native";
import SignInForm from "../../forms/SignInForm";

class SignInFormContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleSubmit(values) {
  //   const { username, password } = values;
  //   console.log("Username: ", username);
  // }
  render() {
    return (
      <View>
        <SignInForm onSubmit={values => console.log(values)} />
      </View>
    );
  }
}

export default SignInFormContainer;
