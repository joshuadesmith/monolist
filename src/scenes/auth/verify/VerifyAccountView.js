import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {bindActionCreators} from "redux";
import {verifyAccount} from "../../../actions";
import {connect} from "react-redux";
import VerifyAccountForm from "./VerifyAccountForm";

class VerifyAccountView extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#666666",
        },
        headerTitleStyle: {
            color: "#CCCCCC",
        }
    };

    constructor(props) {
        super(props);
        this.dispatchVerify = this.dispatchVerify.bind(this);
    }

    dispatchVerify(formValues) {
        console.log("Dispatching verify: ", formValues);
        this.props.verifyAccount({
            email: formValues.email,
            code: formValues.code,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Verify your account:
                </Text>
                <Text style={styles.greeting2}>
                    Enter the code we sent to your email
                </Text>
                <View style={styles.inputContainer}>
                    <VerifyAccountForm onSubmit={(values) => this.dispatchVerify(values)}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    verifyAccount: bindActionCreators(verifyAccount, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VerifyAccountView);

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        backgroundColor: "#666666",
    },
    greeting: {
        marginTop: 20,
        fontSize: 24,
        color: "#FFFFFF"
    },
    greeting2: {
        color: '#E6E6E6',
        fontSize: 18,
        marginTop: 5
    },
    heading: {
        flexDirection: 'row'
    },
    headingImage: {
        width: 38,
        height: 38
    },
    errorMessage: {
        fontSize: 12,
        marginTop: 10,
        color: 'transparent'
    }
});