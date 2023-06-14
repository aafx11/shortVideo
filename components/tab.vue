<template>
	<view class="tab__container">
		<view v-for="(item,index) in tabList" class="tab__item">
			<view v-if="item.type === 'text'" :class="[
				'tab__item-text',
				{'tab__item-text--actived':currTab === index}
				]" @click="clickTabText(item)">
				{{item.text}}
			</view>
			<view v-if="item.type === 'icon'" class="tab__item-icon">
				<view class="tab__add-icon">

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab",
		props: {
			currTab: Number
		},
		data() {
			return {
				tabList: [{
						type: 'text',
						text: '首页',
						path: '/pages/index/index'
					},
					{
						type: 'text',
						text: '发现',
						path: '/pages/discover/discover'
					},
					{
						type: 'icon',
						icon: ''
					},
					{
						type: 'text',
						text: '收藏',
						path: '/pages/collect/collect'
					},
					{
						type: 'text',
						text: '我',
						path: '/pages/my/my'
					},
				]
			};
		},
		methods: {
			clickTabText(item) {
				uni.switchTab({
					url: item.path
				})
			},
		}
	}
</script>

<style lang="scss">
	.tab__container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		background-color: #161616;
		box-sizing: border-box;

		.tab__item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			height: 100%;
			text-align: center;

			.tab__item-text {
				color: white;
				font-weight: 600;
				opacity: 0.6;

				&--actived {
					opacity: 0.85;
				}
			}

			.tab__item-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;

				.tab__add-icon {
					position: relative;
					width: 60rpx;
					height: 45%;
					border-radius: 30%;
					border: 2px solid white;
					opacity: 0.8;

					&::before {
						position: absolute;
						top: 50%;
						left: 50%;
						content: "";
						width: 4rpx;
						height: 50%;
						background-color: white;
						opacity: 0.8;
						transform: translate(-50%, -50%);
					}

					&::after {
						position: absolute;
						top: 50%;
						left: 50%;
						content: "";
						width: 50%;
						height: 4rpx;
						background-color: white;
						opacity: 0.8;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
</style>