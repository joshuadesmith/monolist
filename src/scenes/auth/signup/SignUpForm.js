import React from "react";
import CustomTextInput from "../../../common/components/CustomTextInput";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Field, reduxForm} from "redux-form";
import {validateSignUp} from "./validators";

const SignUpForm = (props) => {
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
                    name={"password1"}
                    component={CustomTextInput}
                    placeholder={"Enter a password"}
                    style={styles.textField}
                    secureTextEntry
                />
                <Field
                    name={"password2"}
                    component={CustomTextInput}
                    placeholder={"Re-enter your password"}
                    style={styles.textField}
                    secureTextEntry
                />
                <TouchableOpacity onPress={props.handleSubmit}>
                    <Text style={{color: "#FFFFFF"}}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default reduxForm({
    form: "signUpForm",
    validate: validateSignUp, // Sync validation
})(SignUpForm);

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
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
