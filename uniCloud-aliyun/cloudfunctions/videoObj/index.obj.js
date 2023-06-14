const db = uniCloud.database()
module.exports = {
	_before: function() { // 通用预处理器

	},
	async get(num = 10) {
		return await db.collection('video').limit(num).get()
	}

}

