import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { hp, wp } from "../../utils";

const CustomModal = props => {
    const { isOpen, onClose, width = wp(396), height = hp(790) } = props;
    return (
        <Modal animationType="fade" transparent={true} visible={isOpen} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={[styles.modalInnerContainer, { width, height }]}>{props.children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalInnerContainer: {
        backgroundColor: "#fff"
    }
});

export default CustomModal;
