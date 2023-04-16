<script lang="ts">
	import { fly, fade } from 'svelte/transition';
</script>

<div class="modal_wrapper" transition:fade={{ delay: 150 }}>
	<div class="modal_content" transition:fly|fade={{ duration: 100, y: -50 }}>
		<slot />
	</div>
</div>

<style>
	.modal_wrapper {
		position: fixed;
		z-index: 2;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(30px);
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
	}

	.modal_content {
		width: 520px;
		height: 530px;
		background: white;
		border: 1px solid #d5deeb;
		box-shadow: 0px 2px 20px 5px rgba(10, 145, 219, 0.05);
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
