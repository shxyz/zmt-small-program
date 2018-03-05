//app.js
App({
	onLaunch: function () {
		// 获取系统信息
		wx.getSystemInfo({
			success: res => this.globalData.systemInfo = res
		})
		// 登录 发送 res.code 到后台换取 openId, sessionKey, unionId
		wx.login({
			success: res => {
				let { code } = res;
				if(res.code) {
					wx.request({
						url: 'https://service.zjzmjr.com/token/getUserInfo.htm',
						method: 'POST',
						data: { code },
						success: res => console.log(res)
					})
				}
			}
		})
		// 获取用户信息
		wx.getUserInfo({
			success: res => this.globalData.userInfo = res.userInfo
		})
		// 返回用户已经授权的列表
		wx.getSetting({
			success: res => console.log("返回用户已经授权的列表:" + res.authSetting) 
		})
	},
	globalData: {
		// 全局变量
		userInfo: null,
		systemInfo: null
	}
})