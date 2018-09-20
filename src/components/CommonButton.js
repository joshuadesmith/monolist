import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

export default ({ title, onPress, isLoading }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>{title}</Text>
      {isLoading && (
        <View>
          <ActivityIndicator />
        </View>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 22,
    letterSpacing: 0.5
  },
  activityIndicator: {
    transform: [{ scale: 0.7 }],
    marginTop: 3.5,
    marginLeft: 5
  }
});
