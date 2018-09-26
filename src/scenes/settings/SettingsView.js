import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./styles";
import LinkServicesView from "./link/LinkServicesView";

const backImg = require("../../assets/icons/baseline_home_black_48dp.png");

class SettingsView extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        headerBackImage: (<Image source={backImg} style={styles.backImage}/>),
    };

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <LinkServicesView/>
            </View>
        )
    }
}

export default SettingsView;