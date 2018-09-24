import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchAuthorizedUser, resetGlobalState} from "../actions";
import UnauthenticatedView from "./auth/UnauthenticatedView";
import AuthenticatedView from "./AuthenticatedView";

class RootContainer extends React.Component {
    constructor(props) {
        super(props);
        this.rootReset = this.rootReset.bind(this);
    }

    rootReset() {
        console.log("Resetting State");
        this.props.resetGlobalState();
    }

    componentWillMount() {
        StatusBar.setHidden(true);
        this.props.fetchAuthedUser();
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        const {user, isLoading} = this.props;
        if (isLoading)
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>Loading...</Text>
                </View>
            );

        return user.username ? (
            <AuthenticatedView/>
        ) : (
            <UnauthenticatedView/>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    resetGlobalState: bindActionCreators(resetGlobalState, dispatch),
    fetchAuthedUser: bindActionCreators(fetchAuthorizedUser, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
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
    }
});
