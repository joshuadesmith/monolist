import * as React from "react";
import { View, TextInput } from "react-native";
import SignInForm from "../../forms/SignInForm";

class SignInView extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchSignIn = this.dispatchSignIn.bind(this);
  }
  dispatchSignIn(values) {
    const { email, password } = values;
    console.log("Username: ", username);
  }
  render() {
    return (
      <View>
        <SignInForm onSubmit={values => console.log(values)} />
      </View>
    );
  }
}

export default SignInView;
