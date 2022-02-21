import io from "socket.io-client";
import Config from "../Config";
import configStore from "../redux/store";

const { store } = configStore();

export const SocketEventTypes = {
    CHAT_START: "chat_start",
    CHAT_JOINED: "chat_joined",
    MESSAGE: "message",
    READ_MESSAGE: "read_message",
    TYPING: "typing"
};

export default class Socket {
    static socket = null;
    static getSocket = () => {
        if (
            Socket.socket === null) {
            const token = store.getState().auth.token;
            const actorId = store.getState().auth.user.Id
            Socket.socket = io(`${Config.env().API_URL}?authorization=${token}&actorId=${actorId}`, {
                transports: ["websocket"],
                upgrade: false,
                reconnection: true,
                reconnectionAttempts: Infinity,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000
            });
        }

        return Socket.socket;
    };

    static init = () => {
        Socket.getSocket().on("connect", () => {
            console.log("socket connected!");
        });

        Socket.getSocket().on("connect-error", err => {
            console.log("socket connection error: ", err);
        });

        Socket.getSocket().on("error", err => {
            console.log("socket error: ", err);
        });

        Socket.getSocket().on("disconnect", reason => {
            console.log("socket disconnected: ", reason);
        });
    };

    static onMessageReceived = cb => {
        Socket.getSocket().on(SocketEventTypes.MESSAGE, cb);
    };

    static onChatStart = cb => {
        Socket.getSocket().on(SocketEventTypes.CHAT_START, cb);
    };

    static emitChatStarted = (data, cb) => {
        Socket.getSocket().emit(
            SocketEventTypes.CHAT_START,
            {
                ...data
            },
            cb
        );
    };

    static joinChat = chatId => {
        Socket.getSocket().emit(SocketEventTypes.CHAT_JOINED, { ChatId: chatId });
    };

    static sendMessage = data => {
        Socket.getSocket().emit(SocketEventTypes.MESSAGE, data);
    };

    static readMessage = (chatId, eventId) => {
        Socket.getSocket().emit(SocketEventTypes.READ_MESSAGE, { ChatId: chatId, ChatEventId: eventId });
    };

    static remove = (name, listener = null) => {
        if (Socket.socket) {
            if (listener) {
                Socket.getSocket().removeListener(name, listener);
            } else {
                Socket.getSocket().removeAllListeners(name);
            }
        }
    };
}
