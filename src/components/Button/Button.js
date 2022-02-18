import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import bs from "../../style/BasicStyle";
import { fonts, themeColor } from "../../style/Theme";

import { Loader } from "../Loader";

const Button = props => {
    const {
        isLoading = false,
        text = "Submit",
        onPress = () => {},
        primary = true,
        disabled = false,
        style = null,
        bgColor = themeColor.primaryColor,
        textStyle = null,
        loaderColor = "white",
        loaderSize = "small",
        icon,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            style={[styles.container, style, { backgroundColor: bgColor }]}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading || disabled}
            {...rest}>
            {isLoading ? (
                <Loader size={loaderSize} color={loaderColor} />
            ) : (
                <View style={[bs.flexDirectionRow, bs.alignItemsCenter]}>
                    {icon && icon}
                    <Text style={[styles.text, textStyle]}>{text}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    secondary: {
        borderWidth: 1.4
    },
    text: {
        color: "#fff",
        fontFamily: fonts.fontRegular,
        fontSize: 14
    }
});

export default Button;
