import * as React from "react";
import { TextInput, View, Text } from "react-native";

const CustomTextInput = (props) => {
  const { input, meta: { touched, error }, ...inputProps } = props;
  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        autoCapitalize={"none"}
      />
        <Text style={{fontSize: 12, color: "firebrick", marginHorizontal: 10}}>
            {(touched && error) ? error : " "}
        </Text>
    </View>
  );
};

export default CustomTextInput;
