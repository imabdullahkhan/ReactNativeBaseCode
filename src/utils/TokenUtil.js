import AsyncStorage from "@react-native-community/async-storage";
import { FCM_TOKEN } from "../constants";
// import { store } from "../redux/Store";


export const getToken = () => {
    // let authState = store.getState().auth;
    return `Bearer ${authState.token}`;
}
export const saveFCMToken = async (fcmToken) => {
    await AsyncStorage.setItem(FCM_TOKEN, fcmToken);
}

export const getFCMToken = async () => {
    return await AsyncStorage.getItem(FCM_TOKEN)
}