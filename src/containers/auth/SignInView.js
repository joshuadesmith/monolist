import * as React from "react";
import {View, TextInput} from "react-native";
import SignInForm from "../../forms/SignInForm";
import {bindActionCreators} from "redux";
import {signIn} from "../../actions";
import {connect} from "react-redux";

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
            <View>
                <SignInForm onSubmit={values => this.dispatchSignIn(values)}/>
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
