const app = new Vue({
	el: '#app',
	data:{
		message: 'hello world',
		testUrl: 'https://www.google.com/',
		flag: true,
		email: 'Y-suzuki@examle.com',
		current: new Date(),
	},
	// 起動時にタイマーを設定
	created: function() {
		/*
		* setInterval内でthisを使うと、windowオブジェクトを指すようになるので、
		* thisを固定
		*/
		let that = this;

		// 1000ミリでcurrentを更新
		this.timer = setInterval(function(){
			that.current = new Date();
		},1000);
	},
	// 終了前にタイマーを破棄
	beforeDestroy:function() {
		/* 
		* createdとbeforeDestroyのフックは大概セットで使用する
		*/
		clearInterval(this.toLowerCase);
	},
	computed:{
		// 算出プロパティー
		/**
		 * 既存のプロパティを演算（算出）して結果を取得する
		 * computedのオプションの下に定義する。
		 * data内のプロパティにアクセスするにはthis.プロパティ名を使用する
		*/
		localEmail:function(){
			return this.email.split('@')[0].toLowerCase();
		}
	}
})