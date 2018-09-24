import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

import {connect} from "react-redux";
import {signUp} from "../../actions";

import {bindActionCreators} from "redux";
import SignUpForm from "../../forms/SignUpForm";

const lemur = require('../../assets/Wildlife-icons/png/animals-57.png');

class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchSignUp = this.dispatchSignUp.bind(this);
    }

    dispatchSignUp(formValues) {
        console.log("Dispatching signup with values: ", formValues);
        this.props.signUpUser({
            email: formValues.email,
            password: formValues.password1,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={lemur} style={styles.headingImage} resizeMode={"contain"}/>
                </View>
                <Text style={styles.greeting}>
                    Welcome!
                </Text>
                <Text style={styles.greeting2}>
                    sign up to continue
                </Text>
                <View style={styles.inputContainer}>
                    <SignUpForm onSubmit={(values) => this.dispatchSignUp(values)}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    signUpUser: bindActionCreators(signUp, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpView);

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
        paddingHorizontal: 40
    },
    greeting: {
        marginTop: 20,
        fontSize: 24
    },
    greeting2: {
        color: '#666',
        fontSize: 24,
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