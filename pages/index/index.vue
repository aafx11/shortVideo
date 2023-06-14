<template>
	<view class="index__container page__container">
		<TopNav :current="currentTab"></TopNav>
		<view class="page__content">
			<swiper class="page-swiper" :current="currentSwiper" :indicator-dots="false" :autoplay="false"
				@change="onSwiperChange">
				<swiper-item class="page-swiper__item" style="border: 1px solid white;color:white;">
					<view class="swiper-item uni-bg-red">0</view>
				</swiper-item>
				<swiper-item class="page-swiper__item" style="border: 1px solid white;color:white;">
					<view class="swiper-item uni-bg-red">1</view>
				</swiper-item>
				<swiper-item class="page-swiper__item" style="border: 1px solid white;color:white;">
					<view class="swiper-item uni-bg-red">2</view>
				</swiper-item>
				<swiper-item class="page-swiper__item" style="border: 1px solid white;color:white;">
					<SwiperVideo></SwiperVideo>
				</swiper-item>
				<swiper-item class="page-swiper__item" style="border: 1px solid white;color:white;">
					<view class="swiper-item uni-bg-red">4</view>
				</swiper-item>
			</swiper>
		</view>
		<Tab :curr-tab="0"></Tab>
	</view>
</template>

<script>
	import TopNav from '../../components/topNav.vue'
	import Tab from '../../components/tab.vue'
	import SwiperVideo from '../../components/swiperVideo.vue'
	import {
		login
	} from '../../utils/login.js'
	export default {
		components: {
			TopNav,
			Tab,
			SwiperVideo
		},
		data() {
			return {
				currentTab: 3,
				currentSwiper: 3

			}
		},
		onLoad() {
			// login()
		},

		methods: {
			clickLogin() {
				uni.login({
					// provider: 'weixin', //使用微信登录
					success: function(loginRes) {
						console.log('res',loginRes);
					}
				});
			},
			onSwiperChange({
				detail
			}) {
				console.log(detail);
				if (detail.current === 4) {

					return
				}
				this.currentTab = detail.current

			},
		}
	}
</script>

<style lang="scss">
	.index__container {
		background-color: #161616;

		.page-swiper {
			height: 100%;

			.page-swiper__item {
				box-sizing: border-box;
			}
		}
	}
</style>