import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {colors} from "../../../styles";

const backImg = require("../../../assets/icons/baseline_home_black_48dp.png");

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1
    },
    section: {
        paddingTop: 15,
        paddingLeft: 15,
    },
    settingsHeader: {
        color: colors.lightGrey,
        marginBottom: 26,
        fontSize: 20,
        textAlign: 'center'
    },
    backImage: {
        tintColor: colors.lightGrey,
        height: 30,
        width: 30,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 5,
    }
});

class SettingsView extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        headerBackImage: (<Image source={backImg} style={styles.backImage}/>),
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.settingsHeader}>
                        Link Services
                    </Text>
                </View>
            </View>
        )
    }
}

export default SettingsView;