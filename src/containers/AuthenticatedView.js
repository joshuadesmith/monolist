import React from "react";

import { StackNavigator } from "react-navigation";
import HomeView from "./HomeView";

const routeConfig = {
    Home: {
        screen: HomeView,
    },
};

const StackNav = StackNavigator(routeConfig);

class AuthenticatedView extends React.Component {
    render() {
        return (
            <StackNav/>
        );
    }
}

export default AuthenticatedView;