import {StyleSheet} from "react-native";
import {colors} from "../../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        paddingHorizontal: 15,
    },
    section: {
        paddingTop: 15,
        paddingBottom: 10,
        width: "100%",
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
    },
    settingsHeader: {
        color: colors.lightGrey,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'left'
    },
    backImage: {
        tintColor: colors.lightGrey,
        height: 30,
        width: 30,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 5,
    },
});

export default styles;