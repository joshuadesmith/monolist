import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements"
import SignUpView from "./SignUpView";
import SignInView from "./SignInView";
import {createStackNavigator} from "react-navigation";
import VerifyAccountView from "./VerifyAccountView";

class UnauthenticatedView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>Welcome</Text>
                <Button title={"Sign Up"}
                        onPress={() => navigation.navigate('SignUp')}
                        backgroundColor={styles.navButton.backgroundColor}
                        borderRadius={styles.navButton.borderRadius}
                        style={styles.navButton}
                />
                <Button title={"Log In"}
                        onPress={() => navigation.navigate('SignIn')}
                        backgroundColor={styles.navButton.backgroundColor}
                        borderRadius={styles.navButton.borderRadius}
                        style={styles.navButton}
                />
                <Button title={"Verify Account"}
                        onPress={() => navigation.navigate('VerifyAccount')}
                        backgroundColor={styles.navButton.backgroundColor}
                        borderRadius={styles.navButton.borderRadius}
                        style={styles.navButton}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        backgroundColor: "#666666"
    },
    greeting: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20,
        color: "#ffffff",
    },
    greeting2: {
        color: '#666666',
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
    navButton: {
        marginTop: 15,
        backgroundColor: '#FF00FF',
        borderRadius: 20,
    },
    navButtonVerify: {
        marginTop: 10,
        backgroundColor: "transparent",
    }
});

const routes = {
    Home: {
        screen: UnauthenticatedView
    },
    SignUp: {
        screen: SignUpView,
        navigationOptions: {
            title: 'Sign Up',
        },
    },
    SignIn: {
        screen: SignInView,
        navigationOptions: {
            title: "Sign In",
        },
    },
    VerifyAccount: {
        screen: VerifyAccountView,
        navigationOptions: {
            title: "Verify Account",
        },
    },
};

export default createStackNavigator(routes);
