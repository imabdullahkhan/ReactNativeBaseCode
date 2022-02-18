import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { wp } from "../../utils";
import Text from "../Text/Text";

const UserAvatar = props => {
    const {
        char = "-",
        source,
        size = 40,
        textSize = 16,
        style = {},
        resizeMode = "cover",
        charColor = "#074354",
        ...rest
    } = props;

    return source && source.uri ? (
        <Image
            source={source}
            style={[
                styles.image,
                {
                    borderRadius: wp(size) / 2
                },
                style
            ]}
            resizeMode={resizeMode}
            {...rest}
        />
    ) : (
        <View
            style={[
                {
                    width: wp(size),
                    height: wp(size),
                    borderRadius: wp(size) / 2,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(7,67,84,0.25)"
                },
                style
            ]}>
            <Text color={charColor} bold size={textSize}>
                {char}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        flex: 1
    }
});

export default UserAvatar;
