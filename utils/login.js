export function login() {
	uni.login({
		// provider: 'weixin', //使用微信登录
		success: function(loginRes) {
			console.log(loginRes.authResult);
		}
	});
}