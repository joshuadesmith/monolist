import React from "react";
import {Text, View} from "react-native";
import styles from "../styles";
import {LinkServiceComponent} from "./LinkServiceComponent";
import {colors} from "../../../../styles";

class LinkServicesView extends React.Component {
    render() {
        return (
            <View style={styles.section}>
                <Text style={styles.settingsHeader}>
                    Link Services
                </Text>
                <LinkServiceComponent buttonTitle={"Link Spotify"}
                                      buttonColor={colors.spotifyGreen}
                                      onButtonPress={() => console.log("Spotify button pressed")}
                                      isLinked={false}
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

export default LinkServicesView;
