import { widthPercentageToDP as lwp, heightPercentageToDP as lhp } from "react-native-responsive-screen";
import { Dimensions, Platform, PixelRatio } from 'react-native';

// here 428 is adobe design width (px)
const designWidth = 428;
// here 926 is adobe design height (px)
const designHeight = 926;



const getWidthValue = px => (px / designWidth) * 100;
const getHeightValue = px => (px / designHeight) * 100;

export const wp = px => lwp(getWidthValue(px));

export const hp = px => lhp(getHeightValue(px));

// =====================================

const devHeight = 640; //Phone height during development
const devWidth = 360; //width

export const deviceHeight = Dimensions.get('window').height; //Device height
export const deviceWidth = Dimensions.get('window').width; //device width
export const deviceScale = Dimensions.get('window').scale;
export const defaultWindowMultiplier = 0.50;
export const defaultNavBarHeight = 65;

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scalef = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + (scalef(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;

//gain
export const RNHeight = deviceHeight / devHeight;
export const RNWidth = deviceWidth / devWidth;

// based on iphone 5s's scale
export const scale = deviceWidth / 320;

export const normalizeFont = (size) => {            // For Normalizing the font size for all type of screens, Including iPad, iPhone, Tablet, Android
    const newSize = moderateScale(size)
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2
    }
}

// Use this function to normalize image size
export const normalizeWithScale = (size) => {    // For Normalizing the Icon size for different screens
    return moderateScale(size, 0.40);
}