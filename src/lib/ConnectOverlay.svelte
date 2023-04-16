<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let dots: string = '.';
	let interval: any = null;
	let seconds: number = 0;

	onMount(() => {
		interval = setInterval(() => {
			seconds += 1;
		}, 1000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="overlay" transition:fade={{ delay: 600 }}>
	<img
		class="image"
		src="/images/logo.png"
		alt="wewe"
		transition:fly|fade={{ duration: 500, y: -50 }}
	/>
	<h1 transition:fly|fade={{ duration: 500, y: -50 }}>
		Connecting to server{dots}
	</h1>
	<h2 transition:fly|fade={{ duration: 500, y: 50 }}>{seconds} s</h2>
</div>

<style>
	.overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 6;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(168.68deg, #0052c9 1.12%, #0a91db 100%);
	}
</style>
