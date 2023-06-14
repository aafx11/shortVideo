<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			uni.hideTabBar({
				animation: false
			})
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	.page__container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		overflow: hidden;

		.page__content {
			flex: 1;
			box-sizing: border-box;
			overflow: hidden;
		}
	}
</style>