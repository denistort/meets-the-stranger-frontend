import type { CallType } from './constants';
import type {
	AcceptOfferRequest,
	PreOfferRequest,
	RejectOfferRequest,
} from './messageTypes';

export class MessageFactory {
	public preOfferMessage(
		whoCall: string,
		type: CallType,
		callable: string
	): PreOfferRequest {
		return {
			whoCall,
			type,
			callable,
		};
	}

	public rejectOfferMessage(
		whoCall: string,
		callable: string
	): RejectOfferRequest {
		return {
			whoCallId: whoCall,
			callableId: callable,
		};
	}

	public acceptOfferMessage(
		whoCall: string,
		callable: string
	): AcceptOfferRequest {
		return {
			whoCallId: whoCall,
			callableId: callable,
		};
	}
}
