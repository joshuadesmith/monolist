import * as React from "react";
import {View} from "react-native";

import {connect} from "react-redux";
import {signUp} from "../../actions";

import {bindActionCreators} from "redux";
import SignUpForm from "../../forms/SignUpForm";

class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchSignUp = this.dispatchSignUp.bind(this);
    }

    dispatchSignUp(formValues) {
        console.log("Dispatching signup with values: ", formValues);
        // const {email, password1} = formValues;
        this.props.signUpUser({
            email: formValues.email,
            password: formValues.password1,
        });
    }

    render() {
        const {
            auth: {isAuthenticating, signUpError, signUpErrorMessage}
        } = this.props;
        return (
            <View>
                <SignUpForm onSubmit={(values) => this.dispatchSignUp(values)}/>
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
