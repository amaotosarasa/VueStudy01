const app = new Vue({
	el: "#app",
	data:{
		author:{
			name: '山田'
		}
	},
	created:function() {
		let that = this;
		this.timer = setTimeout(function() {
			//that.author.name = 'YAMADA';
			//that.author.company = '会社';
			//Vue.set(that.author, 'company', 'value');
			//app.$set(that.author, 'company', 'value');

			that.author = Object.assign({},that.author,
				{company:'会社',sex:'男',age:'18'}
			);
			// 下記で削除することができる。
			//Vue.remove(that.author, 'company');
		}, 3000);
	},
})