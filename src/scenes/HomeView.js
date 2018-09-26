import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity, Platform, Linking,
} from 'react-native'
import {Button} from "react-native-elements";
import {bindActionCreators} from "redux";
import {logOut} from "../actions";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import {colors} from "../styles";
import {
    requestSpotifyAccessToken,
    requestSpotifyAuthCodeFailure,
    requestSpotifyAuthCodeSuccess
} from "./settings/actions";

const {width, height} = Dimensions.get('window');
const whale = require("../assets/Wildlife-icons/png/animals-26.png");

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchSignOut = this.dispatchSignOut.bind(this);
        this.animate = this.animate.bind(this);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'MonoList',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <View style={{paddingRight: 10}}>
                        <Icon name="settings" size={20} color={colors.lightGrey}/>
                    </View>
                </TouchableOpacity>
            ),
            headerBackTitle: 'Home',
        }
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then((url) => {
                if (url) {
                    console.log('Initial URL: ', url);
                    this.navigate(url);
                }
            }).catch((err) => console.error('An error occurred: ', err));
        } else {
            Linking.addEventListener('url', this.handleOpenUrl)
        }
        this.animate();
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenUrl)
    }

    handleOpenUrl = (event) => {
        this.navigate(event.url);
    };

    navigate = (url) => {
        const route = url.replace(/.*?:\/\//g, '');

        // try to parse query string
        const routeSubstrings = route.split('/');
        if (routeSubstrings.length > 1) {
            if (routeSubstrings[1] === 'callback') {
                if (routeSubstrings[2] === 'spotify') {
                    console.log("Got callback from Spotify authorization");
                    const params = routeSubstrings[3].replace('?', '').split('&');
                    const paramsDict = {};
                    params.forEach(p => {
                        const pSplit = p.split('=');
                        paramsDict[pSplit[0]] = pSplit[1];
                    });
                    console.log(paramsDict);
                    if (paramsDict.hasOwnProperty('code')) {
                        this.props.requestSpotifyAuthCodeSuccess(paramsDict.code);
                        this.props.requestSpotifyToken(paramsDict.code);
                    } else if (paramsDict.hasOwnProperty('error')) {
                        this.props.requestSpotifyAuthCodeSuccess(paramsDict.error);
                    }
                }
            }
        }

        const routeName = routeSubstrings[0];
        if (routeName) {
            //ensure capitalization
            const routNameCapitalized = routeName.charAt(0).toUpperCase() + routeName.slice(1);
            if (routeName === 'settings') {

            }
            this.props.navigation.navigate(routNameCapitalized);
        }
    };

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
                        style={{
                            tintColor: colors.primaryColor,
                            width: width / 2,
                            height: width / 2,
                            transform: [{scale: this.AnimatedScale}]
                        }}
                        resizeMode='contain'
                    />
                    <Button onPress={this.dispatchSignOut}
                            style={styles.signOutButton}
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
    requestSpotifyAuthCodeFailure: bindActionCreators(requestSpotifyAuthCodeFailure, dispatch),
    requestSpotifyAuthCodeSuccess: bindActionCreators(requestSpotifyAuthCodeSuccess, dispatch),
    requestSpotifyToken: bindActionCreators(requestSpotifyAccessToken, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    homeContainer: {
        alignItems: 'center'
    },
    welcome: {
        color: colors.lightGrey,
        marginBottom: 26,
        fontSize: 22,
        textAlign: 'center'
    },
    signOutButton: {
        marginTop: 15,
        marginBottom: 26,
        backgroundColor: colors.primaryColor,
        borderRadius: 20,
    },
    signOutButtonTitle: {
        color: colors.white,
        paddingHorizontal: 10,
        fontSize: 16,
        letterSpacing: 1.25,
    },
});