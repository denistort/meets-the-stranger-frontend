import type { CallType } from './constants';

/**
 *
 * MESSAGES
 *
 */

export interface PreOfferRequest {
	type: CallType;
	whoCall: string;
	callable: string;
}

export type PreOfferResponse = Omit<PreOfferRequest, 'callable'>;

// ERROR
export type PreOfferErrorResponse = {
	message: string;
};

export interface AcceptOfferRequest {
	callableId: string;
	whoCallId: string;
}
export interface RejectOfferRequest {
	callableId: string;
	whoCallId: string;
}
