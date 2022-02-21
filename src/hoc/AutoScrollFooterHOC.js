import React, { useEffect, useState } from 'react';
import { Platform, KeyboardAvoidingView } from "react-native"

const autoScrollFooterHoc = (HocComponent) => {

    return (props) => {
        const [offSetHeight, setOffSetHeight] = useState(80);
        const { DeviceEventEmitter } = React

        useEffect(() => {
            DeviceEventEmitter?.addListener('keyboardWillShow', keyboardWillShow)
            DeviceEventEmitter?.addListener('keyboardWillHide', keyboardWillHide)
        }, [])

        const keyboardWillShow = (e) => {
            setOffSetHeight(e.endCoordinates.height)
        }

        const keyboardWillHide = (e) => {
            setOffSetHeight(0)
        }
        return (
            Platform.OS === 'android' ? <HocComponent {...props} /> :
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={offSetHeight}>
                    <HocComponent {...props} />
                </KeyboardAvoidingView>
        )
    }
}

export default autoScrollFooterHoc