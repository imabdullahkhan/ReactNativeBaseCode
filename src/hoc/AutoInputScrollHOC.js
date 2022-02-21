import React from 'react';
import { Platform } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { primaryColor } from '../constants';
import { normalizeHeight } from '../utils/FontUtil';


const autoScrollHOC = (HocComponent, backgroundColor = primaryColor) => {
    return (props) => {
        return (
            Platform.OS === 'android' ? <HocComponent {...props} /> :
                <KeyboardAwareScrollView enableResetScrollToCoords={false} extraScrollHeight={normalizeHeight(55)} style={{ backgroundColor }}>
                    <HocComponent {...props} />
                </KeyboardAwareScrollView>
        )
    }
}

export default autoScrollHOC