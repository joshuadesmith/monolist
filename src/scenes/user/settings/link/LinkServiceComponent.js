import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

export const LinkServiceComponent = (props) => {
    const { buttonTitle, buttonColor, onButtonPress, isLinked } = props;
    return (
        <View style={styles.linkComponentContainer}>
            <View style={{width: "50%"}}>
                <TouchableOpacity onPress={onButtonPress}>
                    <View style={{backgroundColor: buttonColor, ...styles.linkBtn}}>
                        <Text style={styles.linkBtnTitle}>{buttonTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.linkText}>{isLinked ? "Linked" : "Not Linked"}</Text>
        </View>
    )
};