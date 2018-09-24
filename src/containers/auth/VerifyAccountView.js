import React from "react";
import {View} from "react-native";
import {bindActionCreators} from "redux";
import {verifyAccount} from "../../actions";
import {connect} from "react-redux";
import VerifyAccountForm from "../../forms/VerifyAccountForm";

class VerifyAccountView extends React.Component {
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
            <View>
                <VerifyAccountForm onSubmit={(values) => this.dispatchVerify(values)}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    verifyAccount: bindActionCreators(verifyAccount,  dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VerifyAccountView);