import type { Socket } from 'socket.io-client';
import { WsEventTypes } from './eventTypes';
import type { AcceptOfferRequest, PreOfferRequest, RejectOfferRequest } from './messageTypes';

export class WsEmitter {
	io: Socket;
	constructor(io: Socket) {
		this.io = io;
	}

	emitPreOffer(message: PreOfferRequest) {
		this.io.emit(WsEventTypes.PRE_OFFER, message);
	}

	emitRejectOffer(message: RejectOfferRequest) {
		this.io.emit(WsEventTypes.REJECT_OFFER, message);
	}

	emitAcceptOffer(message: AcceptOfferRequest) {
		this.io.emit(WsEventTypes.ACCEPT_OFFER, message);
	}
}
