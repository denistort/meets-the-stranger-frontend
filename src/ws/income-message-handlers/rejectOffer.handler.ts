import { WsEventTypes } from '../eventTypes';
import type { IHandler } from '../handler.interface';
import type { HandlerExecutionContext } from '../types';

export class RejectOfferHandler implements IHandler {
	type = WsEventTypes.REJECT_OFFER;

	execute(context: HandlerExecutionContext): void {
		console.log('REJECT IS COME TO CLIENT');
		context.store.setPreOfferActive(false);
		context.store.resetPreOfferCredentials();
	}
}
