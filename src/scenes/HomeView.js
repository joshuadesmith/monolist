import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native'
import { Button } from "react-native-elements";
import {bindActionCreators} from "redux";
import {logOut} from "../actions";
import {connect} from "react-redux";

const {width, height} = Dimensions.get('window');
const whale = require("../assets/Wildlife-icons/png/animals-26.png");

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchSignOut = this.dispatchSignOut.bind(this);
        this.animate = this.animate.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.animate()
    }

    dispatchSignOut() {
        console.log("dispatching logOut");
        this.props.signOut();
    }

    AnimatedScale = new Animated.Value(1);
    animate() {
        Animated.timing(
            this.AnimatedScale,
            {
                toValue: .95,
                duration: 1250,
                useNativeDriver: true
            }
        ).start(() => {
            Animated.timing(
                this.AnimatedScale,
                {
                    toValue: 1,
                    duration: 1250,
                    useNativeDriver: true
                }
            ).start(() => this.animate())
        })
    }

    render() {
        const {user} = this.props;
        const username = user.username.substring(0, user.username.indexOf("@"));
        return (
            <View style={styles.container}>
                <View style={styles.homeContainer}>
                    <Text style={styles.welcome}>Welcome, {username}</Text>
                    <Animated.Image
                        source={whale}
                        style={{tintColor: "#FF00FF", width: width / 2, height: width / 2, transform: [{scale: this.AnimatedScale}]}}
                        resizeMode='contain'
                    />
                    <Button onPress={this.dispatchSignOut}
                            style={styles.welcome}
                            backgroundColor={styles.signOutButton.backgroundColor}
                            borderRadius={styles.signOutButton.borderRadius}
                            title={"Log Out"}
                            fontSize={styles.signOutButton.fontSize}
                            fontWeight={"bold"}
                            textStyle={styles.signOutButtonTitle}
                    >
                        Sign Out
                    </Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    signOut: bindActionCreators(logOut, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    homeContainer: {
        alignItems: 'center'
    },
    welcome: {
        // color: 'rgba(0, 0, 0, .85)',
        marginBottom: 26,
        fontSize: 22,
        textAlign: 'center'
    },
    signOutButton: {
        marginTop: 15,
        backgroundColor: '#FF00FF',
        borderRadius: 20,
    },
    signOutButtonTitle: {
        color: "#FFFFFF",
        paddingHorizontal: 10,
        fontSize: 16,
        letterSpacing: 1.25,
    }
});