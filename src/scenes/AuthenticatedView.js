import React from "react";
import {createStackNavigator} from "react-navigation";
import HomeView from "./HomeView";
import SettingsView from "./settings/SettingsView";
import {colors} from "../styles";

const routeConfig = {
    Home: {
        screen: HomeView,
    },
    Settings: {
        screen: SettingsView,
    }
};

const StackNav = createStackNavigator(
    {
        Home: HomeView,
        Settings: SettingsView,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.darkGrey,
            },
            headerTitleStyle: {
                color: colors.lightGrey,
            },
            headerBackTitleStyle: {
                color: colors.lightGrey,
            },
        }
    }
);

class AuthenticatedView extends React.Component {
    render() {
        return (
            <StackNav/>
        );
    }
}

export default AuthenticatedView;