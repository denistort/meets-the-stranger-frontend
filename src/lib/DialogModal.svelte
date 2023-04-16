<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { store } from './../store/store';
	import Modal from './Modal.svelte';
	import { CallType } from '../ws/constants';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let type: string = '';

	onMount(() => {
		type =
			$store.preOfferCredentials.type === CallType.CHAT_PERSONAL_CODE
				? 'Chat'
				: 'Video';
	});
</script>

<Modal>
	<p class="dialog_title">Incoming {type} Offer</p>
	<div class="dialog_image_container">
		<img src="/images/dialogAvatar.png" alt="dialog avatar" />
	</div>
	<div class="dialog_button_container">
		{#if $store.preOfferCredentials && $store.preOfferCredentials.whoCallId !== $store.socketId}
			<button
				on:click={() => dispatch('accept')}
				class="button dialog_accept_call_button"
			>
				<img
					src="/images/acceptCall.png"
					alt="accept call"
					class="dialog_button_image"
				/>
			</button>
		{/if}
		<button
			on:click={() => dispatch('reject')}
			class="button dialog_reject_call_button"
		>
			<img
				src="/images/rejectCall.png"
				alt="accept call"
				class="dialog_button_image"
			/>
		</button>
	</div>
</Modal>

<style>
	.dialog_title {
		font-weight: 600;
		font-size: 22px;
		color: black;
	}

	.dialog_image_container {
		width: 275px;
		height: 275px;
		border-radius: 275px;
		background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dialog_description {
		font-size: 20px;
		color: black;
		font-weight: 500;
		padding: 0 40px;
	}

	.dialog_button_container {
		height: 55px;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}

	.button {
		width: 180px;
		height: 55px;
		border-radius: 15px;
		transition: 0.5s;
		font: inherit;
		font-weight: 700;
		font-size: 18px;
	}
	.dialog_accept_call_button {
		background: linear-gradient(180deg, #00c920 0%, #2fe24b 100%);
		box-shadow: 0px 2px 42px 10px rgba(47, 226, 75, 0.15);
	}

	.dialog_reject_call_button {
		background: linear-gradient(180deg, #ff3b3b 0%, #ff6262 100%);
		box-shadow: 0px 2px 42px 10px rgba(255, 59, 59, 0.15);
	}
</style>
