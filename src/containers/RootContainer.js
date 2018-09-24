import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import SignUp from "./auth/SignUpView";
import CommonButton from "../components/CommonButton";
import { bindActionCreators } from "redux";
import { resetGlobalState } from "../actions";
import UnauthenticatedView from "./auth/UnauthenticatedView";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class RootContainer extends React.Component {
  state = {
    user: {},
    isLoading: true
  };

  rootReset() {
    console.log("Resetting State");
    this.props.resetGlobalState();
  }

  async componentDidMount() {
    StatusBar.setHidden(true);
    try {
      // const user = await Auth.currentAuthenticatedUser();
      // console.log("Current user: ", user);
      this.setState({ user, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  async componentWillReceiveProps(nextProps) {
    // try {
    //   const user = await Auth.currentAuthenticatedUser();
    //   console.log("Current user: ", user);
    //   this.setState({ user });
    // } catch (error) {
    //   this.setState({ user: {} });
    // }
  }

  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading...</Text>
        </View>
      );
    return this.props.auth.user.username ? (
      <View>
        <Text>You are authenticated, {this.props.auth.user.username}!</Text>
        <CommonButton
          title="RESET"
          onPress={this.rootReset.bind(this)}
          isLoading={this.props.auth.isAuthenticating}
        />
      </View>
    ) : (
      <UnauthenticatedView />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  resetGlobalState: bindActionCreators(resetGlobalState, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

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
