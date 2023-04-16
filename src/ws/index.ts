import { store } from "../store/store";
import { MessageFactory } from "./MessageFactory";
import { WsEmitter } from "./WsEmitter";
import { WsConnection } from "./wsConnection";
import { allWsHandlers } from "./income-message-handlers";

export const wsConnection = new WsConnection(store);
export const messageFactory = new MessageFactory();

export let wsEmitter: WsEmitter;

export const SocketInit = () => {
	wsConnection.connect().registerListeners(allWsHandlers);
	wsEmitter = new WsEmitter(wsConnection.socketConnection);
}