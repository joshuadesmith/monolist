import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Field, reduxForm} from "redux-form";
import CustomTextInput from "../components/CustomTextInput";

const VerifyAccountForm = (props) => {
    return (
        <View>
            <ScrollView>
                <Field
                    name={"email"}
                    component={CustomTextInput}
                    placeholder={"your@email.here"}
                    style={styles.textField}
                />
                <Field
                    name={"code"}
                    component={CustomTextInput}
                    placeholder={"Enter the code found in your email"}
                    style={styles.textField}
                />
                <TouchableOpacity onPress={props.handleSubmit}>
                    <Text>Verify</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default reduxForm({
    form: "verifyAccountForm",
})(VerifyAccountForm);

const styles = StyleSheet.create({
    textField: {
        color: "#000000",
        backgroundColor: "#ffffff",
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 10,
        fontSize: 20
    }
});