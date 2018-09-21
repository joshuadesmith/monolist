import * as React from "react";
import { View, TextInput } from "react-native";
import CommonButton from "../../components/CommonButton";
import SignUpView from "./SignUpView";
import SignInView from "./SignInView";

class UnauthenticatedView extends React.Component {
  render() {
    return (
      <View>
        {/*<SignInView />*/}
        <SignUpView/>
        <CommonButton
          title={"Verify Account"}
          onPress={() => console.log("press btn 1")}
          isLoading={false}
        />
      </View>
    );
  }
}

const routes = {
    SignUp: {
        screen: SignUpView,
        navigationOptions: {
            title: 'Sign Up',
        }
    }
};

const routeConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
    }
};

export default UnauthenticatedView;
