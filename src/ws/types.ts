import type { Socket } from "socket.io-client";
import type { StoreType } from "../store/store";

export interface HandlerExecutionContext {
	payload: any;
	store: StoreType,
	socket: Socket
}