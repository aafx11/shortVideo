<template>
	<swiper class="swiper-video__container" :vertical="true" :autoplay="false" @change="onVideoChange">
		<template v-for="(item) in videoList">
			<swiper-item v-if="item.show" class="swiper-video__item" :item-id="item._id" :key="item._id">
				<video class="swiper-video__item-video" id="myVideo" :src="item.url" enable-danmu danmu-btn controls
					:autoplay="true"></video>
			</swiper-item>
		</template>

	</swiper>
</template>

<script>
	const videoObj = uniCloud.importObject('videoObj')
	export default {
		name: "swiperVideo",
		data() {
			return {
				videoList: [],
				currentIndex: 0
			};
		},
		mounted() {
			this.getVideoList()
		},
		methods: {
			async getVideoList() {
				const res = await videoObj.get()
				console.log('res', res);
				this.videoList = res.data.map(item => ({
					...item,
					show: true
				})) || []
			},
			onVideoChange({
				detail
			}) {
				console.log(detail);
				this.videoList.forEach(item => item.autoplay = false)
				let findItem = this.videoList.find(item => item._id === detail.currentItemId)
				findItem.autoplay = true
			},
		}
	}
</script>

<style lang="scss">
	.swiper-video__container {
		height: 100%;
		color: white;

		.swiper-video__item {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			overflow: hidden;

			.swiper-video__item-video {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>