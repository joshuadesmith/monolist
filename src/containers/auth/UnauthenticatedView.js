import * as React from "react";
import { View, TextInput } from "react-native";
import SignInFormContainer from "./SignInFormContainer";
import CommonButton from "../../components/CommonButton";

class UnauthenticatedView extends React.Component {
  render() {
    return (
      <View>
        <SignInFormContainer />
        <CommonButton
          title={"Verify Account"}
          onPress={() => console.log("press btn 1")}
          isLoading={false}
        />
      </View>
    );
  }
}

export default UnauthenticatedView;
