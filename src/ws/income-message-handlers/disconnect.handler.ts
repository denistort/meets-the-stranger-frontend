import type { IHandler } from "../handler.interface";
import type { HandlerExecutionContext } from "../types";

export class DisconnectHandler implements IHandler {
	type = 'disconnect';
	execute(context: HandlerExecutionContext): void {
		context.store.setSocketConnectedState(context.socket.connected)
	};
}