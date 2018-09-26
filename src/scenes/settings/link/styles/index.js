import {StyleSheet} from "react-native";
import {colors} from "../../../../styles";

const linkComponentStyles = StyleSheet.create({
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
    linkBtn: {
        borderRadius: 13,
        borderColor: "transparent",
        borderWidth: 0,
    },
    linkBtnDisabled: {
        backgroundColor: colors.darkGrey,
        borderRadius: 13,
        borderColor: colors.lightGrey,
        borderWidth: 1,
    },
    linkBtnTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        marginVertical: 5,
        textAlign: "center",
    }
});

export default linkComponentStyles;