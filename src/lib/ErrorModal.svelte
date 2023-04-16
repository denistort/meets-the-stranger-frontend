<script lang="ts">
	import Modal from './Modal.svelte';
	export let error: string;
	export let onClose: () => void;
</script>

<Modal>
	<p class="dialog_title">Something went wrong</p>
	<p class="dialog_description">{error}</p>
	<div class="dialog_button_container">
		<button on:click={onClose} class="button dialog_reject_call_button"
			>Close</button
		>
	</div>
</Modal>

<style>
	.dialog_title {
		font-weight: 600;
		font-size: 22px;
		color: black;
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
