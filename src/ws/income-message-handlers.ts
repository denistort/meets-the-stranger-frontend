import type { IHandler } from './handler.interface';
import { ConnectHandler } from './income-message-handlers/connect.handler';
import { DisconnectHandler } from './income-message-handlers/disconnect.handler';
import { PreOfferHandler } from './income-message-handlers/preoffer.handler';
import { PreOfferErrorHandler } from './income-message-handlers/preofferError.handler';
import { RejectOfferHandler } from './income-message-handlers/rejectOffer.handler';

export const allWsHandlers = new Set<IHandler>([
	new ConnectHandler(),
	new DisconnectHandler(),
	//
	new PreOfferHandler(),
	new PreOfferErrorHandler(),
	new RejectOfferHandler(),
]);
