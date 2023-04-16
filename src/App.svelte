<script lang="ts">
	import ConnectOverlay from './lib/ConnectOverlay.svelte';
	import Messenger from './lib/Messenger.svelte';
	import Call from './lib/Call.svelte';
	import Dashboard from './lib/Dashboard.svelte';
	import { onMount } from 'svelte';
	import { SocketInit } from './ws';
	import { store } from './store/store';
	import Portal from 'svelte-portal';
	import DialogModal from './lib/DialogModal.svelte';
	import ErrorModal from './lib/ErrorModal.svelte';
	import { rejectOfferAction } from './ws/actions/preOffer/rejectOfferAction';
	onMount(SocketInit);

	let isOverlayOpen = true;
	let errorModalOpen = false;

	$: if ($store.preOfferError) {
		errorModalOpen = true;
	}

	const onReject = () => {
		console.log('reject');
		rejectOfferAction(
			$store.preOfferCredentials.whoCallId,
			$store.preOfferCredentials.callableId
		);
	};
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
	<title>Meet the stranger</title>
</svelte:head>

<svelte:body class:hidden={isOverlayOpen === true} />

{#if !$store.socketConnectedState}
	<ConnectOverlay />
{/if}

<div class="main_container">
	<Dashboard />
	<Call />
	<Messenger />
</div>

<Portal target="body">
	{#if $store.preOfferActive}
		<DialogModal
			on:accept={() => {
				console.log('accept');
			}}
			on:reject={onReject}
		/>
	{/if}
	{#if errorModalOpen}
		<ErrorModal
			error={$store.preOfferError}
			onClose={() => {
				store.resetPreOfferError();
				errorModalOpen = false;
			}}
		/>
	{/if}
</Portal>

<style>
</style>
