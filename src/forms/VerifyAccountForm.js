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
                    <Text style={{color: "#FFFFFF"}}>Verify</Text>
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
        color: "#BB3CBB",
        backgroundColor: "#E6E6E6",
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        borderRadius: 20,
    }
});