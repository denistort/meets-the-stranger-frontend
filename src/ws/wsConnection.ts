import socketClient, { Socket } from 'socket.io-client';
import type { IHandler } from './handler.interface';
import type { WsEventTypes } from './eventTypes';
import type { StoreType } from '../store/store';

const endpoint = 'localhost:3000';

export class WsConnection {
	public socketConnection: Socket;
	public connected: boolean = false;
	private isRegistered: boolean = false;
	private store: StoreType;

	constructor(store: StoreType) {
		this.store = store;
	}

	public connect() {
		if (!this.connected) {
			this.socketConnection = socketClient(endpoint);
		}
		return this;
	}

	public emit<T extends Record<string, unknown>>(type: WsEventTypes, data: T) {
		this.socketConnection.emit(type, data);
		return this;
	}

	public registerListeners(handlers: Set<IHandler>): void {
		if (!this.isRegistered) {
			handlers.forEach((handler) => {
				console.log(handler);
				console.log(handler.type, ' is registered');
				this.socketConnection.on(handler.type, (data: any) => {
					const bindedHandler = handler.execute.bind(
						handler
					) as IHandler['execute'];
					bindedHandler({
						payload: data,
						socket: this.socketConnection,
						store: this.store,
					});
				});
			});
			this.isRegistered = true;
		}
	}
}
