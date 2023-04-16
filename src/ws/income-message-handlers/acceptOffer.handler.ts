import { WsEventTypes } from '../eventTypes';
import type { IHandler } from '../handler.interface';
import type { HandlerExecutionContext } from '../types';

export class AcceptOfferHandler implements IHandler {
	type = WsEventTypes.ACCEPT_OFFER;
	execute(context: HandlerExecutionContext): void {
		// const { whoCall, type } = context.payload as PreOfferResponse;
		
		console.log(context);
		// console.log('pre-offer', whoCall, type);
	}
}
