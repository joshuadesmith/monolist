import React from "react";
import {Linking, Platform, Text, View} from "react-native";
import styles from "../styles";
import {LinkServiceComponent} from "./LinkServiceComponent";
import {colors} from "../../../styles";
import {bindActionCreators} from "redux";
import {requestSpotifyAuthCode} from "../actions";

class LinkServicesView extends React.Component {

    render() {
        return (
            <View style={styles.section}>
                <Text style={styles.settingsHeader}>
                    Link Services
                </Text>
                <LinkServiceComponent buttonTitle={"Spotify"}
                                      buttonColor={colors.spotifyGreen}
                                      onButtonPress={() => console.log("Spotify button pressed")}
                                      isLinked={false}
                />
                <LinkServiceComponent buttonTitle={"SoundCloud"}
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

export default LinkServicesView;
