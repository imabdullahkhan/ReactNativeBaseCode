const themes = {
    "light": {
        background: "#F6F6F6",
        primary: "#074354",
        error: "#B00020",
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
    "dark": {
        background: "#2D2424",
        primary: "#B85C38",
        error: "#B00020",
        card: 'rgb(255, 255, 255)',
        text: '#E0C097',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    }
};

export const themeColor = (theme = "light") => themes[theme];

export const padding = {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 18,
    xl: 20,
    xxl: 25,
    xxxl: 30,
    p14: 14,
    p12: 12,
    p16: 16,
    p19: 19
};

export const margin = {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 18,
    xl: 20,
    xxl: 25,
    xxxl: 30,
    m4: 4,
    m8: 8,
    m12: 12,
    m14: 14,
    m16: 16,
    m19: 19,
    m24: 24,
    m34: 34
};

export const borderWidth = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6
};

export const fonts = {
    xxs: 10,
    xs: 12,
    sm: 15,
    md: 17,
    lg: 22,
    xl: 25,
    xxl: 30,
    xxxl: 35,
    fontRegular: "Muli",
    fontBold: "Muli-Bold",
    fontBoldItalic: "Muli-BoldItalic",
    fontExtraLight: "Muli-ExtraLight",
    fontExtraLightItalic: "Muli-ExtraLightItalic",
    fontItalic: "Muli-Italic",
    fontLight: "Muli-Light",
    fontLightItalic: "Muli-LightItalic",
    fontSemiBoldItalic: "Muli-Semi-BoldItalic",
    fontSemiBold: "Muli-SemiBold"
};
