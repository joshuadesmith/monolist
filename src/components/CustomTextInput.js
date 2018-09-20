import * as React from "react";
import { TextInput, View, Text } from "react-native";

export default (CustomTextInput = props => {
  const { input, ...inputProps } = props;
  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
});
