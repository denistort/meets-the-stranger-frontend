import { WsEventTypes } from '../eventTypes';
import type { IHandler } from '../handler.interface';
import type { PreOfferResponse } from '../messageTypes';
import type { HandlerExecutionContext } from '../types';

export class PreOfferHandler implements IHandler {
	type = WsEventTypes.PRE_OFFER;
	execute(context: HandlerExecutionContext): void {
		const { whoCall, type } = context.payload as PreOfferResponse;
		
		context.store.setPreOfferCredentials({ type, whoCallId: whoCall });
		context.store.setPreOfferActive(true);

		console.log('pre-offer', whoCall, type);
	}
}
