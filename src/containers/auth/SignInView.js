import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import SignInForm from "../../forms/SignInForm";
import {bindActionCreators} from "redux";
import {signIn} from "../../actions";
import {connect} from "react-redux";

const koala = require('../../assets/Wildlife-icons/png/animals-56.png');

class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchSignIn = this.dispatchSignIn.bind(this);
    }

    dispatchSignIn(values) {
        console.log("Dispatching sign in: ", values);
        this.props.signIn({
            email: values.email,
            password: values.password,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={koala} style={styles.headingImage} resizeMode={"contain"}/>
                </View>
                <Text style={styles.greeting}>
                    Welcome back,
                </Text>
                <Text style={styles.greeting2}>
                    sign in to continue
                </Text>
                <View style={styles.inputContainer}>
                    <SignInForm onSubmit={values => this.dispatchSignIn(values)}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInView);

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        color: 'transparent',
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
        fontSize: 24,
    },
    greeting2: {
        color: '#666',
        fontSize: 24,
        marginTop: 5,
    }
});
