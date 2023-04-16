import { writable } from 'svelte/store';
import type { CallType } from '../ws/constants';

const initialValue: IStore = {
	socketId: null,
	socketConnectedState: false,
	// Preoffer
	preOfferActive: false,
	preOfferCredentials: null,
	preOfferError: null,
	//
	localStream: null,
	remoteStream: null,
	//
	screenSharingStream: null,
	screenSharingActive: false,
	//
	allowConnectionsFromStrangers: false,
};

interface PreOfferCredentials {
	whoCallId: string;
	type: CallType;
	callableId: string;
}

interface IStore {
	socketId: string | null;
	socketConnectedState: boolean;
	// Preoffer
	preOfferActive: boolean;
	preOfferCredentials: PreOfferCredentials | null;
	preOfferError: string | null;
	//
	localStream: any;
	remoteStream: any;
	//
	screenSharingStream: any;
	screenSharingActive: boolean;
	//
	allowConnectionsFromStrangers: boolean;
}

const makeStore = () => {
	const { subscribe, set, update } = writable<IStore>(initialValue);

	const setSocketId = (socketId: string) => {
		update((state) => ({ ...state, socketId }));
	};
	const toggleAllow = () => {
		update((state) => ({
			...state,
			allowConnectionsFromStrangers: !state.allowConnectionsFromStrangers,
		}));
	};
	const setSocketConnectedState = (value: boolean) =>
		update((state) => ({ ...state, socketConnectedState: value }));

	// PREOFFER;

	const setPreOfferActive = (value: boolean) =>
		update((state) => ({ ...state, preOfferActive: value }));

	const setPreOfferCredentials = (credentials: PreOfferCredentials) =>
		update((state) => ({ ...state, preOfferCredentials: credentials }));
	const resetPreOfferCredentials = () =>
		update((state) => ({ ...state, preOfferCredentials: null }));

	const setPreOfferError = (error: string) =>
		update((state) => ({ ...state, preOfferError: error }));
	const resetPreOfferError = () =>
		update((state) => ({ ...state, preOfferError: null }));

	return {
		subscribe,
		setSocketId,
		setSocketConnectedState,
		setPreOfferActive,
		toggleAllow,
		setPreOfferCredentials,
		resetPreOfferCredentials,
		setPreOfferError,
		resetPreOfferError
	};
};

export const store = makeStore();

export type StoreType = ReturnType<typeof makeStore>;
