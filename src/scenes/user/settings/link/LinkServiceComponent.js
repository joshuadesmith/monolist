import React from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";
import styles from "../styles";

export const LinkServiceComponent = ({buttonTitle, buttonColor, onButtonPress, isLinked}) => {
    return (
        <View style={styles.linkComponentContainer}>
            <Button onPress={onButtonPress}
                    title={buttonTitle}
                    backgroundColor={buttonColor}
                    containerViewStyle={{
                        paddingHorizontal: 0,
                        marginHorizontal: 0,
                        paddingVertical: 0,
                        justifyContent: 'flex-start'
                    }}
                    buttonStyle={styles.linkButton}
                    fontSize={16}/>
            <Text style={styles.linkText}>{isLinked ? "Linked" : "Not Linked"}</Text>
        </View>
    )
};