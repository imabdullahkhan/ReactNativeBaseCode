import React from "react";
import { View, Text } from "react-native";

import { Icon } from "../Icon";

const NoDataPlaceholder = props => {
    const { primary, primaryPurple } = theme.colors;
    const { icon, text, width = 85, height = 85, containerStyles = {} } = props;
    return (
        <View style={{ justifyContent: "center", alignItems: "center", ...containerStyles }}>
            {icon && <Icon width={width} height={height} color={primary} source={icon} />}
            <Text style={{ color: primaryPurple, marginTop: 10 }}>{text}</Text>
        </View>
    );
};

export default NoDataPlaceholder;
