<template>
	<view class="nav__container" :style="{
		paddingTop:navStyle.paddingTop
	}">
		<u-navbar title="个人中心" bgColor="#161616" :border="false" :fixed="false">
			<template #left>
				<u-icon name="plus-circle" color="white" size="45"></u-icon>
			</template>
			<template #center>
				<view style="display: flex;">
					<u-tabs :current="current" lineWidth="35"
						itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" :list="navList"
						@click="navigator" :activeStyle="{color: '#fff', fontWeight: 'bold',}"></u-tabs>
					<u-icon name="search" color="white" size="45"></u-icon>
				</view>
			</template>
			<!-- 			<template #right>

			</template> -->
		</u-navbar>

	</view>
</template>

<script>
	export default {
		name: "topNav",
		components: {

		},
		options: {
			styleIsolation: 'shared',
		},
		props:{
			current:{
				type:Number,
				default:3
			}
		},
		data() {
			return {
				navList: [{
						type: 'text',
						name: '关注'

					},
					{
						type: 'text',
						name: '热门'

					},
					{
						type: 'text',
						name: '经验'

					},
					{
						type: 'text',
						name: '推荐'
					},
				],
				navStyle: {
					'paddingTop': '0px'
				}
			};
		},
		mounted() {
			// #ifndef H5
			if (uni.getMenuButtonBoundingClientRect) {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				// this.navStyle['paddingTop'] = `${menuButtonInfo.top + menuButtonInfo.height / 2 -10}px`
				console.log('menuButtonInfo', menuButtonInfo);
			}
			// #endif

			// #ifdef H5
			// this.navStyle['paddingTop'] = `20rpx`
			// #endif
		},
		onLoad() {

		},
		methods: {
			navigator(item) {

			}
		}
	}
</script>

<style lang="scss">
	.nav__container {
		// display: flex;
		// align-items: flex-start;
		width: 100%;
		color: white;
		box-sizing: border-box;

		.u-tabs__wrapper__nav {
			display: flex !important;
		}

		/deep/ .u-tabs__wrapper__nav__line {
			background: white !important;
		}
	}
</style>