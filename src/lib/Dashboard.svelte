<script lang="ts">
	import { store } from '../store/store';
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { sendPreOffer } from '../ws/actions/preOffer/sendPreOffer';
	import { CallType } from '../ws/constants';

	let copied: boolean = false;
	let error = false;
	let personalCodeInputValue = '';

	const notifyOptions = {
		timeout: 3000, // milliseconds
		persist: false, // automatic timeout (ignores above)
		showProgess: true, // Show (or Hide) the progress bar
		icon: null, // Add svelte component to render an icon
	};
	const onClickCopy = async () => {
		try {
			await navigator.clipboard.writeText($store.socketId);
			copied = true;
			notifier.success('Copied succes', 3000);
		} catch (error) {
			copied = false;
			notifier.danger('Copied fail', 3000);
			error = true;
		}
	};

	const toggleAllow = () => store.toggleAllow();
	const onKeyPressToggleAllow = (e: KeyboardEvent) => {
		if (e.code === 'Enter') {
			toggleAllow();
		}
	};

	const isValidPersonalCode = (code: string): boolean =>
		code && code.length === $store.socketId.length;

	const onChat = () => {
		sendPreOffer(
			$store.socketId,
			personalCodeInputValue,
			CallType.CHAT_PERSONAL_CODE
		);
		personalCodeInputValue = '';
	};
	const onVideoCall = () => {
		sendPreOffer(
			$store.socketId,
			personalCodeInputValue,
			CallType.VIDEO_PERSONAL_CODE
		);
		personalCodeInputValue = '';
	};

	const onChatWithStranger = () => {};
	const onVideoCallWithStranger = () => {};
</script>

<NotificationDisplay />

<div class="dashboard_container">
	<div class="logo_container">
		<img src="/images/logo.png" alt="logo img" />
	</div>
	<div class="description_container">
		<p class="description_container_paragraph">
			Talk with other people by passing his personal code or talk with strangers
		</p>
	</div>
	<div class="personal_code_container">
		<div class="personal_code_title_container">
			<p class="personal_code_title_paragraph">Your personal code</p>
		</div>
		<div class="personal_code_value_container">
			<p class="personal_code_value_paragraph" id="personal_code">
				{$store.socketId}
			</p>
			<button
				class="personal_code_copy_button"
				id="personal_code_button"
				disabled={copied}
				on:click={onClickCopy}
			>
				<img src="/images/copyButton.png" alt="copy button" />
			</button>
		</div>
	</div>

	<div class="personal_code_connecting_container">
		<p class="personal_code_connecting_paragraph">Personal Code</p>
		<div class="personal_code_connecting_input_container">
			<input
				class="personal_code_input"
				type="text"
				name=""
				id="personal_code_input"
				bind:value={personalCodeInputValue}
				maxlength="20"
			/>
		</div>
		<div class="personal_code_connecting_buttons_container">
			<button
				class="connecting_button"
				id="personal_code_chat_button"
				disabled={!isValidPersonalCode(personalCodeInputValue)}
				on:click={onChat}
			>
				<img
					src="/images/chatButton.png"
					class="connecting_buttons_image"
					alt=""
				/>
			</button>
			<button
				on:click={onVideoCall}
				class="connecting_button"
				id="personal_code_video_button"
				disabled={!isValidPersonalCode(personalCodeInputValue)}
			>
				<img
					src="/images/videoButton.png"
					class="connecting_buttons_image"
					alt=""
				/>
			</button>
		</div>
	</div>

	<div class="stranger_connecting_container">
		<p class="stranger_title_container">Meet the Stranger</p>
		<div class="stranger_buttons_container">
			<button
				class="connecting_button"
				id="stranger_chat_button"
				on:click={onChatWithStranger}
			>
				<img
					src="/images/chatButton.png"
					class="connecting_buttons_image"
					alt=""
				/>
			</button>
			<button
				class="connecting_button"
				id="stranger_video_button"
				on:click={onVideoCallWithStranger}
			>
				<img
					src="/images/videoButton.png"
					class="connecting_buttons_image"
					alt=""
				/>
			</button>
		</div>
	</div>
	<div
		class="checkbox_container"
		tabindex="0"
		on:click={toggleAllow}
		on:keypress={onKeyPressToggleAllow}
	>
		<div class="checkbox_connection" id="allow_strangers_checkbox">
			<img
				class="allow_strangers_checkbox_image"
				class:display_none={$store.allowConnectionsFromStrangers === false}
				src="/images/check.png"
				alt="weqwe"
			/>
		</div>
		<p class="checkbox_container_paragraph">Allow connectons from strangers</p>
	</div>

	<div class="dashboard_blur display_none" id="dashboard_overlay" />
</div>
