<template>
	<div v-show="visible" class="wd-image-preview-root">
		<div class="wd-image-preview-mask" />
		<div tabindex="-1" class="wd-image-preview-wrap" role="dialog">
			<div class="wd-image-preview" role="document">
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none"
				/>
				<div class="wd-image-preview-content">
					<!----><!---->
					<div class="wd-image-preview-body">
						<ul class="wd-image-preview-operations">
							<li
								class="wd-image-preview-operations-operation"
								@click="$emit('close')"
							>
								<svg-icons icon="close" />
							</li>
							<li class="wd-image-preview-operations-operation">
								<svg-icons icon="room-in" />
							</li>
							<li
								class="wd-image-preview-operations-operation wd-image-preview-operations-operation-disabled"
							>
								<span
									role="img"
									aria-label="zoom-out"
									class="anticon anticon-zoom-out wd-image-preview-operations-icon"
									><svg
										focusable="false"
										class=""
										data-icon="zoom-out"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"
										></path>
									</svg>
								</span>
							</li>
							<li class="wd-image-preview-operations-operation">
								<span
									role="img"
									aria-label="rotate-right"
									class="anticon anticon-rotate-right wd-image-preview-operations-icon"
									><svg
										focusable="false"
										class=""
										data-icon="rotate-right"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<defs></defs>
										<path
											d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"
										></path>
										<path
											d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"
										></path>
									</svg>
								</span>
							</li>
							<li class="wd-image-preview-operations-operation">
								<span
									role="img"
									aria-label="rotate-left"
									class="anticon anticon-rotate-left wd-image-preview-operations-icon"
									><svg
										focusable="false"
										class=""
										data-icon="rotate-left"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<defs></defs>
										<path
											d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"
										></path>
										<path
											d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"
										></path>
									</svg>
								</span>
							</li>
						</ul>
						<div
							class="wd-image-preview-img-wrapper"
							style="transform: translate3d(0px, 0px, 0px)"
						>
							<img
								v-for="(src, index) in imgList"
								:key="index"
								class="wd-image-preview-img"
								:src="src"
								style="transform: scale3d(1, 1, 1) rotate(0deg)"
							/>
						</div>
						<div
							class="wd-image-preview-switch-left wd-image-preview-switch-left-disabled"
						>
							<span role="img" aria-label="left" class="anticon anticon-left">
								<svg
									focusable="false"
									class=""
									data-icon="left"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									viewBox="64 64 896 896"
								>
									<path
										d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
									></path>
								</svg>
							</span>
						</div>
						<div class="wd-image-preview-switch-right">
							<span role="img" aria-label="right" class="anticon anticon-right">
								<svg
									focusable="false"
									class=""
									data-icon="right"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									viewBox="64 64 896 896"
								>
									<path
										d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
									></path>
								</svg>
							</span>
						</div>
					</div>
					<!---->
				</div>
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import SvgIcons from './svg-icons.vue';
export default {
	components: {
		SvgIcons,
	},
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		imgList: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
