import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";

import { FirebaseNotificationHelper } from "./firebaseNotificationHelper";

let payload;

PushNotification.configure({
    permissions: {
        alert: true,
        sound: true
    },

    onNotification: message => {
        const { data } = message;

        if (Platform.OS === "ios") {
            FirebaseNotificationHelper.handleNavigation(payload);
        } else {
            FirebaseNotificationHelper.handleNavigation(data);
        }
    }
});

PushNotification.createChannel({
    channelId: "channel-id",
    channelName: "My channel",
    channelDescription: "A channel to categorise your notifications"
});

export const LocalNotification = message => {
    const { data, notification } = message;

    if (Platform.OS === "ios") {
        payload = data;
    }

    PushNotification.localNotification({
        channelId: "channel-id",
        autoCancel: true,
        bigText: notification.body,
        title: notification.title,
        message: notification.body,
        vibrate: true,
        data,
        vibration: 300,
        playSound: true,
        soundName: "default",
        messageId: "haha",
        smallIcon: "icon",
        color: "#6347ea"
    });
};
