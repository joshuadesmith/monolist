import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles/index";

export const LinkServiceComponent = (props) => {
    const {buttonTitle, buttonColor, onButtonPress, isLinked} = props;
    const btnViewStyle = isLinked ? styles.linkBtnDisabled : {backgroundColor: buttonColor, ...styles.linkBtn};
    return (
        <View style={styles.linkComponentContainer}>
            <View style={{width: "50%"}}>
                <TouchableOpacity onPress={onButtonPress} disabled={isLinked}>
                    <View style={btnViewStyle}>
                        <Text style={styles.linkBtnTitle}>{buttonTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.linkText}>{isLinked ? "Linked" : "Not Linked"}</Text>
            </View>
        </View>
    )
};