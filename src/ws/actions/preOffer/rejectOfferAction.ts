import { messageFactory, wsEmitter } from '../..';

export const rejectOfferAction = (whoCall: string, callable: string) => {
	wsEmitter.emitRejectOffer(
		messageFactory.rejectOfferMessage(whoCall, callable)
	);
};
