import {StyleSheet} from "react-native";
import {colors} from "../../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1
    },
    section: {
        paddingTop: 15,
        paddingHorizontal: 15,
        width: "100%",
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
    linkComponentContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
    },
    linkText: {
        fontSize: 16,
        color: colors.lightGrey,
    },
    linkButton: {
        marginHorizontal: 0,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 13,
        borderColor: "transparent",
        borderWidth: 0,
    }
});

export default styles;