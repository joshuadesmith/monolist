import * as React from "react";
import { View } from "react-native";

import { connect } from "react-redux";
import { signUp } from "../../actions";

import CommonButton from "../../components/CommonButton";
import CommonInput from "../../components/CommonInput";
import { bindActionCreators } from "redux";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  dispatchSignUp() {
    console.log("State at dispatch signup: ", this.state);
    const { username, password, email } = this.state;
    this.props.signUpUser(this.state);
  }

  render() {
    const {
      auth: { isAuthenticating, signUpError, signUpErrorMessage }
    } = this.props;
    return (
      <View>
        <View>
          <CommonInput
            value={this.state.username}
            placeholder="Username"
            type="username"
            onChangeText={this.onChangeText.bind(this)}
          />
          <CommonInput
            value={this.state.email}
            placeholder="Email"
            type="email"
            onChangeText={this.onChangeText.bind(this)}
          />
          <CommonInput
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type="password"
            onChangeText={this.onChangeText.bind(this)}
          />
        </View>
        <CommonButton
          title="Sign Up"
          onPress={this.dispatchSignUp.bind(this)}
          isLoading={isAuthenticating}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  signUpUser: bindActionCreators(signUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
