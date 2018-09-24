import * as React from "react";
import {reduxForm, Field} from "redux-form";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import CustomTextInput from "../components/CustomTextInput";

const SignInForm = props => {
    return (
        <View>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <Field
                    name={"email"}
                    component={CustomTextInput}
                    placeholder={"Email"}
                    style={styles.textField}
                />
                <Field
                    name={"password"}
                    component={CustomTextInput}
                    placeholder={"Password"}
                    style={styles.textField}
                    secureTextEntry
                />
                <TouchableOpacity onPress={props.handleSubmit}>
                    <Text style={{color: "#FFFFFF"}}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default reduxForm({form: "signInForm"})(SignInForm);

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
