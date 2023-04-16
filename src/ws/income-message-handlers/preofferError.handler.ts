import { WsEventTypes } from '../eventTypes';
import type { IHandler } from '../handler.interface';
import type { PreOfferErrorResponse } from '../messageTypes';
import type { HandlerExecutionContext } from '../types';

export class PreOfferErrorHandler implements IHandler {
	public type = WsEventTypes.PRE_OFFER_ERROR;

	execute(context: HandlerExecutionContext): void {
		const { message } = context.payload as PreOfferErrorResponse;
		console.log('PRE OFFER ERROR');
		console.log(WsEventTypes.PRE_OFFER_ERROR, message);

		context.store.setPreOfferActive(false);
		context.store.setPreOfferError(message);
	}
}
