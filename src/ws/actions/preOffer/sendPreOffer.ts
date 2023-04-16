import type { CallType } from '../../constants';
import { wsEmitter, messageFactory } from '../..';
import { store } from '../../../store/store';

export const sendPreOffer = (
	personWhoCall: string,
	сallable: string,
	callType: CallType
) => {
	const message = messageFactory.preOfferMessage(
		personWhoCall,
		callType,
		сallable
	);
	store.setPreOfferCredentials({
		callableId: сallable,
		type: callType,
		whoCallId: personWhoCall,
	});
	store.setPreOfferActive(true);
	wsEmitter.emitPreOffer(message);
};
