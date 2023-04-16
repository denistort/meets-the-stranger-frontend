import type { IHandler } from '../handler.interface';
import type { HandlerExecutionContext } from '../types';

export class ConnectHandler implements IHandler {
	type: string = 'connect';

	execute(context: HandlerExecutionContext): void {
		console.log('succesfully connected to wws server', context.socket.id);
		context.store.setSocketId(context.socket.id);
		context.store.setSocketConnectedState(true);
	}
}
