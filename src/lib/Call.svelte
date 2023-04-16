<div class='call_container'>
	<div class='videos_container'>
		<div id='video_placeholder' class='videos_placeholder'>
			<img src='/images/logo.png' alt="wewe"/>
		</div>
		<video class='remote_video display_none' autoplay id='remote_video'></video>
		<div class='local_video_container'>
			<video class='local_video' id='local_video' muted autoplay></video>
		</div>
		<div class='call_buttons_container display_none' id='call_buttons'>
			<button class='call_button_small' id='mic_button'>
				<img src='/images/mic.png' id='mic_button_image' alt="icon" />
			</button>
			<button class='call_button_small' id='camera_button'>
				<img src='/images/camera.png' id='camera_button_image' alt="icon" />
			</button>
			<button class='call_button_large' id='hang_up_button'>
				<img src='/images/hangUp.png'  alt="icon"/>
			</button>
			<button class='call_button_small' id='screen_sharing_button'>
				<img src='/images/switchCameraScreenSharing.png'  alt="icon"/>
			</button>
			<button class='call_button_small' id='start_recording_button'>
				<img src='/images/recordingStart.png'  alt="icon"/>
			</button>
		</div>
		<div class='finish_chat_button_container display_none' id='finish_chat_button_container'>
			<button class='call_button_large' id='finish_chat_call_button'>
				<img src='/images/hangUp.png' alt="icon" />
			</button>
		</div>
		<div class='video_recording_buttons_container display_none' id='video_recording_buttons'>
			<button id='pause_recording_button'>
				<img src='/images/pause.png'  alt="icon"/>
			</button>
			<button id='resume_recording_button' class='display_none'>
				<img src='/images/resume.png'  alt="icon"/>
			</button>
			<button id='stop_recording_button'>
				Stop recording
			</button>
		</div>
	</div>
</div>