import React from "react";
import {Linking, Platform, Text, View} from "react-native";
import styles from "../styles";
import {LinkServiceComponent} from "./LinkServiceComponent";
import {colors} from "../../../styles";
import {bindActionCreators} from "redux";
import {requestSpotifyAuthCode} from "../actions";
import {connect} from "react-redux";
import {CLIENT_ID, REDIRECT_URI} from "../../../config/spotify-config";

class LinkServicesView extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchRequestSpotifyAuthCode = this.dispatchRequestSpotifyAuthCode.bind(this);
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then((url) => {

            })
        }
    }

    dispatchRequestSpotifyAuthCode() {
        // Redirects to Browser for Spotify authorization
        this.props.requestSpotifyAuthCode();
        const baseUrl = 'https://accounts.spotify.com/authorize/';
        const redirect = REDIRECT_URI.replace(':', '%3A').replace('/', '%2F');
        Linking.openURL(`${baseUrl}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirect}`);
    }

    render() {
        const {isRequesting, spotify} = this.props.settings;
        return (
            <View style={styles.section}>
                <Text style={styles.settingsHeader}>
                    Services
                </Text>
                <LinkServiceComponent buttonTitle={isRequesting ? "Linking..." : "Link Spotify"}
                                      buttonColor={colors.spotifyGreen}
                                      onButtonPress={this.dispatchRequestSpotifyAuthCode}
                                      isLinked={spotify.isLinked}
                />
                <LinkServiceComponent buttonTitle={"Link SoundCloud"}
                                      buttonColor={colors.soundcloudOrange}
                                      onButtonPress={() => console.log("SoundCloud button pressed")}
                                      isLinked={false}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
    requestSpotifyAuthCode: bindActionCreators(requestSpotifyAuthCode, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LinkServicesView);
